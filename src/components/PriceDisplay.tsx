import React from 'react';
import { Model } from '../types';
import { useI18n } from '../i18n/I18nContext';

interface PriceDisplayProps {
  model: Model;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ model }) => {
  const { t, language } = useI18n();
  
  if (model.type === 'free') {
    return <span className="text-primary font-semibold">{t('filter.free')}</span>;
  }

  if (model.type === 'local') {
    return <span className="text-secondary font-semibold">{t('filter.local')}</span>;
  }

  if (model.type === 'ai_tool' && model.priceDescription) {
    return (
      <span className="text-accent font-semibold text-sm">
        {language === 'zh' ? model.priceDescription : model.priceDescriptionEn || model.priceDescription}
      </span>
    );
  }

  if (model.price) {
    const getUnitText = () => {
      switch (model.price.unit) {
        case 'month':
          return `/${t('price.perMonth')}`;
        case 'usage':
          return `/${t('price.perUsage')}`;
        case 'token':
          return `/${t('price.perToken')}`;
        default:
          return '';
      }
    };

    return (
      <span className="text-accent font-semibold">
        {model.price.currency} {model.price.amount}{getUnitText()}
      </span>
    );
  }

  return null;
};

export default PriceDisplay;