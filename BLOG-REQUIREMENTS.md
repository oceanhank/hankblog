# 個人部落格專案需求文件（方案二：Astro + Markdown）

本文件為給 AI 開發助手的需求說明，請閱讀後依序協助完成開發。

---

## 1. 專案概述

建立一個以 **Astro** 為框架的靜態個人部落格，文章以 **Markdown（.md）** 格式撰寫並存放於專案內，部署於 **GitHub Pages**。不需要外部 CMS 或資料庫，所有內容皆在本地管理，push 到 GitHub 後自動部署上線。

---

## 2. 系統架構與技術堆疊

- **前端框架**：Astro（Static output）
- **文章格式**：Markdown（`.md`），放在 `src/content/blog/` 資料夾
- **樣式**：純 CSS（不使用 Tailwind 或其他 CSS 框架）
- **部署環境**：GitHub Pages（靜態托管）
- **CI/CD**：GitHub Actions（push 到 main branch 自動部署）

---

## 3. 核心功能需求

### 文章管理
- 文章以 `.md` 檔案撰寫，放在 `src/content/blog/` 資料夾
- 每篇文章支援以下 frontmatter 欄位：
  ```yaml
  ---
  title: 文章標題
  date: 2026-05-01
  description: 文章摘要（用於 SEO 與文章列表預覽）
  tags: [AI, 工具]
  draft: false  # true 時不會出現在網站上
  ---
  ```

### 頁面結構
- **首頁**：顯示最新 N 篇文章的卡片列表
- **文章列表頁**（`/blog`）：所有已發布文章，支援分頁
- **單篇文章頁**（`/blog/slug`）：完整文章內容
- **標籤頁**（`/tags/[tag]`）：同標籤的文章列表

### SEO

**基礎 Meta 標籤**
- 每個頁面有獨立的 `<title>` 和 `<meta description>`
- 支援 Open Graph（`og:title`、`og:description`、`og:image`、`og:type`）
- 支援 Twitter Card（`twitter:card`、`twitter:title`、`twitter:description`）

**結構化資料（Schema.org）**
- 文章頁加入 `BlogPosting` JSON-LD，包含：`headline`、`datePublished`、`dateModified`、`author`、`description`
- 首頁加入 `WebSite` JSON-LD

**技術 SEO**
- 自動產生 `sitemap.xml`（使用 `@astrojs/sitemap`）
- 加入 `robots.txt`，允許所有爬蟲索引
- 每篇文章頁加入 `<link rel="canonical">` 標籤
- 圖片必須有 `alt` 屬性
- 語意化 HTML 標籤（`<article>`、`<header>`、`<nav>`、`<main>`、`<footer>`）

**AI SEO（讓 AI 搜尋引擎容易收錄）**
- 加入 `llms.txt`：放在網站根目錄，列出網站所有文章的標題與摘要，讓 ChatGPT、Claude、Perplexity 等 AI 能快速理解網站內容
- 加入 `llms-full.txt`：包含所有文章的完整內容，供 AI 深度索引
- Meta 標籤加入 `<meta name="robots" content="index, follow">`
- 文章內容使用清晰的標題層級（`h1` → `h2` → `h3`），避免跳層
- 每篇文章的 `description` 需完整說明文章核心內容（建議 120~160 字元）

**效能（影響 SEO 排名）**
- 圖片使用 `loading="lazy"` 延遲載入
- 靜態網站本身已有極快載入速度，有利於 Core Web Vitals 評分

### 部署
- push 到 `main` branch 後，GitHub Actions 自動 build 並部署到 GitHub Pages
- 支援自訂網域（之後可以綁定）

---

## 4. 網站風格

【請在這裡貼上你的風格參考圖片或說明】

範例說明方式：
- 參考圖片：附上截圖或設計稿
- 風格描述：例如「極簡黑白、Brutalist 設計、大標題、無圓角」
- 參考網站：例如「風格類似 XXX 網站」

---

## 5. 給 AI 開發助手的執行指令

請閱讀上述架構與需求後，依序協助完成以下步驟：

1. **初始化專案**：建立 Astro 專案，設定 `astro.config.mjs`（含 GitHub Pages 的 `site` 和 `base`），以及 Content Collections 設定
2. **建立頁面結構**：依照第 3 點的頁面需求，建立所有頁面元件
3. **設計系統**：根據第 4 點的風格參考，建立 `src/styles/global.css`，包含 CSS Custom Properties 色票、字體、排版
4. **UI 元件**：建立文章卡片、導覽列、分頁、標籤等元件
5. **GitHub Actions**：建立 `.github/workflows/deploy.yml`，設定 push 到 main 自動部署
6. **測試文章**：建立 2~3 篇範例 `.md` 文章，確認整個流程正常運作
