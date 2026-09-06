import { useState } from 'react';
import { 
  PiggyBank, 
  Calculator, 
  DollarSign, 
  AlertCircle, 
  PieChart, 
  ShieldCheck, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { Language } from '../types';

interface PersonalFinanceViewProps {
  language: Language;
}

export default function PersonalFinanceView({ language }: PersonalFinanceViewProps) {
  const [monthlyIncome, setMonthlyIncome] = useState(45000);
  const [rentExpense, setRentExpense] = useState(16000);
  const [foodBazaar, setFoodBazaar] = useState(12000);
  const [utilities, setUtilities] = useState(3500);
  const [transit, setTransit] = useState(3000);
  const [otherPersonal, setOtherPersonal] = useState(2500);

  const totalExpenses = rentExpense + foodBazaar + utilities + transit + otherPersonal;
  const netSavings = Math.max(0, monthlyIncome - totalExpenses);
  const savingsRate = ((netSavings / monthlyIncome) * 100).toFixed(1);

  // Recommended 50/30/20 benchmark
  const idealNeeds = monthlyIncome * 0.5;
  const idealWants = monthlyIncome * 0.3;
  const idealSavings = monthlyIncome * 0.2;

  // Emergency Fund (3 months minimum)
  const emergencyFundTarget3M = totalExpenses * 3;
  const emergencyFundTarget6M = totalExpenses * 6;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wide mb-2">
          <PiggyBank className="w-4 h-4 text-emerald-600" />
          <span>Bangladesh Household Budget & Cost of Living Estimator</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          {language === 'bn' ? 'ব্যক্তিগত বাজেট ও জরুরি তহবিল প্ল্যানার' : 'Personal Budget & Expense Calculator'}
        </h1>
        <p className="mt-2 text-sm text-slate-600 max-w-2xl">
          {language === 'bn'
            ? 'ঢাকায় জীবনযাত্রার ব্যয়, বাসাভাড়া ও বাজারের খরচের সাথে সামঞ্জস্য রেখে আপনার মাসিক সঞ্চয় ও ৩-৬ মাসের জরুরি তহবিল (Emergency Fund) নির্ধারণ করুন।'
            : 'Plan monthly expenses tailored to Dhaka urban living costs, calculate emergency liquidity buffers, and track savings targets.'}
        </p>
      </div>

      {/* Main Calculator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Input Form (2 cols) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-2">
            <Calculator className="w-4 h-4 text-emerald-700" />
            <span>Monthly Income & Expense Breakdown (মাসিক আয় ও ব্যয়)</span>
          </h3>

          {/* Monthly Net Income */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Monthly In-Hand Salary / Income (মাসিক নিট আয়): <span className="text-emerald-700">৳{monthlyIncome.toLocaleString()}</span>
            </label>
            <input
              type="range"
              min={15000}
              max={250000}
              step={2000}
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(Number(e.target.value))}
              className="w-full accent-emerald-700"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">
                House Rent (বাসা ভাড়া ও সার্ভিস চার্জ)
              </label>
              <input
                type="number"
                value={rentExpense}
                onChange={(e) => setRentExpense(Number(e.target.value))}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">
                Food & Bazaar (কাঁচাবাজার ও খাদ্যদ্রব্য)
              </label>
              <input
                type="number"
                value={foodBazaar}
                onChange={(e) => setFoodBazaar(Number(e.target.value))}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">
                Utilities (বিদ্যুৎ, ওয়াসা, গ্যাস, ইন্টারনেট)
              </label>
              <input
                type="number"
                value={utilities}
                onChange={(e) => setUtilities(Number(e.target.value))}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">
                Commute (মেট্রোরেল, বাস, রিকশা যাতায়াত)
              </label>
              <input
                type="number"
                value={transit}
                onChange={(e) => setTransit(Number(e.target.value))}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900"
              />
            </div>
          </div>
        </div>

        {/* Results Sidebar */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
              Monthly Balance
            </span>
            <div className="text-3xl font-black mb-4">
              ৳{netSavings.toLocaleString()}
              <span className="text-xs text-slate-400 font-normal block mt-0.5">
                Estimated Monthly Savings ({savingsRate}%)
              </span>
            </div>

            <div className="space-y-2.5 text-xs border-t border-slate-800 pt-3">
              <div className="flex justify-between">
                <span className="text-slate-400">Total Outflows:</span>
                <span className="font-bold text-red-400">৳{totalExpenses.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Recommended 20% Target:</span>
                <span className="font-bold text-emerald-300">৳{idealSavings.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800">
            <span className="text-[11px] text-amber-300 font-bold block mb-1">
              Emergency Fund Runway Target:
            </span>
            <div className="text-xs text-slate-300 space-y-1">
              <p>3-Month Safety Net: <strong>৳{emergencyFundTarget3M.toLocaleString()}</strong></p>
              <p>6-Month Full Buffer: <strong>৳{emergencyFundTarget6M.toLocaleString()}</strong></p>
            </div>
          </div>
        </div>
      </div>

      {/* Dhaka Urban Financial Guidelines */}
      <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-950">
        <h4 className="font-bold mb-1 flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <span>Financial Planning Best Practices in Bangladesh</span>
        </h4>
        <p className="leading-relaxed">
          Keep at least 3 months of mandatory household expenses in liquid high-yield savings or MFS (bKash/Nagad) accounts for medical emergencies before investing in long-term assets or DPS schemes.
        </p>
      </div>
    </div>
  );
}
