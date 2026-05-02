## ADDED Requirements

### Requirement: Every page has unique title and meta description

Every page SHALL render a unique `<title>` tag and `<meta name="description">` tag. Blog post pages SHALL use the post's `title` and `description` frontmatter fields. The site title suffix (e.g., " | Hank Chou") SHALL be appended to all page titles.

#### Scenario: Blog post page has correct meta tags

- **WHEN** a visitor navigates to `/blog/[slug]`
- **THEN** `<title>` equals `{post.title} | Hank Chou` and `<meta name="description">` equals the post's description

### Requirement: Open Graph and Twitter Card meta tags are present on all pages

Every page SHALL include Open Graph tags: `og:title`, `og:description`, `og:image`, `og:type`. Every page SHALL include Twitter Card tags: `twitter:card` (value: `summary_large_image`), `twitter:title`, `twitter:description`.

#### Scenario: OG tags are rendered

- **WHEN** a page is fetched
- **THEN** the HTML head contains all required og: and twitter: meta tags

### Requirement: Blog post pages include BlogPosting JSON-LD

Every `/blog/[slug]` page SHALL include a `<script type="application/ld+json">` block with BlogPosting schema containing: `headline`, `datePublished`, `dateModified`, `author` (with `name`), `description`.

#### Scenario: JSON-LD is present on post page

- **WHEN** a visitor navigates to `/blog/[slug]`
- **THEN** the page HTML contains a valid BlogPosting JSON-LD script block

### Requirement: Homepage includes WebSite JSON-LD

The homepage (`/`) SHALL include a `<script type="application/ld+json">` block with WebSite schema containing: `name`, `url`, `description`.

#### Scenario: WebSite JSON-LD is present on homepage

- **WHEN** a visitor navigates to `/`
- **THEN** the page HTML contains a valid WebSite JSON-LD script block

### Requirement: Sitemap and robots.txt are generated

The site SHALL automatically generate `sitemap.xml` using `@astrojs/sitemap`. A `robots.txt` SHALL be placed in `public/robots.txt` allowing all crawlers to index all pages.

#### Scenario: Sitemap includes all public pages

- **WHEN** the site is built
- **THEN** `sitemap.xml` contains URLs for all non-draft pages

### Requirement: Canonical link tag is present on every page

Every page SHALL include a `<link rel="canonical" href="...">` tag pointing to the canonical URL of that page, using the full absolute URL including the `site` config value.

#### Scenario: Canonical tag uses absolute URL

- **WHEN** a page is rendered
- **THEN** the canonical href starts with `https://oceanhank.github.io/hankblog`

### Requirement: All images have alt attributes

Every `<img>` tag in the generated HTML SHALL have a non-empty `alt` attribute.

#### Scenario: Work cover image has alt text

- **WHEN** a work card is rendered
- **THEN** the cover image element has a descriptive alt attribute matching the work title
