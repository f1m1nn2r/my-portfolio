import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';

export default function PortfolioDetail() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) return <div>프로젝트를 찾을 수 없습니다.</div>;

  // //-------------------------------------------------------
  // const workScopeItem =
  //   project.workScope?.map((workScopeList, index) => (
  //     <li key={index} className="detail__description-item dash">
  //       {workScopeList}
  //     </li>
  //   )) || [];

  // const descriptionItem =
  //   project.description?.map((descItem, index) => (
  //     <li key={index} className="detail__description-item dash">
  //       {descItem}
  //     </li>
  //   )) || [];

  // const techStackItem = project.techStack
  //   ? Object.entries(project.techStack).map(
  //       ([stackCategory, stackValue], index) => (
  //         <div key={index} className="detail__description-item dash">
  //           <dt className="detail__section-category">{stackCategory}:</dt>
  //           <dd className="detail__section-value">&nbsp;{stackValue}</dd>
  //         </div>
  //       ),
  //     )
  //   : [];

  // const featuresItem = project.techFeatures?.map((featuresCategory, index) => (
  //   <div key={index} className="detail__description-item">
  //     <dt className="detail__section-category">{featuresCategory.name}</dt>
  //     <dd className="detail__section-value">{featuresCategory.description}</dd>
  //   </div>
  // ));

  // const projectImages = project.gallery?.map((image, index) => (
  //   <div className="detail__image-wrapper">
  //     <img
  //       src={`/images/projects/${image}`}
  //       alt={`${project.title} 프로젝트 이미지`}
  //       className="detail__image"
  //       key={index}
  //     />
  //   </div>
  // ));

  return (
    <>
      {/* <header className="detail__header">
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
          {!project.gallery && (
            <>
              <img
                src={`/images/projects/${project.id}.png`}
                alt={`${project.title} 프로젝트 이미지`}
                className="detail__image"
              />
              <figcaption className="sr-only">{project.title}</figcaption>
            </>
          )}
          {project.gallery && projectImages}
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
          {project.workScope && (
            <section className="detail__section">
              <dl className="detail__section-list">
                <div className="detail__description-item">
                  <dt className="detail__section-label"># 담당 업무</dt>
                  <ul className="detail__section-value">{workScopeItem}</ul>
                </div>
              </dl>
            </section>
          )}
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
    </div> */}

      <div className="portfolio__detail">
        <div className="portfolio__detail-text">
          <header className="portfolio__detail-header">
            <h2 className="portfolio__detail-title">{project.title}</h2>
            <p className="portfolio__detail-subtitle">{project.subtitle}</p>
            <a
              href={project.link}
              target="_blank"
              className="portfolio__detail-link"
              rel="noopener noreferrer">
              <i aria-hidden="true">🔗</i>
              <span className="portfolio__detail-link-text">
                {project.link}
              </span>
            </a>
            <p className="portfolio__detail-desc">{project.description}</p>
          </header>
          <div className="portfolio__detail-meta">
            <div className="portfolio__detail-contribution">
              <h3 className="portfolio__detail-contribution-title">
                🤝 기여도
              </h3>
              <p className="portfolio__detail-contribution-role">
                {project.role}
              </p>
            </div>
            <div className="portfolio__detail-tech">
              <h3 className="portfolio__detail-tech-title">🛠️ 사용 기술</h3>
              <ul className="portfolio__detail-tech-list tag-group">
                <li className="portfolio__detail-tech-item tag-group__item">
                  JavaScript
                </li>
                <li className="portfolio__detail-tech-item tag-group__item">
                  jQuery
                </li>
                <li className="portfolio__detail-tech-item tag-group__item">
                  JSP
                </li>
                <li className="portfolio__detail-tech-item tag-group__item">
                  Ajax
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="portfolio__detail-content">
          <figure className="portfolio__detail-figure">
            <img src="" alt="" className="portfolio__detail-image" />
          </figure>
          <section className="portfolio__detail-achievements">
            <h2 className="portfolio__detail-section-title">⭐ 주요 성과</h2>
            <ul className="portfolio__detail-achievement-list">
              {project.results &&
                project.results.map((result, index) => (
                  <li className="portfolio__detail-achievement-item">
                    {result}
                  </li>
                ))}
            </ul>
          </section>
          <section className="portfolio__detail-features">
            <h2 className="portfolio__detail-section-title">
              🔧 구현 기능 상세
            </h2>

            <div className="portfolio__detail-feature-group">
              <h3 className="portfolio__detail-feature-title">
                실시간 필터링 시스템
              </h3>
              <ul className="portfolio__detail-feature-list">
                <li className="portfolio__detail-feature-item">
                  필터 변경 시 서버 데이터 요청 및 콘텐츠 실시간 업데이트
                </li>
                <li className="portfolio__detail-feature-item">
                  검색 결과 개수 표시 및 상세 정보 팝업 구현
                </li>
              </ul>
            </div>

            <div className="portfolio__detail-feature-group">
              <h3 className="portfolio__detail-feature-title">
                멀티미디어 슬라이더
              </h3>
              <ul className="portfolio__detail-feature-list">
                <li className="portfolio__detail-feature-item">
                  동영상/이미지 통합 슬라이더 구성
                </li>
                <li className="portfolio__detail-feature-item">
                  각 콘텐츠마다 고유 ID를 부여해 클릭 시 ID 값과 동일한 상세
                  정보 팝업 형태로 표시
                </li>
              </ul>
            </div>

            <div className="portfolio__detail-feature-group">
              <h3 className="portfolio__detail-feature-title">
                사용자 경험 최적화
              </h3>
              <ul className="portfolio__detail-feature-list">
                <li className="portfolio__detail-feature-item">
                  검색 결과 없음 시 "다른 콘텐츠를 발견해보세요" 유도 메시지
                </li>
                <li className="portfolio__detail-feature-item">
                  DOM 조작 최적화로 화면 깜빡임 최소화
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
