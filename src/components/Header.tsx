import React from 'react';
import { useI18n } from '../i18n/I18nContext';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useI18n();

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="container-custom py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <a href="#all" className="flex items-center space-x-3">
            <img 
              src="https://img.cdn.apipost.cn/client/user/1391646/avatar/efd43da5e950a2d9578cf0052e99c37769e72019c3a89.png" 
              alt="Hello Token" 
              className="w-10 h-10 object-contain animate-pulse-slow"
            />
            <h1 className="text-2xl font-bold">Hello Token</h1>
          </a>
        </div>
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex space-x-8">
            <a href="#all" className="text-white font-medium hover:scale-105 transition-transform duration-300">{t('nav.home')}</a>
            <a href="#free" className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transition-transform duration-300">{t('nav.free')}</a>
            <a href="#paid" className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transition-transform duration-300">{t('nav.paid')}</a>
            <a href="#ai_tool" className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transition-transform duration-300">{t('nav.ai_tool')}</a>
            <a href="#local" className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transition-transform duration-300">{t('nav.local')}</a>
            <a href="#benefit" className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transition-transform duration-300">{t('nav.benefit')}</a>
          </nav>
          <button 
            onClick={toggleLanguage}
            className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 ease-in-out bg-white/20 hover:bg-white/30"
          >
            <span className="sr-only">Toggle language</span>
            <span 
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ease-in-out ${language === 'zh' ? 'translate-x-6' : 'translate-x-1'}`}
            ></span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-xs font-medium text-white">
              {language === 'zh' ? 'EN' : '中'}
            </span>
          </button>
          <button className="md:hidden text-white hover:text-white/80 transition-colors duration-300">
            <i className="fa fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;