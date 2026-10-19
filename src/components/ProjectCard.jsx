export default function ProjectCard({ project }) {
  const { id, title, category, summary, highlights, technologies, links = [] } = project;
  return (
    <article className="projectCard" aria-labelledby={`${id}-title`}>
      <p className="projectCategory">{category}</p>
      <h3 id={`${id}-title`}>{title}</h3>
      <p className="engineeringSummary">{summary}</p>
      <ul className="engineeringHighlights">
        {highlights.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <ul className="technologyList" aria-label={`${title} technologies`}>
        {technologies.map((item) => <li key={item}>{item}</li>)}
      </ul>
      {links.length > 0 && (
        <div className="projectLinks">
          {links.map(({ label, href }) => (
            <a className="portfolioTextLink" key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${title}: ${label}`}>
              {label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
