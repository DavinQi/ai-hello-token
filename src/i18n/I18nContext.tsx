import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, I18nContextType } from '../types';
import { translations } from './translations';

// 创建上下文
const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  // 从 localStorage 读取语言偏好，默认为中文
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    return savedLanguage || 'zh';
  });

  // 当语言变化时，保存到 localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // 翻译函数
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  // 切换语言的函数
  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const contextValue: I18nContextType = {
    language,
    setLanguage: changeLanguage,
    t
  };

  return (
    <I18nContext.Provider value={contextValue}>
      {children}
    </I18nContext.Provider>
  );
};

// 自定义 hook 用于访问上下文
export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
