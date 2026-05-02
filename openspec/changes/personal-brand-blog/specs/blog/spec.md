## ADDED Requirements

### Requirement: Blog post frontmatter schema is enforced

Every blog post Markdown file SHALL define the following frontmatter fields: `title` (string, required), `date` (date, required), `description` (string, required, 120–160 characters recommended), `tags` (array of strings, required), `draft` (boolean, default false). Posts with `draft: true` SHALL NOT appear on any public page.

#### Scenario: Draft post is excluded from listing

- **WHEN** a post has `draft: true`
- **THEN** it does not appear on `/blog`, `/tags/[tag]`, or the homepage

#### Scenario: Published post appears in listing

- **WHEN** a post has `draft: false` (or omitted)
- **THEN** it appears on `/blog` sorted by date descending

### Requirement: Blog listing page displays all published posts

The `/blog` page SHALL display all published posts sorted by `date` descending. Each post entry SHALL display: title, date, description excerpt, and tag list. The page SHALL support pagination if post count exceeds 10.

#### Scenario: Pagination triggers at 11 posts

- **WHEN** there are 11 or more published posts
- **THEN** the listing is split across multiple pages with navigation controls

##### Example: page boundary

| Total posts | Posts on page 1 | Posts on page 2 |
|-------------|-----------------|-----------------|
| 10 | 10 | — (no page 2) |
| 11 | 10 | 1 |
| 20 | 10 | 10 |

### Requirement: Single post page renders full article content

The `/blog/[slug]` page SHALL render the full Markdown content of the post, with: H1 title, publication date, tag list, and the article body. The page SHALL use semantic HTML (`<article>`, `<header>`, `<main>`).

#### Scenario: Visitor navigates to a post

- **WHEN** a visitor navigates to `/blog/[slug]`
- **THEN** the full article is displayed with title, date, tags, and body

#### Scenario: Non-existent slug returns 404

- **WHEN** a visitor navigates to `/blog/non-existent-slug`
- **THEN** Astro returns a 404 page

### Requirement: Tag page lists posts with matching tag

The `/tags/[tag]` page SHALL display all published posts that include the given tag in their `tags` array, sorted by date descending.

#### Scenario: Tag page shows matching posts

- **WHEN** a visitor navigates to `/tags/AI`
- **THEN** only posts with "AI" in their tags array are listed

#### Scenario: Tag with no posts returns 404

- **WHEN** a visitor navigates to `/tags/nonexistent-tag`
- **THEN** Astro returns a 404 page or displays an empty state message
