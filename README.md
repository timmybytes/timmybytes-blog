# timmybytes Blog

This is my personal portfolio and blog site, built with Next.js, SCSS, and currently lots of tasty spaghetti code. This (WIP) site is a replacement for my first portfolio site, which was built using more vanilla HTML, SCSS, and minor JavaScript.

## About

The project uses the following technologies, libraries, and/or approaches. All of these should currently be considered a WIP, since the site is still in development and final choices haven't yet been made.

### Next.js/React

- Functional component-based structure with localized state(s).
- Next.js dynamic routes
- Next.js pre-rendering with static props

### Styling

Currently experimenting between SCSS, CSS modules, and inline JSON-like styling structures—hence all the spaghetti.

### Structure

TODO: Combine Home, About, Work into SPA; Blog as separate page

- Home
  - Landing page/CTA
  - (TODO:) Newest blog posts feed
- About
  - (TODO:) CTA for contact
- Work (TODO:)
  - Showcased projects
  - CTA for contact
- Blog
  - (TODO:) Dynamically imported post metadata for grid previews
  - `layout` template + component for new posts vs `.md` + `yml` posts (which can then be imported with `getStaticProps`)
