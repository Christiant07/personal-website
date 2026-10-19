import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import { profile, experiences, projects } from "@/data/portfolio";

export const metadata = pageMetadata();

export default function Home() {
  return (
    <main className="page portfolioHome" id="main-content" tabIndex={-1}>
      <section className="portfolioHero" aria-labelledby="intro-title">
        <p className="eyebrow">{profile.location} / {profile.education}</p>
        <h1 id="intro-title">Christian <span>Tomas Ocampo</span></h1>
        <p className="portfolioIntro">{profile.introduction}</p>
        <div className="portfolioActions">
          <a href="#featured-experience" className="btn btnSolid">Explore my work <span aria-hidden="true">↓</span></a>
          <Link href="/contact" className="btn btnGhost">Get in touch</Link>
        </div>
        <div className="profileLinks" aria-label="Professional links">
          {profile.links.map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label} <span aria-hidden="true">↗</span></a>
          ))}
        </div>
      </section>

      <section className="portfolioSection" id="featured-experience" aria-labelledby="experience-title">
        <div className="portfolioSectionHeading">
          <div><p className="eyebrow">01 / Engineering in practice</p><h2 id="experience-title">Featured experience</h2></div>
          <Link className="portfolioTextLink" href="/experience">All experience <span aria-hidden="true">→</span></Link>
        </div>
        <div className="experienceList">
          {experiences.filter((item) => item.featured).map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </section>

      <section className="portfolioSection" aria-labelledby="projects-title">
        <div className="portfolioSectionHeading">
          <div><p className="eyebrow">02 / Selected builds</p><h2 id="projects-title">Projects with technical depth</h2></div>
        </div>
        <div className="projectGrid">
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </section>

      <section className="portfolioSection portfolioAbout" aria-labelledby="about-title">
        <div><p className="eyebrow">03 / Beyond the code</p><h2 id="about-title">A little about me</h2></div>
        <div>
          <p>{profile.about}</p>
          <p>Outside of CS, you can find me playing soccer, running, hiking, or café hopping. I love coffee and am always up for trying a new spot.</p>
          <Link className="portfolioTextLink" href="/contact">Let’s connect <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </main>
  );
}
