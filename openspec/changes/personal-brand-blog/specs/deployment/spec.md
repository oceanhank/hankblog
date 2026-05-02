## ADDED Requirements

### Requirement: GitHub Actions deploys on push to main

A GitHub Actions workflow file at `.github/workflows/deploy.yml` SHALL trigger on every push to the `main` branch. The workflow SHALL: install Node.js dependencies, run `npm run build`, and deploy the `dist/` directory to the `gh-pages` branch using the official `actions/deploy-pages` or `peaceiris/actions-gh-pages` action.

#### Scenario: Push to main triggers deployment

- **WHEN** a commit is pushed to the `main` branch
- **THEN** the GitHub Actions workflow runs, builds the site, and deploys to GitHub Pages

#### Scenario: Push to non-main branch does not trigger deployment

- **WHEN** a commit is pushed to any branch other than `main`
- **THEN** the deployment workflow does NOT run

### Requirement: Astro config targets GitHub Pages base URL

`astro.config.mjs` SHALL set `site: "https://oceanhank.github.io"` and `base: "/hankblog"`. All internal links SHALL use `import.meta.env.BASE_URL` as prefix to ensure correct routing on GitHub Pages.

#### Scenario: Built site assets use correct base path

- **WHEN** the site is built with `npm run build`
- **THEN** all asset URLs in the HTML output start with `/hankblog/`
