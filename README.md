# Personal Website - Christian Tomas Ocampo (CTO)

A personal portfolio website built with **Next.js**, showcasing my projects, experience, and contact information.

## Tech Stack

- **Framework**: Next.js 16 (App Router, file-based routing)
- **Styling**: Global CSS with a token-based design system (warm cream & brown palette, DM Serif Display + DM Sans via `next/font`), light and dark themes
- **Image Storage**: Static files in `public/images/` (deployed with the site)
- **Form Handling**: Formspree
- **Language**: JavaScript / JSX

## Project Structure

```
personal-website/
├── src/
│   ├── app/
│   │   ├── layout.jsx             # Root layout: fonts, metadata, header/footer
│   │   ├── page.jsx               # Home (hero + about)
│   │   ├── experience/page.jsx    # Skills, projects, and work
│   │   ├── contact/page.jsx       # Contact links + form
│   │   └── globals.css            # Design tokens + all styles
│   └── components/
│       ├── Header.jsx             # Sticky nav, active links, mobile hamburger
│       ├── Footer.jsx             # Footer nav
│       └── LoadingScreen.jsx      # Once-per-session branded intro
└── public/
    ├── images/                    # Site images (see images/README.md)
    └── Christian-Tomas-Ocampo-Resume.pdf
```

## Features

- Real routes for every page - `/experience` and `/contact` work on direct visit and refresh
- Once-per-session loading screen (skipped for reduced-motion users)
- Hover tooltips on skill chips, hover lift on cards, animated nav underline
- Fully responsive: hamburger menu and stacked cards on mobile
- Automatic dark mode matching the warm palette

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Notes

- Images live in `public/images/`; a few placeholders need replacing with the originals (see `public/images/README.md`)
- Resume is served as a static file from `/public` and downloads via the nav button

## Author

**Christian Tomas Ocampo**
- [LinkedIn](https://www.linkedin.com/in/christiantomasocampo)
- [GitHub](https://github.com/Christiant07)
- christiant_07@berkeley.edu
- chris0112tomas@gmail.com
