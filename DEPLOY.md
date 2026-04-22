# 📚 MyNavigating 项目部署笔记

## 📁 项目信息
- 项目路径：`F:\MyWeb\MyNavigating`
- 仓库地址：`https://github.com/zhang2025323/navigation`
- 访问地址：
  - 自定义域名：`https://www.zhangwen.uno/`
  - GitHub Pages：`https://zhang2025323.github.io/navigation/`

---

## 🚀 完整部署流程

### 1️⃣ 日常开发（本地预览）
```bash
# 启动开发服务器
npm run dev

# 访问地址：http://localhost:5173/navigation/
```

### 2️⃣ 修改内容后的部署（标准流程）
```bash
# 步骤1：查看修改状态
git status

# 步骤2：添加所有修改
git add .

# 步骤3：提交修改（填写合适的提交信息）
git commit -m "修改描述"

# 步骤4：推送到 GitHub
git push -u origin master

# 步骤5：部署到 GitHub Pages
npm run deploy
```

---

## ⚙️ 重要配置文件

### vite.config.js
```javascript
// 使用自定义域名时：
base: '/'

// 使用 GitHub Pages 路径时：
base: '/navigation/'
```

### public/CNAME
```
www.zhangwen.uno
```

---

## 📝 修改分类和链接
位置：`src/data/links.js`

```javascript
// 添加新分类
{
  id: 'category-id',
  name: '分类名称',
  icon: '🎯',
  links: []
}

// 添加新链接
{
  id: 1001,
  title: '链接标题',
  link: 'https://example.com/',
  desc: '链接描述',
  icon: '🔗'
}
```

---

## 🔧 自定义域名配置
1. 修改 `vite.config.js` 中 `base: '/'`
2. 在 `public/` 目录创建 `CNAME` 文件：
   ```
   www.zhangwen.uno
   ```
3. 阿里云 DNS 解析：
   - @ → `zhang2025323.github.io`
   - www → `zhang2025323.github.io`
4. 重新部署

---

## 📱 微信验证配置
1. 将微信验证文件放在 `public/` 目录
2. 文件会自动部署到网站根目录
3. 重新部署

---

## ⚠️ 常见问题

### 问题1：部署时网络连接失败
```bash
# 重试即可
npm run deploy
```

### 问题2：GitHub Pages 显示 404
- 检查 `vite.config.js` 中 `base` 配置
- 等待 1-2 分钟让 GitHub Pages 生效

### 问题3：自定义域名不生效
- 检查 DNS 解析是否生效（可能需要几小时）
- 检查 CNAME 文件是否存在

---

## 🎯 快速部署（日常修改后）
```bash
git add . && git commit -m "更新" && git push && npm run deploy
```
