import { useState } from 'react';
import { 
  Cpu, 
  BarChart3, 
  CheckCircle2, 
  FlaskConical, 
  Clock, 
  Layers, 
  Award, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  FileCode2
} from 'lucide-react';
import { Language } from '../types';
import { ML_MODEL_BENCHMARKS, CONFUSION_MATRIX_DATA, USABILITY_COMPARISON_METRICS } from '../data/researchData';
import { simulateResearchQuery } from '../services/api';

interface MScResearchViewProps {
  language: Language;
}

export default function MScResearchView({ language }: MScResearchViewProps) {
  const [sandboxQuery, setSandboxQuery] = useState('Amar lost NID kivabe pabo? Police GD lagbe?');
  const [simulationLoading, setSimulationLoading] = useState(false);
  const [simulationResults, setSimulationResults] = useState<any[] | null>(null);

  const handleSimulate = async () => {
    if (!sandboxQuery.trim()) return;
    setSimulationLoading(true);
    try {
      const data = await simulateResearchQuery(sandboxQuery);
      setSimulationResults(data.results);
    } catch (err) {
      console.error(err);
    } finally {
      setSimulationLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wide mb-2">
          <FlaskConical className="w-4 h-4 text-emerald-600" />
          <span>MSc Software Engineering Project Research & Empirical Evaluation</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Machine Learning & Usability Benchmarking
        </h1>
        <p className="mt-2 text-sm text-slate-600 max-w-3xl">
          Comparative empirical analysis evaluating 5 algorithmic architectures for civic problem resolution in multilingual (Bangla, Banglish, English) low-resource contexts, paired with System Usability Scale (SUS) field trials.
        </p>
      </div>

      {/* Research Questions & Methodology */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">
            Research Question 1 (RQ1)
          </span>
          <h4 className="font-bold text-xs text-slate-900 mb-1">Banglish & Code-Switched Intent</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            How effectively can subword embeddings and dense transformers resolve transliterated Banglish queries compared to classical n-gram and lexical baselines?
          </p>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">
            Research Question 2 (RQ2)
          </span>
          <h4 className="font-bold text-xs text-slate-900 mb-1">Zero-Hallucination Civic RAG</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Does dense-sparse hybrid retrieval with strict statutory schema constraints eliminate hallucinated government fees and procedures?
          </p>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">
            Research Question 3 (RQ3)
          </span>
          <h4 className="font-bold text-xs text-slate-900 mb-1">Civic Usability & Task Completion</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            What is the measurable reduction in time-to-solution and cognitive load comparing AI guided navigation vs traditional fragmented government portals?
          </p>
        </div>
      </div>

      {/* Model Benchmark Comparative Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden mb-8">
        <div className="p-5 border-b border-slate-100 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="font-bold text-sm text-slate-900">
              5-Model Performance Benchmark on Annotated Bangladesh Problem Dataset (N=2,450)
            </h3>
            <p className="text-xs text-slate-500">
              Evaluated with 5-fold cross-validation on stratified Bengali, Banglish, and English queries.
            </p>
          </div>
          <span className="px-2.5 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-lg border border-emerald-200">
            Gold Standard: Model 5 (Hybrid RAG)
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-700 uppercase font-semibold text-[10px] tracking-wider border-b border-slate-200">
              <tr>
                <th className="p-3.5">Architecture</th>
                <th className="p-3.5">Accuracy</th>
                <th className="p-3.5">Precision</th>
                <th className="p-3.5">Recall</th>
                <th className="p-3.5">F1-Score</th>
                <th className="p-3.5">P@K</th>
                <th className="p-3.5">NDCG@K</th>
                <th className="p-3.5">Latency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono">
              {ML_MODEL_BENCHMARKS.map((m, idx) => (
                <tr 
                  key={idx}
                  className={idx === 4 ? 'bg-emerald-50/60 font-bold text-emerald-950' : 'hover:bg-slate-50 text-slate-700'}
                >
                  <td className="p-3.5 font-sans font-medium text-slate-900">
                    <div className="font-bold">{m.modelName}</div>
                    <div className="text-[11px] text-slate-500 font-sans">{m.modelType}</div>
                  </td>
                  <td className="p-3.5">{m.accuracy}%</td>
                  <td className="p-3.5">{m.precision}%</td>
                  <td className="p-3.5">{m.recall}%</td>
                  <td className="p-3.5 font-bold text-emerald-700">{m.f1Score}%</td>
                  <td className="p-3.5">{m.precisionAtK}</td>
                  <td className="p-3.5">{m.ndcgAtK}</td>
                  <td className="p-3.5 font-sans text-slate-500">{m.latencyMs}ms</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Usability & SUS Metric Comparison Study */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 mb-8">
        <h3 className="text-base font-bold text-slate-900 mb-1">
          Empirical Human Usability Study: BD LifeMate vs Traditional Portals
        </h3>
        <p className="text-xs text-slate-500 mb-5">
          Conducted across N=60 participants (students, working professionals, and non-technical citizens in Dhaka).
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {USABILITY_COMPARISON_METRICS.map((u, i) => (
            <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-xs font-bold text-slate-700 block mb-2">{u.metric}</span>
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block">Traditional Portal</span>
                  <span className="text-sm font-semibold text-slate-600">{u.traditionalPortal} {u.unit}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-emerald-700 font-bold block">BD LifeMate AI</span>
                  <span className="text-lg font-extrabold text-emerald-700">{u.bdLifeMate} {u.unit}</span>
                </div>
              </div>
              <div className="mt-2 text-right">
                <span className="text-[10px] font-extrabold text-emerald-800 bg-emerald-100/70 px-1.5 py-0.5 rounded">
                  {u.improvementPercentage}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Confusion Matrix Visualization */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs mb-8">
        <h3 className="text-base font-bold text-slate-900 mb-1">
          Model 5 (Hybrid RAG) Confusion Matrix Across 5 Civic Problem Domains
        </h3>
        <p className="text-xs text-slate-500 mb-4">
          Visualizing classification precision and cross-domain leakage prevention.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-center text-xs font-mono">
            <thead className="bg-slate-100 text-slate-700 uppercase text-[10px]">
              <tr>
                <th className="p-2 text-left font-sans">Ground Truth Class</th>
                <th className="p-2">Pred: Govt</th>
                <th className="p-2">Pred: Housing</th>
                <th className="p-2">Pred: Jobs</th>
                <th className="p-2">Pred: Scam</th>
                <th className="p-2">Pred: Emergency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {CONFUSION_MATRIX_DATA.map((row, rIdx) => (
                <tr key={rIdx}>
                  <td className="p-2.5 font-sans font-bold text-left text-slate-800">{row.actual}</td>
                  <td className={`p-2.5 ${row.predictedGovt > 90 ? 'bg-emerald-100 text-emerald-900 font-bold' : 'text-slate-400'}`}>
                    {row.predictedGovt}%
                  </td>
                  <td className={`p-2.5 ${row.predictedHousing > 90 ? 'bg-emerald-100 text-emerald-900 font-bold' : 'text-slate-400'}`}>
                    {row.predictedHousing}%
                  </td>
                  <td className={`p-2.5 ${row.predictedJobs > 90 ? 'bg-emerald-100 text-emerald-900 font-bold' : 'text-slate-400'}`}>
                    {row.predictedJobs}%
                  </td>
                  <td className={`p-2.5 ${row.predictedScam > 90 ? 'bg-emerald-100 text-emerald-900 font-bold' : 'text-slate-400'}`}>
                    {row.predictedScam}%
                  </td>
                  <td className={`p-2.5 ${row.predictedEmergency > 90 ? 'bg-emerald-100 text-emerald-900 font-bold' : 'text-slate-400'}`}>
                    {row.predictedEmergency}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive Research Model Simulation Sandbox */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md">
        <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Interactive Model Inference Evaluation Sandbox</span>
        </div>
        <h3 className="text-xl font-bold mb-2">Simulate Multi-Model Predictions in Real Time</h3>
        <p className="text-xs text-slate-300 mb-4">
          Type any query in Bangla or Banglish to inspect classification accuracy and inference latency differences across the 5 architectures.
        </p>

        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <input
            type="text"
            value={sandboxQuery}
            onChange={(e) => setSandboxQuery(e.target.value)}
            placeholder="Type any problem prompt in Bangla, Banglish, or English..."
            className="flex-1 px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-hidden focus:border-emerald-500 font-mono"
          />
          <button
            onClick={handleSimulate}
            disabled={simulationLoading}
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors shrink-0"
          >
            {simulationLoading ? 'Simulating...' : 'Run 5-Model Benchmark'}
          </button>
        </div>

        {simulationResults && (
          <div className="space-y-2 mt-4 pt-4 border-t border-slate-800">
            {simulationResults.map((sim, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-800/90 text-xs">
                <div>
                  <span className="font-bold text-white block">{sim.model}</span>
                  <span className="text-[11px] text-slate-400">Status: {sim.status}</span>
                </div>
                <div className="text-right">
                  <span className="font-mono text-emerald-400 font-bold block">
                    {(sim.confidence * 100).toFixed(0)}% Conf
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">{sim.inferenceTimeMs} ms</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
