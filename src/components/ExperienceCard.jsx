export default function ExperienceCard({ experience }) {
  const { id, organization, role, dates, summary, highlights, technologies } = experience;
  return (
    <article className="engineeringCard" aria-labelledby={`${id}-title`}>
      <div className="experienceIdentity">
        <p className="experienceDate">{dates}</p>
        <h3 id={`${id}-title`}>{organization}</h3>
        <p className="experienceRole">{role}</p>
      </div>
      <div className="engineeringDetails">
        <p className="engineeringSummary">{summary}</p>
        <ul className="engineeringHighlights">
          {highlights.map((item) => <li key={item}>{item}</li>)}
        </ul>
        {technologies.length > 0 && <ul className="technologyList" aria-label={`${organization} technologies`}>
          {technologies.map((item) => <li key={item}>{item}</li>)}
        </ul>}
      </div>
    </article>
  );
}
