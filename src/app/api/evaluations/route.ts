import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { subject_name, evaluator_name, evaluation_type } = body;
    const id = uuidv4();
    const db = getDb();

    db.prepare(`
      INSERT INTO evaluations (id, subject_name, evaluator_name, evaluation_type)
      VALUES (?, ?, ?, ?)
    `).run(id, subject_name || '', evaluator_name || '', evaluation_type || 'self');

    return NextResponse.json({ id, message: 'created' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function GET() {
  try {
    const db = getDb();
    const evaluations = db.prepare(`
      SELECT e.*,
        (SELECT COUNT(*) FROM answers WHERE evaluation_id = e.id) as answered_count
      FROM evaluations e
      ORDER BY e.updated_at DESC
    `).all();
    return NextResponse.json(evaluations);
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
