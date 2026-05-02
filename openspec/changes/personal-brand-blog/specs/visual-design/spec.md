## ADDED Requirements

### Requirement: CSS Custom Properties define the design system

The file `src/styles/global.css` SHALL define the following CSS Custom Properties on `:root`: `--color-accent-orange` (#FF6B35), `--color-accent-teal` (#1B4D4E), `--color-bg` (#F8F6F1), `--color-text` (#1A1A1A), `--color-text-muted` (a lighter gray), `--font-heading`, `--font-body`, `--spacing-*` scale (4px base unit multiples). All components SHALL use these variables rather than hardcoded color or font values.

#### Scenario: Accent color is applied consistently

- **WHEN** any page is rendered
- **THEN** CTA buttons and accent elements use `--color-accent-orange` from CSS Custom Properties

### Requirement: Typography uses high-contrast heading scale

Headings SHALL use a large, bold font size scale to create visual hierarchy. H1 on the homepage Hero SHALL be at least 48px on desktop. Body text SHALL be at least 16px. Line height for body text SHALL be at least 1.6.

#### Scenario: Hero H1 meets minimum size

- **WHEN** the homepage is viewed on a 1280px viewport
- **THEN** the H1 element's computed font-size is at least 48px

### Requirement: Layout is responsive across breakpoints

All pages SHALL render correctly at three breakpoints: mobile (375px), tablet (768px), and desktop (1280px). Navigation SHALL collapse to a hamburger menu on mobile. Card grids SHALL adapt column count per breakpoint: 1 column on mobile, 2 on tablet, 3 on desktop.

#### Scenario: Card grid adapts to mobile

- **WHEN** the viewport is 375px wide
- **THEN** work and blog cards display in a single-column layout

### Requirement: Navigation component is present on all pages

Every page SHALL include a `<nav>` element containing links to: Home (`/`), Works (`/works`), Blog (`/blog`), About (`/about`). The current page link SHALL be visually distinguished (e.g., bold, underline, or color change).

#### Scenario: Active nav item is highlighted

- **WHEN** a visitor is on the `/blog` page
- **THEN** the Blog nav link has a distinct visual style compared to other nav links

### Requirement: Footer is present on all pages

Every page SHALL include a `<footer>` element containing: copyright notice with current year, and navigation links (Services, Works, Notes, Experience or equivalent).

#### Scenario: Footer is rendered on all pages

- **WHEN** any page is viewed
- **THEN** the footer is present with copyright text and navigation links
