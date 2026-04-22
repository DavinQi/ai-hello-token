import React from 'react';
import { Model } from '../types';
import { useI18n } from '../i18n/I18nContext';

interface LocalSetupProps {
  localModels: Model[];
}

const LocalSetup: React.FC<LocalSetupProps> = () => {
  const { t } = useI18n();
  return (
    <section className="py-16 bg-gradient-to-br from-neutral-light to-white relative">
      {/* 贯穿标题的背景 */}
      <div className="absolute left-0 top-0 w-full h-24 bg-gradient-to-r from-primary via-indigo-500 to-accent -z-10 rounded-b-3xl"></div>
      
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-neutral-dark mb-4 relative inline-block">
            {t('local.title')}
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('local.description')}
          </p>
        </div>
      
      {/* Ollama 部署方案 */}
      <div className="card-gradient rounded-2xl shadow-xl p-10 border border-white/50 shadow-neon animate-fade-in mb-12">
        <h4 className="text-2xl font-bold text-neutral-dark mb-6">{t('local.ollama.title')}</h4>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <div className="mb-8">
              <h5 className="text-sm font-semibold text-neutral-dark mb-4 uppercase tracking-wider">{t('local.ollama.minimumRequirements')}</h5>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-neutral-dark uppercase bg-neutral-light">
                    <tr>
                      <th scope="col" className="px-4 py-3">{t('local.ollama.computerConfig')}</th>
                      <th scope="col" className="px-4 py-3">{t('local.ollama.recommendedModel')}</th>
                      <th scope="col" className="px-4 py-3">{t('local.ollama.suitableFor')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white/50 border-b">
                      <td className="px-4 py-3">{t('local.ollama.computerConfig.8gb')}</td>
                      <td className="px-4 py-3">{t('local.ollama.recommendedModel.8gb')}</td>
                      <td className="px-4 py-3">{t('local.ollama.suitableFor.8gb')}</td>
                    </tr>
                    <tr className="bg-white/50 border-b">
                      <td className="px-4 py-3">{t('local.ollama.computerConfig.16gb')}</td>
                      <td className="px-4 py-3">{t('local.ollama.recommendedModel.16gb')}</td>
                      <td className="px-4 py-3">{t('local.ollama.suitableFor.16gb')}</td>
                    </tr>
                    <tr className="bg-white/50">
                      <td className="px-4 py-3">{t('local.ollama.computerConfig.16gb-gpu')}</td>
                      <td className="px-4 py-3">{t('local.ollama.recommendedModel.16gb-gpu')}</td>
                      <td className="px-4 py-3">{t('local.ollama.suitableFor.16gb-gpu')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mb-8">
              <h5 className="text-sm font-semibold text-neutral-dark mb-4 uppercase tracking-wider">{t('local.ollama.deploymentSteps')}</h5>
              <ol className="text-sm text-neutral space-y-3">
                <li className="flex items-start">
                  <span className="bg-gradient-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">1</span>
                  <span>{t('local.ollama.deploymentStep.1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gradient-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">2</span>
                  <span>{t('local.ollama.deploymentStep.2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gradient-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">3</span>
                  <span>{t('local.ollama.deploymentStep.3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gradient-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">4</span>
                  <span>{t('local.ollama.deploymentStep.4')}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gradient-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">5</span>
                  <span>{t('local.ollama.deploymentStep.5')}</span>
                </li>
              </ol>
            </div>
            
            <a 
              href="/pages/ollama-setup.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-primary text-white font-medium px-8 py-4 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 inline-block"
            >
              {t('local.ollama.viewDetailedSteps')}
            </a>
          </div>
          
          <div className="md:w-1/2 bg-white/60 backdrop-blur-sm rounded-xl p-8 border border-white/50">
            <h5 className="text-sm font-semibold text-neutral-dark mb-6 uppercase tracking-wider">{t('local.ollama.advantages')}</h5>
            <ul className="text-sm text-neutral space-y-4">
              <li className="flex items-start">
                <i className="fa fa-check-circle text-secondary mr-3 mt-1 text-lg"></i>
                <span className="leading-relaxed">
                  <strong>{t('local.ollama.corePosition')}</strong>{t('local.ollama.advantage.1')}
                </span>
              </li>
              <li className="flex items-start">
                <i className="fa fa-check-circle text-secondary mr-3 mt-1 text-lg"></i>
                <span className="leading-relaxed">
                  <strong>{t('local.ollama.crossPlatform')}</strong>{t('local.ollama.advantage.2')}
                </span>
              </li>
              <li className="flex items-start">
                <i className="fa fa-check-circle text-secondary mr-3 mt-1 text-lg"></i>
                <span className="leading-relaxed">
                  <strong>{t('local.ollama.richModelLibrary')}</strong>{t('local.ollama.advantage.3')}
                </span>
              </li>
              <li className="flex items-start">
                <i className="fa fa-check-circle text-secondary mr-3 mt-1 text-lg"></i>
                <span className="leading-relaxed">
                  <strong>{t('local.ollama.hardwareFriendly')}</strong>{t('local.ollama.advantage.4')}
                </span>
              </li>
              <li className="flex items-start">
                <i className="fa fa-check-circle text-secondary mr-3 mt-1 text-lg"></i>
                <span className="leading-relaxed">
                  <strong>{t('local.ollama.apiService')}</strong>{t('local.ollama.advantage.5')}
                </span>
              </li>
              <li className="flex items-start">
                <i className="fa fa-check-circle text-secondary mr-3 mt-1 text-lg"></i>
                <span className="leading-relaxed">
                  <strong>{t('local.ollama.privacySecurity')}</strong>{t('local.ollama.advantage.6')}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* LM Studio 部署方案 */}
      <div className="card-gradient rounded-2xl shadow-xl p-10 border border-white/50 shadow-neon animate-fade-in mb-12">
        <h4 className="text-2xl font-bold text-neutral-dark mb-6">{t('local.lmStudio.title')}</h4>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <div className="mb-8">
              <h5 className="text-sm font-semibold text-neutral-dark mb-4 uppercase tracking-wider">{t('local.lmStudio.minimumRequirements')}</h5>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-neutral-dark uppercase bg-neutral-light">
                    <tr>
                      <th scope="col" className="px-4 py-3">{t('local.lmStudio.computerConfig')}</th>
                      <th scope="col" className="px-4 py-3">{t('local.lmStudio.recommendedModel')}</th>
                      <th scope="col" className="px-4 py-3">{t('local.lmStudio.suitableFor')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white/50 border-b">
                      <td className="px-4 py-3">{t('local.lmStudio.computerConfig.8gb')}</td>
                      <td className="px-4 py-3">{t('local.lmStudio.recommendedModel.8gb')}</td>
                      <td className="px-4 py-3">{t('local.lmStudio.suitableFor.8gb')}</td>
                    </tr>
                    <tr className="bg-white/50 border-b">
                      <td className="px-4 py-3">{t('local.lmStudio.computerConfig.16gb')}</td>
                      <td className="px-4 py-3">{t('local.lmStudio.recommendedModel.16gb')}</td>
                      <td className="px-4 py-3">{t('local.lmStudio.suitableFor.16gb')}</td>
                    </tr>
                    <tr className="bg-white/50">
                      <td className="px-4 py-3">{t('local.lmStudio.computerConfig.16gb-gpu')}</td>
                      <td className="px-4 py-3">{t('local.lmStudio.recommendedModel.16gb-gpu')}</td>
                      <td className="px-4 py-3">{t('local.lmStudio.suitableFor.16gb-gpu')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mb-8">
              <h5 className="text-sm font-semibold text-neutral-dark mb-4 uppercase tracking-wider">{t('local.lmStudio.deploymentSteps')}</h5>
              <ol className="text-sm text-neutral space-y-3">
                <li className="flex items-start">
                  <span className="bg-gradient-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">1</span>
                  <span>{t('local.lmStudio.deploymentStep.1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gradient-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">2</span>
                  <span>{t('local.lmStudio.deploymentStep.2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gradient-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">3</span>
                  <span>{t('local.lmStudio.deploymentStep.3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gradient-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">4</span>
                  <span>{t('local.lmStudio.deploymentStep.4')}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gradient-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">5</span>
                  <span>{t('local.lmStudio.deploymentStep.5')}</span>
                </li>
              </ol>
            </div>
            
            <a 
              href="/pages/lm-studio-setup.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-primary text-white font-medium px-8 py-4 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 inline-block"
            >
              {t('local.lmStudio.viewDetailedSteps')}
            </a>
          </div>
          
          <div className="md:w-1/2 bg-white/60 backdrop-blur-sm rounded-xl p-8 border border-white/50">
            <h5 className="text-sm font-semibold text-neutral-dark mb-6 uppercase tracking-wider">{t('local.lmStudio.advantages')}</h5>
            <ul className="text-sm text-neutral space-y-4">
              <li className="flex items-start">
                <i className="fa fa-check-circle text-secondary mr-3 mt-1 text-lg"></i>
                <span className="leading-relaxed">
                  <strong>{t('local.lmStudio.corePosition')}</strong>{t('local.lmStudio.advantage.1')}
                </span>
              </li>
              <li className="flex items-start">
                <i className="fa fa-check-circle text-secondary mr-3 mt-1 text-lg"></i>
                <span className="leading-relaxed">
                  <strong>{t('local.lmStudio.fullGUI')}</strong>{t('local.lmStudio.advantage.2')}
                </span>
              </li>
              <li className="flex items-start">
                <i className="fa fa-check-circle text-secondary mr-3 mt-1 text-lg"></i>
                <span className="leading-relaxed">
                  <strong>{t('local.lmStudio.modelSearchDownload')}</strong>{t('local.lmStudio.advantage.3')}
                </span>
              </li>
              <li className="flex items-start">
                <i className="fa fa-check-circle text-secondary mr-3 mt-1 text-lg"></i>
                <span className="leading-relaxed">
                  <strong>{t('local.lmStudio.chatExperience')}</strong>{t('local.lmStudio.advantage.4')}
                </span>
              </li>
              <li className="flex items-start">
                <i className="fa fa-check-circle text-secondary mr-3 mt-1 text-lg"></i>
                <span className="leading-relaxed">
                  <strong>{t('local.lmStudio.promptDebugging')}</strong>{t('local.lmStudio.advantage.5')}
                </span>
              </li>
              <li className="flex items-start">
                <i className="fa fa-check-circle text-secondary mr-3 mt-1 text-lg"></i>
                <span className="leading-relaxed">
                  <strong>{t('local.lmStudio.offlineRun')}</strong>{t('local.lmStudio.advantage.6')}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* LocalAI 部署方案 */}
      <div className="card-gradient rounded-2xl shadow-xl p-10 border border-white/50 shadow-neon animate-fade-in mb-12">
        <h4 className="text-2xl font-bold text-neutral-dark mb-6">{t('local.localAI.title')}</h4>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <div className="mb-8">
              <h5 className="text-sm font-semibold text-neutral-dark mb-4 uppercase tracking-wider">{t('local.localAI.minimumRequirements')}</h5>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-neutral-dark uppercase bg-neutral-light">
                    <tr>
                      <th scope="col" className="px-4 py-3">{t('local.localAI.configLevel')}</th>
                      <th scope="col" className="px-4 py-3">{t('local.localAI.hardwareRequirements')}</th>
                      <th scope="col" className="px-4 py-3">{t('local.localAI.suitableFor')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white/50 border-b">
                      <td className="px-4 py-3">{t('local.localAI.configLevel.basic')}</td>
                      <td className="px-4 py-3">{t('local.localAI.hardwareRequirements.basic')}</td>
                      <td className="px-4 py-3">{t('local.localAI.suitableFor.basic')}</td>
                    </tr>
                    <tr className="bg-white/50 border-b">
                      <td className="px-4 py-3">{t('local.localAI.configLevel.experience')}</td>
                      <td className="px-4 py-3">{t('local.localAI.hardwareRequirements.experience')}</td>
                      <td className="px-4 py-3">{t('local.localAI.suitableFor.experience')}</td>
                    </tr>
                    <tr className="bg-white/50">
                      <td className="px-4 py-3">{t('local.localAI.configLevel.professional')}</td>
                      <td className="px-4 py-3">{t('local.localAI.hardwareRequirements.professional')}</td>
                      <td className="px-4 py-3">{t('local.localAI.suitableFor.professional')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mb-8">
              <h5 className="text-sm font-semibold text-neutral-dark mb-4 uppercase tracking-wider">{t('local.localAI.deploymentSteps')}</h5>
              <ol className="text-sm text-neutral space-y-3">
                <li className="flex items-start">
                  <span className="bg-gradient-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">1</span>
                  <span>{t('local.localAI.deploymentStep.1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gradient-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">2</span>
                  <span>{t('local.localAI.deploymentStep.2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gradient-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">3</span>
                  <span>{t('local.localAI.deploymentStep.3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gradient-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">4</span>
                  <span>{t('local.localAI.deploymentStep.4')}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gradient-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">5</span>
                  <span>{t('local.localAI.deploymentStep.5')}</span>
                </li>
              </ol>
            </div>
            
            <a 
              href="/pages/localai-setup.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-primary text-white font-medium px-8 py-4 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 inline-block"
            >
              {t('local.localAI.viewDetailedSteps')}
            </a>
          </div>
          
          <div className="md:w-1/2 bg-white/60 backdrop-blur-sm rounded-xl p-8 border border-white/50">
            <h5 className="text-sm font-semibold text-neutral-dark mb-6 uppercase tracking-wider">{t('local.localAI.advantages')}</h5>
            <ul className="text-sm text-neutral space-y-4">
              <li className="flex items-start">
                <i className="fa fa-check-circle text-secondary mr-3 mt-1 text-lg"></i>
                <span className="leading-relaxed">
                  <strong>{t('local.localAI.corePosition')}</strong>{t('local.localAI.advantage.1')}
                </span>
              </li>
              <li className="flex items-start">
                <i className="fa fa-check-circle text-secondary mr-3 mt-1 text-lg"></i>
                <span className="leading-relaxed">
                  <strong>{t('local.localAI.multiModalSupport')}</strong>{t('local.localAI.advantage.2')}
                </span>
              </li>
              <li className="flex items-start">
                <i className="fa fa-check-circle text-secondary mr-3 mt-1 text-lg"></i>
                <span className="leading-relaxed">
                  <strong>{t('local.localAI.apiCompatibility')}</strong>{t('local.localAI.advantage.3')}
                </span>
              </li>
              <li className="flex items-start">
                <i className="fa fa-check-circle text-secondary mr-3 mt-1 text-lg"></i>
                <span className="leading-relaxed">
                  <strong>{t('local.localAI.agentSupport')}</strong>{t('local.localAI.advantage.4')}
                </span>
              </li>
              <li className="flex items-start">
                <i className="fa fa-check-circle text-secondary mr-3 mt-1 text-lg"></i>
                <span className="leading-relaxed">
                  <strong>{t('local.localAI.enterpriseDeployment')}</strong>{t('local.localAI.advantage.5')}
                </span>
              </li>
              <li className="flex items-start">
                <i className="fa fa-check-circle text-secondary mr-3 mt-1 text-lg"></i>
                <span className="leading-relaxed">
                  <strong>{t('local.localAI.hardwareAdaptation')}</strong>{t('local.localAI.advantage.6')}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* 工具对比 */}
      <div className="card-gradient rounded-2xl shadow-xl p-10 border border-white/50 shadow-neon animate-fade-in">
        <h4 className="text-2xl font-bold text-neutral-dark mb-6">{t('local.comparison.title')}</h4>
        
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-neutral-dark uppercase bg-neutral-light">
              <tr>
                <th scope="col" className="px-4 py-3">{t('local.comparison.comparisonDimension')}</th>
                <th scope="col" className="px-4 py-3">Ollama</th>
                <th scope="col" className="px-4 py-3">LM Studio</th>
                <th scope="col" className="px-4 py-3">LocalAI</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white/50 border-b">
                <td className="px-4 py-3 font-medium">{t('local.comparison.corePosition')}</td>
                <td className="px-4 py-3">{t('local.comparison.ollama.corePosition')}</td>
                <td className="px-4 py-3">{t('local.comparison.lmStudio.corePosition')}</td>
                <td className="px-4 py-3">{t('local.comparison.localAI.corePosition')}</td>
              </tr>
              <tr className="bg-white/50 border-b">
                <td className="px-4 py-3 font-medium">{t('local.comparison.mainAudience')}</td>
                <td className="px-4 py-3">{t('local.comparison.ollama.mainAudience')}</td>
                <td className="px-4 py-3">{t('local.comparison.lmStudio.mainAudience')}</td>
                <td className="px-4 py-3">{t('local.comparison.localAI.mainAudience')}</td>
              </tr>
              <tr className="bg-white/50 border-b">
                <td className="px-4 py-3 font-medium">{t('local.comparison.usageMethod')}</td>
                <td className="px-4 py-3">{t('local.comparison.ollama.usageMethod')}</td>
                <td className="px-4 py-3">{t('local.comparison.lmStudio.usageMethod')}</td>
                <td className="px-4 py-3">{t('local.comparison.localAI.usageMethod')}</td>
              </tr>
              <tr className="bg-white/50 border-b">
                <td className="px-4 py-3 font-medium">{t('local.comparison.difficultyLevel')}</td>
                <td className="px-4 py-3">{t('local.comparison.ollama.difficultyLevel')}</td>
                <td className="px-4 py-3">{t('local.comparison.lmStudio.difficultyLevel')}</td>
                <td className="px-4 py-3">{t('local.comparison.localAI.difficultyLevel')}</td>
              </tr>
              <tr className="bg-white/50 border-b">
                <td className="px-4 py-3 font-medium">{t('local.comparison.engineeringIntegration')}</td>
                <td className="px-4 py-3">{t('local.comparison.ollama.engineeringIntegration')}</td>
                <td className="px-4 py-3">{t('local.comparison.lmStudio.engineeringIntegration')}</td>
                <td className="px-4 py-3">{t('local.comparison.localAI.engineeringIntegration')}</td>
              </tr>
              <tr className="bg-white/50">
                <td className="px-4 py-3 font-medium">{t('local.comparison.typicalUseCases')}</td>
                <td className="px-4 py-3">{t('local.comparison.ollama.typicalUseCases')}</td>
                <td className="px-4 py-3">{t('local.comparison.lmStudio.typicalUseCases')}</td>
                <td className="px-4 py-3">{t('local.comparison.localAI.typicalUseCases')}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <a 
            href="/pages/tools-comparison.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-primary text-white font-medium px-8 py-4 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 inline-block"
          >
            {t('local.comparison.viewDetailedComparison')}
          </a>
          <a 
            href="/pages/models-summary.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-primary border-2 border-primary font-medium px-8 py-4 rounded-lg hover:bg-primary/5 transition-all duration-300 inline-block"
          >
            {t('local.comparison.viewTop10Models')}
          </a>
        </div>
      </div>
      
      {/* 本地模型 Top 20 */}
      <div className="mt-12">
        <h4 className="text-xl font-bold text-neutral-dark mb-6">{t('local.top20.title')}</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Model 1 */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-between items-center mb-4">
              <h5 className="font-bold text-neutral-dark">{t('local.top20.models.glm51.name')}</h5>
              <span className="text-xs font-medium text-primary">397B 参数</span>
            </div>
            <p className="text-sm text-neutral mb-4 leading-relaxed">{t('local.top20.models.glm51.description')}</p>
            <div className="mb-4">
              <div className="text-xs text-neutral mb-1">{t('local.top20.memoryRequirements')} {t('local.top20.models.glm51.memory')}</div>
              <div className="text-xs text-neutral mb-1">{t('local.top20.bestFor')} {t('local.top20.models.glm51.bestFor')}</div>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href="https://huggingface.co/THUDM" target="_blank" rel="noopener noreferrer" className="text-xs bg-neutral-light text-neutral-dark px-3 py-1 rounded hover:bg-neutral transition-colors">
                <i className="fa fa-external-link mr-1"></i> Hugging Face
              </a>
              <a href="https://ollama.com/library/glm5" target="_blank" rel="noopener noreferrer" className="text-xs bg-primary text-white px-3 py-1 rounded hover:bg-primary/90 transition-colors">
                <i className="fa fa-download mr-1"></i> Ollama 库
              </a>
            </div>
          </div>
          
          {/* Model 2 */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-between items-center mb-4">
              <h5 className="font-bold text-neutral-dark">{t('local.top20.models.qwen36.name')}</h5>
              <span className="text-xs font-medium text-primary">35B 参数</span>
            </div>
            <p className="text-sm text-neutral mb-4 leading-relaxed">{t('local.top20.models.qwen36.description')}</p>
            <div className="mb-4">
              <div className="text-xs text-neutral mb-1">{t('local.top20.memoryRequirements')} {t('local.top20.models.qwen36.memory')}</div>
              <div className="text-xs text-neutral mb-1">{t('local.top20.bestFor')} {t('local.top20.models.qwen36.bestFor')}</div>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href="https://huggingface.co/Qwen" target="_blank" rel="noopener noreferrer" className="text-xs bg-neutral-light text-neutral-dark px-3 py-1 rounded hover:bg-neutral transition-colors">
                <i className="fa fa-external-link mr-1"></i> Hugging Face
              </a>
              <a href="https://ollama.com/library/qwen3.6" target="_blank" rel="noopener noreferrer" className="text-xs bg-primary text-white px-3 py-1 rounded hover:bg-primary/90 transition-colors">
                <i className="fa fa-download mr-1"></i> Ollama 库
              </a>
            </div>
          </div>
          
          {/* Model 3 */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-between items-center mb-4">
              <h5 className="font-bold text-neutral-dark">{t('local.top20.models.llama4.name')}</h5>
              <span className="text-xs font-medium text-primary">70B 参数</span>
            </div>
            <p className="text-sm text-neutral mb-4 leading-relaxed">{t('local.top20.models.llama4.description')}</p>
            <div className="mb-4">
              <div className="text-xs text-neutral mb-1">{t('local.top20.memoryRequirements')} {t('local.top20.models.llama4.memory')}</div>
              <div className="text-xs text-neutral mb-1">{t('local.top20.bestFor')} {t('local.top20.models.llama4.bestFor')}</div>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href="https://huggingface.co/meta-llama" target="_blank" rel="noopener noreferrer" className="text-xs bg-neutral-light text-neutral-dark px-3 py-1 rounded hover:bg-neutral transition-colors">
                <i className="fa fa-external-link mr-1"></i> Hugging Face
              </a>
              <a href="https://ollama.com/library/llama4" target="_blank" rel="noopener noreferrer" className="text-xs bg-primary text-white px-3 py-1 rounded hover:bg-primary/90 transition-colors">
                <i className="fa fa-download mr-1"></i> Ollama 库
              </a>
            </div>
          </div>
          
          {/* Model 4 */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-between items-center mb-4">
              <h5 className="font-bold text-neutral-dark">{t('local.top20.models.minimax.name')}</h5>
              <span className="text-xs font-medium text-primary">230B 参数</span>
            </div>
            <p className="text-sm text-neutral mb-4 leading-relaxed">{t('local.top20.models.minimax.description')}</p>
            <div className="mb-4">
              <div className="text-xs text-neutral mb-1">{t('local.top20.memoryRequirements')} {t('local.top20.models.minimax.memory')}</div>
              <div className="text-xs text-neutral mb-1">{t('local.top20.bestFor')} {t('local.top20.models.minimax.bestFor')}</div>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href="https://huggingface.co/minimax" target="_blank" rel="noopener noreferrer" className="text-xs bg-neutral-light text-neutral-dark px-3 py-1 rounded hover:bg-neutral transition-colors">
                <i className="fa fa-external-link mr-1"></i> Hugging Face
              </a>
              <a href="https://ollama.com/library/minimax" target="_blank" rel="noopener noreferrer" className="text-xs bg-primary text-white px-3 py-1 rounded hover:bg-primary/90 transition-colors">
                <i className="fa fa-download mr-1"></i> Ollama 库
              </a>
            </div>
          </div>
          
          {/* Model 5 */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-between items-center mb-4">
              <h5 className="font-bold text-neutral-dark">{t('local.top20.models.deepseekv4.name')}</h5>
              <span className="text-xs font-medium text-primary">67B 参数</span>
            </div>
            <p className="text-sm text-neutral mb-4 leading-relaxed">{t('local.top20.models.deepseekv4.description')}</p>
            <div className="mb-4">
              <div className="text-xs text-neutral mb-1">{t('local.top20.memoryRequirements')} {t('local.top20.models.deepseekv4.memory')}</div>
              <div className="text-xs text-neutral mb-1">{t('local.top20.bestFor')} {t('local.top20.models.deepseekv4.bestFor')}</div>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href="https://huggingface.co/deepseek-ai" target="_blank" rel="noopener noreferrer" className="text-xs bg-neutral-light text-neutral-dark px-3 py-1 rounded hover:bg-neutral transition-colors">
                <i className="fa fa-external-link mr-1"></i> Hugging Face
              </a>
              <a href="https://ollama.com/library/deepseek-v4" target="_blank" rel="noopener noreferrer" className="text-xs bg-primary text-white px-3 py-1 rounded hover:bg-primary/90 transition-colors">
                <i className="fa fa-download mr-1"></i> Ollama 库
              </a>
            </div>
          </div>
          
          {/* Model 6 */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-between items-center mb-4">
              <h5 className="font-bold text-neutral-dark">{t('local.top20.models.qwen35.name')}</h5>
              <span className="text-xs font-medium text-primary">34B 参数</span>
            </div>
            <p className="text-sm text-neutral mb-4 leading-relaxed">{t('local.top20.models.qwen35.description')}</p>
            <div className="mb-4">
              <div className="text-xs text-neutral mb-1">{t('local.top20.memoryRequirements')} {t('local.top20.models.qwen35.memory')}</div>
              <div className="text-xs text-neutral mb-1">{t('local.top20.bestFor')} {t('local.top20.models.qwen35.bestFor')}</div>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href="https://huggingface.co/Qwen" target="_blank" rel="noopener noreferrer" className="text-xs bg-neutral-light text-neutral-dark px-3 py-1 rounded hover:bg-neutral transition-colors">
                <i className="fa fa-external-link mr-1"></i> Hugging Face
              </a>
              <a href="https://ollama.com/library/qwen3.5" target="_blank" rel="noopener noreferrer" className="text-xs bg-primary text-white px-3 py-1 rounded hover:bg-primary/90 transition-colors">
                <i className="fa fa-download mr-1"></i> Ollama 库
              </a>
            </div>
          </div>
          
          {/* Model 7 */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-between items-center mb-4">
              <h5 className="font-bold text-neutral-dark">{t('local.top20.models.mistral.name')}</h5>
              <span className="text-xs font-medium text-primary">34B 参数</span>
            </div>
            <p className="text-sm text-neutral mb-4 leading-relaxed">{t('local.top20.models.mistral.description')}</p>
            <div className="mb-4">
              <div className="text-xs text-neutral mb-1">{t('local.top20.memoryRequirements')} {t('local.top20.models.mistral.memory')}</div>
              <div className="text-xs text-neutral mb-1">{t('local.top20.bestFor')} {t('local.top20.models.mistral.bestFor')}</div>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href="https://huggingface.co/mistralai" target="_blank" rel="noopener noreferrer" className="text-xs bg-neutral-light text-neutral-dark px-3 py-1 rounded hover:bg-neutral transition-colors">
                <i className="fa fa-external-link mr-1"></i> Hugging Face
              </a>
              <a href="https://ollama.com/library/mistral-large" target="_blank" rel="noopener noreferrer" className="text-xs bg-primary text-white px-3 py-1 rounded hover:bg-primary/90 transition-colors">
                <i className="fa fa-download mr-1"></i> Ollama 库
              </a>
            </div>
          </div>
          
          {/* Model 8 */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-between items-center mb-4">
              <h5 className="font-bold text-neutral-dark">{t('local.top20.models.gemma4.name')}</h5>
              <span className="text-xs font-medium text-primary">27B 参数</span>
            </div>
            <p className="text-sm text-neutral mb-4 leading-relaxed">{t('local.top20.models.gemma4.description')}</p>
            <div className="mb-4">
              <div className="text-xs text-neutral mb-1">{t('local.top20.memoryRequirements')} {t('local.top20.models.gemma4.memory')}</div>
              <div className="text-xs text-neutral mb-1">{t('local.top20.bestFor')} {t('local.top20.models.gemma4.bestFor')}</div>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href="https://huggingface.co/google" target="_blank" rel="noopener noreferrer" className="text-xs bg-neutral-light text-neutral-dark px-3 py-1 rounded hover:bg-neutral transition-colors">
                <i className="fa fa-external-link mr-1"></i> Hugging Face
              </a>
              <a href="https://ollama.com/library/gemma4" target="_blank" rel="noopener noreferrer" className="text-xs bg-primary text-white px-3 py-1 rounded hover:bg-primary/90 transition-colors">
                <i className="fa fa-download mr-1"></i> Ollama 库
              </a>
            </div>
          </div>
          
          {/* Model 9 */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-between items-center mb-4">
              <h5 className="font-bold text-neutral-dark">{t('local.top20.models.yi34.name')}</h5>
              <span className="text-xs font-medium text-primary">34B 参数</span>
            </div>
            <p className="text-sm text-neutral mb-4 leading-relaxed">{t('local.top20.models.yi34.description')}</p>
            <div className="mb-4">
              <div className="text-xs text-neutral mb-1">{t('local.top20.memoryRequirements')} {t('local.top20.models.yi34.memory')}</div>
              <div className="text-xs text-neutral mb-1">{t('local.top20.bestFor')} {t('local.top20.models.yi34.bestFor')}</div>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href="https://huggingface.co/01-ai" target="_blank" rel="noopener noreferrer" className="text-xs bg-neutral-light text-neutral-dark px-3 py-1 rounded hover:bg-neutral transition-colors">
                <i className="fa fa-external-link mr-1"></i> Hugging Face
              </a>
              <a href="https://ollama.com/library/yi34" target="_blank" rel="noopener noreferrer" className="text-xs bg-primary text-white px-3 py-1 rounded hover:bg-primary/90 transition-colors">
                <i className="fa fa-download mr-1"></i> Ollama 库
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href="/pages/models-summary.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-primary text-white font-medium px-8 py-4 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 inline-block"
          >
            {t('local.top20.viewFullTop20')}
          </a>
        </div>
      </div>
      </div>
    </section>
  );
};

export default LocalSetup;