# Sakura - Vue 3 毛玻璃风格博客

一个基于Vue 3、Tailwind CSS和JavaScript开发的现代毛玻璃风格博客网站，包含首页、文章详情页、归档页、关于页和友链页。

## 技术栈

- **前端框架**: Vue 3
- **路由**: Vue Router
- **CSS框架**: Tailwind CSS v3
- **图标库**: Font Awesome
- **动画库**: AOS (Animate On Scroll)
- **代码高亮**: highlight.js
- **字体**: JetBrains Mono (英文), Inter (中文)

## 功能特点

- **响应式设计**: 适配移动端和桌面端
- **深色/浅色模式切换**: 根据用户偏好自动切换
- **毛玻璃效果**: 现代UI设计风格
- **文章卡片布局**: 动态变化的网格布局
- **评论系统**: 支持用户评论和互动
- **文章分类和标签**: 便于内容组织和检索
- **友链系统**: 展示友情链接和申请功能

## 页面结构

1. **首页**: 展示文章卡片网格，支持多标签
2. **文章详情页**: 展示完整文章内容和评论
3. **归档页**: 按时间顺序展示文章
4. **关于页**: 展示个人信息、技能和经历
5. **友链页**: 展示友情链接和申请表单

## 颜色方案

- **主色调**: 靛蓝色 (#6366f1)
- **辅助色**: 紫色 (#8b5cf6)
- **强调色**: 粉色 (#ec4899)
- **深色模式**: 背景色加深至 #0f172a 和 #1e293b

## 开发指南

### 安装依赖

```bash
npm install
```

### 开发环境

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
vue3-glassmorphism-blog/
├── public/
├── src/
│   ├── assets/
│   │   ├── css/
│   │   ├── js/
│   │   └── images/
│   ├── components/
│   │   ├── BlogCard.vue
│   │   ├── FooterComponent.vue
│   │   ├── HeaderComponent.vue
│   │   └── NavLink.vue
│   ├── views/
│   │   ├── AboutView.vue
│   │   ├── ArchiveView.vue
│   │   ├── FriendsView.vue
│   │   ├── HomeView.vue
│   │   └── PostView.vue
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 未来计划

- 添加搜索功能
- 实现文章分类和标签筛选
- 集成简单的CMS系统
- 添加访问统计功能
- 优化移动端体验
