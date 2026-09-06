import { useState, useRef } from 'react';
import { 
  Search, 
  Mic, 
  MicOff, 
  Sparkles, 
  CheckSquare, 
  Square, 
  ExternalLink, 
  AlertTriangle, 
  Clock, 
  Building2, 
  Coins, 
  Bookmark, 
  BookmarkCheck, 
  ThumbsUp, 
  ThumbsDown, 
  ArrowRight,
  ShieldCheck,
  FileText,
  Home,
  Briefcase,
  ShieldAlert,
  PiggyBank,
  PhoneCall,
  RotateCcw
} from 'lucide-react';
import { Language, SolverQueryResponse } from '../types';
import { submitSolverQuery } from '../services/api';

interface ProblemSolverViewProps {
  language: Language;
  onNavigateTab: (tab: string) => void;
  onSaveGuide: (guide: any) => void;
  isSaved: (id: string) => boolean;
}

export default function ProblemSolverView({ language, onNavigateTab, onSaveGuide, isSaved }: ProblemSolverViewProps) {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<SolverQueryResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [feedbackGiven, setFeedbackGiven] = useState<'up' | 'down' | null>(null);

  const [recentQueries, setRecentQueries] = useState([
    {
      text: 'মিরপুরে ২০ হাজার বাজেটের মধ্যে বাসা ও মেট্রোরেল যাতায়াত',
      time: 'Today, 11:20 AM',
      tag: 'Housing',
      tagColor: 'bg-orange-100 text-orange-700'
    },
    {
      text: 'আমার বিকাশ পিন ভুলে গেছি, কীভাবে ঠিক করব?',
      time: 'Yesterday, 04:15 PM',
      tag: 'MFS',
      tagColor: 'bg-teal-100 text-teal-700'
    },
    {
      text: 'মেট্রোরেল এমআরটি পাস সংগ্রহের নিয়ম ও রিচার্জ',
      time: 'Yesterday, 10:45 AM',
      tag: 'Transit',
      tagColor: 'bg-blue-100 text-blue-700'
    },
    {
      text: 'How to verify if an online job offer is a scam?',
      time: 'Aug 24, 02:12 PM',
      tag: 'Cyber',
      tagColor: 'bg-red-100 text-red-700'
    }
  ]);

  const recognitionRef = useRef<any>(null);

  const sampleChips = [
    { text: 'Mirpur Flat (৳20k)', queryBn: 'মিরপুরে ২০ হাজার বাজেটের মধ্যে বাসা ও মেট্রোরেল যাতায়াত সুবিধা কেমন?', queryEn: 'Find 2 bedroom flat in Mirpur with Metro Line 6 connectivity under 20k budget.' },
    { text: 'Metro MRT Pass', queryBn: 'মেট্রোরেল এমআরটি পাস কীভাবে পাব ও রিচার্জ করব?', queryEn: 'How to get Dhaka Metro Rail MRT Pass and recharge rules?' },
    { text: 'Trade License', queryBn: 'সিটি কর্পোরেশন থেকে ট্রেড লাইসেন্স পাওয়ার নিয়ম ও ফি কত?', queryEn: 'How to apply for City Corporation Trade License in Dhaka?' },
    { text: 'bKash PIN Reset', queryBn: 'আমার বিকাশ পিন ভুলে গেছি, নিজে নিজে কীভাবে রিসেট করব?', queryEn: 'How to self-reset forgotten bKash wallet PIN via *247#?' },
    { text: 'Lost NID Reissue', queryBn: 'আমার NID হারিয়ে গেছে, কীভাবে নতুন এনআইডি তুলব?', queryEn: 'I lost my NID card. What is the official online reissue procedure?' },
    { text: 'Zero Tax Return', queryBn: 'অনলাইনে ঘরে বসে শূন্য আয়কর রিটার্ন কীভাবে দাখিল করব?', queryEn: 'How to submit zero income tax return online in Bangladesh?' },
    { text: 'Job Scam Defense', queryBn: 'টেলিগ্রামে পার্টটাইম কাজের নামে বিকাশ ফি চাইলে কী করব?', queryEn: 'Is Telegram part-time click job asking for bKash fee a scam?' }
  ];

  const categories = [
    {
      id: 'government',
      title: language === 'bn' ? 'সরকারি নথি ও সেবা' : 'Gov & Documents',
      desc: language === 'bn' ? 'এনআইডি, পাসপোর্ট, ড্রাইভিং লাইসেন্স ও সনদ।' : 'NID, Passport, BRTA, and official certificates.',
      icon: FileText,
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      hoverBg: 'group-hover:bg-blue-600',
      hoverText: 'group-hover:text-white'
    },
    {
      id: 'housing',
      title: language === 'bn' ? 'বাসা ও এলাকা' : 'Housing & Rent',
      desc: language === 'bn' ? 'ভাড়া যাচাই, মেট্রো সুবিধা ও এলাকা নির্দেশিকা।' : 'Find verified rentals and neighborhood guides.',
      icon: Home,
      bg: 'bg-orange-50',
      text: 'text-orange-600',
      hoverBg: 'group-hover:bg-orange-500',
      hoverText: 'group-hover:text-white'
    },
    {
      id: 'career',
      title: language === 'bn' ? 'চাকরি ও ক্যারিয়ার' : 'Jobs & Career',
      desc: language === 'bn' ? 'স্কিল গ্যাপ অ্যানালাইসিস ও ক্যারিয়ার রোডম্যাপ।' : 'Resume analysis, roadmaps, and skill gaps.',
      icon: Briefcase,
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      hoverBg: 'group-hover:bg-purple-600',
      hoverText: 'group-hover:text-white'
    },
    {
      id: 'scam',
      title: language === 'bn' ? 'প্রতারণা যাচাই' : 'Scam Detector',
      desc: language === 'bn' ? 'সন্দেহজনক চাকরির অফার ও ভুয়া লিংক যাচাই।' : 'Verify suspicious job offers and online posts.',
      icon: ShieldAlert,
      bg: 'bg-red-50',
      text: 'text-red-600',
      hoverBg: 'group-hover:bg-red-600',
      hoverText: 'group-hover:text-white'
    },
    {
      id: 'finance',
      title: language === 'bn' ? 'বাজেট ও অর্থ' : 'Personal Finance',
      desc: language === 'bn' ? 'সঞ্চয় ক্যালকুলেটর ও জরুরি তহবিল প্ল্যান।' : 'Savings calculator and budget management.',
      icon: PiggyBank,
      bg: 'bg-teal-50',
      text: 'text-teal-600',
      hoverBg: 'group-hover:bg-teal-600',
      hoverText: 'group-hover:text-white'
    },
    {
      id: 'emergency',
      title: language === 'bn' ? 'জরুরি সেবা' : 'Emergency Hub',
      desc: language === 'bn' ? 'নিকটস্থ হাসপাতাল, অ্যাম্বুলেন্স ও পুলিশ।' : 'Nearby hospitals, ambulances, and police.',
      icon: PhoneCall,
      bg: 'bg-pink-50',
      text: 'text-pink-600',
      hoverBg: 'group-hover:bg-pink-600',
      hoverText: 'group-hover:text-white'
    }
  ];

  const handleSearch = async (queryText?: string) => {
    const textToSearch = queryText || query;
    if (!textToSearch.trim()) return;

    setLoading(true);
    setError(null);
    setCheckedItems({});
    setFeedbackGiven(null);

    // Add to recent searches
    setRecentQueries(prev => [
      {
        text: textToSearch,
        time: 'Just now',
        tag: 'Search',
        tagColor: 'bg-emerald-100 text-emerald-700'
      },
      ...prev.slice(0, 4)
    ]);

    try {
      const data = await submitSolverQuery(textToSearch, language);
      setResponse(data);
    } catch (err: any) {
      setError(err.message || 'Something went wrong while retrieving guidance.');
    } finally {
      setLoading(false);
    }
  };

  const toggleSpeechRecognition = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Voice input is not supported in this browser. Please type your question.');
      return;
    }

    if (isRecording) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsRecording(false);
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;

    recognition.lang = language === 'bn' ? 'bn-BD' : 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsRecording(true);
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript);
      setIsRecording(false);
      handleSearch(transcript);
    };

    recognition.onerror = () => {
      setIsRecording(false);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.start();
  };

  const toggleCheckItem = (idx: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Content Area: 8 Columns on Large Screens */}
        <section className="lg:col-span-8 space-y-6">
          {/* Main Hero Search Card */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 leading-tight">
              {language === 'bn' ? 'আজ আপনাকে কীভাবে সাহায্য করতে পারি?' : 'How can we help you today?'}
            </h2>
            <p className="text-slate-500 mb-6 text-sm">
              {language === 'bn' 
                ? 'সরকারি সেবা, বাসা খোঁজা, চাকরি বা প্রতারণা যাচাই সম্পর্কে বাংলা, ইংরেজি বা বাংলিশে লিখুন।'
                : 'Ask in Bangla, English, or Banglish about government services, housing, or careers.'}
            </p>

            {/* Input Box with Voice and Search Button */}
            <div className="relative">
              <input
                id="solver-query-input"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder={
                  language === 'bn'
                    ? 'আপনার সমস্যা লিখুন (যেমন: NID হারিয়ে গেছে, মিরপুরে বাসা...)'
                    : 'Describe your problem or ask a question...'
                }
                className="w-full p-4 sm:p-5 pl-5 sm:pl-6 pr-36 bg-slate-50 border border-slate-200 rounded-xl text-base sm:text-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 shadow-inner text-slate-900 placeholder:text-slate-400"
              />

              <div className="absolute right-2 top-2 sm:top-2.5 flex items-center gap-2">
                <button
                  id="voice-input-btn"
                  type="button"
                  onClick={toggleSpeechRecognition}
                  className={`p-3 rounded-lg transition-colors ${
                    isRecording 
                      ? 'bg-red-500 text-white animate-pulse' 
                      : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                  }`}
                  title={isRecording ? 'Listening... click to stop' : 'Voice Input (ভয়েস ইনপুট)'}
                >
                  {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                </button>

                <button
                  id="solve-submit-btn"
                  type="button"
                  onClick={() => handleSearch()}
                  disabled={loading || !query.trim()}
                  className="bg-emerald-600 text-white px-5 sm:px-6 py-3 rounded-lg font-bold hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 disabled:opacity-50 transition-all text-sm flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      <span>{language === 'bn' ? 'যাচাই...' : 'Solving...'}</span>
                    </>
                  ) : (
                    <span>{language === 'bn' ? 'অনুসন্ধান' : 'Search'}</span>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Try Pills */}
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-tighter self-center mr-1">
                Try:
              </span>
              {sampleChips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    const text = language === 'bn' ? chip.queryBn : chip.queryEn;
                    setQuery(text);
                    handleSearch(text);
                  }}
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-2xs"
                >
                  {chip.text}
                </button>
              ))}
            </div>
          </div>

          {/* Error Notice */}
          {error && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 shrink-0 text-red-500 mt-0.5" />
              <div>
                <p className="font-semibold">Unable to complete search</p>
                <p>{error}</p>
              </div>
            </div>
          )}

          {/* Active Solution Result Display */}
          {response && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
              {/* Verification & Source Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-100 text-emerald-800">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Verified Statutory Source
                  </span>
                  <span className="text-xs text-slate-500">
                    Authority: <strong className="text-slate-700">{response.verifiedKnowledge.source}</strong>
                  </span>
                </div>

                <button
                  id="save-guide-btn"
                  onClick={() => onSaveGuide({
                    id: response.detectedIntent + '-' + Date.now(),
                    query: response.query,
                    category: response.category,
                    title: response.detectedIntent,
                    date: new Date().toLocaleDateString()
                  })}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors"
                >
                  <Bookmark className="w-3.5 h-3.5 text-slate-500" />
                  <span>Save Guide</span>
                </button>
              </div>

              {/* Title & Summary */}
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-1">
                  <span>{response.detectedIntent}</span>
                  <span>•</span>
                  <span className="capitalize">{response.urgency} Urgency</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {language === 'bn' ? `${response.detectedIntent} — সমাধান নির্দেশিকা` : `${response.detectedIntent} — Step-by-Step Resolution`}
                </h3>
                <p className="mt-2 text-slate-700 text-sm leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  {response.summary}
                </p>
              </div>

              {/* Vital Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 text-xs">
                <div className="flex items-start gap-2.5">
                  <Coins className="w-4 h-4 text-emerald-700 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-slate-500 block">Statutory Fee</span>
                    <strong className="text-slate-900 text-sm">{response.officialDetails.cost}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-700 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-slate-500 block">Processing Time</span>
                    <strong className="text-slate-900">{response.officialDetails.processingTime}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Building2 className="w-4 h-4 text-emerald-700 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-slate-500 block">Authority</span>
                    <strong className="text-slate-900 truncate block">{response.officialDetails.organization}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <ExternalLink className="w-4 h-4 text-emerald-700 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-slate-500 block">Official Portal</span>
                    <a 
                      href={response.officialDetails.officialUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-emerald-700 font-bold hover:underline inline-flex items-center gap-1"
                    >
                      <span>{response.officialDetails.officialPortal}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Step-by-Step Instructions */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-3">
                  {language === 'bn' ? 'ধাপে ধাপে সঠিক নির্দেশাবলী' : 'Step-by-Step Procedure'}
                </h4>
                <div className="space-y-2.5">
                  {response.stepByStepGuide.map((step) => (
                    <div 
                      key={step.stepNumber}
                      className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-100 bg-white hover:border-slate-300 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-emerald-700 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {step.stepNumber}
                      </div>
                      <div className="text-sm">
                        <h5 className="font-bold text-slate-900 mb-0.5">{step.title}</h5>
                        <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Document Checklist */}
              {response.checklist && response.checklist.length > 0 && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-bold text-slate-900 flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-emerald-700" />
                      <span>{language === 'bn' ? 'প্রয়োজনীয় কাগজপত্র চেকলিস্ট' : 'Required Documents Checklist'}</span>
                    </h4>
                    <span className="text-xs text-slate-500">
                      {Object.values(checkedItems).filter(Boolean).length} / {response.checklist.length} ready
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {response.checklist.map((item, idx) => {
                      const isChecked = Boolean(checkedItems[idx]);
                      return (
                        <div
                          key={idx}
                          onClick={() => toggleCheckItem(idx)}
                          className={`flex items-center gap-2.5 p-2.5 rounded-lg cursor-pointer text-xs transition-all ${
                            isChecked 
                              ? 'bg-emerald-100/60 text-emerald-900 font-medium line-through' 
                              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/70'
                          }`}
                        >
                          {isChecked ? (
                            <CheckSquare className="w-4 h-4 text-emerald-700 shrink-0" />
                          ) : (
                            <Square className="w-4 h-4 text-slate-400 shrink-0" />
                          )}
                          <span>{item}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Warnings and Anti-Broker Advisory */}
              {response.warnings && response.warnings.length > 0 && (
                <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900">
                  <div className="flex items-center gap-2 font-bold mb-1.5 text-amber-800">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>Important Warnings & Anti-Broker Caution</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-amber-950">
                    {response.warnings.map((w, i) => (
                      <li key={i}>{w}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Feedback and Latency */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span>Was this guide helpful?</span>
                  <button
                    onClick={() => setFeedbackGiven('up')}
                    className={`px-2.5 py-1 rounded-md border flex items-center gap-1 transition-colors ${
                      feedbackGiven === 'up' ? 'bg-emerald-100 border-emerald-300 text-emerald-800 font-bold' : 'hover:bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>Helpful</span>
                  </button>
                  <button
                    onClick={() => setFeedbackGiven('down')}
                    className={`px-2.5 py-1 rounded-md border flex items-center gap-1 transition-colors ${
                      feedbackGiven === 'down' ? 'bg-red-100 border-red-300 text-red-800 font-bold' : 'hover:bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ThumbsDown className="w-3.5 h-3.5" />
                    <span>Need more info</span>
                  </button>
                </div>

                <div className="text-[11px] text-slate-400">
                  Verified via {response.executionMetadata.modelUsed} ({response.executionMetadata.latencyMs}ms)
                </div>
              </div>
            </div>
          )}

          {/* 6 Category Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.id}
                  id={`cat-card-${cat.id}`}
                  onClick={() => onNavigateTab(cat.id)}
                  className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow group cursor-pointer text-left"
                >
                  <div className={`w-10 h-10 ${cat.bg} rounded-lg flex items-center justify-center mb-4 ${cat.hoverBg} transition-colors`}>
                    <Icon className={`w-6 h-6 ${cat.text} ${cat.hoverText} transition-colors`} />
                  </div>
                  <h3 className="font-bold text-slate-800 text-base">{cat.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{cat.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Aside Sidebar: 4 Columns on Large Screens */}
        <aside className="lg:col-span-4 flex flex-col gap-6 w-full">
          {/* Active Recommendation Card */}
          <div className="bg-emerald-900 text-white p-6 rounded-2xl shadow-xl shadow-emerald-900/20 relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-emerald-700/50 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">Active Recommendation</span>
              </div>
              <h3 className="text-lg font-bold leading-tight mb-2 text-white">Optimize Your Career Path</h3>
              <p className="text-sm text-emerald-100 opacity-80 mb-4 leading-relaxed">
                Based on current Bangladesh tech hiring trends, explore MLOps and Full-Stack Engineering. 80% of local and remote teams require this stack.
              </p>
              <button 
                onClick={() => onNavigateTab('career')}
                className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-lg transition-colors text-sm shadow-md"
              >
                View Career Roadmap
              </button>
            </div>
          </div>

          {/* Recent Queries / History Card */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-xs flex flex-col overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-bold text-slate-800 flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>Recent Queries</span>
              </h3>
              <button 
                onClick={() => setRecentQueries([])}
                className="text-xs font-bold text-emerald-600 hover:text-emerald-700"
              >
                Clear
              </button>
            </div>

            <div className="p-2 space-y-1">
              {recentQueries.length === 0 ? (
                <div className="py-6 text-center text-xs text-slate-400">
                  No recent searches
                </div>
              ) : (
                recentQueries.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setQuery(item.text);
                      handleSearch(item.text);
                    }}
                    className="p-3 bg-slate-50 hover:bg-emerald-50/50 rounded-lg border border-transparent hover:border-emerald-200 transition-colors cursor-pointer group"
                  >
                    <p className="text-sm font-semibold text-slate-700 group-hover:text-emerald-800 transition-colors">
                      &ldquo;{item.text}&rdquo;
                    </p>
                    <div className="flex items-center justify-between mt-1.5 text-[10px]">
                      <span className="text-slate-400">{item.time}</span>
                      <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${item.tagColor}`}>
                        {item.tag}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Active Scam Alert Card */}
          <div 
            onClick={() => onNavigateTab('scam')}
            className="bg-red-50 border border-red-100 p-4 rounded-2xl flex items-center gap-4 cursor-pointer hover:bg-red-100/60 transition-colors"
          >
            <div className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg shadow-red-600/30 shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-red-900 uppercase tracking-tight">Active Scam Alert</h4>
              <p className="text-xs text-red-700 opacity-80 leading-tight mt-0.5">
                Beware of &apos;Government Grant&apos; SMS with external links. Verification required.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
