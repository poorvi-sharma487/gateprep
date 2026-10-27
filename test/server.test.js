"use strict";

const assert = require("node:assert/strict");
const { once } = require("node:events");
const test = require("node:test");
const bcrypt = require("bcrypt");
const session = require("express-session");
const { createApp } = require("../server");

function createMockPool(user = null) {
  const pool = {
    users: user ? [user] : [],
    contactMessages: [],
    quizResults: [],
    questions: [{
      id: 1,
      subject_slug: "c-programming",
      topic_slug: "data-types-and-operators",
      question_text: "What is 8 / 3 in integer arithmetic?",
      options: ["2", "3"],
      correct_option: 0,
      explanation: "Integer division truncates the result.",
      difficulty: "easy"
    }],
    async query(sql, values = []) {
      const statement = sql.replace(/\s+/g, " ").trim();
      if (statement.startsWith("SELECT 1")) {
        return { rows: [{ "?column?": 1 }] };
      }
      if (statement.startsWith("SELECT id, name, password FROM users")) {
        return { rows: pool.users.filter(account => account.email === values[0]) };
      }
      if (statement.startsWith("SELECT id, name FROM users")) {
        return {
          rows: pool.users
            .filter(account => String(account.id) === String(values[0]))
            .map(({ id, name }) => ({ id, name }))
        };
      }
      if (statement.startsWith("INSERT INTO users")) {
        if (pool.users.some(account => account.email === values[1])) {
          const error = new Error("Duplicate email");
          error.code = "23505";
          throw error;
        }
        pool.users.push({
          id: pool.users.length + 1,
          name: values[0],
          email: values[1],
          password: values[2]
        });
        return { rows: [] };
      }
      if (statement.startsWith("INSERT INTO contact_messages")) {
        pool.contactMessages.push(values);
        return { rows: [] };
      }
      if (statement.startsWith("SELECT id, subject_slug, topic_slug") && statement.includes("FROM questions")) {
        return { rows: pool.questions };
      }
      if (statement.startsWith("INSERT INTO quiz_results")) {
        pool.quizResults.unshift({
          id: pool.quizResults.length + 1,
          subject_slug: values[1],
          topic_slug: values[2],
          score: values[3],
          total_questions: values[4],
          accuracy: values[5],
          attempted_at: new Date().toISOString()
        });
        return { rows: [] };
      }
      if (statement.startsWith("SELECT id, subject_slug, topic_slug") && statement.includes("FROM quiz_results")) {
        return { rows: pool.quizResults };
      }
      throw new Error(`Unexpected SQL in test: ${statement}`);
    }
  };
  return pool;
}

async function startTestServer(t, { pool = createMockPool(), production = false } = {}) {
  const app = createApp({
    pool,
    sessionStore: new session.MemoryStore(),
    sessionSecret: "test-secret-with-more-than-thirty-two-characters",
    production
  });
  const server = app.listen(0, "127.0.0.1");
  await once(server, "listening");
  t.after(() => new Promise((resolve, reject) => {
    server.close(error => error ? reject(error) : resolve());
  }));
  return {
    pool,
    url: `http://127.0.0.1:${server.address().port}`
  };
}

test("serves the SPA, health check, and canonical hash-route redirects", async t => {
  const { url } = await startTestServer(t);
  const home = await fetch(url);
  assert.equal(home.status, 200);
  assert.match(await home.text(), /data-view="home"/);

  const redirects = [
    ["/dashboard", "/#dashboard"],
    ["/dashboard.html", "/#dashboard"],
    ["/contact", "/#contact"],
    ["/contact.html", "/#contact"],
    ["/progress", "/#progress"],
    ["/progress.html", "/#progress"],
    ["/login", "/#login"],
    ["/signup", "/#signup"],
    ["/subjects/algorithms", "/#subject/algorithms"],
    ["/subjects.html?subject=algorithms", "/#subject/algorithms"],
    ["/practice?subject=c-programming&topic=data-types-and-operators", "/#practice/c-programming/data-types-and-operators"],
    ["/practice.html?subject=c-programming&topic=data-types-and-operators", "/#practice/c-programming/data-types-and-operators"]
  ];
  for (const [path, destination] of redirects) {
    const response = await fetch(`${url}${path}`, { redirect: "manual" });
    assert.equal(response.status, 302);
    assert.equal(response.headers.get("location"), destination);
  }

  const health = await fetch(`${url}/api/health`);
  assert.equal(health.status, 200);
  assert.deepEqual(await health.json(), { status: "ok" });
});

test("validates and stores contact messages and serves questions", async t => {
  const { url, pool } = await startTestServer(t);
  const invalidMessage = await fetch(`${url}/api/contact`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ name: "Student", email: "bad-address", message: "Help" })
  });
  assert.equal(invalidMessage.status, 400);
  assert.equal(pool.contactMessages.length, 0);

  const savedMessage = await fetch(`${url}/api/contact`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ name: " Student ", email: "STUDENT@example.com", message: "Help" })
  });
  assert.equal(savedMessage.status, 200);
  assert.deepEqual(pool.contactMessages[0], ["Student", "student@example.com", "Help"]);

  const questions = await fetch(
    `${url}/api/questions?subject=c-programming&topic=data-types-and-operators`
  );
  assert.equal(questions.status, 200);
  assert.equal((await questions.json())[0].correct_option, 0);
});

test("validates signup input and stores only a hashed password", async t => {
  const { url, pool } = await startTestServer(t);
  const invalidSignup = await fetch(`${url}/signup`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({})
  });
  assert.equal(invalidSignup.status, 400);

  const signup = await fetch(`${url}/signup`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      name: " Student ",
      email: "STUDENT@example.com",
      password: "a-strong-password"
    })
  });
  assert.equal(signup.status, 200);
  assert.equal(pool.users[0].name, "Student");
  assert.equal(pool.users[0].email, "student@example.com");
  assert.notEqual(pool.users[0].password, "a-strong-password");
  assert.equal(await bcrypt.compare("a-strong-password", pool.users[0].password), true);
});

test("persists authenticated quiz results and destroys sessions on logout", async t => {
  const password = "correct horse battery staple";
  const user = {
    id: 7,
    name: "GATE Student",
    email: "student@example.com",
    password: await bcrypt.hash(password, 4)
  };
  const { url, pool } = await startTestServer(t, {
    pool: createMockPool(user),
    production: true
  });

  const unauthorized = await fetch(`${url}/api/quiz-results`);
  assert.equal(unauthorized.status, 401);

  const login = await fetch(`${url}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-forwarded-proto": "https"
    },
    body: JSON.stringify({ email: user.email, password })
  });
  assert.equal(login.status, 200);
  const cookie = login.headers.get("set-cookie");
  assert.match(cookie, /Secure/);
  assert.match(cookie, /HttpOnly/);
  assert.match(cookie, /SameSite=Lax/);
  const sessionCookie = cookie.split(";")[0];

  const currentSession = await fetch(`${url}/api/session`, {
    headers: { cookie: sessionCookie }
  });
  assert.deepEqual(await currentSession.json(), {
    authenticated: true,
    user: { id: user.id, name: user.name }
  });

  const savedResult = await fetch(`${url}/api/quiz-results`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      cookie: sessionCookie
    },
    body: JSON.stringify({
      subject: "c-programming",
      topic: "data-types-and-operators",
      score: 3,
      totalQuestions: 4
    })
  });
  assert.equal(savedResult.status, 200);
  assert.equal(pool.quizResults[0].accuracy, 75);

  const logout = await fetch(`${url}/logout`, {
    method: "POST",
    headers: { cookie: sessionCookie }
  });
  assert.equal(logout.status, 200);

  const afterLogout = await fetch(`${url}/api/quiz-results`, {
    headers: { cookie: sessionCookie }
  });
  assert.equal(afterLogout.status, 401);
});

test("rejects weak session secrets and incomplete database configuration", () => {
  const { validateEnvironment } = require("../server");
  assert.throws(
    () => validateEnvironment({ SESSION_SECRET: "short", DATABASE_URL: "postgres://example" }),
    /at least 32 characters/
  );
  assert.throws(
    () => validateEnvironment({ SESSION_SECRET: "strong-session-secret-over-32-characters" }),
    /DATABASE_URL or DB_USER/
  );
});
