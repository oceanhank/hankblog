## ADDED Requirements

### Requirement: Works collection schema is enforced

Every works Markdown file SHALL define the following frontmatter fields: `title` (string, required), `date` (date, required), `description` (string, required), `tags` (array of strings, required, e.g., technology stack used), `coverImage` (string, required, path to cover image), `draft` (boolean, default false). Works with `draft: true` SHALL NOT appear on any public page.

#### Scenario: Draft work is excluded

- **WHEN** a work has `draft: true`
- **THEN** it does not appear on `/works` or the homepage Featured Works section

### Requirement: Works listing page displays all published works

The `/works` page SHALL display all published works sorted by `date` descending as a card grid. Each card SHALL display: title, cover image with alt text, description excerpt, and tag list. Clicking the card SHALL navigate to `/works/[slug]`.

#### Scenario: Works grid is rendered

- **WHEN** a visitor navigates to `/works`
- **THEN** all published works are displayed as cards in a responsive grid

### Requirement: Single work page renders full work details

The `/works/[slug]` page SHALL render the full content of the work, including: H1 title, cover image, description, technology tags, and the Markdown body (project details, screenshots, outcomes).

#### Scenario: Visitor views a work detail page

- **WHEN** a visitor navigates to `/works/[slug]`
- **THEN** the full work detail is displayed with title, image, tags, and body

#### Scenario: Non-existent work slug returns 404

- **WHEN** a visitor navigates to `/works/non-existent`
- **THEN** Astro returns a 404 page
