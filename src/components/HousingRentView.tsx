import { useState } from 'react';
import { 
  Home, 
  Search, 
  MapPin, 
  Train, 
  Droplet, 
  Shield, 
  Users, 
  CheckSquare, 
  AlertTriangle, 
  Sliders, 
  Compass,
  ArrowUpRight
} from 'lucide-react';
import { Language, HousingSuitabilityResult } from '../types';
import { computeHousingSuitability } from '../services/api';
import { DHAKA_HOUSING_AREAS, HOUSING_CHECKLIST_TIPS } from '../data/housingData';

interface HousingRentViewProps {
  language: Language;
  onAskAI: (query: string) => void;
}

export default function HousingRentView({ language, onAskAI }: HousingRentViewProps) {
  const [budget, setBudget] = useState(22000);
  const [bedrooms, setBedrooms] = useState(2);
  const [metroRequired, setMetroRequired] = useState(true);
  const [bachelor, setBachelor] = useState(false);
  const [workplace, setWorkplace] = useState('Karwan Bazar / Farmgate');

  const [loading, setLoading] = useState(false);
  const [suitabilityResults, setSuitabilityResults] = useState<HousingSuitabilityResult[] | null>(null);

  const handleCompute = async () => {
    setLoading(true);
    try {
      const data = await computeHousingSuitability({
        budget,
        bedrooms,
        metroRequired,
        bachelor
      });
      setSuitabilityResults(data.results);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
      {/* Title & Introduction */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wide mb-2">
          <Home className="w-4 h-4 text-emerald-600" />
          <span>Dhaka Housing & Rent Intelligence Engine</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          {language === 'bn' ? 'বাসা ও এলাকা নির্বাচন সহায়ক' : 'Housing & Rental Area Matcher'}
        </h1>
        <p className="mt-2 text-sm text-slate-600 max-w-2xl">
          {language === 'bn'
            ? 'আপনার বাজেট, কর্মস্থল বা বিশ্ববিদ্যালয়ের যাতায়াত দূরত্ব, মেট্রোরেল সুবিধা ও পারিবারিক সুবিধার ভিত্তিতে ঢাকার সবচেয়ে উপযুক্ত এলাকা খুঁজুন।'
            : 'Find optimal residential areas in Dhaka matched with your budget, Dhaka Metro Line 6 connectivity, and neighborhood amenities.'}
        </p>
      </div>

      {/* Filter and Preference Controller */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6 mb-8">
        <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-4">
          <Sliders className="w-4 h-4 text-emerald-700" />
          <span>Your Housing Preferences (আপনার পছন্দ ও বাজেট)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
          {/* Monthly Budget Slider */}
          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1.5">
              Monthly Budget: <span className="text-emerald-700 font-bold">৳{budget.toLocaleString()}</span>
            </label>
            <input
              type="range"
              min={8000}
              max={60000}
              step={1000}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full accent-emerald-700 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>৳8k</span>
              <span>৳30k</span>
              <span>৳60k+</span>
            </div>
          </div>

          {/* Bedrooms */}
          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1.5">
              Bedrooms (বেডরুম)
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              {[1, 2, 3].map(num => (
                <button
                  key={num}
                  onClick={() => setBedrooms(num)}
                  className={`py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                    bedrooms === num 
                      ? 'bg-emerald-700 text-white border-emerald-700' 
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {num} BHK
                </button>
              ))}
            </div>
          </div>

          {/* Workplace / Hub */}
          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1.5">
              Workplace / University Hub
            </label>
            <select
              value={workplace}
              onChange={(e) => setWorkplace(e.target.value)}
              className="w-full p-2 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-800 focus:outline-hidden"
            >
              <option value="Karwan Bazar / Farmgate">Karwan Bazar / Farmgate (Commercial)</option>
              <option value="Motijheel / Dilkusha">Motijheel / Secretariat (Govt & Finance)</option>
              <option value="Gulshan / Banani">Gulshan / Banani (Corporate)</option>
              <option value="Dhanmondi / Dhaka Univ">Dhaka University / New Market</option>
              <option value="Uttara / Airport">Airport / Uttara Sector Hub</option>
            </select>
          </div>

          {/* Toggle Switches: Metro & Bachelor */}
          <div className="space-y-2 pt-1">
            <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={metroRequired}
                onChange={(e) => setMetroRequired(e.target.checked)}
                className="rounded text-emerald-700 accent-emerald-700"
              />
              <span>Dhaka Metro Rail Proximity</span>
            </label>

            <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={bachelor}
                onChange={(e) => setBachelor(e.target.checked)}
                className="rounded text-emerald-700 accent-emerald-700"
              />
              <span>Bachelor / Student Friendly</span>
            </label>
          </div>
        </div>

        <button
          id="calculate-housing-btn"
          onClick={handleCompute}
          disabled={loading}
          className="w-full sm:w-auto px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl shadow-sm transition-all"
        >
          {loading ? 'Computing Suitability Scores...' : 'Calculate Area Suitability (যাচাই করুন)'}
        </button>
      </div>

      {/* Area Recommendations Grid */}
      <div className="mb-10">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center justify-between">
          <span>
            {suitabilityResults ? 'Personalized Match Results' : 'Explore Popular Dhaka Living Areas'}
          </span>
          <span className="text-xs text-slate-500 font-normal">
            Dhaka Metro Line-6 & Residential Hubs
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(suitabilityResults ? suitabilityResults.map(r => r.area) : DHAKA_HOUSING_AREAS).map((area, idx) => {
            const matchedResult = suitabilityResults?.find(r => r.area.areaId === area.areaId);
            const score = matchedResult?.suitabilityScore ?? (90 - idx * 4);

            return (
              <div 
                key={area.areaId}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-emerald-600 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">
                        {language === 'bn' ? area.areaNameBn : area.areaName}
                      </span>
                      <span className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-emerald-600" />
                        {area.nearbyHubs.slice(0, 2).join(', ')}
                      </span>
                    </div>

                    {/* Suitability Score Pill */}
                    <div className="px-2.5 py-1 bg-emerald-50 border border-emerald-200 rounded-xl text-right shrink-0">
                      <span className="text-[10px] text-emerald-800 block uppercase font-bold">Match</span>
                      <span className="text-sm font-extrabold text-emerald-700">{score}%</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    {area.description}
                  </p>

                  {/* Rent Estimates */}
                  <div className="grid grid-cols-3 gap-2 p-2.5 bg-slate-50 rounded-xl mb-3 text-[11px]">
                    <div>
                      <span className="text-slate-400 block">1 BHK (Room)</span>
                      <strong className="text-slate-800">{area.averageRent1BHK}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">2 BHK (Flat)</span>
                      <strong className="text-slate-800">{area.averageRent2BHK}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">3 BHK (Family)</span>
                      <strong className="text-slate-800">{area.averageRent3BHK}</strong>
                    </div>
                  </div>

                  {/* Feature Badges */}
                  <div className="flex flex-wrap gap-1.5 text-[10px]">
                    {area.metroAccess ? (
                      <span className="px-2 py-0.5 rounded-md bg-teal-50 text-teal-800 font-semibold border border-teal-200 flex items-center gap-1">
                        <Train className="w-3 h-3 text-teal-600" />
                        Metro: {area.nearestMetroStation}
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium">
                        Bus / CNG Transit
                      </span>
                    )}

                    <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-800 font-semibold border border-blue-200 flex items-center gap-1">
                      <Droplet className="w-3 h-3 text-blue-600" />
                      Water/Gas: {area.waterGasReliability}
                    </span>

                    <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 font-semibold border border-amber-200 flex items-center gap-1">
                      <Shield className="w-3 h-3 text-amber-600" />
                      Safety: {area.safetyRating}/5
                    </span>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    {area.bachelorFriendly ? 'Bachelor Friendly ✅' : 'Family Preferred 👨‍👩‍👧'}
                  </span>
                  <button
                    onClick={() => onAskAI(`Ami ${area.areaName} e ৳${budget} budget er moddhe ekta ${bedrooms} BHK flat khujtesi. Yataat kemon hobe?`)}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1"
                  >
                    <span>Analyze on AI Solver</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dhaka Tenant Checklist & Red Flag Guide */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-2 font-bold text-sm text-emerald-400 mb-2">
          <CheckSquare className="w-4 h-4" />
          <span>Dhaka Rental Verification Checklist (বাসা ভাড়া নেওয়ার পূর্বে ৭টি সতর্কতা)</span>
        </div>
        <h3 className="text-xl font-bold mb-4">Protect Yourself from Bogus Landlords & Hidden Charges</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
          {HOUSING_CHECKLIST_TIPS.map((tip, i) => (
            <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700">
              <span className="w-5 h-5 rounded-full bg-emerald-700/60 text-emerald-300 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span>{tip}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
