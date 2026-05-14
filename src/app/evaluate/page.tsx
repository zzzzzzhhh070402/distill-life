'use client';

import { useEffect, useState, useCallback, useRef, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { questions, chapters, getVisibleQuestions, Question } from '@/lib/questions';
import { getEvaluation, saveAnswers } from '@/lib/storage';

function EvaluateContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get('id') || '';

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [skipped, setSkipped] = useState<Set<string>>(new Set());
  const [activeChapter, setActiveChapter] = useState(1);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const saveTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!id) { setNotFound(true); setLoading(false); return; }
    const ev = getEvaluation(id);
    if (!ev) { setNotFound(true); setLoading(false); return; }
    if (ev.answers.length > 0) {
      const ansMap: Record<string, string> = {};
      const skipSet = new Set<string>();
      for (const a of ev.answers) {
        if (a.skipped) skipSet.add(a.question_id);
        else if (a.answer) ansMap[a.question_id] = a.answer;
      }
      setAnswers(ansMap);
      setSkipped(skipSet);
    }
    setLoading(false);
  }, [id]);

  const doSave = useCallback(
    (ansMap: Record<string, string>, skipSet: Set<string>) => {
      if (!id) return;
      if (saveTimer.current) clearTimeout(saveTimer.current);
      saveTimer.current = setTimeout(() => {
        setSaving(true);
        const payload = Object.entries(ansMap).map(([qid, ans]) => ({
          question_id: qid,
          answer: ans,
          skipped: skipSet.has(qid) ? 1 : 0,
        }));
        for (const qid of skipSet) {
          if (!(qid in ansMap)) payload.push({ question_id: qid, answer: '', skipped: 1 });
        }
        saveAnswers(id, payload);
        setSaving(false);
      }, 600);
    },
    [id]
  );

  const updateAnswer = (questionId: string, value: string) => {
    setAnswers((prev) => {
      const next = { ...prev, [questionId]: value };
      const nextSkip = new Set(skipped);
      if (value.trim() && nextSkip.has(questionId)) { nextSkip.delete(questionId); setSkipped(nextSkip); }
      doSave(next, nextSkip);
      return next;
    });
  };

  const toggleSkip = (questionId: string) => {
    setSkipped((prev) => {
      const next = new Set(prev);
      if (next.has(questionId)) {
        next.delete(questionId);
      } else {
        next.add(questionId);
        setAnswers((ans) => {
          const nextAns = { ...ans };
          delete nextAns[questionId];
          doSave(nextAns, next);
          return nextAns;
        });
        return next;
      }
      doSave(answers, next);
      return next;
    });
  };

  const answeredMap = new Map<string, string>();
  for (const [qid, ans] of Object.entries(answers)) {
    if (ans.trim() && !skipped.has(qid)) answeredMap.set(qid, ans);
  }

  const visibleQuestions = getVisibleQuestions(answeredMap);
  const visibleIds = new Set(visibleQuestions.map((q) => q.id));

  const chapterQuestions = chapters.map((ch) => ({
    ...ch,
    questions: ch.sections.flatMap((s) =>
      s.questionIds.filter((qid) => visibleIds.has(qid)).map((qid) => questions.find((q) => q.id === qid)!).filter(Boolean)
    ),
  }));

  const totalVisible = visibleQuestions.length;
  const answeredCount = Object.keys(answers).filter((qid) => answers[qid].trim() && visibleIds.has(qid)).length;
  const progress = totalVisible > 0 ? Math.round((answeredCount / totalVisible) * 100) : 0;

  const getChapterProgress = (chNum: number) => {
    const ch = chapterQuestions[chNum - 1];
    if (!ch || ch.questions.length === 0) return 0;
    const answered = ch.questions.filter((q) => answers[q.id]?.trim() || skipped.has(q.id)).length;
    return Math.round((answered / ch.questions.length) * 100);
  };

  if (loading) {
    return <div className="page-container flex items-center justify-center min-h-screen"><p className="text-secondary">加载中...</p></div>;
  }

  if (notFound) {
    return (
      <div className="page-container flex flex-col items-center justify-center min-h-screen">
        <p className="text-secondary mb-4">评估不存在</p>
        <button className="btn btn-secondary" onClick={() => router.push('/')}>返回首页</button>
      </div>
    );
  }

  const currentChapter = chapterQuestions[activeChapter - 1];
  const hasAnyAnswers = answeredCount > 0;

  return (
    <div className="page-container">
      <div className="flex items-center justify-between mb-4">
        <button className="btn btn-ghost btn-sm" onClick={() => router.push('/')}>← 首页</button>
        <div className="flex items-center gap-3">
          {saving && <span className="text-xs text-secondary">保存中...</span>}
          <span className="text-sm text-secondary">{answeredCount}/{totalVisible} 题</span>
        </div>
      </div>

      <div className="progress-track mb-5"><div className="progress-fill" style={{ width: `${progress}%` }} /></div>

      <div className="flex gap-2 overflow-x-auto pb-3 mb-6 -mx-1 px-1 hide-scrollbar">
        {chapterQuestions.map((ch) => (
          <button key={ch.num}
            className={`chapter-pill flex-shrink-0 ${activeChapter === ch.num ? 'active' : getChapterProgress(ch.num) === 100 ? 'completed' : ''}`}
            onClick={() => setActiveChapter(ch.num)}
          >{ch.num}. {ch.title}{ch.questions.length === 0 && ' · 空'}</button>
        ))}
      </div>

      {currentChapter && currentChapter.questions.length > 0 ? (
        <div>
          <h2 className="mb-1">{currentChapter.title}</h2>
          <p className="text-secondary text-sm mb-6">第{activeChapter}章 · {currentChapter.questions.length} 题</p>
          <div className="space-y-4">
            {currentChapter.sections.map((section) => {
              const sectionQuestions = section.questionIds.filter((qid) => visibleIds.has(qid)).map((qid) => questions.find((q) => q.id === qid)!).filter(Boolean);
              if (sectionQuestions.length === 0) return null;
              return (
                <div key={section.title}>
                  <h3 className="section-label mb-3">{section.title}</h3>
                  {sectionQuestions.map((q) => (
                    <QuestionCard key={q.id} question={q} answer={answers[q.id] || ''} skipped={skipped.has(q.id)}
                      onAnswer={(v) => updateAnswer(q.id, v)} onSkip={() => toggleSkip(q.id)} />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="card text-center py-12">
          <p className="text-secondary mb-3">这一章没有需要回答的问题</p>
          <p className="text-sm text-secondary opacity-70">{hasAnyAnswers ? '基于你的回答，本章问题已被跳过' : '请先回答前面章节的问题'}</p>
        </div>
      )}

      <div className="flex items-center justify-between mt-8">
        <button className="btn btn-secondary btn-sm" disabled={activeChapter === 1} onClick={() => setActiveChapter((c) => Math.max(1, c - 1))}>← 上一章</button>
        <span className="text-sm text-secondary">{activeChapter} / {chapterQuestions.length}</span>
        {activeChapter < chapterQuestions.length ? (
          <button className="btn btn-primary btn-sm" onClick={() => setActiveChapter((c) => Math.min(chapterQuestions.length, c + 1))}>下一章 →</button>
        ) : (
          <button className="btn btn-primary btn-sm" onClick={() => { setGenerating(true); router.push(`/report?id=${id}`); }} disabled={generating}>
            {generating ? '生成中...' : '生成报告 →'}
          </button>
        )}
      </div>

      {hasAnyAnswers && activeChapter === chapterQuestions.length && getChapterProgress(chapterQuestions.length) >= 30 && (
        <div className="mt-6 card card-sm text-center animate-in">
          <p className="mb-3 text-sm text-secondary">已完成大部分问题，可以查看报告了</p>
          <button className="btn btn-primary w-full" onClick={() => router.push(`/report?id=${id}`)} disabled={generating}>
            {generating ? '正在生成...' : '查看蒸馏报告'}
          </button>
        </div>
      )}
    </div>
  );
}

function QuestionCard({ question, answer, skipped, onAnswer, onSkip }: {
  question: Question; answer: string; skipped: boolean; onAnswer: (v: string) => void; onSkip: () => void;
}) {
  return (
    <div className={`card mb-3 animate-in ${skipped ? 'opacity-60' : ''}`}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <label className="text-[15px] leading-relaxed font-medium flex-1">
          <span className="text-xs text-secondary mr-2">{question.id}</span>{question.text}
        </label>
        <button className={`text-xs px-2 py-1 rounded-full border transition-colors flex-shrink-0 ${skipped ? 'bg-zinc-100 border-zinc-300 text-zinc-500' : 'border-zinc-200 text-zinc-400 hover:bg-zinc-50'}`}
          onClick={onSkip} title={skipped ? '取消跳过' : '跳过此题'}>{skipped ? '已跳过' : '跳过'}</button>
      </div>
      {!skipped && (
        question.inputType === 'select' && question.options ? (
          <select value={answer} onChange={(e) => onAnswer(e.target.value)}><option value="">请选择...</option>{question.options.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}</select>
        ) : question.inputType === 'textarea' ? (
          <textarea value={answer} onChange={(e) => onAnswer(e.target.value)} placeholder="输入你的回答..." rows={3} />
        ) : (
          <input type="text" value={answer} onChange={(e) => onAnswer(e.target.value)} placeholder="输入你的回答..." />
        )
      )}
    </div>
  );
}

export default function EvaluatePage() {
  return <Suspense fallback={<div className="page-container flex items-center justify-center min-h-screen"><p className="text-secondary">加载中...</p></div>}><EvaluateContent /></Suspense>;
}
