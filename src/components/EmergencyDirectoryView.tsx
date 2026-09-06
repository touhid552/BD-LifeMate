import { useState } from 'react';
import { 
  PhoneCall, 
  Search, 
  MapPin, 
  Clock, 
  AlertCircle, 
  Phone, 
  HeartHandshake, 
  Flame, 
  ShieldCheck,
  Building,
  Droplet
} from 'lucide-react';
import { Language } from '../types';
import { EMERGENCY_SERVICES } from '../data/emergencyData';

interface EmergencyDirectoryViewProps {
  language: Language;
}

export default function EmergencyDirectoryView({ language }: EmergencyDirectoryViewProps) {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [search, setSearch] = useState('');

  const categories = [
    { id: 'all', label: 'All Services (সব)' },
    { id: 'national_emergency', label: 'National 999 (জরুরি)' },
    { id: 'police_cyber', label: 'Police & Cyber (পুলিশ)' },
    { id: 'hospital', label: 'Hospitals (হাসপাতাল)' },
    { id: 'ambulance', label: 'Ambulance (অ্যাম্বুলেন্স)' },
    { id: 'blood_bank', label: 'Blood Banks (রক্ত)' },
    { id: 'fire_service', label: 'Fire Service (ফায়ার)' }
  ];

  const filtered = EMERGENCY_SERVICES.filter(item => {
    if (filterCategory !== 'all' && item.category !== filterCategory) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return (
        item.nameEn.toLowerCase().includes(q) ||
        item.nameBn.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.hotline.includes(q)
      );
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-red-600 uppercase tracking-wide mb-2">
          <PhoneCall className="w-4 h-4 text-red-600" />
          <span>Verified Bangladesh Emergency Hotlines</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          {language === 'bn' ? 'জরুরি সেবা ও হটলাইন ডিরেক্টরি' : 'Emergency Assistance & Hotlines'}
        </h1>
        <p className="mt-2 text-sm text-slate-600 max-w-2xl">
          {language === 'bn'
            ? 'জাতীয় জরুরি সেবা ৯৯৯, সরকারি ও বেসরকারি বিশেষায়িত হাসপাতাল, ২৪ ঘণ্টা অ্যাম্বুলেন্স, ব্লাড ব্যাংক এবং ফায়ার সার্ভিসের যাচাইকৃত ফোন নম্বর।'
            : 'Immediate, one-tap access to national rescue 999, Dhaka blood banks, verified 24/7 ambulances, and public medical centers.'}
        </p>
      </div>

      {/* 999 Hero Fast-Action Banner */}
      <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white rounded-2xl p-6 mb-8 shadow-lg shadow-red-600/20 flex flex-wrap items-center justify-between gap-6">
        <div>
          <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[11px] font-bold uppercase tracking-wider mb-2 inline-block">
            Toll-Free National Hotline
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">National Emergency 999</h2>
          <p className="text-xs sm:text-sm text-red-100 max-w-lg mt-1">
            24/7 free toll service for Bangladesh Police, Fire Service & Civil Defence, and Ambulance.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            id="call-999-btn"
            href="tel:999"
            className="px-6 py-3.5 bg-white text-red-700 font-extrabold text-base rounded-xl shadow-md hover:bg-red-50 transition-transform active:scale-95 inline-flex items-center gap-2"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>Dial 999 Now</span>
          </a>
        </div>
      </div>

      {/* Search & Category Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            id="emergency-search-input"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, area (e.g. DMCH, Sandhani, Mirpur, 999)..."
            className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-red-600 shadow-xs"
          />
        </div>

        <div className="flex items-center gap-1 overflow-x-auto pb-1">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                filterCategory === cat.id 
                  ? 'bg-slate-900 text-white shadow-xs' 
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-red-400 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide block">
                    {item.category.toUpperCase()}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    {language === 'bn' ? item.nameBn : item.nameEn}
                  </h3>
                </div>

                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  {item.operatingHours}
                </span>
              </div>

              <div className="space-y-1 text-xs text-slate-600 mb-4">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <span className="font-semibold">Type:</span>
                  <span>{item.serviceType}</span>
                </div>
              </div>
            </div>

            {/* Tap to Call Link */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-900">
                {item.hotline}
              </span>

              <a
                href={`tel:${item.hotline.split('/')[0].replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl shadow-xs transition-transform active:scale-95"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Hotline</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
