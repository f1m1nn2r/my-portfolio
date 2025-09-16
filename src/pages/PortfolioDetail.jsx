import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function PortfolioDetail() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) return <div>프로젝트를 찾을 수 없습니다.</div>;

  //-------------------------------------------------------
  const descriptionItem =
    project.description?.map(descItem => <li>{descItem}</li>) || [];

  const techStackItem = project.techStack
    ? Object.entries(project.techStack).map(([stackCategory, stackValue]) => (
        <li>
          <span>{stackCategory}</span>
          {stackValue}
        </li>
      ))
    : [];

  return (
    <>
      <div className="portfolio__text">
        <h1 className="portfolio__title">{project.title}</h1>
        <Link
          to={project.externalLink}
          target="_blank"
          className="portfolio__link"
          rel="noopener noreferrer">
          {project.externalLink}
        </Link>
      </div>
      <div className="portfolio__detail">
        <div className="portfolio__image">
          <img
            src={`/images/projects/${project.id}.png`}
            alt={`${project.title} 프로젝트 이미지`}
          />
        </div>
        <div className="portfolio__description">
          <article>
            <h3># 소요 기간</h3>
            <ul>
              <li>{project.duration}</li>
              <li>{project.role}</li>
            </ul>
          </article>
          <article>
            <h3># 주요 내용</h3>
            <ul>{descriptionItem}</ul>
          </article>
          <article>
            <h3># 주요 기술 스택</h3>
            <ul>
              <li>{techStackItem}</li>
            </ul>
          </article>
        </div>
      </div>
    </>
  );
}
