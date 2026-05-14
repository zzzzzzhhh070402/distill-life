'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [step, setStep] = useState<'start' | 'form'>('start');
  const [subjectName, setSubjectName] = useState('');
  const [evalType, setEvalType] = useState<'self' | 'other'>('self');
  const [loading, setLoading] = useState(false);

  const handleStart = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/evaluations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject_name: subjectName || '未命名',
          evaluation_type: evalType,
        }),
      });
      const data = await res.json();
      router.push(`/evaluate/${data.id}`);
    } catch {
      alert('创建失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  if (step === 'start') {
    return (
      <div className="page-container flex flex-col items-center justify-center min-h-screen text-center">
        <div className="mb-10">
          <div className="text-5xl mb-5">🪞</div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight">蒸馏人生</h1>
          <p className="text-secondary text-lg max-w-sm mx-auto leading-relaxed">
            用 261 个问题，从 11 个维度<br />蒸馏一个人的一生
          </p>
        </div>

        <div className="space-y-3 w-full max-w-xs">
          <button className="btn btn-primary w-full text-lg py-3" onClick={() => setStep('form')}>
            开始蒸馏
          </button>
          <button className="btn btn-ghost w-full" onClick={() => router.push('/history')}>
            查看历史报告
          </button>
        </div>

        <p className="mt-14 text-sm text-secondary opacity-50">每个生命都值得被认真对待</p>
      </div>
    );
  }

  return (
    <div className="page-container flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <button className="btn btn-ghost btn-sm mb-6" onClick={() => setStep('start')}>
          ← 返回
        </button>

        <h2 className="mb-8">开始新的蒸馏</h2>

        <div className="space-y-5">
          <div>
            <label className="section-label block mb-2">评价对象</label>
            <select value={evalType} onChange={(e) => setEvalType(e.target.value as 'self' | 'other')}>
              <option value="self">评价我自己</option>
              <option value="other">评价另一个人</option>
            </select>
          </div>

          {evalType === 'other' && (
            <div className="animate-in">
              <label className="section-label block mb-2">TA的名字/称呼</label>
              <input
                type="text"
                placeholder="例如：父亲、奶奶、一位朋友..."
                value={subjectName}
                onChange={(e) => setSubjectName(e.target.value)}
              />
            </div>
          )}

          <button className="btn btn-primary w-full mt-4" onClick={handleStart} disabled={loading}>
            {loading ? '创建中...' : '开始答题'}
          </button>
        </div>
      </div>
    </div>
  );
}
