import React from 'react';
import { Model } from '../types';
import StatusBadge from './StatusBadge';
import PriceDisplay from './PriceDisplay';
import { useI18n } from '../i18n/I18nContext';

interface ModelCardProps {
  model: Model;
}

const ModelCard: React.FC<ModelCardProps> = ({ model }) => {
  const { t, language } = useI18n();
  
  const getModelDescription = () => {
    if (language === 'zh') {
      const translationKey = `${model.type}.${model.id}.description`;
      const translatedDescription = t(translationKey);
      return translatedDescription !== translationKey ? translatedDescription : model.description;
    }
    return model.descriptionEn || model.description;
  };
  
  return (
    <div 
      className="card-gradient rounded-2xl shadow-lg p-8 card-hover border border-white/50 shadow-neon animate-fade-in cursor-pointer"
      onClick={(e) => {
        // 只有当点击的不是链接时才触发动画
        if (!(e.target as HTMLElement).closest('a')) {
          const card = e.currentTarget as HTMLElement;
          card.style.animation = 'jump 0.5s ease-out';
          setTimeout(() => {
            card.style.animation = '';
          }, 500);
        }
      }}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center">
          <div className="w-16 h-16 mr-4 rounded-lg flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 shadow-sm animate-float">
            {model.logo ? (
              <img 
                src={model.logo} 
                alt={`${model.name} logo`} 
                className="w-full h-full object-contain p-2 hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.className = 'w-16 h-16 mr-4 rounded-lg flex items-center justify-center bg-primary/10 border border-primary/20';
                    parent.innerHTML = '<i class="fa fa-robot text-primary text-2xl"></i>';
                  }
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <i className="fa fa-robot text-primary text-2xl"></i>
              </div>
            )}
          </div>
          <div>
            <h4 className="text-xl font-bold text-neutral-dark mb-1">{language === 'zh' ? model.name : model.nameEn || model.name}</h4>
            <p className="text-neutral text-sm font-medium">{language === 'zh' ? model.provider : model.providerEn || model.provider}</p>
            {model.company && (
              <p className="text-neutral text-xs font-medium">{language === 'zh' ? model.company : model.companyEn || model.company}</p>
            )}
            {model.rating !== undefined && (
              <div className="flex flex-col">
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, index) => {
                    const rating = (model.type === 'paid' || model.type === 'ai_tool') ? model.rating! / 20 : model.rating!;
                    if (index < Math.floor(rating)) {
                      // 整星
                      return <i key={index} className="fa fa-star text-yellow-400 mr-1"></i>;
                    } else if (index === Math.floor(rating) && rating % 1 !== 0) {
                      // 半星
                      return <i key={index} className="fa fa-star-half-o text-yellow-400 mr-1"></i>;
                    } else {
                      // 空星
                      return <i key={index} className="fa fa-star-o text-gray-300 mr-1"></i>;
                    }
                  })}
                </div>
                <div className="text-xs text-neutral mt-1">
                  {language === 'zh' ? '评分: ' : 'Rating: '}{model.rating}/{(model.type === 'paid' || model.type === 'ai_tool') ? 100 : 5}
                </div>
              </div>
            )}
          </div>
        </div>
        <StatusBadge status={model.status} />
      </div>
      <p className="text-neutral mb-6 leading-relaxed">{getModelDescription()}</p>
      <div className="mb-6">
        <h5 className="text-sm font-semibold text-neutral-dark mb-3 uppercase tracking-wider">{t('model.features')}</h5>
        <ul className="text-sm text-neutral space-y-2">
          {(language === 'zh' ? model.features : model.featuresEn || model.features).map((feature, index) => (
            <li key={index} className="flex items-center hover:text-primary transition-colors duration-300">
              <i className="fa fa-check-circle text-secondary mr-3"></i> {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <PriceDisplay model={model} />
        {model.url && (
          <a 
            href={model.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary hover:underline flex items-center font-medium transition-all duration-300 hover:scale-105"
          >
            {t('model.learnMore')} <i className="fa fa-arrow-right ml-2"></i>
          </a>
        )}
        {model.localSetup && (
          <a 
            href={model.localSetup.setupGuide} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary hover:underline flex items-center font-medium transition-all duration-300 hover:scale-105"
          >
            {t('model.deploymentGuide')} <i className="fa fa-arrow-right ml-2"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default ModelCard;