"use strict";

const session = require("express-session");
const { createApp, createPool } = require("../server");
const { SqliteSessionStore } = require("../db/sqlite");

let appInstance = null;

function getApp() {
  if (appInstance) return appInstance;

  const pool = createPool(process.env);
  let sessionStore;
  if (pool.isSqlite) {
    sessionStore = new SqliteSessionStore(pool.db);
  } else {
    sessionStore = new session.MemoryStore();
  }

  const sessionSecret =
    process.env.SESSION_SECRET ||
    "3EK8_6gvY4QlkwAbt70VKe1zQ1BXxewaiZNuCa4G5rhce5xmjN-5Qnn7lPWdpe_m";

  appInstance = createApp({
    pool,
    sessionStore,
    sessionSecret,
    production: true
  });

  return appInstance;
}

module.exports = (req, res) => {
  const app = getApp();
  return app(req, res);
};
