import React from 'react';
import { useI18n } from '../i18n/I18nContext';

const Footer: React.FC = () => {
  const { t } = useI18n();
  return (
    <footer className="bg-gradient-to-b from-neutral-dark to-black text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://img.cdn.apipost.cn/client/user/1391646/avatar/efd43da5e950a2d9578cf0052e99c37769e72019c3a89.png" 
                alt="Hello Token" 
                className="w-16 h-16 object-contain"
              />
              <h3 className="text-3xl font-bold text-gradient">Hello Token</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#all" className="hover:text-primary transition-colors duration-300 hover:translate-x-2 inline-block">
                  <i className="fa fa-arrow-right mr-2 text-primary"></i> {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#free" className="hover:text-primary transition-colors duration-300 hover:translate-x-2 inline-block">
                  <i className="fa fa-arrow-right mr-2 text-primary"></i> {t('nav.free')}
                </a>
              </li>
              <li>
                <a href="#paid" className="hover:text-primary transition-colors duration-300 hover:translate-x-2 inline-block">
                  <i className="fa fa-arrow-right mr-2 text-primary"></i> {t('nav.paid')}
                </a>
              </li>
              <li>
                <a href="#ai_tool" className="hover:text-primary transition-colors duration-300 hover:translate-x-2 inline-block">
                  <i className="fa fa-arrow-right mr-2 text-primary"></i> {t('nav.ai_tool')}
                </a>
              </li>
              <li>
                <a href="#local" className="hover:text-primary transition-colors duration-300 hover:translate-x-2 inline-block">
                  <i className="fa fa-arrow-right mr-2 text-primary"></i> {t('nav.local')}
                </a>
              </li>
              <li>
                <a href="#benefit" className="hover:text-primary transition-colors duration-300 hover:translate-x-2 inline-block">
                  <i className="fa fa-arrow-right mr-2 text-primary"></i> {t('nav.benefit')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">{t('footer.contact')}</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center hover:text-primary transition-colors duration-300">
                <i className="fa fa-envelope mr-3 text-primary"></i> qxqmail@163.com
              </li>
              <li className="flex items-center hover:text-primary transition-colors duration-300">
                <i className="fa fa-github mr-3 text-primary"></i> 
                <a href="https://github.com/DavinQi" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
                  github.com/DavinQi
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;