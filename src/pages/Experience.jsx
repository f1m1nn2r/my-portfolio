import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section className="experience">
      <div className="experience__container">
        <header className="experience__header">
          <h1 className="experience__title sr-only">경력</h1>
        </header>

        <div className="experience__timeline">
          {experience.map((expItem) => (
            <article className="experience__item" key={expItem.id}>
              <header className="experience__item-header">
                <h2 className="experience__company">{expItem.company}</h2>
                <div className="experience__position">{expItem.position}</div>
                <time
                  className="experience__period"
                  dateTime={expItem.period.start}
                >
                  {expItem.period.display}
                </time>
              </header>
              <ul className="experience__duties">
                {expItem.duties.map((duty, index) => (
                  <li className="experience__duty" key={index}>
                    - {duty}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
