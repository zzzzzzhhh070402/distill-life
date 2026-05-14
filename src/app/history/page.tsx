'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { listEvaluations, deleteEvaluation } from '@/lib/storage';

interface EvalItem {
  id: string;
  subject_name: string;
  evaluation_type: string;
  answered_count: number;
  created_at: string;
  updated_at: string;
}

export default function HistoryPage() {
  const router = useRouter();
  const [evaluations, setEvaluations] = useState<EvalItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setEvaluations(listEvaluations());
    setLoading(false);
  }, []);

  const handleDelete = (eid: string) => {
    if (!confirm('确定要删除这份记录吗？')) return;
    deleteEvaluation(eid);
    setEvaluations((prev) => prev.filter((e) => e.id !== eid));
  };

  const now = new Date();
  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    const diffMs = now.getTime() - d.getTime();
    const diffH = Math.floor(diffMs / (1000 * 60 * 60));
    if (diffH < 1) return '刚刚';
    if (diffH < 24) return `${diffH} 小时前`;
    const diffD = Math.floor(diffH / 24);
    if (diffD < 7) return `${diffD} 天前`;
    return d.toLocaleDateString('zh-CN');
  };

  return (
    <div className="page-container">
      <div className="flex items-center justify-between mb-8">
        <h1>历史报告</h1>
        <button className="btn btn-primary btn-sm" onClick={() => router.push('/')}>
          新的蒸馏
        </button>
      </div>

      {loading ? (
        <p className="text-secondary text-center py-12">加载中...</p>
      ) : evaluations.length === 0 ? (
        <div className="card text-center py-12">
          <div className="text-4xl mb-4">📋</div>
          <p className="text-secondary mb-4">还没有任何蒸馏记录</p>
          <button className="btn btn-primary" onClick={() => router.push('/')}>
            开始第一次蒸馏
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {evaluations.map((ev) => (
            <div key={ev.id} className="card flex items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-[16px] truncate">
                  {ev.subject_name || (ev.evaluation_type === 'self' ? '自我评价' : '未命名')}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-secondary">
                    {ev.evaluation_type === 'self' ? '自评' : '他评'}
                  </span>
                  <span className="text-xs text-secondary">·</span>
                  <span className="text-xs text-secondary">{ev.answered_count} 题已答</span>
                  <span className="text-xs text-secondary">·</span>
                  <span className="text-xs text-secondary">{formatDate(ev.updated_at)}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => router.push(`/evaluate?id=${ev.id}`)}
                >
                  继续
                </button>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => router.push(`/report?id=${ev.id}`)}
                >
                  报告
                </button>
                <button
                  className="btn btn-ghost btn-sm text-red-400"
                  onClick={() => handleDelete(ev.id)}
                >
                  删除
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <button className="btn btn-ghost btn-sm mt-8 mx-auto block" onClick={() => router.push('/')}>
        ← 返回首页
      </button>
    </div>
  );
}
