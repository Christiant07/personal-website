import { pageMetadata } from "@/lib/seo";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import { experiences, projects, skillGroups } from "@/data/portfolio";

export const metadata = pageMetadata("Experience", "Engineering experience, selected technical projects, and skills.", "/experience");

export default function Experience() {
  return (
    <main className="page portfolioHome" id="main-content" tabIndex={-1}>
      <section className="pageIntro">
        <h1 className="pageTitle">Experience</h1>
        <p className="pageLede">The systems I’ve worked on, the projects I’ve built, and what I’ve learned along the way.</p>
      </section>
      <section className="portfolioSection" aria-labelledby="work-title">
        <div className="portfolioSectionHeading"><h2 id="work-title">Engineering experience</h2></div>
        <div className="experienceList">
          {experiences.filter((item) => item.featured).map((experience) => <ExperienceCard key={experience.id} experience={experience} />)}
        </div>
      </section>
      <section className="portfolioSection" aria-labelledby="projects-title">
        <div className="portfolioSectionHeading"><h2 id="projects-title">Selected projects</h2></div>
        <div className="projectGrid">
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </section>
      <section className="portfolioSection" aria-labelledby="community-title">
        <div className="portfolioSectionHeading"><h2 id="community-title">Teaching &amp; family business</h2></div>
        <div className="experienceList">
          {experiences.filter((item) => !item.featured).map((experience) => <ExperienceCard key={experience.id} experience={experience} />)}
        </div>
      </section>
      <section className="portfolioSection" aria-labelledby="skills-title">
        <div className="portfolioSectionHeading"><h2 id="skills-title">Skills &amp; tools</h2></div>
        <div className="skillGroups">
          {skillGroups.map(({ label, items }) => (
            <div key={label} className="skillGroup">
              <h3 className="skillGroupLabel">{label}</h3>
              <ul className="chipRow" aria-label={label}>{items.map((item) => <li key={item} className="chip">{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>
      <section className="section ctaBand">
        <p>More about my work</p>
        <a className="btn btnSolid" href="/Christian-Tomas-Ocampo-Resume.pdf" target="_blank" rel="noopener noreferrer">View my resume</a>
      </section>
    </main>
  );
}
