import ContactForm from "@/components/ContactForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Contact", "Get in touch with Christian Tomas Ocampo - email, LinkedIn, GitHub, or the contact form.", "/contact");

const channels = [
  {
    label: "Berkeley email",
    value: "christiant_07@berkeley.edu",
    href: "mailto:christiant_07@berkeley.edu",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "Personal email",
    value: "chris0112tomas@gmail.com",
    href: "mailto:chris0112tomas@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "christiantomasocampo",
    href: "https://www.linkedin.com/in/christiantomasocampo/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-7.9c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.16V23H8V8z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "Christiant07",
    href: "https://github.com/Christiant07",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.34.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.67.41.35.77 1.05.77 2.12v3.14c0 .3.21.66.8.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <main className="page" id="main-content" tabIndex={-1}>
      <section className="pageIntro">
        <h1 className="pageTitle">Contact</h1>
        <p className="pageLede">
          Want to know more? Reach out.
        </p>
      </section>

      <section className="section">
        <h2 className="sectionTitle">Find me</h2>
        <ul className="channelGrid">
          {channels.map(({ label, value, href, icon }) => (
            <li key={label}>
              <a
                className="channelCard"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="channelIcon">{icon}</span>
                <span className="channelText">
                  <span className="channelLabel">{label}</span>
                  <span className="channelValue">{value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 className="sectionTitle">Send a message</h2>
        <ContactForm />
      </section>
    </main>
  );
}
