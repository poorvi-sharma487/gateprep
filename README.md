# GATEPrep

GATEPrep is a single-page GATE CSE preparation platform served by an Express backend. It features an embedded zero-configuration SQLite database by default (with optional PostgreSQL support), high-performance question banks across all 12 GATE CSE subjects, user accounts, quiz scoring, and real-time progress tracking.

## Highlights

- **Embedded SQLite Database**: Ready out of the box with zero external database server setup or installation needed.
- **100% Emoji-Free Modern UI**: Styled with clean Lucide SVG icons.
- **Mobile & Desktop Responsive**: Fully optimized for Android touch devices and PC screens without padding or layout bugs.
- **Authentic Practice Question Bank**: Topic-wise questions with instant answer feedback and conceptual explanations.
- **1,957 Official GATE CSE PYQs**: Extracted and compiled from the GeeksforGeeks GATE PYQ Archive (775 pages across all 13 subjects).
- **Interactive Markdown Books**: Complete master book `GATE_CSE_PYQ_Book.md` (2.2 MB) and individual subject markdown notebooks with code blocks and KaTeX math derivations.
- **Full GATE Exam Simulator**: 65-question timed mock tests (100 marks, 180 mins) with negative marking (+1/+2, -0.33/-0.66) and detailed scorecard.
- **Secure Authentication**: Hashed passwords (bcrypt) and session management.

## Quick Start Locally

1. Install dependencies:

   ```sh
   npm install
   ```

2. Seed or update questions from the PYQ archive:

   ```sh
   # To re-convert from PDF if updated:
   npm run convert:pdf

   # To seed questions into SQLite:
   npm run seed:pyqs
   ```

3. Start the server (SQLite is configured automatically):

   ```sh
   npm start
   ```

4. Open `http://localhost:3000` in your browser.

## Database Configuration

- **SQLite (Default & Recommended)**: Zero setup required. The database file is created at `db/gateprep.sqlite`.
- **PostgreSQL (Optional)**: If you want to use an external PostgreSQL database, set `DATABASE_URL=postgresql://user:password@localhost:5432/gateprep` in your `.env` file.

## Testing

Run the test suite with:

```sh
npm test
```
