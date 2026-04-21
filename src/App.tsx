import React, { useState, useEffect } from 'react';
import { Model, ModelType, ModelData } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import FilterBar from './components/FilterBar';
import ModelList from './components/ModelList';
import LocalSetup from './components/LocalSetup';
import BenefitShare from './components/BenefitShare';
import rippleEffect from './utils/rippleEffect';
import { useI18n } from './i18n/I18nContext';

const App: React.FC = () => {
  const [models, setModels] = useState<Model[]>([]);
  const [aiTools, setAiTools] = useState<Model[]>([]);
  const [filter, setFilter] = useState<ModelType>('all');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'card' | 'list'>('card');
  const { t } = useI18n();

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await import('../data/models.json');
        const data: ModelData = response.default as ModelData;
        setModels(data.models);

        const toolsResponse = await import('../data/programming_tools.json');
        const toolsData: any = toolsResponse.default;
        setAiTools(toolsData.tools);
      } catch (error) {
        console.error('Error fetching models:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchModels();
    rippleEffect.initialize();

    return () => {
      rippleEffect.destroy();
    };
  }, []);

  // 监听 URL 哈希变化
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // 移除 # 符号
      if (['all', 'free', 'paid', 'local', 'benefit', 'ai_tool'].includes(hash)) {
        setFilter(hash as ModelType);
      }
    };

    // 初始加载时检查哈希
    handleHashChange();

    // 添加事件监听器
    window.addEventListener('hashchange', handleHashChange);

    // 清理事件监听器
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const filteredModels = models.filter(model => {
    const matchesSearch = model.name.toLowerCase().includes(search.toLowerCase()) ||
                         model.provider.toLowerCase().includes(search.toLowerCase()) ||
                         model.description.toLowerCase().includes(search.toLowerCase());
    
    if (filter === 'all') return matchesSearch;
    return model.type === filter && matchesSearch;
  });

  const filteredAiTools = aiTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(search.toLowerCase()) ||
                         tool.provider.toLowerCase().includes(search.toLowerCase()) ||
                         tool.description.toLowerCase().includes(search.toLowerCase());
    
    if (filter === 'all') return matchesSearch;
    return tool.type === filter && matchesSearch;
  });

  const localModels = models.filter(model => model.type === 'local');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-neutral-dark">{t('loading')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-neutral-light to-white">
      <Header />
      
      {/* Banner Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-8 px-6 banner-animation">
        <div className="container-custom mx-auto">
          <svg width="350" height="80" className="mb-2 hello-token-animation">
            <text x="40" y="60" fontFamily="'Indie Flower', cursive" fontSize="50" fill="white">Hello Token</text>
          </svg>
          <h2 className="text-base md:text-lg mb-2 font-light">{t('hero.title')}</h2>
          <p className="text-sm md:text-base opacity-90 max-w-3xl font-light">
            {t('hero.description')}
          </p>
        </div>
      </section>

      <FilterBar 
        onFilterChange={setFilter} 
        onSearchChange={setSearch}
        currentFilter={filter}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      <main className="flex-grow container-custom py-12">
        {filter === 'all' && (
          <>
            <ModelList 
              models={models.filter(m => m.type === 'free')} 
              filter="free" 
              title={t('free.title')} 
              description={t('free.description')}
              viewMode={viewMode}
            />
            <ModelList 
              models={models.filter(m => m.type === 'paid')} 
              filter="paid" 
              title={t('paid.title')} 
              description={t('paid.description')}
              viewMode={viewMode}
            />
            <ModelList 
              models={aiTools} 
              filter="ai_tool" 
              title={t('ai_tool.title')} 
              description={t('ai_tool.description')}
              viewMode={viewMode}
            />
            <LocalSetup localModels={localModels} />
            <BenefitShare />
          </>
        )}
        
        {filter === 'free' && (
          <ModelList 
            models={filteredModels} 
            filter="free" 
            title={t('free.title')} 
            description={t('free.description')}
            viewMode={viewMode}
          />
        )}
        
        {filter === 'paid' && (
          <ModelList 
            models={filteredModels} 
            filter="paid" 
            title={t('paid.title')} 
            description={t('paid.description')}
            viewMode={viewMode}
          />
        )}
        
        {filter === 'local' && (
          <LocalSetup localModels={filteredModels as Model[]} />
        )}
        
        {filter === 'benefit' && (
          <BenefitShare />
        )}
        
        {filter === 'ai_tool' && (
          <ModelList 
            models={filteredAiTools} 
            filter="ai_tool" 
            title={t('ai_tool.title')} 
            description={t('ai_tool.description')}
            viewMode={viewMode}
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;