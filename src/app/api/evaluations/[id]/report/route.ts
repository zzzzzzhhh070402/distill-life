import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { generateReport } from '@/lib/evaluation';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const db = getDb();

    const evaluation = db.prepare('SELECT * FROM evaluations WHERE id = ?').get(id) as any;
    if (!evaluation) {
      return NextResponse.json({ error: 'not found' }, { status: 404 });
    }

    const answerRows = db.prepare(
      'SELECT question_id, answer FROM answers WHERE evaluation_id = ? AND skipped = 0'
    ).all(id) as { question_id: string; answer: string }[];

    const answers: Record<string, string> = {};
    for (const row of answerRows) {
      answers[row.question_id] = row.answer;
    }

    const report = generateReport(answers);

    // Save scores
    const upsertScore = db.prepare(`
      INSERT INTO scores (evaluation_id, criterion_id, score, note)
      VALUES (?, ?, ?, ?)
      ON CONFLICT(evaluation_id, criterion_id)
      DO UPDATE SET score = excluded.score, note = excluded.note
    `);

    const tx = db.transaction(() => {
      for (const dim of report.dimensionScores) {
        for (const cs of dim.criteriaScores) {
          upsertScore.run(id, cs.id, cs.score, cs.note);
        }
      }
    });

    tx();

    return NextResponse.json(report);
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
