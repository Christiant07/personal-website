# Personal Website — Christian Tomas OCampo (CTO)

A personal portfolio website built with **Next.js** and **React Router**, showcasing my projects, experience, and contact information.

## Tech Stack

- **Framework**: Next.js 14
- **Routing**: React Router v6 (client-side, via `dynamic` import with `ssr: false`)
- **Styling**: Global CSS with custom design system
- **Image Storage**: Supabase Storage
- **Form Handling**: Formspree
- **Language**: JavaScript / JSX

## Project Structure

```
personal-website/
├── app/
│   ├── layout.js          # Root layout, global metadata
│   ├── page.js            # Entry point — loads Router dynamically
│   └── globals.css        # All styles
├── components/
│   ├── Header.jsx         # Site header with logo + nav
│   ├── Nav.jsx            # Navigation links + resume download
│   └── router.jsx         # BrowserRouter setup, route definitions
├── pages/
│   ├── HomeP.jsx          # Home page
│   ├── Experience.jsx     # Skills, projects, and work experience
│   └── Contact.jsx        # Contact links and email form
└── public/
    └── Resume-CTO.pdf     # Downloadable resume
```

## Pages

### Home
Introduction section with name display and a brief about me blurb with photo.

### Experience
- **Skills & Tools**: Java, Python, SQL, HTML/CSS, JavaScript, React, Next.js, Supabase, GitHub
- **Projects**:
  - *NextFor Autism* — Full-stack mentorship platform for students with autism and their mentors, featuring dashboards, weekly content, a matching system, and admin tooling
  - *Ants vs SomeBees* — Tower defense game inspired by Plants vs. Zombies, built with object-oriented programming
- **Work**: BGCSV Code + Create STEM Program Specialist — taught robotics, animation, and coding workshops to students at Boys & Girls Clubs of Silicon Valley

### Contact
Email, LinkedIn, GitHub links plus a contact form powered by Formspree.

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Notes

- React Router is loaded client-side only via Next.js `dynamic()` to avoid SSR conflicts with `BrowserRouter`
- Resume is served as a static file from `/public` and triggers a download via the nav
- Images are hosted on Supabase Storage

## Author

**Christian Tomas Ocampo**
- [LinkedIn](https://www.linkedin.com/in/christiantomasocampo)
- [GitHub](https://github.com/Christiant07)
- christiant_07@berkeley.edu
- chris0112tomas@gmail.com