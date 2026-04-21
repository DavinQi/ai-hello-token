import React from 'react';
import { ModelType } from '../types';
import { useI18n } from '../i18n/I18nContext';

interface FilterBarProps {
  onFilterChange: (filter: ModelType) => void;
  onSearchChange: (search: string) => void;
  currentFilter: ModelType;
  viewMode: 'card' | 'list';
  onViewModeChange: (mode: 'card' | 'list') => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ 
  onFilterChange, 
  onSearchChange, 
  currentFilter,
  viewMode,
  onViewModeChange
}) => {
  const { t } = useI18n();
  return (
    <section className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4">
        {/* 搜索框行 */}
        <div className="mb-4">
          <input 
            type="text" 
            placeholder={t('filter.search')} 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        
        {/* 选项卡和开关行 */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex gap-2">
            <button 
              className={`px-4 py-2 rounded-lg transition-colors ${currentFilter === 'all' ? 'bg-primary text-white' : 'bg-neutral-light text-neutral-dark hover:bg-neutral'}`}
              onClick={(e) => {
                const button = e.currentTarget as HTMLElement;
                button.style.animation = 'jump 0.5s ease-out';
                setTimeout(() => {
                  button.style.animation = '';
                }, 500);
                onFilterChange('all');
              }}
            >
              {t('filter.all')}
            </button>
            <button 
              className={`px-4 py-2 rounded-lg transition-colors ${currentFilter === 'free' ? 'bg-primary text-white' : 'bg-neutral-light text-neutral-dark hover:bg-neutral'}`}
              onClick={(e) => {
                const button = e.currentTarget as HTMLElement;
                button.style.animation = 'jump 0.5s ease-out';
                setTimeout(() => {
                  button.style.animation = '';
                }, 500);
                onFilterChange('free');
              }}
            >
              {t('filter.free')}
            </button>
            <button 
              className={`px-4 py-2 rounded-lg transition-colors ${currentFilter === 'paid' ? 'bg-primary text-white' : 'bg-neutral-light text-neutral-dark hover:bg-neutral'}`}
              onClick={(e) => {
                const button = e.currentTarget as HTMLElement;
                button.style.animation = 'jump 0.5s ease-out';
                setTimeout(() => {
                  button.style.animation = '';
                }, 500);
                onFilterChange('paid');
              }}
            >
              {t('filter.paid')}
            </button>
            <button 
              className={`px-4 py-2 rounded-lg transition-colors ${currentFilter === 'local' ? 'bg-primary text-white' : 'bg-neutral-light text-neutral-dark hover:bg-neutral'}`}
              onClick={(e) => {
                const button = e.currentTarget as HTMLElement;
                button.style.animation = 'jump 0.5s ease-out';
                setTimeout(() => {
                  button.style.animation = '';
                }, 500);
                onFilterChange('local');
              }}
            >
              {t('filter.local')}
            </button>
            <button 
              className={`px-4 py-2 rounded-lg transition-colors ${currentFilter === 'benefit' ? 'bg-primary text-white' : 'bg-neutral-light text-neutral-dark hover:bg-neutral'}`}
              onClick={(e) => {
                const button = e.currentTarget as HTMLElement;
                button.style.animation = 'jump 0.5s ease-out';
                setTimeout(() => {
                  button.style.animation = '';
                }, 500);
                onFilterChange('benefit');
              }}
            >
              {t('filter.benefit')}
            </button>
            <button 
              className={`px-4 py-2 rounded-lg transition-colors ${currentFilter === 'ai_tool' ? 'bg-primary text-white' : 'bg-neutral-light text-neutral-dark hover:bg-neutral'}`}
              onClick={(e) => {
                const button = e.currentTarget as HTMLElement;
                button.style.animation = 'jump 0.5s ease-out';
                setTimeout(() => {
                  button.style.animation = '';
                }, 500);
                onFilterChange('ai_tool');
              }}
            >
              {t('nav.ai_tool')}
            </button>
          </div>
          {currentFilter === 'free' || currentFilter === 'paid' || currentFilter === 'ai_tool' ? (
            <div className="flex items-center ml-0">
              <div className="relative inline-block w-16 h-7 cursor-pointer" onClick={() => onViewModeChange(viewMode === 'card' ? 'list' : 'card')}>
                <input 
                  type="checkbox" 
                  checked={viewMode === 'list'} 
                  onChange={(e) => onViewModeChange(e.target.checked ? 'list' : 'card')}
                  className="sr-only"
                />
                <div className={`absolute inset-0 rounded-full transition-colors duration-300 ${viewMode === 'list' ? 'bg-primary' : 'bg-neutral-light'}`}></div>
                <div className={`absolute left-0.5 top-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 ${viewMode === 'list' ? 'transform translate-x-9' : ''}`}></div>
                <div className="absolute inset-0 flex items-center px-1.5 text-xs font-medium">
                  <span className={`${viewMode === 'card' ? 'text-primary' : 'text-gray-400'}`}>{t('filter.cardView')}</span>
                  <span className={`ml-auto ${viewMode === 'list' ? 'text-white' : 'text-gray-400'}`}>{t('filter.listView')}</span>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default FilterBar;