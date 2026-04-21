# ai-hello-token

# AI Model Navigator

## 项目简介
Explore mainstream free and paid AI model services, including advanced models like GPT-4, Claude 3 Opus, Gemini Ultra, as well as local setup and AI programming tools learning summaries.


AI Model Navigator 是一个全面的 AI 模型导航平台，旨在帮助用户发现、比较和选择适合自己需求的 AI 模型解决方案。无论是免费模型、付费模型、本地搭建方案还是 AI 编程工具，都可以在这个平台上找到详细的信息和比较。

## 功能特点

### 核心功能
- **模型分类浏览**：支持按免费、付费、本地搭建和 AI 编程工具分类浏览
- **搜索和筛选**：通过关键词搜索和分类筛选快速找到目标模型
- **双视图切换**：支持卡片视图和列表视图两种展示方式
- **详细模型信息**：包含模型名称、提供商、描述、价格、评分等详细信息
- **国际化支持**：支持中英文双语切换
- **本地搭建指南**：提供 Ollama、LM Studio、LocalAI 等本地搭建方案的详细指南
- **AI 编程工具**：专门的 AI 编程工具分类，包含 CodeBuddy、Kiro、Claude Code 等
- **视觉效果**：精美的渐变背景、动画效果和响应式设计

### 技术特点
- **现代化前端**：基于 React 18 + TypeScript + Vite 构建
- **响应式设计**：适配各种屏幕尺寸，从手机到桌面设备
- **性能优化**：使用 Vite 构建，加载速度快
- **模块化结构**：清晰的组件化设计，易于维护和扩展
- **数据驱动**：基于 JSON 数据文件，易于更新和扩展

## 技术栈

- **前端框架**：React 18
- **类型系统**：TypeScript
- **构建工具**：Vite
- **样式方案**：Tailwind CSS
- **动画效果**：CSS 动画 + Three.js
- **国际化**：自定义 I18n 实现
- **数据存储**：JSON 文件

## 项目结构

```
├── .github/              # GitHub 配置文件
│   └── workflows/        # GitHub Actions 工作流
├── .kiro/                # 项目设计文档
├── data/                 # 模型数据
│   ├── models.json       # 模型数据文件
│   └── programming_tools.json  # AI 编程工具数据
├── dist/                 # 构建输出目录
├── docs/                 # 静态文档
│   ├── lm-studio-setup.html  # LM Studio 搭建指南
│   ├── localai-setup.html    # LocalAI 搭建指南
│   ├── models-summary.html    # 模型总结
│   ├── ollama-setup.html      # Ollama 搭建指南
│   └── tools-comparison.html # 工具比较
├── scripts/              # 脚本文件
│   ├── scrape_models.py  # 模型数据抓取脚本
│   └── script.js         # 辅助脚本
├── src/                  # 源代码
│   ├── components/       # 组件
│   │   ├── BenefitShare.tsx    # 权益分享组件
│   │   ├── FilterBar.tsx       # 筛选栏组件
│   │   ├── Footer.tsx          # 页脚组件
│   │   ├── Header.tsx          # 头部组件
│   │   ├── LocalSetup.tsx      # 本地搭建组件
│   │   ├── ModelCard.tsx       # 模型卡片组件
│   │   ├── ModelList.tsx       # 模型列表组件
│   │   ├── PriceDisplay.tsx    # 价格显示组件
│   │   └── StatusBadge.tsx     # 状态徽章组件
│   ├── i18n/             # 国际化
│   │   ├── I18nContext.tsx     # 国际化上下文
│   │   └── translations.ts     # 翻译文件
│   ├── utils/            # 工具函数
│   │   ├── cursorEffect.ts     # 光标效果
│   │   └── rippleEffect.ts     # 涟漪效果
│   ├── App.tsx           # 应用主组件
│   ├── index.css         # 全局样式
│   ├── main.tsx          # 应用入口
│   └── types.ts          # TypeScript 类型定义
├── .gitignore            # Git 忽略文件
├── index.html            # HTML 模板
├── package.json          # 项目配置和依赖
├── postcss.config.js     # PostCSS 配置
├── tailwind.config.js    # Tailwind CSS 配置
├── tsconfig.json         # TypeScript 配置
├── tsconfig.node.json    # TypeScript Node 配置
└── vite.config.ts        # Vite 配置
```

## 安装和运行

### 前提条件
- Node.js 16.0 或更高版本
- npm 7.0 或更高版本

### 安装步骤

1. **克隆项目**
   ```bash
   git clone https://github.com/your-username/ai-model-navigator.git
   cd ai-model-navigator
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```
   开发服务器将在 http://localhost:5173 启动

4. **构建生产版本**
   ```bash
   npm run build
   ```
   构建产物将生成在 `dist` 目录中

5. **预览生产构建**
   ```bash
   npm run preview
   ```

## 国际化支持

项目支持中英文双语切换，通过以下方式实现：

1. **翻译文件**：`src/i18n/translations.ts` 包含所有翻译内容
2. **国际化上下文**：`src/i18n/I18nContext.tsx` 提供国际化上下文
3. **使用方法**：在组件中使用 `useI18n()` 钩子获取翻译函数 `t()`

### 添加新翻译

1. 在 `src/i18n/translations.ts` 中添加新的翻译键值对
2. 在组件中使用 `t('key')` 引用翻译

## 数据结构

### 模型数据结构

```typescript
interface Model {
  id: string;
  name: string;
  provider: string;
  description: string;
  type: ModelType; // 'free', 'paid', 'local', 'ai_tool'
  price: string;
  rating: number;
  logo: string;
  features?: string[];
  suitableFor?: string[];
  codingPlan?: string;
  billingUnit?: string;
  creditLimit?: string;
  supplier?: string;
  url?: string;
}
```

### 数据源

- **models.json**：包含免费、付费和本地模型数据
- **programming_tools.json**：包含 AI 编程工具数据

## 部署

### 静态部署

1. 执行 `npm run build` 构建生产版本
2. 将 `dist` 目录中的文件部署到任何静态网站托管服务，如：
   - GitHub Pages
   - Vercel
   - Netlify
   - AWS S3

### Docker 部署

可以创建一个简单的 Dockerfile 来部署项目：

```dockerfile
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html
EXPOSE 80
```

## 贡献

欢迎贡献代码、报告问题或提出功能建议！

### 贡献步骤

1. Fork 项目
2. 创建分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开 Pull Request

## 许可证

本项目采用 MIT 许可证 - 详情请参阅 LICENSE 文件

## 联系方式

如有问题或建议，请通过以下方式联系：

- GitHub Issues:   https://github.com/DavinQi/ai-hello-token/issues
- Email: qxqmail@163.com

---

**AI Model Navigator** - 您的 AI 模型选择指南
