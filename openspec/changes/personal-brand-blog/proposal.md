## Why

建立個人品牌網站以展示接案作品集，並透過部落格產出內容吸引自然流量，讓潛在客戶能找到並聯繫我接案。

## What Changes

- 全新建立 Astro 靜態網站，部署至 GitHub Pages（`oceanhank.github.io/hankblog`）
- 新增首頁：Hero 自我介紹、服務項目、精選作品、客戶見證（暫放假資料）、CTA
- 新增部落格模組：文章列表、單篇文章頁、標籤分類頁
- 新增作品集模組：作品列表頁、單一作品詳細頁
- 新增關於我頁面：自我介紹、服務項目說明、聯絡方式
- 加入完整 SEO 基礎設定（sitemap、robots.txt、Open Graph、JSON-LD）
- 建立 GitHub Actions 自動部署流程

## Non-Goals

- llms.txt / llms-full.txt（AI SEO）列為 Phase 2，本次不實作
- 不使用 Tailwind 或其他 CSS 框架，純 CSS 實作
- 不串接外部 CMS 或資料庫，所有內容以 Markdown 本地管理

## Capabilities

### New Capabilities

- `homepage`: 首頁，包含 Hero、服務項目、精選作品卡片、客戶見證輪播、CTA 區塊
- `blog`: 部落格模組，含文章列表（分頁）、單篇文章頁、標籤分類頁，文章以 `.md` 格式管理
- `portfolio`: 作品集模組，含作品列表頁（`/works`）與單一作品詳細頁（`/works/[slug]`）
- `about`: 關於我頁面，含自我介紹、服務說明、聯絡表單或聯絡資訊
- `seo`: 全站 SEO 設定，含 sitemap.xml、robots.txt、Open Graph、Twitter Card、JSON-LD 結構化資料、canonical 標籤
- `visual-design`: 設計系統，含 CSS Custom Properties 色票、字體、排版規則，風格參考作品集設計圖（大色塊、大標題對比、鮮豔 accent color）
- `deployment`: GitHub Actions 自動部署至 GitHub Pages，push 到 main branch 觸發

### Modified Capabilities

（無，全新專案）

## Impact

- Affected specs: homepage、blog、portfolio、about、seo、visual-design、deployment
- Affected code:
  - New: `astro.config.mjs`
  - New: `package.json`
  - New: `src/styles/global.css`
  - New: `src/layouts/BaseLayout.astro`
  - New: `src/layouts/BlogLayout.astro`
  - New: `src/layouts/WorkLayout.astro`
  - New: `src/pages/index.astro`
  - New: `src/pages/blog/index.astro`
  - New: `src/pages/blog/[slug].astro`
  - New: `src/pages/tags/[tag].astro`
  - New: `src/pages/works/index.astro`
  - New: `src/pages/works/[slug].astro`
  - New: `src/pages/about.astro`
  - New: `src/content/blog/` （範例 .md 文章）
  - New: `src/content/works/` （範例作品 .md）
  - New: `src/components/Nav.astro`
  - New: `src/components/Footer.astro`
  - New: `src/components/BlogCard.astro`
  - New: `src/components/WorkCard.astro`
  - New: `src/components/Pagination.astro`
  - New: `src/components/TagList.astro`
  - New: `src/content/config.ts`
  - New: `public/robots.txt`
  - New: `.github/workflows/deploy.yml`
