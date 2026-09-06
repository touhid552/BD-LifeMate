import { useState } from 'react';
import { 
  ShieldAlert, 
  AlertOctagon, 
  CheckCircle, 
  HelpCircle, 
  Phone, 
  Copy, 
  RotateCcw, 
  ArrowRight,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';
import { Language, ScamAnalysisResult } from '../types';
import { analyzeScamText } from '../services/api';

interface ScamDetectorViewProps {
  language: Language;
}

export default function ScamDetectorView({ language }: ScamDetectorViewProps) {
  const [inputText, setInputText] = useState('');
  const [channel, setChannel] = useState('facebook');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ScamAnalysisResult | null>(null);

  const sampleScams = [
    {
      label: 'bKash Upfront Job',
      channel: 'facebook',
      text: 'Urgent hiring! Work from home online typing job. Daily ৳2,000–৳3,500 income. No experience needed. To confirm your ID badge & training manual, send ৳550 registration fee via personal bKash 017XXXXXXX right now. Limited slots!'
    },
    {
      label: 'Canada Visa Guarantee',
      channel: 'facebook',
      text: 'কানাডা ও রোমানিয়া ওয়ার্ক পারমিট ভিসা ১০০% নিশ্চিত গ্যারান্টি! কোনো IELTS বা শিক্ষাগত যোগ্যতা লাগবে না। প্রসেসিং মাত্র ১৫ দিনে। যোগাযোগ করুন শুধুমাত্র টেলিগ্রাম বা হোয়াটসঅ্যাপে।'
    },
    {
      label: 'Lottery Prize SMS',
      channel: 'sms',
      text: 'অভিনন্দন! আপনি গ্রামীণফোন-বিকাশ যৌথ ধামাকা লটারিতে ২৫ লাখ টাকা ও ১টি মোটরসাইকেল জিতেছেন! পুরস্কার ক্লেইম করতে সিকিউরিটি ফি বাবদ ১,৫০০ টাকা এই নম্বরে পাঠান।'
    }
  ];

  const handleAnalyze = async (textToUse?: string) => {
    const text = textToUse || inputText;
    if (!text.trim()) return;

    setLoading(true);
    try {
      const data = await analyzeScamText(text, channel);
      setResult(data);
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
        <div className="flex items-center gap-2 text-xs font-semibold text-red-700 uppercase tracking-wide mb-2">
          <ShieldAlert className="w-4 h-4 text-red-600" />
          <span>Bangladesh Citizen Cyber Defense & Fraud Auditor</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          {language === 'bn' ? 'অনলাইন প্রতারণা ও স্ক্যাম ভেরিফায়ার' : 'AI Scam & Suspicious Offer Detector'}
        </h1>
        <p className="mt-2 text-sm text-slate-600 max-w-2xl">
          {language === 'bn'
            ? 'ফেসবুক পোস্ট, চাকরির অফার, এসএমএস, বিদেশযাত্রার ভিসা কিংবা মার্কেটপ্লেস মেসেজ পেস্ট করে তাৎক্ষণিক প্রতারণার ঝুঁকি (Risk Level) যাচাই করুন।'
            : 'Paste any suspicious job advertisement, SMS lottery, or overseas visa promise to evaluate advance-fee fraud indicators before transferring funds.'}
        </p>
      </div>

      {/* Input Box */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Paste Suspicious Post or Message Text
          </label>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400">Origin:</span>
            {['facebook', 'sms', 'whatsapp', 'telegram'].map(ch => (
              <button
                key={ch}
                onClick={() => setChannel(ch)}
                className={`px-2 py-0.5 rounded capitalize text-[11px] transition-all ${
                  channel === ch ? 'bg-slate-900 text-white font-bold' : 'bg-slate-100 text-slate-600'
                }`}
              >
                {ch}
              </button>
            ))}
          </div>
        </div>

        <textarea
          id="scam-text-input"
          rows={5}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Paste Facebook post, SMS text, or job description here (e.g. 'Daily income ৳3000, send ৳500 registration fee via bKash...')"
          className="w-full p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-red-500 focus:bg-white transition-all mb-3 font-mono text-xs leading-relaxed"
        />

        {/* Quick Sample Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
            <span className="font-semibold text-slate-600">Try sample:</span>
            {sampleScams.map((s, i) => (
              <button
                key={i}
                onClick={() => {
                  setInputText(s.text);
                  setChannel(s.channel);
                  handleAnalyze(s.text);
                }}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-red-50 hover:text-red-800 text-slate-700 transition-colors border border-slate-200 text-[11px]"
              >
                {s.label}
              </button>
            ))}
          </div>

          <button
            id="analyze-scam-btn"
            onClick={() => handleAnalyze()}
            disabled={loading || !inputText.trim()}
            className="px-6 py-2.5 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white text-xs font-bold rounded-xl shadow-sm transition-all inline-flex items-center gap-2"
          >
            {loading ? (
              <span>Auditing text...</span>
            ) : (
              <>
                <ShieldAlert className="w-4 h-4" />
                <span>Audit Scam Risk (যাচাই করুন)</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Analysis Result Display */}
      {result && (
        <div className="space-y-6">
          {/* Main Risk Card */}
          <div className={`rounded-2xl border p-6 shadow-sm ${
            result.riskLevel === 'HIGH' 
              ? 'bg-red-50/70 border-red-200' 
              : result.riskLevel === 'MEDIUM' 
              ? 'bg-amber-50/70 border-amber-200' 
              : 'bg-emerald-50/70 border-emerald-200'
          }`}>
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200/60">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${
                  result.riskLevel === 'HIGH' ? 'bg-red-600' : result.riskLevel === 'MEDIUM' ? 'bg-amber-600' : 'bg-emerald-600'
                }`}>
                  <AlertOctagon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider block text-slate-500">Scam Assessment</span>
                  <h3 className="text-2xl font-black tracking-tight text-slate-900">
                    SCAM RISK: <span className={
                      result.riskLevel === 'HIGH' ? 'text-red-600' : result.riskLevel === 'MEDIUM' ? 'text-amber-600' : 'text-emerald-700'
                    }>{result.riskLevel}</span> ({result.riskScore}%)
                  </h3>
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs text-slate-500 block">Confidence Metric</span>
                <span className="text-xs font-bold text-slate-700">{(result.confidenceScore * 100).toFixed(0)}% algorithmic agreement</span>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-800 font-medium leading-relaxed">
              {result.explanation}
            </p>
          </div>

          {/* Detected Red Flags */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-4">
              Detected Threat Signals & Red Flags
            </h4>
            <div className="space-y-3">
              {result.detectedSignals.map((sig, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                    sig.type === 'red_flag' ? 'bg-red-100 text-red-700' : sig.type === 'suspicious' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'
                  }`}>
                    <AlertTriangle className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs">
                    <strong className="text-slate-900 block mb-0.5">{sig.title}</strong>
                    <span className="text-slate-600 leading-relaxed">{sig.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Action Steps & Official Cyber Police Helpline */}
          <div className="bg-slate-900 text-white rounded-2xl p-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800 mb-4">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide block">Immediate Safety Protocol</span>
                <h4 className="text-lg font-bold">What You Should Do Next</h4>
              </div>
              <a 
                href="tel:01320000888" 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call CID Cyber Police: 01320000888</span>
              </a>
            </div>

            <ul className="space-y-2 text-xs text-slate-300 mb-4">
              {result.recommendedAction.map((act, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{act}</span>
                </li>
              ))}
            </ul>

            <div className="text-[11px] text-slate-400 italic pt-3 border-t border-slate-800">
              Disclaimer: {result.disclaimer}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
