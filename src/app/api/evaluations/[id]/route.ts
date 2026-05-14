import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const db = getDb();

    const evaluation = db.prepare('SELECT * FROM evaluations WHERE id = ?').get(id);
    if (!evaluation) {
      return NextResponse.json({ error: 'not found' }, { status: 404 });
    }

    const answers = db.prepare(
      'SELECT question_id, answer, skipped FROM answers WHERE evaluation_id = ?'
    ).all(id);

    return NextResponse.json({ evaluation, answers });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const db = getDb();
    db.prepare('DELETE FROM evaluations WHERE id = ?').run(id);
    return NextResponse.json({ message: 'deleted' });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
