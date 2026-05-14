import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'data', 'distill-life.db');

let db: Database.Database;

export function getDb(): Database.Database {
  if (!db) {
    const fs = require('fs');
    const dir = path.dirname(dbPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    db = new Database(dbPath);
    db.pragma('journal_mode = WAL');
    initSchema(db);
  }
  return db;
}

function initSchema(db: Database.Database) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS evaluations (
      id TEXT PRIMARY KEY,
      subject_name TEXT NOT NULL DEFAULT '',
      evaluator_name TEXT NOT NULL DEFAULT '',
      evaluation_type TEXT NOT NULL DEFAULT 'self',
      status TEXT NOT NULL DEFAULT 'in_progress',
      current_question INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now', 'localtime')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now', 'localtime'))
    );

    CREATE TABLE IF NOT EXISTS answers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      evaluation_id TEXT NOT NULL,
      question_id TEXT NOT NULL,
      answer TEXT NOT NULL DEFAULT '',
      skipped INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now', 'localtime')),
      UNIQUE(evaluation_id, question_id),
      FOREIGN KEY (evaluation_id) REFERENCES evaluations(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS scores (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      evaluation_id TEXT NOT NULL,
      criterion_id TEXT NOT NULL,
      score INTEGER NOT NULL DEFAULT 0,
      note TEXT NOT NULL DEFAULT '',
      UNIQUE(evaluation_id, criterion_id),
      FOREIGN KEY (evaluation_id) REFERENCES evaluations(id) ON DELETE CASCADE
    );
  `);
}
