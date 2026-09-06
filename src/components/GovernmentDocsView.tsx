import { useState } from 'react';
import { 
  FileText, 
  Search, 
  ExternalLink, 
  Coins, 
  Clock, 
  ShieldCheck, 
  Building2, 
  ChevronRight, 
  ChevronDown, 
  CheckCircle2, 
  AlertCircle,
  Phone,
  Bookmark
} from 'lucide-react';
import { Language, VerifiedKnowledgeDocument } from '../types';
import { VERIFIED_KNOWLEDGE_DOCS } from '../data/verifiedKnowledge';

interface GovernmentDocsViewProps {
  language: Language;
  onSaveGuide: (guide: any) => void;
  isSaved: (id: string) => boolean;
  onSelectServiceQuery: (query: string) => void;
}

export default function GovernmentDocsView({ 
  language, 
  onSaveGuide, 
  isSaved,
  onSelectServiceQuery 
}: GovernmentDocsViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedDocId, setExpandedDocId] = useState<string | null>('nid-lost-reissue');

  const filteredDocs = VERIFIED_KNOWLEDGE_DOCS.filter(doc => {
    const q = searchTerm.toLowerCase();
    return (
      doc.titleEn.toLowerCase().includes(q) ||
      doc.titleBn.toLowerCase().includes(q) ||
      doc.descriptionEn.toLowerCase().includes(q) ||
      doc.tags.some(t => t.toLowerCase().includes(q))
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
      {/* Header Banner */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wide mb-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Bangladesh Citizen Services Verified Registry</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          {language === 'bn' ? 'সরকারি সেবা ও প্রয়োজনীয় নথি নির্দেশিকা' : 'Government & Documents Navigator'}
        </h1>
        <p className="mt-2 text-sm text-slate-600 max-w-2xl">
          {language === 'bn'
            ? 'নির্বাচন কমিশন, পাসপোর্ট অধিদপ্তর, বিআরটিএ, জাতীয় রাজস্ব বোর্ড ও জন্ম নিবন্ধন কার্যালয়ের শতভাগ অনুমোদিত তথ্য ও সরকারি ফি তালিকা।'
            : 'Authentic statutory fees, required paperwork, and official portal links for Election Commission, Passport, BRTA, and Tax authorities.'}
        </p>
      </div>

      {/* Official Fee Integrity Notice */}
      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/80 mb-6 text-xs text-amber-900 flex items-start gap-3">
        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <strong className="block mb-0.5 text-amber-950">Official Fee Guarantee & Anti-Broker Notice</strong>
          <span>
            {language === 'bn'
              ? 'সরকারি কোনো কাজের জন্য দালাল বা অতিরিক্ত অর্থ দেওয়া বেআইনি। প্রতিটি সেবার সরকারি ফি নির্ধারিত মোবাইল ব্যাংকিং (bKash/Nagad) বা এ-চালানের মাধ্যমে সরাসরি জমা দিন।'
              : 'Never pay unregistered intermediaries or brokers outside public service complexes. All statutory fees can be verified and paid through official A-Challan or designated mobile banking billers.'}
          </span>
        </div>
      </div>

      {/* Search Input */}
      <div className="relative mb-6">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
        <input
          id="govt-search-input"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={
            language === 'bn' 
              ? 'সেবার নাম লিখুন (যেমন: পাসপোর্ট, ড্রাইভিং লাইসেন্স, টিন সনদ, জন্ম নিবন্ধন...)' 
              : 'Search citizen services (e.g. NID, Passport, Driving License, Tax Return, BRIS...)'
          }
          className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-emerald-600 shadow-xs"
        />
      </div>

      {/* Services List */}
      <div className="space-y-4">
        {filteredDocs.map(doc => {
          const isExpanded = expandedDocId === doc.id;
          return (
            <div 
              key={doc.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 transition-all"
            >
              {/* Summary Header Accordion */}
              <div 
                onClick={() => setExpandedDocId(isExpanded ? null : doc.id)}
                className="p-5 cursor-pointer flex items-start justify-between gap-4 hover:bg-slate-50/70 select-none"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 shrink-0 mt-0.5">
                    <FileText className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">
                        {doc.organization}
                      </span>
                      <span className="text-[11px] text-slate-500">
                        Verified {doc.lastVerifiedDate}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {language === 'bn' ? doc.titleBn : doc.titleEn}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                      {language === 'bn' ? doc.descriptionBn : doc.descriptionEn}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    {doc.estimatedCostBdt}
                  </span>
                  {isExpanded ? (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </div>

              {/* Expanded Detailed View */}
              {isExpanded && (
                <div className="px-5 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-5 text-sm">
                  {/* Key Metadata Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 bg-white rounded-xl border border-slate-200/80 text-xs">
                    <div>
                      <span className="text-slate-500 block mb-0.5 font-medium">Statutory Fee (সরকারি ফি)</span>
                      <strong className="text-slate-900">{doc.estimatedCostBdt}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block mb-0.5 font-medium">Processing Time (সময়)</span>
                      <strong className="text-slate-900">{doc.estimatedProcessingTime}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block mb-0.5 font-medium">Helpline / Hotline</span>
                      <strong className="text-emerald-700">{doc.helpline || '106 (Anti-Corruption) / 999'}</strong>
                    </div>
                  </div>

                  {/* Required Documents Checklist */}
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-xs uppercase tracking-wider">
                      {language === 'bn' ? 'প্রয়োজনীয় কাগজপত্রের তালিকা' : 'Required Documents Checklist'}
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {(language === 'bn' ? doc.requiredDocumentsBn : doc.requiredDocumentsEn).map((req, i) => (
                        <li key={i} className="flex items-start gap-2 p-2 bg-white rounded-lg border border-slate-200 text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Official Steps */}
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-xs uppercase tracking-wider">
                      {language === 'bn' ? 'ধাপে ধাপে সরকারি আবেদন প্রক্রিয়া' : 'Step-by-Step Procedure'}
                    </h4>
                    <div className="space-y-2 text-xs">
                      {(language === 'bn' ? doc.stepsBn : doc.stepsEn).map((st, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 p-2.5 bg-white rounded-lg border border-slate-200">
                          <span className="w-5 h-5 rounded-full bg-emerald-700 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="text-slate-700 leading-relaxed">{st}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Important Warnings */}
                  {doc.importantWarnings && (
                    <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
                      <span className="font-bold block mb-1">Important Safety Rules:</span>
                      <ul className="list-disc list-inside space-y-1">
                        {doc.importantWarnings.map((w, i) => (
                          <li key={i}>{w}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Links & Action Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <div className="flex items-center gap-2">
                      <a 
                        href={doc.officialSourceUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors"
                      >
                        <span>Visit {doc.officialPortalName}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <button
                        onClick={() => onSelectServiceQuery(doc.titleEn)}
                        className="px-3 py-2 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 rounded-xl border border-slate-200"
                      >
                        Ask AI Assistant
                      </button>
                    </div>

                    <button
                      onClick={() => onSaveGuide({
                        id: doc.id,
                        title: doc.titleEn,
                        category: doc.category,
                        date: new Date().toLocaleDateString()
                      })}
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900"
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                      <span>{isSaved(doc.id) ? 'Saved' : 'Save this service'}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
