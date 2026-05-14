'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { getReport } from '@/lib/storage';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface ReportData {
  dimensionScores: {
    dimension: number;
    title: string;
    criteriaScores: { id: string; text: string; score: number; note: string }[];
    avgScore: number;
  }[];
  overallScore: number;
  summary: string;
}

function ReportContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get('id') || '';

  const [report, setReport] = useState<ReportData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [expandedDim, setExpandedDim] = useState<number | null>(null);

  useEffect(() => {
    if (!id) { setError('缺少报告ID'); setLoading(false); return; }
    const r = getReport(id);
    if (r) setReport(r);
    else setError('无法加载报告');
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div className="page-container flex items-center justify-center min-h-screen"><div className="text-center"><div className="text-3xl mb-4 animate-pulse">🪞</div><p className="text-secondary">正在蒸馏...</p></div></div>;
  }

  if (error || !report) {
    return <div className="page-container flex flex-col items-center justify-center min-h-screen"><p className="text-secondary mb-4">{error || '报告不存在'}</p><button className="btn btn-secondary" onClick={() => router.push('/')}>返回首页</button></div>;
  }

  const radarData = {
    labels: report.dimensionScores.map((d) => d.title),
    datasets: [{
      label: '评分', data: report.dimensionScores.map((d) => d.avgScore),
      backgroundColor: 'rgba(240, 179, 94, 0.15)', borderColor: 'rgba(240, 179, 94, 0.8)',
      borderWidth: 2, pointBackgroundColor: 'rgba(240, 179, 94, 1)',
      pointBorderColor: '#fff', pointBorderWidth: 2, pointRadius: 4,
    }],
  };

  const radarOptions = {
    scales: { r: { beginAtZero: false, min: 1, max: 10, ticks: { stepSize: 2, font: { size: 10 }, backdropColor: 'transparent' }, pointLabels: { font: { size: 12, weight: 600 as const }, color: '#1c1c1e' }, grid: { color: 'rgba(0,0,0,0.06)' }, angleLines: { color: 'rgba(0,0,0,0.06)' } } },
    plugins: { legend: { display: false } },
  };

  const scoreColor = (s: number) => s >= 7 ? 'score-high' : s >= 4 ? 'score-mid' : 'score-low';

  return (
    <div className="page-container">
      <div className="flex items-center justify-between mb-6">
        <button className="btn btn-ghost btn-sm" onClick={() => router.push(`/evaluate?id=${id}`)}>← 返回答题</button>
        <button className="btn btn-ghost btn-sm" onClick={() => router.push('/history')}>历史报告</button>
      </div>

      <div className="text-center mb-8">
        <div className="text-4xl mb-3">🪞</div>
        <h1 className="text-2xl font-bold mb-2">人生蒸馏报告</h1>
        <div className="flex items-center justify-center gap-2">
          <span className={`score-dot ${scoreColor(report.overallScore)}`} style={{ width: 44, height: 44, fontSize: 18 }}>{report.overallScore}</span>
          <span className="text-secondary text-sm">综合评分 / 10</span>
        </div>
      </div>

      <div className="card mb-8"><h3 className="section-label mb-2">概览</h3><p className="text-[15px] leading-relaxed">{report.summary}</p></div>

      <div className="card mb-8"><h3 className="section-label mb-4">11维度雷达图</h3><div className="radar-container"><Radar data={radarData} options={radarOptions as any} /></div></div>

      <div className="space-y-4">
        {report.dimensionScores.map((dim) => (
          <div key={dim.dimension} className="card">
            <button className="w-full flex items-center justify-between text-left" onClick={() => setExpandedDim(expandedDim === dim.dimension ? null : dim.dimension)}>
              <div className="flex items-center gap-3"><span className="text-xs text-secondary font-medium">{dim.dimension}</span><h3 className="text-[16px]">{dim.title}</h3></div>
              <div className="flex items-center gap-2"><span className={`score-dot ${scoreColor(dim.avgScore)}`}>{dim.avgScore}</span><span className="text-xs text-secondary">{expandedDim === dim.dimension ? '▲' : '▼'}</span></div>
            </button>
            {expandedDim === dim.dimension && (
              <div className="mt-4 pt-4 border-t border-divider animate-in">
                {dim.criteriaScores.map((cs) => (
                  <div key={cs.id} className="criterion-row">
                    <div className="flex-1"><span className="text-sm font-medium">{cs.text}</span></div>
                    <div className="flex items-center gap-2"><span className="text-xs text-secondary">{cs.note}</span><span className={`score-dot ${scoreColor(cs.score)}`} style={{ width: 26, height: 26, fontSize: 11 }}>{cs.score}</span></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-8">
        <button className="btn btn-secondary flex-1" onClick={() => router.push(`/evaluate?id=${id}`)}>继续修改答案</button>
        <button className="btn btn-primary flex-1" onClick={() => router.push('/')}>开始新的蒸馏</button>
      </div>

      <p className="text-center text-xs text-secondary mt-8 opacity-50">此报告基于已回答的问题生成，回答问题越多，报告越准确</p>
    </div>
  );
}

export default function ReportPage() {
  return <Suspense fallback={<div className="page-container flex items-center justify-center min-h-screen"><p className="text-secondary">加载中...</p></div>}><ReportContent /></Suspense>;
}
