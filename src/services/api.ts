import { SolverQueryResponse, ScamAnalysisResult, HousingSuitabilityResult, CareerRoadmapResult, VerifiedKnowledgeDocument, EmergencyServiceItem } from '../types';

export async function submitSolverQuery(query: string, languagePreference: string = 'auto'): Promise<SolverQueryResponse> {
  const res = await fetch('/api/solver/query', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, languagePreference })
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Query failed' }));
    throw new Error(err.error || 'Failed to solve query');
  }
  return res.json();
}

export async function analyzeScamText(text: string, channel: string = 'facebook'): Promise<ScamAnalysisResult> {
  const res = await fetch('/api/scam/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, channel })
  });
  if (!res.ok) {
    throw new Error('Failed to analyze scam text');
  }
  return res.json();
}

export async function computeHousingSuitability(params: {
  budget: number;
  bedrooms: number;
  metroRequired: boolean;
  bachelor: boolean;
}): Promise<{ results: HousingSuitabilityResult[]; tips: string[] }> {
  const res = await fetch('/api/housing/suitability', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params)
  });
  if (!res.ok) {
    throw new Error('Failed to compute housing suitability');
  }
  return res.json();
}

export async function generateCareerRoadmap(targetRole: string, currentSkills: string[]): Promise<CareerRoadmapResult> {
  const res = await fetch('/api/career/roadmap', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ targetRole, currentSkills })
  });
  if (!res.ok) {
    throw new Error('Failed to generate career roadmap');
  }
  return res.json();
}

export async function fetchKnowledgeDocs(category?: string, query?: string): Promise<VerifiedKnowledgeDocument[]> {
  const url = new URL('/api/knowledge', window.location.origin);
  if (category) url.searchParams.set('category', category);
  if (query) url.searchParams.set('query', query);
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error('Failed to fetch knowledge docs');
  const json = await res.json();
  return json.data;
}

export async function fetchEmergencyServices(category?: string): Promise<EmergencyServiceItem[]> {
  const url = new URL('/api/emergency', window.location.origin);
  if (category) url.searchParams.set('category', category);
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error('Failed to fetch emergency services');
  const json = await res.json();
  return json.data;
}

export async function fetchResearchBenchmarks(): Promise<any> {
  const res = await fetch('/api/research/benchmarks');
  if (!res.ok) throw new Error('Failed to fetch research benchmarks');
  return res.json();
}

export async function simulateResearchQuery(testQuery: string): Promise<any> {
  const res = await fetch('/api/research/simulate-test', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ testQuery })
  });
  if (!res.ok) throw new Error('Simulation failed');
  return res.json();
}
