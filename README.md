# 易术科技官网部署文档

本文档提供了易术科技官网项目的部署和开发指南，包含开发环境配置、生产构建以及部署流程。

## 技术栈

- **前端框架**: Next.js 15
- **样式**: TailwindCSS 4
- **字体**: Inter
- **主题**: 深色主题，科技蓝主色调

## 开发环境配置

### 安装依赖

首先，克隆项目后安装所有依赖：

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install

# 或使用 pnpm
pnpm install
```

### 启动开发服务器

开发环境使用 Next.js 的开发服务器：

```bash
# 使用 npm
npm run dev

# 或使用 yarn
yarn dev

# 或使用 pnpm
pnpm dev
```

启动后，可以通过 `http://localhost:3000` 访问开发环境。开发模式下启用了：
- 热模块替换（HMR）
- 自动编译
- 错误提示

## 构建生产版本

### 生产构建

要构建生产版本，请执行：

```bash
# 使用 npm
npm run build

# 或使用 yarn
yarn build

# 或使用 pnpm
pnpm build
```

构建完成后，可以使用以下命令启动生产服务器：

```bash
# 使用 npm
npm start

# 或使用 yarn
yarn start

# 或使用 pnpm
pnpm start
```

服务器默认运行在 `http://localhost:3000`。

## 部署到 Vercel

本项目已针对 Vercel 平台优化。以下是部署步骤：

### 自动部署（推荐）

1. 在 [Vercel](https://vercel.com) 平台创建账户
2. 在 Vercel 控制台点击 "New Project"
3. 导入你的 Git 仓库（GitHub, GitLab 或 Bitbucket）
4. 选择含有本项目代码的仓库
5. Vercel 将自动检测 Next.js 项目并应用最佳配置
6. 点击 "Deploy" 开始部署

Vercel 会自动配置构建命令和输出目录，同时为每个 PR 生成预览环境。

### 命令行部署

你也可以使用 Vercel CLI 进行部署：

```bash
# 安装 Vercel CLI
npm install -g vercel

# 登录
vercel login

# 部署
vercel
```

按照命令行提示完成部署流程。

## 环境变量配置

本项目使用环境变量管理敏感信息和部署配置。

### 本地开发环境变量

1. 在项目根目录创建 `.env.local` 文件（已在 `.gitignore` 中排除）
2. 添加以下环境变量：

```
# API 端点
NEXT_PUBLIC_API_URL=https://api.example.com

# 其他配置
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Vercel 环境变量配置

1. 在 Vercel 控制台，进入你的项目
2. 点击 "Settings" > "Environment Variables"
3. 添加相应的环境变量，如:
   - `NEXT_PUBLIC_API_URL`
   - `NEXT_PUBLIC_SITE_URL`
4. 选择应用的环境（Production, Preview, Development）
5. 点击 "Save" 保存配置

对于敏感信息，如 API 密钥，确保不要使用 `NEXT_PUBLIC_` 前缀，这些变量只在服务器端可用。

### 环境变量列表

| 变量名 | 描述 | 必填 | 示例值 |
|--------|------|------|--------|
| `NEXT_PUBLIC_API_URL` | API 服务器地址 | 是 | `https://api.example.com` |
| `NEXT_PUBLIC_SITE_URL` | 网站访问地址 | 是 | `https://www.yishutech.com` |

## 问题排查

如果遇到构建或部署问题，请检查：

1. Node.js 版本是否满足要求（建议使用 v18 或更高版本）
2. 所有依赖是否安装完整
3. 环境变量是否正确配置

## 自定义域名（Vercel）

如需配置自定义域名：

1. 在 Vercel 控制台，进入你的项目
2. 点击 "Settings" > "Domains"
3. 添加你的域名
4. 按照 Vercel 提供的说明配置 DNS 记录
