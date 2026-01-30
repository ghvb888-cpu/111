# ZTA 项目设置指南

## 1. 关键前置条件 - 必须安装 Node.js

⚠️ **错误检测**：系统检测到当前环境未安装 Node.js，这导致无法启动后端服务，也无法运行 `npm install`。

**解决方案**：
1. 请访问 [Node.js 官网](https://nodejs.org/zh-cn/) 下载并安装 "LTS (长期支持版)"。
2. 安装完成后，请重启您的终端或编辑器。
3. 验证安装：在终端输入 `node -v`，应显示如 `v18.x.x` 或更高版本。

---

## 2. 后端服务设置 (Server)

1. **进入目录**
   ```bash
   cd server
   ```

2. **安装依赖** (需要 Node.js)
   ```bash
   npm install
   ```

3. **配置环境变量**
   打开 `server/.env` 文件，填入您的真实密钥：
   ```env
   API_KEY=your_gemini_api_key_here
   SUPABASE_URL=your_supabase_url_here
   SUPABASE_KEY=your_supabase_anon_key_here
   ```

4. **启动服务**
   ```bash
   npm run dev
   ```
   服务将运行在 `http://localhost:3000`。

---

## 3. 数据库设置 (Supabase)

1. 登录 [Supabase Dashboard](https://supabase.com/dashboard) 创建新项目。
2. 进入 SQL Editor，复制 `server/db_schema.sql` 的内容并在 Supabase 中运行。
3. 获取 URL 和 Anon Key 填入 `.env` 文件。

---

## 4. 前端设置

1. **进入根目录**
   ```bash
   cd ..
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动前端**
   ```bash
   npm run dev
   ```
   前端页面将自动连接本地 `http://localhost:3000` 后端。
