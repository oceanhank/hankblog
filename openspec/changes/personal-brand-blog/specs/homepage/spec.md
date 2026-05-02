## ADDED Requirements

### Requirement: Hero section displays personal brand introduction

The homepage SHALL display a Hero section at the top containing: the owner's name as H1, a one-line tagline, a call-to-action button linking to the contact section or `/about`, and a decorative visual element (color block or brush-stroke background). The Hero section SHALL be visible without scrolling on desktop (1280px wide) and mobile (375px wide).

#### Scenario: Visitor lands on homepage

- **WHEN** a visitor navigates to `/`
- **THEN** the page displays the Hero section with name, tagline, and CTA button above the fold

### Requirement: Services section lists offered services

The homepage SHALL display a Services section listing at least three service categories (e.g., Website Design, Mobile App Design, Brand Identity), each with an icon and project count or short description.

#### Scenario: Services are visible on homepage

- **WHEN** a visitor scrolls past the Hero
- **THEN** the Services section is visible with at least three service items

### Requirement: Featured works section showcases portfolio items

The homepage SHALL display a Featured Works section showing the three most recent published works from the `works` collection as cards. Each card SHALL display: work title, cover image with alt text, and a link to `/works/[slug]`. An "Explore More Works" link SHALL navigate to `/works`.

#### Scenario: Featured works cards are rendered

- **WHEN** a visitor views the homepage
- **THEN** up to three work cards are displayed with title, image, and link

#### Scenario: No works exist

- **WHEN** the works collection is empty
- **THEN** the Featured Works section is hidden

### Requirement: Testimonials section displays client feedback

The homepage SHALL display a Testimonials section with at least two testimonial items, each containing: quote text, client name, and client title/company. When real testimonials are not available, placeholder data SHALL be used.

#### Scenario: Testimonials are displayed

- **WHEN** a visitor views the homepage
- **THEN** at least two testimonials with quote, name, and title are visible

### Requirement: CTA section prompts contact

The homepage SHALL display a closing CTA section with a headline and a "saying hi" link that opens the user's email client or navigates to a contact method.

#### Scenario: CTA link is actionable

- **WHEN** a visitor clicks the CTA link
- **THEN** the browser opens an email client or navigates to a contact method
