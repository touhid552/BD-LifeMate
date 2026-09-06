export type Language = 'bn' | 'en' | 'banglish';

export type ProblemCategory =
  | 'government_documents'
  | 'housing_rent'
  | 'jobs_career'
  | 'education'
  | 'safety_scam'
  | 'emergency_health'
  | 'personal_finance'
  | 'agriculture'
  | 'general';

export interface VerifiedKnowledgeDocument {
  id: string;
  titleEn: string;
  titleBn: string;
  category: ProblemCategory;
  descriptionEn: string;
  descriptionBn: string;
  stepsEn: string[];
  stepsBn: string[];
  requiredDocumentsEn: string[];
  requiredDocumentsBn: string[];
  estimatedCostBdt: string;
  estimatedProcessingTime: string;
  organization: string;
  organizationBn: string;
  location: string;
  officialSourceUrl: string;
  officialPortalName: string;
  lastVerifiedDate: string;
  expiryOrReviewDate: string;
  isVerified: boolean;
  status: 'active' | 'under_review' | 'updated';
  tags: string[];
  keywords: string[];
  helpline?: string;
  commonMistakes?: string[];
  importantWarnings?: string[];
}

export interface SolverQueryResponse {
  query: string;
  detectedLanguage: Language;
  detectedIntent: string;
  category: ProblemCategory;
  urgency: 'low' | 'normal' | 'high' | 'emergency';
  summary: string;
  stepByStepGuide: {
    stepNumber: number;
    title: string;
    description: string;
    tips?: string;
  }[];
  checklist: string[];
  officialDetails: {
    organization: string;
    cost: string;
    processingTime: string;
    officialPortal: string;
    officialUrl: string;
    helpline?: string;
    location?: string;
  };
  warnings: string[];
  verifiedKnowledge: {
    isVerified: boolean;
    source: string;
    lastVerifiedDate: string;
    verifiedBy: string;
  };
  relatedRecommendations: {
    title: string;
    category: ProblemCategory;
    actionQuery: string;
  }[];
  executionMetadata: {
    modelUsed: string;
    retrievalScore: number;
    latencyMs: number;
    hallucinationCheckPassed: boolean;
  };
}

export interface ScamAnalysisResult {
  riskScore: number; // 0 - 100
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH';
  confidenceScore: number;
  detectedSignals: {
    type: 'red_flag' | 'suspicious' | 'safe_indicator';
    title: string;
    description: string;
  }[];
  explanation: string;
  recommendedAction: string[];
  helplineToContact: string;
  disclaimer: string;
}

export interface HousingLocationProfile {
  areaId: string;
  areaName: string;
  areaNameBn: string;
  averageRent1BHK: string;
  averageRent2BHK: string;
  averageRent3BHK: string;
  metroAccess: boolean;
  nearestMetroStation?: string;
  transitRating: 'Excellent' | 'Good' | 'Moderate' | 'Fair';
  safetyRating: number; // 1-5
  waterGasReliability: 'High' | 'Moderate' | 'Occasional Shortage';
  studentFriendly: boolean;
  bachelorFriendly: boolean;
  familyFriendly: boolean;
  nearbyHubs: string[];
  description: string;
}

export interface HousingSuitabilityResult {
  area: HousingLocationProfile;
  suitabilityScore: number; // 0-100%
  breakdown: {
    budgetMatch: number;
    transitMatch: number;
    commuteMatch: number;
    facilityMatch: number;
  };
  recommendationNote: string;
  pros: string[];
  cautions: string[];
}

export interface CareerRoadmapResult {
  targetRole: string;
  currentSkills: string[];
  missingSkills: string[];
  marketDemandRating: 'High' | 'Very High' | 'Moderate';
  salaryRangeBdt: string;
  milestones: {
    phase: string;
    timeline: string;
    topics: string[];
    recommendedResources: { name: string; url?: string; type: 'free' | 'paid' | 'project' }[];
    practicalProject: string;
  }[];
  bangladeshJobContext: string;
  interviewPreparationAdvice: string[];
}

export interface EmergencyServiceItem {
  id: string;
  nameEn: string;
  nameBn: string;
  category: 'national_emergency' | 'hospital' | 'ambulance' | 'blood_bank' | 'police_cyber' | 'fire_service';
  hotline: string;
  secondaryPhone?: string;
  location: string;
  address: string;
  operatingHours: string;
  serviceType: string;
  verifiedStatus: boolean;
  notes?: string;
}

export interface MLModelBenchmark {
  modelName: string;
  modelType: string;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  latencyMs: number;
  precisionAtK: number;
  ndcgAtK: number;
  description: string;
}

export interface SystemUsabilityMetric {
  metric: string;
  traditionalPortal: number;
  bdLifeMate: number;
  unit: string;
  improvementPercentage: string;
}

export interface UserSavedGuide {
  id: string;
  title: string;
  category?: ProblemCategory | string;
  query?: string;
  date: string;
}
