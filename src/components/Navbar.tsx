import { useState } from 'react';
import { 
  Compass, 
  FileText, 
  Home, 
  Briefcase, 
  ShieldAlert, 
  PhoneCall, 
  PiggyBank, 
  Cpu, 
  Layers, 
  User, 
  Globe, 
  Menu, 
  X,
  CheckCircle2,
  Phone
} from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  savedCount: number;
}

interface NavItem {
  id: string;
  labelEn: string;
  labelBn: string;
  icon: any;
  badge?: number;
}

export default function Navbar({ activeTab, setActiveTab, language, setLanguage, savedCount }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const primaryNavItems: NavItem[] = [
    { id: 'solver', labelEn: 'Home', labelBn: 'হোম', icon: Compass },
    { id: 'government', labelEn: 'Guides', labelBn: 'গাইড', icon: FileText },
    { id: 'housing', labelEn: 'Housing', labelBn: 'বাসা ভাড়া', icon: Home },
    { id: 'career', labelEn: 'Career', labelBn: 'ক্যারিয়ার', icon: Briefcase },
    { id: 'scam', labelEn: 'Scam Check', labelBn: 'প্রতারণা যাচাই', icon: ShieldAlert },
    { id: 'emergency', labelEn: 'Emergency', labelBn: 'জরুরি সেবা', icon: PhoneCall },
  ];

  const secondaryNavItems: NavItem[] = [
    { id: 'finance', labelEn: 'Finance', labelBn: 'বাজেট', icon: PiggyBank },
    { id: 'research', labelEn: 'Research', labelBn: 'গবেষণা', icon: Cpu },
    { id: 'architecture', labelEn: 'System', labelBn: 'সিস্টেম', icon: Layers },
    { id: 'profile', labelEn: 'Saved', labelBn: 'সংরক্ষিত', icon: User, badge: savedCount > 0 ? savedCount : undefined },
  ];

  const allNavItems = [...primaryNavItems, ...secondaryNavItems];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      {/* Top Notification / Hotline Banner */}
      <div className="bg-slate-900 text-white text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-600 text-white uppercase tracking-wider">
              Verified
            </span>
            <span className="text-slate-300 text-[11px] hidden sm:inline">
              Official Grounding Guarantee • Bangladesh Government Statutory Portals
            </span>
            <span className="text-slate-300 text-[11px] sm:hidden">
              Verified Bangladesh Portals
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a 
              href="tel:999" 
              className="inline-flex items-center gap-1 font-bold text-red-400 hover:text-red-300 transition-colors text-[11px]"
            >
              <Phone className="w-3 h-3 text-red-400" />
              <span>Emergency 999</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 text-[11px] hidden md:inline">
              Cyber Police: 01320000888
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo & Identity */}
          <div 
            className="flex items-center gap-3 cursor-pointer select-none group"
            onClick={() => setActiveTab('solver')}
            id="brand-logo"
          >
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center shadow-md text-white transition-transform group-hover:scale-105">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800 leading-tight">BD LifeMate</h1>
              <p className="text-xs text-emerald-600 font-medium tracking-wide">
                {language === 'bn' ? 'আপনার বিশ্বস্ত নাগরিক সহায়ক' : 'Your Trusted Digital Guide'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {primaryNavItems.map(item => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`text-sm transition-all pb-1 ${
                    isActive 
                      ? 'font-semibold text-emerald-700 border-b-2 border-emerald-600' 
                      : 'font-medium text-slate-600 hover:text-emerald-600'
                  }`}
                >
                  {language === 'bn' ? item.labelBn : item.labelEn}
                </button>
              );
            })}

            <div className="h-4 w-px bg-slate-200" />

            {/* Secondary tabs */}
            <div className="flex items-center gap-3">
              {secondaryNavItems.map(item => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-${item.id}`}
                    onClick={() => setActiveTab(item.id)}
                    className={`text-xs px-2.5 py-1 rounded-md transition-all relative ${
                      isActive 
                        ? 'bg-slate-900 text-white font-bold' 
                        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100 font-medium'
                    }`}
                  >
                    <span>{language === 'bn' ? item.labelBn : item.labelEn}</span>
                    {item.badge !== undefined && (
                      <span className="ml-1 px-1.5 py-0.2 bg-emerald-600 text-white rounded-full text-[9px] font-bold">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Right Controls: Language Switcher & Avatar */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <div className="flex items-center gap-1">
              <button
                id="lang-bn"
                onClick={() => setLanguage('bn')}
                className={`px-3 py-1 text-xs font-bold border rounded transition-all uppercase ${
                  language === 'bn' 
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-700' 
                    : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                }`}
              >
                বাংলা
              </button>
              <button
                id="lang-en"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-bold border rounded transition-all uppercase ${
                  language === 'en' 
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-700' 
                    : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                }`}
              >
                EN
              </button>
            </div>

            {/* Profile Avatar */}
            <div 
              onClick={() => setActiveTab('profile')}
              className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300 overflow-hidden cursor-pointer hover:border-emerald-500 transition-colors flex items-center justify-center shrink-0"
              title="View Profile & Saved Guides"
            >
              <div className="w-full h-full bg-emerald-700 flex items-center justify-center text-white text-[10px] font-bold">
                LM
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-3 shadow-lg">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {allNavItems.map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 p-2.5 text-xs rounded-lg text-left transition-all ${
                    isActive 
                      ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200' 
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-emerald-700' : 'text-slate-400'}`} />
                  <span className="truncate">{language === 'bn' ? item.labelBn : item.labelEn}</span>
                  {item.badge !== undefined && (
                    <span className="ml-auto px-1.5 py-0.5 bg-emerald-600 text-white rounded-full text-[10px] font-bold">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
