# 导航百宝箱

一个美观、实用的个人导航网站，包含各种常用网站链接、AI工具、学习资源等。

## ✨ 特性

- 🎨 **科技感设计** - 动态粒子效果、渐变背景、扫描线动画
- 📱 **响应式布局** - 完美适配移动端和PC端
- 🎵 **背景音乐** - 两个纯音乐播放器，支持自动互斥
- 🔗 **丰富的链接** - 包含AI工具、学习资源、实用工具等分类
- 🎯 **左侧导航栏** - 点击切换分类，右侧显示对应链接
- 📐 **自适应高度** - 无限增加链接和组件都不会溢出
- 🎪 **绿色主题** - 清新的绿色科技风格
- 📱 **完美移动端** - 左侧导航→顶部横向标签栏，链接→单列卡片

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:5173 查看效果

### 打包构建

```bash
npm run build
```

### 部署到GitHub Pages

```bash
npm run deploy
```

## 📁 项目结构

```
MyNavigating/
├── src/
│   ├── assets/          # 静态资源（图标、音乐）
│   ├── components/      # Vue组件
│   │   ├── MainLayout.vue      # 主布局（左侧导航+右侧内容）
│   │   ├── WebHeader.vue       # 顶部标题栏
│   │   └── WebFooter.vue       # 页脚
│   ├── data/            # 数据文件
│   │   └── links.js     # 链接数据（分类+链接）
│   ├── App.vue          # 根组件
│   ├── main.js          # 入口文件
│   └── style.css        # 全局样式
├── public/              # 公共资源
├── index.html           # HTML模板
└── package.json         # 项目配置
```

## 📝 添加链接

### 在现有分类中添加链接

编辑 `src/data/links.js`，在对应的分类 links 数组中添加：

```javascript
{
  id: 1,                  // 唯一ID
  title: '链接名称',
  link: 'https://...',
  desc: '链接描述',
  icon: '图标地址'       // 可选
}
```

### 创建新分类

1. 在 `src/data/links.js` 的 categories 数组中添加新分类
2. 新分类包含：id、name、icon、links（链接数组）

## 🛠️ 技术栈

- **Vue 3** - 渐进式JavaScript框架
- **Vite** - 下一代前端构建工具
- **JavaScript** - 原生JavaScript实现
- **CSS3** - 现代化样式和动画

## 📱 预览

访问：https://zhang2025323.github.io/navigation/

## 👤 作者

zhang2025323

## 📄 许可证

MIT License
