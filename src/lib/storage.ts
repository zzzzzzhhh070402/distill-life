import { v4 as uuidv4 } from 'uuid';
import { generateReport } from './evaluation';

const STORAGE_KEY = 'distill-life-evals';

export interface Evaluation {
  id: string;
  subject_name: string;
  evaluation_type: 'self' | 'other';
  created_at: string;
  updated_at: string;
}

export interface EvaluationWithAnswers extends Evaluation {
  answers: { question_id: string; answer: string; skipped: number }[];
}

function getAll(): EvaluationWithAnswers[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveAll(evals: EvaluationWithAnswers[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(evals));
}

export function createEvaluation(data: { subject_name: string; evaluation_type: 'self' | 'other' }): string {
  const id = uuidv4();
  const now = new Date().toISOString();
  const evals = getAll();
  evals.push({
    id,
    subject_name: data.subject_name || '未命名',
    evaluation_type: data.evaluation_type,
    created_at: now,
    updated_at: now,
    answers: [],
  });
  saveAll(evals);
  return id;
}

export function getEvaluation(id: string): EvaluationWithAnswers | null {
  return getAll().find(e => e.id === id) || null;
}

export function listEvaluations(): (Evaluation & { answered_count: number })[] {
  return getAll().map(e => ({
    id: e.id,
    subject_name: e.subject_name,
    evaluation_type: e.evaluation_type,
    created_at: e.created_at,
    updated_at: e.updated_at,
    answered_count: e.answers.filter(a => !a.skipped && a.answer.trim()).length,
  })).sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
}

export function saveAnswers(id: string, answers: { question_id: string; answer: string; skipped: number }[]) {
  const evals = getAll();
  const idx = evals.findIndex(e => e.id === id);
  if (idx === -1) return;

  for (const ans of answers) {
    const existing = evals[idx].answers.findIndex(a => a.question_id === ans.question_id);
    if (existing >= 0) {
      evals[idx].answers[existing] = ans;
    } else {
      evals[idx].answers.push(ans);
    }
  }
  evals[idx].updated_at = new Date().toISOString();
  saveAll(evals);
}

export function getReport(id: string) {
  const ev = getEvaluation(id);
  if (!ev) return null;

  const answers: Record<string, string> = {};
  for (const a of ev.answers) {
    if (!a.skipped && a.answer.trim()) {
      answers[a.question_id] = a.answer;
    }
  }
  return generateReport(answers);
}

export function deleteEvaluation(id: string) {
  const evals = getAll().filter(e => e.id !== id);
  saveAll(evals);
}
