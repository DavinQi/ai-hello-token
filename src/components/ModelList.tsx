import React from 'react';
import { Model, ModelType } from '../types';
import ModelCard from './ModelCard';
import { useI18n } from '../i18n/I18nContext';

interface ModelListProps {
  models: Model[];
  filter: ModelType;
  title: string;
  description: string;
  viewMode: 'card' | 'list';
}

const ModelList: React.FC<ModelListProps> = ({ models, filter, title, description, viewMode }) => {
  const { t, language } = useI18n();
  const filteredModels = models.filter(model => {
    if (filter === 'all') return true;
    return model.type === filter;
  }).sort((a, b) => {
    // 按推荐指数降序排序，没有rating的模型保持原始位置
    if (a.rating === undefined && b.rating === undefined) {
      return 0;
    } else if (a.rating === undefined) {
      return 1;
    } else if (b.rating === undefined) {
      return -1;
    } else {
      return b.rating - a.rating;
    }
  });

  if (filteredModels.length === 0) {
    return (
      <div className="py-8">
        <h3 className="text-2xl font-bold mb-6 text-neutral-dark">{title}</h3>
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <p className="text-neutral">暂无{title}数据</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-neutral-light to-white relative">
      {/* 贯穿标题的背景 */}
      <div className="absolute left-0 top-0 w-full h-24 bg-gradient-to-r from-primary via-indigo-500 to-accent -z-10 rounded-b-3xl"></div>
      
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-neutral-dark mb-4 relative inline-block">
            {title}
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        
        {viewMode === 'card' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredModels.map((model, index) => (
              <div key={model.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <ModelCard model={model} />
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-neutral-light">
                  <th className="border border-gray-200 px-4 py-3 text-left">{t('list.supplier')}</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">{t('list.codingPlan')}</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">{t('list.company')}</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">{t('list.rating')}</th>
                  {(filter === 'paid' || filter === 'ai_tool') && (
                    <th className="border border-gray-200 px-4 py-3 text-left">{t('list.price')}</th>
                  )}
                  {filter === 'paid' && (
                    <>
                      <th className="border border-gray-200 px-4 py-3 text-left">{t('list.billingUnit')}</th>
                      <th className="border border-gray-200 px-4 py-3 text-left">{t('list.creditLimit')}</th>
                    </>
                  )}
                  <th className="border border-gray-200 px-4 py-3 text-left">{t('list.status')}</th>
                  <th className="border border-gray-200 px-4 py-3 text-left">{t('list.action')}</th>
                </tr>
              </thead>
              <tbody>
                {filteredModels.map(model => (
                  <tr key={model.id} className="hover:bg-white/50">
                    <td className="border border-gray-200 px-4 py-3 font-medium">{language === 'zh' ? model.name : model.nameEn || model.name}</td>
                    <td className="border border-gray-200 px-4 py-3">{language === 'zh' ? model.provider : model.providerEn || model.provider}</td>
                    <td className="border border-gray-200 px-4 py-3">{language === 'zh' ? model.company : model.companyEn || model.company}</td>
                    <td className="border border-gray-200 px-4 py-3">
                      {model.rating !== undefined && (
                        <div>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, index) => {
                              const rating = (model.type === 'paid' || model.type === 'ai_tool') ? model.rating! / 20 : model.rating!;
                              if (index < Math.floor(rating)) {
                                return <i key={index} className="fa fa-star text-yellow-400 mr-1"></i>;
                              } else if (index === Math.floor(rating) && rating % 1 !== 0) {
                                return <i key={index} className="fa fa-star-half-o text-yellow-400 mr-1"></i>;
                              } else {
                                return <i key={index} className="fa fa-star-o text-gray-300 mr-1"></i>;
                              }
                            })}
                          </div>
                          <div className="text-xs text-neutral">{model.rating}/{(model.type === 'paid' || model.type === 'ai_tool') ? 100 : 5}</div>
                        </div>
                      )}
                    </td>
                    {(filter === 'paid' || filter === 'ai_tool') && (
                      <td className="border border-gray-200 px-4 py-3">
                        {model.type === 'ai_tool' && model.priceDescription ? (
                          <span className="text-sm">{language === 'zh' ? model.priceDescription : model.priceDescriptionEn || model.priceDescription}</span>
                        ) : (
                          model.price ? `${model.price.currency} ${model.price.amount}/${model.price.unit}` : (language === 'zh' ? '免费' : 'Free')
                        )}
                      </td>
                    )}
                    {filter === 'paid' && (
                      <>
                        <td className="border border-gray-200 px-4 py-3">
                          {language === 'zh' ? (model.billingUnit || model.description.match(/计费单位：([^，]+)/)?.[1] || 'N/A') : (model.billingUnitEn || model.descriptionEn?.match(/Billing Unit: ([^,]+)/)?.[1] || 'N/A')}
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          {language === 'zh' ? (
                            model.creditLimit ? (
                              model.creditLimit.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                  {line}
                                  {index < model.creditLimit!.split('\n').length - 1 && <br />}
                                </React.Fragment>
                              ))
                            ) : (
                              <>
                                {model.description.match(/5小时限额：([^，]+)/)?.[1] || 'N/A'}
                                <br />
                                {model.description.match(/每月限额：([^，]+)/)?.[1] || 'N/A'}
                              </>
                            )
                          ) : (
                            model.creditLimitEn ? (
                              model.creditLimitEn.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                  {line}
                                  {index < model.creditLimitEn!.split('\n').length - 1 && <br />}
                                </React.Fragment>
                              ))
                            ) : (
                              <>
                                {model.descriptionEn?.match(/5-hour limit: ([^,]+)/)?.[1] || 'N/A'}
                                <br />
                                {model.descriptionEn?.match(/Monthly limit: ([^,]+)/)?.[1] || 'N/A'}
                              </>
                            )
                          )}
                        </td>
                      </>
                    )}
                    <td className="border border-gray-200 px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        model.status === 'available' ? 'bg-green-100 text-green-800' :
                        model.status === 'unavailable' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {model.status === 'available' ? t('status.available') :
                         model.status === 'unavailable' ? t('status.unavailable') : t('status.unknown')}
                      </span>
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      {model.url && (
                        <a 
                          href={model.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-primary hover:underline flex items-center font-medium transition-all duration-300"
                        >
                          {t('model.learnMore')} <i className="fa fa-arrow-right ml-2"></i>
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default ModelList;