# Coltek Landing Page — sunova-innovation.nl

## 项目概述

Coltek Robotics GmbH (DE) 与 Sunova Innovation B.V. (NL) 的多语言企业官网。
展示两大业务线：**XGRIDS**（空间智能/3D扫描）和 **GlobeProtect**（无人机探测）。

## 技术栈

| 层 | 技术 |
|---|---|
| Framework | Next.js 16 + TypeScript |
| Styling | Tailwind CSS v4 (CSS-first `@theme`) |
| i18n | next-intl (en / de / nl / zh) |
| Animation | Framer Motion v12 |
| 3D Viewer | @mkkellogg/gaussian-splats-3d |
| 3D Showcase | XGRIDS LCC Viewer (iframe embed, no self-hosted rendering) |
| Email | Resend API |
| Deployment | Vercel (auto-deploy from GitHub `main`) |
| DNS | IONOS (sunova-innovation.nl) |

## 本地开发

```bash
npm install
cp .env.example .env.local   # 填入 RESEND_API_KEY
npm run dev                   # localhost:3000 → auto-redirects to /en/
```

## 项目结构

```
app/
  [locale]/               # 多语言路由 (en/de/nl/zh)
    page.tsx              # 主页
    spatial/xgrids/       # XGRIDS 品牌页 + 子页面
    airspace/droneguard/  # GlobeProtect 品牌页
    news/                 # 新闻列表
    download/             # 下载中心（占位）
    privacy/              # 隐私政策
    impressum/            # 法律声明
  api/
    contact/route.ts      # 联系表单 → Resend
    subscribe/route.ts    # AI Hardware 订阅
    splat/route.ts        # 3DGS PLY 代理（绕过 CORS）
components/
  hero/                   # ParticleCloud, HeroContent
  sections/               # SpatialOverview, AirspaceOverview, AIHardware, News, About, Contact
  spatial/                # SpatialProducts, SpatialShowcase, ModelViewer, BeforeAfter
  layout/                 # Navbar, Footer, CookieBanner
  ui/                     # Button, SectionTitle
messages/                 # i18n JSON (en/de/nl/zh)
public/
  images/
    logo/                 # Logo 文件
    team/                 # 6 位团队成员照片
    airspace/
      products/           # GlobeProtect 产品图
      scenarios/          # 应用场景图 (prison/airport/border/government/factory/hotel)
```

## 日常维护

### 更新新闻

编辑 `messages/en.json`（及 de/nl/zh）中 `news.items` 数组，git push 即可。

### 更新团队照片

替换 `public/images/team/` 下的图片，文件名保持一致（next/image 按路径读取）。

### 更新产品信息（XGRIDS）

编辑 `messages/en.json` 中 `spatialProducts` 命名空间。

### 更新 GlobeProtect 产品信息

编辑 `messages/en.json` 中 `droneguard.products` 命名空间。

### 更新 GlobeProtect 场景图片

替换 `public/images/airspace/scenarios/` 下的图片（文件名对应场景 id）。

### 更换 3D 展示模型

修改 XGRIDS 品牌页中 iframe 的 `src` URL 参数 `data=` 即可切换模型。
当前使用：`lcc-viewer.xgrids.com`，模型数据托管在 XGRIDS CloudFront CDN。

### 更新联系地址/电话

编辑 `messages/en.json` 中 `contact.companies.*` 字段，同步四语。

## 部署

```
git push origin main  →  Vercel 自动构建 (1-2 分钟)
```

Vercel 项目设置中需配置环境变量 `RESEND_API_KEY`。

## DNS 注意事项 (IONOS)

**绝对不能碰的 DNS 记录（影响邮件收发）：**
- MX 记录 (mx00.ionos.de / mx01.ionos.de)
- CNAME _dmarc
- CNAME *._domainkey (DKIM)
- TXT SPF 记录

**指向 Vercel 的记录（可以改）：**
- A 记录 `@` → `76.76.21.21`
- CNAME `www` → `cname.vercel-dns.com`

## 环境变量

| 变量 | 说明 |
|---|---|
| `RESEND_API_KEY` | Resend 邮件服务 API Key（Vercel + 本地均需） |
| `SPLAT_PLY_URL` | 3DGS PLY 文件 Supabase 签名 URL（可选，默认已内置） |

## 禁词约束（全站）

以下词语不得出现在任何面向用户的内容中（`.tsx/.ts/.css/.json` 文件）：

- DJI / 大疆
- Terjin / terjin
- Largest / 最大
- \#1 / No.1 / 第一（在品牌背书上下文中）
- Airspace Security / 空间安防

验证命令：
```bash
grep -ri "dji\|大疆\|terjin\|largest\|最大\|airspace security\|空间安防" messages/ components/ app/
```

## 文档索引

详细开发记录在 `../docs/` 目录（项目根目录上层）：

| 文件 | 内容 |
|---|---|
| CC-1_project_init_theme_i18n.md | 项目初始化、主题、i18n |
| CC-2_hero_section_particles.md | Hero 粒子动画 |
| CC-3_homepage_six_sections.md | 主页六大区块 |
| CC-4_business_detail_pages.md | 业务详情子页 |
| CC-5_email_legal_seo.md | 邮件/GDPR/SEO |
| CC-6_deployment_dns.md | 部署与 DNS |
| CC-7_3dgs_viewer_implementation.md | 3DGS 查看器实现 |
| CC-8_ui_restructure_logo_social.md | 路由重构/Logo/社交图标 |
| CC-9_xgrids_product_external_links.md | XGRIDS 外链 |
| CC-10_misc_ui_fixes.md | 杂项修复 |
| CC-11_droneguard_brand_rewrite.md | GlobeProtect 品牌重构 |
| CC-12_news_contact_download_privacy.md | 新闻/联系/下载/隐私 |
| CC-13_privacy_policy_content.md | 隐私政策内容 |
| PRD_Coltek_Latest.md | 产品需求文档（最新版） |
