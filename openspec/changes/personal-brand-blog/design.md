## Context

全新建立的個人品牌接案網站，使用 Astro 框架靜態輸出，部署至 GitHub Pages。網站同時兼具作品集展示與部落格兩個目的：前者吸引潛在客戶直接聯繫接案，後者透過 SEO 產生自然流量。

技術限制：
- 靜態網站，無後端，無資料庫
- 純 CSS，不使用任何 CSS 框架
- 所有內容以 Markdown 本地管理

風格方向：參考作品集設計圖（Portafolios digitales Pin.jpeg），大色塊搭配刷色筆觸、大標題字體對比、鮮豔 accent color（橘色 + 深青綠色）、卡片式版型。

## Goals / Non-Goals

**Goals:**
- 建立完整的個人品牌網站，包含首頁、部落格、作品集、關於我四大模組
- 實作完整 SEO 基礎（sitemap、robots.txt、OG、JSON-LD）
- 建立設計系統（CSS Custom Properties）確保全站視覺一致性
- GitHub Actions 自動部署至 GitHub Pages

**Non-Goals:**
- 不實作 llms.txt / llms-full.txt（Phase 2）
- 不串接 CMS、資料庫或後端 API
- 不使用 Tailwind 或其他 CSS 框架
- 不實作會員系統或留言功能

## Decisions

### Astro Content Collections 管理文章與作品資料

使用 Astro Content Collections（`src/content/`）分別管理 `blog` 和 `works` 兩個 collection。每個 collection 在 `src/content/config.ts` 中定義 schema，確保 frontmatter 欄位型別安全。

選擇理由：比直接讀取 `src/pages/` Markdown 更安全，schema 驗證避免缺欄位導致頁面錯誤。

### 路由架構

```
/                    → src/pages/index.astro
/blog                → src/pages/blog/index.astro
/blog/[slug]         → src/pages/blog/[slug].astro
/tags/[tag]          → src/pages/tags/[tag].astro
/works               → src/pages/works/index.astro
/works/[slug]        → src/pages/works/[slug].astro
/about               → src/pages/about.astro
```

### Layout 層級設計

三層 layout 架構：
- `BaseLayout.astro`：全站共用的 HTML 骨架、SEO meta、Nav、Footer
- `BlogLayout.astro`：繼承 BaseLayout，加入文章專用排版（閱讀寬度限制、JSON-LD BlogPosting）
- `WorkLayout.astro`：繼承 BaseLayout，加入作品頁專用排版（作品圖片、技術標籤）

### CSS 設計系統

使用 CSS Custom Properties 統一管理色票、字體、間距：

```css
:root {
  --color-accent-orange: #FF6B35;
  --color-accent-teal: #1B4D4E;
  --color-bg: #F8F6F1;
  --color-text: #1A1A1A;
  --font-heading: 'Inter', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

選擇理由：不依賴框架，原生 CSS 即可達成設計一致性，且未來可輕鬆擴充深色模式。

### SEO 實作方式

- `@astrojs/sitemap` 套件自動產生 sitemap.xml
- `public/robots.txt` 靜態放置
- BaseLayout 接受 `title`、`description`、`ogImage` props，動態產生所有 meta 標籤
- BlogLayout 自動注入 BlogPosting JSON-LD
- 首頁注入 WebSite JSON-LD

### 部署策略

GitHub Actions workflow 監聽 push 到 `main` branch，執行 `npm run build` 後部署至 `gh-pages` branch。

`astro.config.mjs` 設定：
```js
site: "https://oceanhank.github.io",
base: "/hankblog"
```

## Risks / Trade-offs

- [base path 問題] Astro 的 `base` 設定需要所有內部連結使用 `import.meta.env.BASE_URL` 前綴，否則本地開發與 GitHub Pages 路徑會不一致 → 在 BaseLayout 統一處理，避免各頁面手動拼接
- [客戶見證假資料] 首頁客戶見證區塊目前放假資料，需在取得真實案例後替換 → 資料集中在 `src/data/testimonials.ts` 一個地方管理，方便後續替換
- [Google Fonts 載入效能] 使用外部字型會影響 Core Web Vitals → 使用 `font-display: swap` 並考慮 self-host 字型
