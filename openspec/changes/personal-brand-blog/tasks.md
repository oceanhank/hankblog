## 1. 專案初始化

- [x] 1.1 建立 Astro 專案（`npm create astro@latest`），選擇 Minimal 範本，設定 TypeScript strict mode
- [x] 1.2 安裝必要套件：`@astrojs/sitemap`，設定 `astro.config.mjs` 的 Astro config targets GitHub Pages base URL（`site: "https://oceanhank.github.io"`、`base: "/hankblog"`）
- [x] 1.3 建立 `src/content/config.ts`，使用 Astro Content Collections 管理文章與作品資料（blog、works 兩個 collection）；確保 Blog post frontmatter schema is enforced（title、date、description、tags、draft 欄位）與 Works collection schema is enforced（額外含 coverImage）

## 2. 設計系統

- [x] 2.1 建立 `src/styles/global.css`，實作 CSS 設計系統：CSS Custom Properties define the design system（`--color-accent-orange: #FF6B35`、`--color-accent-teal: #1B4D4E`、`--color-bg: #F8F6F1`、`--color-text: #1A1A1A`、`--color-text-muted`、字體變數、間距 scale）
- [x] 2.2 設定 Google Fonts（Inter），在 BaseLayout 的 `<head>` 加入 `font-display: swap` 載入方式；確保 Typography uses high-contrast heading scale（H1 hero 至少 48px、body text 至少 16px、line-height 至少 1.6）

## 3. Layout 元件

- [x] 3.1 建立 `src/layouts/BaseLayout.astro`（Layout 層級設計：BaseLayout 為全站骨架）：接受 `title`、`description`、`ogImage` props，輸出完整 HTML 骨架；SEO 實作方式：Canonical link tag is present on every page（絕對 URL）、Open Graph 與 Twitter Card meta tags；Homepage includes WebSite JSON-LD（僅首頁注入）；部署策略：所有內部連結使用 `import.meta.env.BASE_URL` 前綴
- [x] 3.2 建立 `src/layouts/BlogLayout.astro`（Layout 層級設計：BlogLayout 繼承 BaseLayout）：加入 BlogPosting JSON-LD（含 headline、datePublished、dateModified、author、description）；確保 Blog post pages include BlogPosting JSON-LD
- [x] 3.3 建立 `src/layouts/WorkLayout.astro`（Layout 層級設計：WorkLayout 繼承 BaseLayout）：加入作品頁專用排版（封面圖、技術標籤列表）

## 4. 共用元件

- [x] 4.1 建立 `src/components/Nav.astro`：含 Home、Works、Blog、About 四個連結，使用 `import.meta.env.BASE_URL` 前綴，active 頁面有視覺區別；確保 Navigation component is present on all pages，行動裝置收合為 hamburger menu
- [x] 4.2 建立 `src/components/Footer.astro`：含版權年份、導覽連結；確保 Footer is present on all pages
- [x] 4.3 建立 `src/components/BlogCard.astro`：顯示文章 title、date、description、tags，含文章連結
- [x] 4.4 建立 `src/components/WorkCard.astro`：顯示作品 title、coverImage（含非空 alt 屬性）、description、tags，確保 All images have alt attributes；點擊連結至 `/works/[slug]`
- [x] 4.5 建立 `src/components/Pagination.astro`：接受 current page、total pages props，產生分頁導覽連結
- [x] 4.6 建立 `src/components/TagList.astro`：顯示 tag chip 清單，每個 tag 連結至 `/tags/[tag]`

## 5. 首頁

- [x] 5.1 建立 `src/pages/index.astro`：引入 BaseLayout，組合 Hero section（H1 名字、tagline、CTA button）、Services section（至少三個服務項目含圖示）；確保 Hero section displays personal brand introduction 且上方可見區域內呈現
- [x] 5.2 在 `src/pages/index.astro` 加入 Services section lists offered services（網站設計、行動 App、品牌識別）
- [x] 5.3 在 `src/pages/index.astro` 加入 Featured works section showcases portfolio items：查詢最新三篇已發布作品，以 WorkCard 呈現，含「Explore More Works」連結至 `/works`；空作品集時隱藏該區塊
- [x] 5.4 在 `src/pages/index.astro` 加入 Testimonials section displays client feedback（至少兩筆假資料，每筆含 quote、name、title）；資料集中於 `src/data/testimonials.ts`
- [x] 5.5 在 `src/pages/index.astro` 加入 CTA section：標題 + mailto 連結；確保 CTA section prompts contact

## 6. 部落格模組

- [x] 6.1 建立 `src/pages/blog/index.astro`：查詢所有已發布文章（draft 過濾）、依 date 降冪排序、每頁 10 筆分頁；使用 BlogCard 元件；確保 Blog listing page displays all published posts 與 Pagination triggers at 11 posts
- [x] 6.2 建立 `src/pages/blog/[slug].astro`：使用 `getStaticPaths` 產生所有已發布文章路由，以 BlogLayout 渲染 H1 title、date、tag list、Markdown body（語意化 `<article>`、`<header>`）；確保 Single post page renders full article content
- [x] 6.3 建立 `src/pages/tags/[tag].astro`：使用 `getStaticPaths` 收集所有 tag，每個 tag 頁面列出符合文章；確保 Tag page lists posts with matching tag

## 7. 作品集模組

- [x] 7.1 建立 `src/pages/works/index.astro`：查詢所有已發布作品（draft 過濾）、依 date 降冪排序，以 WorkCard 卡片格（響應式 grid）呈現；確保 Works listing page displays all published works
- [x] 7.2 建立 `src/pages/works/[slug].astro`：使用 `getStaticPaths` 產生所有已發布作品路由，以 WorkLayout 渲染封面圖、H1 title、tags、Markdown body；確保 Single work page renders full work details

## 8. 關於我頁面

- [x] 8.1 建立 `src/pages/about.astro`：包含個人介紹（姓名、bio、年資）、服務項目列表、email mailto 連結；確保 About page displays owner introduction and services 與 About page provides a contact method

## 9. SEO 與技術設定

- [x] 9.1 建立 `public/robots.txt`：允許所有爬蟲索引全站；確保 Sitemap and robots.txt are generated
- [x] 9.2 確認 `@astrojs/sitemap` 整合在 `astro.config.mjs` 中正確設定，build 後生成 `sitemap.xml` 涵蓋所有非 draft 頁面
- [x] 9.3 驗證每個頁面的 `<title>` 與 `<meta name="description">` 唯一性，blog post 使用 frontmatter 欄位，suffix 為 `| Hank Chou`；確保 Every page has unique title and meta description
- [x] 9.4 驗證 Open Graph and Twitter Card meta tags are present on all pages（og:title、og:description、og:image、og:type、twitter:card 等）

## 10. 響應式樣式

- [x] 10.1 在 `global.css` 加入三個斷點媒體查詢（375px、768px、1280px），確保 Layout is responsive across breakpoints，card grid 在各斷點欄數正確（mobile 1 欄、tablet 2 欄、desktop 3 欄）

## 11. 範例內容

- [x] 11.1 建立 2 篇範例部落格文章（`src/content/blog/`），frontmatter 包含所有必要欄位，含一篇 `draft: true` 驗證 Draft post is excluded from listing
- [x] 11.2 建立 2 篇範例作品（`src/content/works/`），包含 coverImage，驗證 Featured works section 顯示正常

## 12. GitHub Actions 部署

- [x] 12.1 建立 `.github/workflows/deploy.yml`（路由架構：`base: "/hankblog"` 對應 GitHub Pages 子路徑）：監聽 push to main，執行 node install + build，部署 `dist/` 至 GitHub Pages；確保 GitHub Actions deploys on push to main
