## ADDED Requirements

### Requirement: About page displays owner introduction and services

The `/about` page SHALL display: a personal introduction section (name, bio, years of experience), a list of services offered with brief descriptions, and contact information (email address at minimum).

#### Scenario: Visitor navigates to About page

- **WHEN** a visitor navigates to `/about`
- **THEN** the page displays introduction, services list, and contact information

### Requirement: About page provides a contact method

The `/about` page SHALL include a visible email link (using `mailto:`) so visitors can contact the owner directly without a form or third-party service.

#### Scenario: Email link is clickable

- **WHEN** a visitor clicks the email link on `/about`
- **THEN** the browser opens the default email client with the owner's address pre-filled
