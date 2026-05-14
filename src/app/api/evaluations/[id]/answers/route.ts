import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { answers } = body as { answers: { question_id: string; answer: string; skipped: number }[] };

    const db = getDb();

    const upsert = db.prepare(`
      INSERT INTO answers (evaluation_id, question_id, answer, skipped)
      VALUES (?, ?, ?, ?)
      ON CONFLICT(evaluation_id, question_id)
      DO UPDATE SET answer = excluded.answer, skipped = excluded.skipped
    `);

    const tx = db.transaction(() => {
      for (const ans of answers) {
        upsert.run(id, ans.question_id, ans.answer || '', ans.skipped || 0);
      }
      db.prepare(`UPDATE evaluations SET updated_at = datetime('now', 'localtime') WHERE id = ?`).run(id);
    });

    tx();
    return NextResponse.json({ message: 'saved' });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
