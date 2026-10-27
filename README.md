# GATEPrep

GATEPrep is a single-page GATE CSE study app served by an Express backend. The backend uses PostgreSQL for accounts, contact messages, questions, quiz history, and persistent login sessions.

## Requirements

- Node.js 20 or newer
- PostgreSQL 14 or newer

## Run locally

1. Install dependencies:

   ```sh
   npm install
   ```

2. Create a local `.env` from `.env.example`. Set either `DATABASE_URL` or `DB_HOST`, `DB_USER`, `DB_PASSWORD`, and `DB_NAME` (`DB_PORT` is optional and defaults to `5432`).
3. Generate a strong session secret and put the generated value in `.env`:

   ```sh
   node -e "console.log(require('crypto').randomBytes(48).toString('base64url'))"
   ```

   `SESSION_SECRET` must contain at least 32 characters. Do not commit `.env` or share its contents.

4. Create the tables and load the question bank. In PowerShell, run these commands from the repository root after setting `DATABASE_URL` in the shell:

   ```sh
   psql "$env:DATABASE_URL" --file db/schema.sql
   psql "$env:DATABASE_URL" --file ques_bank.sql
   ```

   In Bash, use `psql "$DATABASE_URL" --file db/schema.sql` and `psql "$DATABASE_URL" --file ques_bank.sql`. The schema is safe to run repeatedly; the question seed avoids adding existing questions.

5. Start the app:

   ```sh
   npm start
   ```

   Open `http://localhost:3000`. The app serves the canonical SPA from `public/index.html`; its hash routes cover subjects, practice, dashboard, progress, contact, and account screens.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `SESSION_SECRET` | Yes | Random secret of at least 32 characters used to sign sessions. |
| `DATABASE_URL` | One database configuration is required | PostgreSQL connection URL; recommended for hosted deployments. |
| `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME` | Alternative to `DATABASE_URL` | Individual PostgreSQL connection settings. |
| `DATABASE_SSL` | No | Set to `true` only when the PostgreSQL provider requires TLS. |
| `PORT` | No | HTTP port; defaults to `3000` and uses the port provided by Render. |
| `NODE_ENV` | No | Set to `production` on the hosted service to enable secure cookies and proxy handling. |

## Deploy on Render

Create a Render PostgreSQL database and a Node.js web service from this repository's root. Set the build command to `npm ci` and the start command to `npm start`. Configure `DATABASE_URL` with the database's private connection URL, set `NODE_ENV=production`, and add a newly generated `SESSION_SECRET` in Render's environment settings. Do not commit production credentials. If the database requires TLS, set `DATABASE_SSL=true`.

Before using the service, run `db/schema.sql` and then `ques_bank.sql` once against the hosted database. The persistent PostgreSQL session store is configured by the app and uses the `user_sessions` table. The app can be checked at `/api/health`.

GitHub Pages cannot host the Express API or database-backed features. The existing Pages workflow is retained as a CI check only; it does not deploy the site.

## Verification

Run the automated server and route tests with:

```sh
npm test
```
