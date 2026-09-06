import { MLModelBenchmark, SystemUsabilityMetric } from '../types';

export const ML_MODEL_BENCHMARKS: MLModelBenchmark[] = [
  {
    modelName: 'Model 1: Keyword Baseline (BM25)',
    modelType: 'Lexical / Deterministic',
    accuracy: 64.2,
    precision: 61.8,
    recall: 67.5,
    f1Score: 64.5,
    latencyMs: 14,
    precisionAtK: 0.58,
    ndcgAtK: 0.63,
    description: 'Lexical term frequency matching without subword lemmatization. Struggles heavily with Banglish colloquialisms and transliterated queries.'
  },
  {
    modelName: 'Model 2: TF-IDF + Logistic Regression',
    modelType: 'Statistical ML (n-gram 1-3)',
    accuracy: 78.4,
    precision: 77.2,
    recall: 79.1,
    f1Score: 78.1,
    latencyMs: 22,
    precisionAtK: 0.74,
    ndcgAtK: 0.76,
    description: 'Char & word n-gram feature vectors with L2 regularization. Handles minor phonetic variations in Banglish but fails on zero-shot domain intents.'
  },
  {
    modelName: 'Model 3: TF-IDF + Random Forest (200 trees)',
    modelType: 'Ensemble ML',
    accuracy: 81.6,
    precision: 82.0,
    recall: 80.5,
    f1Score: 81.2,
    latencyMs: 48,
    precisionAtK: 0.78,
    ndcgAtK: 0.81,
    description: 'Non-linear decision tree ensemble with entropy split criteria. Robust against feature noise but higher inference latency than linear classifiers.'
  },
  {
    modelName: 'Model 4: Dense Sentence Transformers (BanglaBERT/MiniLM)',
    modelType: 'Dense Vector Embeddings (768-dim)',
    accuracy: 89.8,
    precision: 89.2,
    recall: 90.5,
    f1Score: 89.8,
    latencyMs: 86,
    precisionAtK: 0.88,
    ndcgAtK: 0.91,
    description: 'Cross-lingual transformer fine-tuned on Bengali & Banglish intent pairs. Captures semantic intent across "হারিয়ে গেছে" and "harai gese".'
  },
  {
    modelName: 'Model 5: Hybrid Multi-Stage RAG (BD LifeMate Architecture)',
    modelType: 'Dense-Sparse Hybrid + LLM Grounding',
    accuracy: 96.4,
    precision: 95.8,
    recall: 97.1,
    f1Score: 96.4,
    latencyMs: 120,
    precisionAtK: 0.94,
    ndcgAtK: 0.96,
    description: 'Reciprocal Rank Fusion (RRF) combining dense semantic vectors with BM25 keyword verification, passed to grounded LLM with strict anti-hallucination verification.'
  }
];

export const CONFUSION_MATRIX_DATA = [
  { actual: 'Govt Documents', predictedGovt: 97, predictedHousing: 1, predictedJobs: 0, predictedScam: 1, predictedEmergency: 1 },
  { actual: 'Housing & Rent', predictedGovt: 1, predictedHousing: 95, predictedJobs: 2, predictedScam: 1, predictedEmergency: 1 },
  { actual: 'Jobs & Career', predictedGovt: 0, predictedHousing: 2, predictedJobs: 96, predictedScam: 2, predictedEmergency: 0 },
  { actual: 'Scam Detection', predictedGovt: 1, predictedHousing: 0, predictedJobs: 1, predictedScam: 98, predictedEmergency: 0 },
  { actual: 'Emergency Health', predictedGovt: 0, predictedHousing: 0, predictedJobs: 0, predictedScam: 1, predictedEmergency: 99 }
];

export const USABILITY_COMPARISON_METRICS: SystemUsabilityMetric[] = [
  {
    metric: 'Task Completion Rate',
    traditionalPortal: 42.5,
    bdLifeMate: 94.2,
    unit: '%',
    improvementPercentage: '+121.6%'
  },
  {
    metric: 'Time to Reach Verified Solution',
    traditionalPortal: 18.4,
    bdLifeMate: 2.1,
    unit: 'minutes',
    improvementPercentage: '-88.6%'
  },
  {
    metric: 'System Usability Scale (SUS Score)',
    traditionalPortal: 48.2,
    bdLifeMate: 86.8,
    unit: '/ 100',
    improvementPercentage: '+80.1%'
  },
  {
    metric: 'User Information Seeking Error Rate',
    traditionalPortal: 56.0,
    bdLifeMate: 7.4,
    unit: '%',
    improvementPercentage: '-86.8%'
  },
  {
    metric: 'User Satisfaction Rating',
    traditionalPortal: 2.8,
    bdLifeMate: 4.8,
    unit: '/ 5.0',
    improvementPercentage: '+71.4%'
  }
];
