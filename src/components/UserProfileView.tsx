import { useState } from 'react';
import { 
  User, 
  Bookmark, 
  Trash2, 
  Download, 
  Globe, 
  MapPin, 
  Shield, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { Language, UserSavedGuide } from '../types';

interface UserProfileViewProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  savedGuides: UserSavedGuide[];
  onRemoveGuide: (id: string) => void;
  onSelectGuideQuery: (query: string) => void;
}

export default function UserProfileView({
  language,
  setLanguage,
  savedGuides,
  onRemoveGuide,
  onSelectGuideQuery
}: UserProfileViewProps) {
  const [userLocation, setUserLocation] = useState('Dhaka (ঢাকা)');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleExportData = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
      savedGuides,
      preferences: { language, location: userLocation },
      exportDate: new Date().toISOString()
    }, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "bd_lifemate_saved_guides.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wide mb-2">
          <User className="w-4 h-4 text-emerald-600" />
          <span>Local Personalization & Saved Civic Guides</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          {language === 'bn' ? 'সংরক্ষিত গাইড ও ব্যক্তিগত সেটিংস' : 'Saved Guides & Profile Preferences'}
        </h1>
        <p className="mt-2 text-sm text-slate-600 max-w-2xl">
          {language === 'bn'
            ? 'আপনার সংরক্ষিত সরকারি সমাধান, চেকলিস্ট এবং ব্যক্তিগত অগ্রাধিকার সেটিংস এখানে নিরাপদে আপনার ব্রাউজারে সংরক্ষিত থাকে।'
            : 'Access your bookmarked citizen guides, export checklists for offline use, and manage regional preferences.'}
        </p>
      </div>

      {/* Preferences Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Language & Regional Settings */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
          <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Globe className="w-4 h-4 text-emerald-700" />
            <span>Language & Locale Settings</span>
          </h3>

          <div className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-600 mb-1.5 font-medium">System Display Language</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'bn', label: 'বাংলা' },
                  { id: 'en', label: 'English' },
                  { id: 'banglish', label: 'বাংলিশ' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setLanguage(opt.id as any)}
                    className={`py-2 px-3 rounded-xl border font-bold text-center transition-all ${
                      language === opt.id 
                        ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs' 
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-slate-600 mb-1.5 font-medium">Primary Location</label>
              <select
                value={userLocation}
                onChange={(e) => setUserLocation(e.target.value)}
                className="w-full p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-800"
              >
                <option value="Dhaka (ঢাকা)">Dhaka (ঢাকা)</option>
                <option value="Chattogram (চট্টগ্রাম)">Chattogram (চট্টগ্রাম)</option>
                <option value="Sylhet (সিলেট)">Sylhet (সিলেট)</option>
                <option value="Rajshahi (রাজশাহী)">Rajshahi (রাজশাহী)</option>
                <option value="Khulna (খুলনা)">Khulna (খুলনা)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Data Privacy & Backup */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-700" />
              <span>Offline Data Portability</span>
            </h3>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Your saved documents and preferences are stored locally in your browser. You can export a JSON backup to transfer between devices or keep offline.
            </p>
          </div>

          <button
            onClick={handleExportData}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
          >
            <Download className="w-4 h-4" />
            <span>{downloadSuccess ? 'Export Downloaded!' : 'Export Saved Guides (JSON)'}</span>
          </button>
        </div>
      </div>

      {/* Bookmarked Guides Section */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-emerald-700" />
            <span>Bookmarked Procedures ({savedGuides.length})</span>
          </h3>
        </div>

        {savedGuides.length === 0 ? (
          <div className="py-10 text-center text-slate-400 text-xs">
            <Bookmark className="w-8 h-8 mx-auto mb-2 text-slate-300 stroke-1" />
            <p>No guides saved yet. Search or browse citizen services and click &quot;Save Guide&quot; to bookmark them here.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {savedGuides.map(guide => (
              <div
                key={guide.id}
                className="flex items-center justify-between p-3.5 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors"
              >
                <div>
                  <span className="text-xs font-bold text-slate-900 block">{guide.title}</span>
                  <span className="text-[11px] text-slate-500">Saved on {guide.date}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectGuideQuery(guide.query || guide.title)}
                    className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg transition-colors"
                  >
                    Open
                  </button>
                  <button
                    onClick={() => onRemoveGuide(guide.id)}
                    className="p-1.5 text-slate-400 hover:text-red-600 transition-colors"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
