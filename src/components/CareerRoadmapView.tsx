import { useState } from 'react';
import { 
  Briefcase, 
  CheckCircle2, 
  Sparkles, 
  Code, 
  BookOpen, 
  TrendingUp, 
  ArrowRight, 
  ExternalLink,
  Layers,
  Award
} from 'lucide-react';
import { Language, CareerRoadmapResult } from '../types';
import { generateCareerRoadmap } from '../services/api';

interface CareerRoadmapViewProps {
  language: Language;
  onAskAI: (query: string) => void;
}

export default function CareerRoadmapView({ language, onAskAI }: CareerRoadmapViewProps) {
  const [targetRole, setTargetRole] = useState('Data Scientist');
  const [selectedSkills, setSelectedSkills] = useState<string[]>(['Python', 'SQL']);
  const [loading, setLoading] = useState(false);
  const [roadmap, setRoadmap] = useState<CareerRoadmapResult | null>(null);

  const availableSkills = [
    'Python', 'SQL', 'JavaScript', 'TypeScript', 'React', 'Node.js', 
    'Machine Learning', 'Git & GitHub', 'Docker', 'Pandas & NumPy', 
    'FastAPI', 'HTML & CSS', 'PostgreSQL', 'Statistics'
  ];

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const data = await generateCareerRoadmap(targetRole, selectedSkills);
      setRoadmap(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wide mb-2">
          <Briefcase className="w-4 h-4 text-emerald-600" />
          <span>Bangladesh Tech & Professional Career Accelerator</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          {language === 'bn' ? 'ক্যারিয়ার রোডম্যাপ ও স্কিল গ্যাপ অ্যানালাইজার' : 'Jobs & Career Roadmap Generator'}
        </h1>
        <p className="mt-2 text-sm text-slate-600 max-w-2xl">
          {language === 'bn'
            ? 'আপনার বর্তমান দক্ষতার সাথে কাঙ্ক্ষিত লক্ষ্যের দূরত্ব বিশ্লেষণ করে ধাপে ধাপে বাস্তবসম্মত শেখার পরিকল্পনা ও দেশীয় চাকরির বাজারের তথ্য পান।'
            : 'Bridge the gap between your current skills and target career goal with step-by-step milestones, vetted free resources, and market salary benchmarks.'}
        </p>
      </div>

      {/* Controller: Target Role & Current Skills */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Target Role Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Select Target Career Role
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['Data Scientist', 'Full Stack Developer'].map(role => (
                <button
                  key={role}
                  onClick={() => setTargetRole(role)}
                  className={`p-3 rounded-xl border text-left text-xs font-bold transition-all ${
                    targetRole === role 
                      ? 'bg-emerald-50 border-emerald-600 text-emerald-900 shadow-xs' 
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{role}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Current Skills Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Select Skills You Already Know ({selectedSkills.length} selected)
            </label>
            <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto p-2 bg-slate-50 rounded-xl border border-slate-200">
              {availableSkills.map(skill => {
                const active = selectedSkills.includes(skill);
                return (
                  <button
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                      active 
                        ? 'bg-emerald-700 text-white shadow-xs' 
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {active && '✓ '}
                    {skill}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <button
          id="generate-career-roadmap-btn"
          onClick={handleGenerate}
          disabled={loading}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl shadow-xs transition-all"
        >
          <Sparkles className="w-4 h-4" />
          <span>{loading ? 'Analyzing Skill Gaps...' : 'Generate Personalized Roadmap'}</span>
        </button>
      </div>

      {/* Output Roadmap Card */}
      {roadmap && (
        <div className="space-y-6">
          {/* Market Overview Card */}
          <div className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-2xl p-6 shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider block">Target Goal</span>
                <h3 className="text-xl sm:text-2xl font-bold">{roadmap.targetRole}</h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block">Market Salary Benchmark (BD)</span>
                <span className="text-sm font-bold text-emerald-300">{roadmap.salaryRangeBdt}</span>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {roadmap.bangladeshJobContext}
            </p>

            {/* Missing Skills Pill Box */}
            <div className="mt-4 pt-4 border-t border-slate-800">
              <span className="text-xs font-semibold text-amber-300 block mb-2">
                Identified Skill Gaps to Fill:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {roadmap.missingSkills.map((sk, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-200 border border-amber-500/30 text-xs font-medium">
                    + {sk}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Phase-by-Phase Timeline Milestones */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 mb-5 flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-700" />
              <span>Structured Step-by-Step Learning Timeline</span>
            </h3>

            <div className="space-y-6">
              {roadmap.milestones.map((ms, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-emerald-200 pb-2">
                  <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-emerald-700 text-white text-[10px] font-bold flex items-center justify-center">
                    {idx + 1}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h4 className="font-bold text-sm text-slate-900">{ms.phase}</h4>
                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {ms.timeline}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {ms.topics.map((top, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px]">
                        {top}
                      </span>
                    ))}
                  </div>

                  {/* Hands-on Practical Project */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs mb-3">
                    <span className="font-bold text-slate-800 block mb-0.5">Practical Portfolio Project:</span>
                    <span className="text-slate-600">{ms.practicalProject}</span>
                  </div>

                  {/* Vetted Learning Resources */}
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="text-slate-400 font-medium">Verified Resources:</span>
                    {ms.recommendedResources.map((res, rIdx) => (
                      <span key={rIdx} className="inline-flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50/70 px-2 py-0.5 rounded border border-emerald-200/60">
                        <BookOpen className="w-3 h-3" />
                        <span>{res.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interview Advice */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-700" />
              <span>Interview Preparation Advice for Bangladesh & Global Tech</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-700">
              {roadmap.interviewPreparationAdvice.map((adv, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{adv}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
