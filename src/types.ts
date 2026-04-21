export interface Model {
  id: string;
  name: string;
  nameEn?: string;
  provider: string;
  providerEn?: string;
  company?: string;
  companyEn?: string;
  type: 'free' | 'paid' | 'local' | 'ai_tool';
  price?: {
    currency: string;
    amount: number;
    unit: 'month' | 'usage' | 'token';
  };
  priceDescription?: string;
  priceDescriptionEn?: string;
  description: string;
  descriptionEn?: string;
  billingUnit?: string;
  billingUnitEn?: string;
  creditLimit?: string;
  creditLimitEn?: string;
  features: string[];
  featuresEn?: string[];
  status: 'available' | 'unavailable' | 'unknown';
  lastChecked: string; // ISO date string
  url?: string;
  localSetup?: {
    token: string;
    setupGuide: string;
    requirements: string[];
  };
  rating?: number; // 推荐指数，1-5星
  logo?: string; // 平台logo
}

export interface ModelData {
  lastUpdated: string;
  models: Model[];
}

export type ModelType = 'all' | 'free' | 'paid' | 'local' | 'benefit' | 'ai_tool';

export type Language = 'zh' | 'en';

export interface Translation {
  [key: string]: string;
}

export interface Translations {
  zh: Translation;
  en: Translation;
}

export interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}
