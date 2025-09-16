import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function PortfolioDetail() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) return <div>프로젝트를 찾을 수 없습니다.</div>;

  //-------------------------------------------------------
  const descriptionItem =
    project.description?.map((descItem, index) => (
      <li key={index} className="detail__description-item dash">
        {descItem}
      </li>
    )) || [];

  const techStackItem = project.techStack
    ? Object.entries(project.techStack).map(([stackCategory, stackValue]) => (
        <div key={stackCategory} className="detail__description-item dash">
          <dt className="detail__section-category">{stackCategory}</dt>
          <dd className="detail__section-value">: {stackValue}</dd>
        </div>
      ))
    : [];

  const featuresItem = project.techFeatures?.map((featuresCategory, index) => (
    <div key={index} className="detail__description-item">
      <dt className="detail__section-category">{featuresCategory.name}</dt>
      <dd className="detail__section-value">{featuresCategory.description}</dd>
    </div>
  ));

  return (
    <>
      <header className="detail__header">
        <h1 className="detail__title">{project.title}</h1>
        <a
          href={project.externalLink}
          target="_blank"
          className="detail__link"
          rel="noopener noreferrer">
          {project.externalLink}
        </a>
      </header>
      <div className="detail__content">
        <figure className="detail__figure">
          <img
            src={`/images/projects/${project.id}.png`}
            alt={`${project.title} 프로젝트 이미지`}
            className="detail__image"
          />
          <figcaption className="sr-only">{project.title}</figcaption>
        </figure>
        <div className="detail__info">
          <section className="detail__section">
            <dl className="detail__section-list">
              <div className="detail__description-item">
                <dt className="detail__section-label"># 소요 기간</dt>
                <dd className="detail__section-value">{project.duration}</dd>
              </div>
            </dl>
          </section>
          <section className="detail__section">
            <dl className="detail__section-list">
              <div className="detail__description-item">
                <dt className="detail__section-label"># 기여도</dt>
                <dd className="detail__section-value">{project.role}</dd>
              </div>
            </dl>
          </section>
          <section className="detail__section">
            <dl className="detail__section-lst">
              <div className="detail__description-item">
                <dt className="detail__section-label"># 주요 내용</dt>
                <dd className="detail__section-value">
                  <ul className="detail__description-list">
                    {descriptionItem}
                  </ul>
                </dd>
              </div>
            </dl>
          </section>
          <section className="detail__section detail__section--tech-stack">
            <h3 className="detail__section-label"># 주요 기술 스택</h3>
            <dl className="detail__section-list">{techStackItem}</dl>
          </section>
          <section className="detail__section detail__section--tech-features">
            <dl className="detail__section-list">
              <dt className="detail__section-label"># 주요 기능</dt>
              {featuresItem}
            </dl>
          </section>
        </div>
      </div>
    </>
  );
}
