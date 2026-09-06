import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProblemSolverView from './components/ProblemSolverView';
import GovernmentDocsView from './components/GovernmentDocsView';
import HousingRentView from './components/HousingRentView';
import CareerRoadmapView from './components/CareerRoadmapView';
import ScamDetectorView from './components/ScamDetectorView';
import EmergencyDirectoryView from './components/EmergencyDirectoryView';
import PersonalFinanceView from './components/PersonalFinanceView';
import MScResearchView from './components/MScResearchView';
import ArchitectureDocsView from './components/ArchitectureDocsView';
import UserProfileView from './components/UserProfileView';
import { Language, UserSavedGuide } from './types';
import { ShieldCheck, Heart, Sparkles, ExternalLink } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('solver');
  const [language, setLanguage] = useState<Language>('bn');
  const [savedGuides, setSavedGuides] = useState<UserSavedGuide[]>([]);

  // Load persisted preferences
  useEffect(() => {
    try {
      const storedLang = localStorage.getItem('bd_lifemate_lang') as Language;
      if (storedLang) setLanguage(storedLang);

      const storedSaved = localStorage.getItem('bd_lifemate_saved');
      if (storedSaved) setSavedGuides(JSON.parse(storedSaved));
    } catch (e) {
      console.error('Failed to load localStorage data', e);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('bd_lifemate_lang', lang);
  };

  const handleSaveGuide = (guide: any) => {
    if (!savedGuides.some(g => g.id === guide.id)) {
      const updated = [guide, ...savedGuides];
      setSavedGuides(updated);
      localStorage.setItem('bd_lifemate_saved', JSON.stringify(updated));
    }
  };

  const handleRemoveGuide = (id: string) => {
    const updated = savedGuides.filter(g => g.id !== id);
    setSavedGuides(updated);
    localStorage.setItem('bd_lifemate_saved', JSON.stringify(updated));
  };

  const isSaved = (id: string) => savedGuides.some(g => g.id === id);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        language={language}
        setLanguage={handleSetLanguage}
        savedCount={savedGuides.length}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'solver' && (
          <ProblemSolverView
            language={language}
            onNavigateTab={setActiveTab}
            onSaveGuide={handleSaveGuide}
            isSaved={isSaved}
          />
        )}

        {activeTab === 'government' && (
          <GovernmentDocsView
            language={language}
            onSaveGuide={handleSaveGuide}
            isSaved={isSaved}
            onSelectServiceQuery={(query) => {
              setActiveTab('solver');
            }}
          />
        )}

        {activeTab === 'housing' && (
          <HousingRentView
            language={language}
            onAskAI={(query) => {
              setActiveTab('solver');
            }}
          />
        )}

        {activeTab === 'career' && (
          <CareerRoadmapView
            language={language}
            onAskAI={(query) => {
              setActiveTab('solver');
            }}
          />
        )}

        {activeTab === 'scam' && (
          <ScamDetectorView
            language={language}
          />
        )}

        {activeTab === 'emergency' && (
          <EmergencyDirectoryView
            language={language}
          />
        )}

        {activeTab === 'finance' && (
          <PersonalFinanceView
            language={language}
          />
        )}

        {activeTab === 'research' && (
          <MScResearchView
            language={language}
          />
        )}

        {activeTab === 'architecture' && (
          <ArchitectureDocsView
            language={language}
          />
        )}

        {activeTab === 'profile' && (
          <UserProfileView
            language={language}
            setLanguage={handleSetLanguage}
            savedGuides={savedGuides}
            onRemoveGuide={handleRemoveGuide}
            onSelectGuideQuery={(query) => {
              setActiveTab('solver');
            }}
          />
        )}
      </main>

      {/* Trust & Civic Footer */}
      <footer className="bg-slate-900 text-white border-t border-slate-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 text-xs">
            {/* Identity */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold">
                  BD
                </div>
                <span className="text-base font-bold text-white tracking-tight">BD LifeMate</span>
              </div>
              <p className="text-slate-400 max-w-md leading-relaxed mb-4">
                &ldquo;Tell us your problem. We&apos;ll guide you to the right solution.&rdquo;
                An AI-powered civic problem-solving engine designed specifically for citizens across Bangladesh.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Editorial Verification Guarantee — Zero Fabricated Official Fees</span>
              </div>
            </div>

            {/* Quick Civic Portals */}
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-3">Official Bangladesh Portals</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="https://services.nidw.gov.bd" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1">
                    <span>NID Citizen Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://epassport.gov.bd" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1">
                    <span>e-Passport Online</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://bsp.brta.gov.bd" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1">
                    <span>BRTA Service Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://etaxnbr.gov.bd" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1">
                    <span>NBR e-Tax Return</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://pcc.police.gov.bd" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1">
                    <span>Online Police Clearance</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Academic Thesis Attribution */}
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-3">MSc Software Engineering</h4>
              <p className="text-slate-400 leading-relaxed mb-3">
                Research Project: Empirical Multi-Model Evaluation of RAG-Assisted Civic Navigation in Low-Resource Code-Switched Contexts.
              </p>
              <button
                onClick={() => setActiveTab('research')}
                className="text-emerald-400 font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>View Evaluation Benchmarks</span>
                <Sparkles className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Copyright & Disclaimer Bar */}
          <div className="pt-8 border-t border-slate-800 text-[11px] text-slate-500 flex flex-wrap items-center justify-between gap-3">
            <div>
              © 2026 BD LifeMate. Built for the citizens of Bangladesh. All official rights belong to respective government authorities.
            </div>
            <div className="flex items-center gap-4">
              <span>National Emergency: 999</span>
              <span>•</span>
              <span>Election Commission: 105</span>
              <span>•</span>
              <span>Anti-Corruption: 106</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
