import { useState } from 'react';
import { 
  Layers, 
  Database, 
  ShieldCheck, 
  Cpu, 
  Workflow, 
  CheckCircle2, 
  FileCode2, 
  Server,
  Terminal,
  KeyRound
} from 'lucide-react';
import { Language } from '../types';

interface ArchitectureDocsViewProps {
  language: Language;
}

export default function ArchitectureDocsView({ language }: ArchitectureDocsViewProps) {
  const [activeSection, setActiveSection] = useState<'architecture' | 'erd' | 'rag' | 'security'>('architecture');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wide mb-2">
          <Layers className="w-4 h-4 text-emerald-600" />
          <span>MSc Software Engineering System Specifications</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Architecture, Pipeline & Database Design
        </h1>
        <p className="mt-2 text-sm text-slate-600 max-w-3xl">
          Complete production-grade architectural blueprints for BD LifeMate, detailing the distributed RAG pipeline, PostgreSQL ER schema, and zero-hallucination security safeguards.
        </p>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 mb-8 overflow-x-auto pb-1">
        {[
          { id: 'architecture', label: '1. System Architecture', icon: Server },
          { id: 'rag', label: '2. Multi-Stage RAG Pipeline', icon: Workflow },
          { id: 'erd', label: '3. Relational Schema & ERD', icon: Database },
          { id: 'security', label: '4. Cybersecurity & Safety', icon: ShieldCheck }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id as any)}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold whitespace-nowrap transition-all border-b-2 ${
                isActive 
                  ? 'border-emerald-700 text-emerald-800' 
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Section 1: High Level System Architecture */}
      {activeSection === 'architecture' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Server className="w-4 h-4 text-emerald-700" />
              <span>Three-Tier Microservices Topology</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-emerald-800 uppercase block mb-1">Tier 1: Presentation (SPA)</span>
                <ul className="space-y-1.5 text-slate-600">
                  <li>• React 18+ / Vite / TypeScript</li>
                  <li>• Responsive Tailwind CSS</li>
                  <li>• Web Speech API Voice Recognition</li>
                  <li>• Bengali & Banglish Tokenizer Client</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-emerald-800 uppercase block mb-1">Tier 2: Application / API</span>
                <ul className="space-y-1.5 text-slate-600">
                  <li>• Node.js Express & TSX Middleware</li>
                  <li>• Intent Extraction & Language Classifier</li>
                  <li>• Grounding & Hallucination Filter</li>
                  <li>• Rate Limiting & Input Sanitizer</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-emerald-800 uppercase block mb-1">Tier 3: Data & Intelligence</span>
                <ul className="space-y-1.5 text-slate-600">
                  <li>• PostgreSQL with pgvector Embeddings</li>
                  <li>• Gemini 3.8 Flash (Server-Side Proxy)</li>
                  <li>• Editorial Verified Knowledge Store</li>
                  <li>• Disaster & Emergency Directory Cache</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section 2: Multi-Stage RAG Pipeline */}
      {activeSection === 'rag' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Workflow className="w-4 h-4 text-emerald-700" />
            <span>Multi-Stage RAG (Retrieval-Augmented Generation) Pipeline</span>
          </h3>

          <div className="space-y-3 text-xs">
            {[
              {
                step: 'Stage 1: Multilingual Normalization & Preprocessing',
                detail: 'Detects script (Bengali Unicode regex vs Romanized Banglish phonetics). Removes colloquial filler words and normalizes transliterations (e.g. "harai gese" -> "harano").'
              },
              {
                step: 'Stage 2: Hybrid Dense-Sparse Retrieval (RRF)',
                detail: 'Executes parallel BM25 keyword matching and 768-dimensional dense vector similarity search over official statutory documentation chunks. Merges ranks using Reciprocal Rank Fusion.'
              },
              {
                step: 'Stage 3: Verified Grounding Context Injection',
                detail: 'Constructs structured prompt injecting official fees, deadlines, and requirements into system instructions. Enforces strict instructions: "Do NOT fabricate numbers; return official fees exactly."'
              },
              {
                step: 'Stage 4: LLM Synthesis with Server-Side Gemini 3.8 Flash',
                detail: 'Synthesizes concise, structured step-by-step guidance formatted with interactive checklists, official portal URLs, and emergency helplines.'
              },
              {
                step: 'Stage 5: Post-Generation Statutory Compliance Audit',
                detail: 'Verifies generated fee values against the verified knowledge base before returning response payload to user.'
              }
            ].map((st, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-700 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <strong className="text-slate-900 block mb-0.5">{st.step}</strong>
                  <span className="text-slate-600 leading-relaxed">{st.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Section 3: Relational Schema & ERD */}
      {activeSection === 'erd' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Database className="w-4 h-4 text-emerald-700" />
            <span>Database Schema & Entity-Relationship Architecture (PostgreSQL)</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-4 bg-slate-900 text-slate-200 rounded-xl">
              <span className="text-emerald-400 font-bold block mb-2">// 1. users & profiles</span>
              <p>CREATE TABLE users (</p>
              <p className="pl-4">id UUID PRIMARY KEY DEFAULT gen_random_uuid(),</p>
              <p className="pl-4">email VARCHAR(255) UNIQUE,</p>
              <p className="pl-4">phone_number VARCHAR(20),</p>
              <p className="pl-4">preferred_language VARCHAR(10) DEFAULT 'bn',</p>
              <p className="pl-4">created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()</p>
              <p>);</p>
            </div>

            <div className="p-4 bg-slate-900 text-slate-200 rounded-xl">
              <span className="text-emerald-400 font-bold block mb-2">// 2. verified_knowledge_documents</span>
              <p>CREATE TABLE knowledge_documents (</p>
              <p className="pl-4">id VARCHAR(64) PRIMARY KEY,</p>
              <p className="pl-4">category VARCHAR(50) NOT NULL,</p>
              <p className="pl-4">title_en VARCHAR(255) NOT NULL,</p>
              <p className="pl-4">title_bn VARCHAR(255) NOT NULL,</p>
              <p className="pl-4">statutory_fee_bdt VARCHAR(100),</p>
              <p className="pl-4">official_portal_url TEXT,</p>
              <p className="pl-4">embedding vector(768),</p>
              <p className="pl-4">verified_at DATE DEFAULT CURRENT_DATE</p>
              <p>);</p>
            </div>

            <div className="p-4 bg-slate-900 text-slate-200 rounded-xl">
              <span className="text-emerald-400 font-bold block mb-2">// 3. user_inquiries_log</span>
              <p>CREATE TABLE user_inquiries (</p>
              <p className="pl-4">id UUID PRIMARY KEY DEFAULT gen_random_uuid(),</p>
              <p className="pl-4">user_id UUID REFERENCES users(id),</p>
              <p className="pl-4">raw_query TEXT NOT NULL,</p>
              <p className="pl-4">detected_intent VARCHAR(100),</p>
              <p className="pl-4">latency_ms INTEGER,</p>
              <p className="pl-4">feedback_score VARCHAR(10)</p>
              <p>);</p>
            </div>

            <div className="p-4 bg-slate-900 text-slate-200 rounded-xl">
              <span className="text-emerald-400 font-bold block mb-2">// 4. scam_audit_reports</span>
              <p>CREATE TABLE scam_audits (</p>
              <p className="pl-4">id UUID PRIMARY KEY DEFAULT gen_random_uuid(),</p>
              <p className="pl-4">suspect_text TEXT NOT NULL,</p>
              <p className="pl-4">origin_channel VARCHAR(30),</p>
              <p className="pl-4">risk_score INTEGER,</p>
              <p className="pl-4">risk_level VARCHAR(20),</p>
              <p className="pl-4">detected_at TIMESTAMP DEFAULT NOW()</p>
              <p>);</p>
            </div>
          </div>
        </div>
      )}

      {/* Section 4: Cybersecurity & Safety */}
      {activeSection === 'security' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Cybersecurity Architecture & Trust Safeguards</span>
          </h3>

          <div className="space-y-3 text-xs">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong className="text-slate-900 block mb-1">1. Server-Side Secret Seclusion</strong>
              <p className="text-slate-600">
                All Gemini API keys and sensitive tokens reside strictly in server-side memory (`process.env.GEMINI_API_KEY`). Browser clients never receive or execute API keys.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong className="text-slate-900 block mb-1">2. Anti-Hallucination Grounding Rule</strong>
              <p className="text-slate-600">
                All citizen advice is grounded against the verified statutory database. If no verified information exists for an inquiry, the system explicitly returns: &quot;Verified information is currently unavailable.&quot;
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong className="text-slate-900 block mb-1">3. Privacy & Non-Retention by Default</strong>
              <p className="text-slate-600">
                Personal identity numbers (e.g. 10 or 17 digit NID numbers) and mobile wallet PINs are masked on the client before being sent for analysis.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
