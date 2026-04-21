import React, { useState } from 'react';
import { useI18n } from '../i18n/I18nContext';

const BenefitShare: React.FC = () => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const { t } = useI18n();

  const handleImageClick = (imageSrc: string) => {
    setExpandedImage(imageSrc);
  };

  const handleCloseExpandedImage = () => {
    setExpandedImage(null);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-neutral-light to-white">
      {/* 贯穿标题的背景 */}
      <div className="absolute left-0 top-0 w-full h-24 bg-gradient-to-r from-primary via-indigo-500 to-accent -z-10 rounded-b-3xl"></div>
      
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-neutral-dark mb-4 relative inline-block">
            {t('benefit.title')}
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('benefit.description')}
          </p>
        </div>
        
        <div className="space-y-8">
          {/* MiniMax 福利 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-neutral-dark mb-4">{t('benefit.minimax.title')}</h3>
                <p className="text-gray-600 mb-4">Token Plan 共建邀请计划 至2026.4.30</p>
                <p className="text-gray-600 mb-8">{t('benefit.minimax.description')}</p>
                <a 
                  href="https://platform.minimaxi.com/subscribe/token-plan?code=LJJmM7r1un&source=link" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center bg-primary hover:bg-primary/80 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  <i className="fa fa-link mr-2"></i> {t('benefit.minimax.viewDetails')}
                </a>
              </div>
              <div className="w-full md:w-1/3 bg-gray-50 p-4 flex items-center justify-center">
                <img 
                  src="https://img.cdn.apipost.cn/client/user/1391646/avatar/c815f4b9ff454c3d6c0b6e18013f0f3e69e7190d1552d.png" 
                  alt="MiniMax Token Plan 邀请" 
                  className="w-full h-auto max-w-xs rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:scale-105"
                  onClick={() => handleImageClick("https://img.cdn.apipost.cn/client/user/1391646/avatar/c815f4b9ff454c3d6c0b6e18013f0f3e69e7190d1552d.png")}
                />
              </div>
            </div>
          </div>
          
          {/* 智谱 Coding Plan 福利 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-neutral-dark mb-4">{t('benefit.zhipu.title')}</h3>
                <p className="text-gray-600 mb-4">国内顶流编程大模型，20+主流工具全适配</p>
                <p className="text-gray-600 mb-8">{t('benefit.zhipu.description')}</p>
                <a 
                  href="https://www.bigmodel.cn/glm-coding?ic=FVGJBDYOBR" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center bg-primary hover:bg-primary/80 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  <i className="fa fa-link mr-2"></i> {t('benefit.zhipu.viewDetails')}
                </a>
              </div>
              <div className="w-full md:w-1/3 bg-gray-50 p-4 flex items-center justify-center">
                <img 
                  src="https://img.cdn.apipost.cn/client/user/1391646/avatar/d711a430c5a0fa5b28d1db57199a7cd569e71bd49c8a4.png" 
                  alt="智谱 Coding Plan" 
                  className="w-full h-auto max-w-xs rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:scale-105"
                  onClick={() => handleImageClick("https://img.cdn.apipost.cn/client/user/1391646/avatar/d711a430c5a0fa5b28d1db57199a7cd569e71bd49c8a4.png")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 图片放大预览 */}
      {expandedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={handleCloseExpandedImage}>
          <img 
            src={expandedImage} 
            alt="放大预览" 
            className="max-w-[50vw] max-h-[50vh] object-contain rounded-lg animate-fade-in"
            onClick={(e) => e.stopPropagation()} // 防止点击图片时关闭
          />
          <button 
            className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
            onClick={handleCloseExpandedImage}
          >
            <i className="fa fa-times text-xl"></i>
          </button>
        </div>
      )}
    </section>
  );
};

export default BenefitShare;