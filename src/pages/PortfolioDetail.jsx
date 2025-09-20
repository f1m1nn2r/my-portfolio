import { useParams } from 'react-router-dom';
import { useProjects } from '../contexts/ProjectContext';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function PortfolioDetail() {
  const { projectId } = useParams();
  const { projects } = useProjects();
  const project = projects.find(p => p.id === projectId);

  if (!project) return <div>프로젝트를 찾을 수 없습니다.</div>;

  return (
    <div className="portfolio__detail">
      <div className="portfolio__detail-content">
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
                {project.usedTechs &&
                  project.usedTechs.map((skillItem, index) => (
                    <li
                      className={`portfolio__detail-tech-item tag-group__item tag-group__item--${skillItem.level}`}
                      key={index}>
                      {skillItem.name}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        {/* ## 프로젝트 이미지 */}
        <figure className="portfolio__detail-figure">
          <Swiper className="portfolio__detail-figure-slider">
            {project.gallery &&
              project.gallery.map((galleryItem, index) => (
                <SwiperSlide
                  className="portfolio__detail-figure-slide"
                  key={index}>
                  <img
                    src={`/images/projects/${galleryItem.image}.png`}
                    alt={`${project.title} 프로젝트 이미지`}
                    className="portfolio__detail-figure-image"
                  />
                  <div className="portfolio__detail-figure-text">
                    <p key={index}>{galleryItem.description}</p>
                  </div>
                  <figcaption className="sr-only">{project.title}</figcaption>
                </SwiperSlide>
              ))}
          </Swiper>
        </figure>
        <section className="portfolio__detail-design">
          {/* ## 한눈에 보기 - 구조 설계 */}
          {project.table ? (
            <>
              <h2 className="portfolio__detail-section-title">⚙️ 구조 설계</h2>
              <table className="architecture__table">
                <thead className="architecture__table-header">
                  <tr>
                    <th width="20%">카테고리</th>
                    <th width="25%">파일명</th>
                    <th width="55%">역할 및 기능</th>
                  </tr>
                </thead>
                <tbody className="architecture__table-body">
                  {project.table.map((tableItem, categoryIndex) =>
                    tableItem.dataSources.map((dataSource, sourceIndex) => (
                      <tr key={`${categoryIndex}-${sourceIndex}`}>
                        {sourceIndex === 0 && (
                          <td
                            className="architecture__table-cell architecture__category-cell"
                            rowSpan={tableItem.dataSources.length}
                            data-label="카테고리">
                            <span className="architecture__category-badge">
                              {tableItem.category}
                            </span>
                          </td>
                        )}

                        <td className="architecture__table-cell">
                          <div className="architecture__file-name">
                            {dataSource.description}
                          </div>
                          <div className="architecture__file-path">
                            {dataSource.file}
                          </div>
                        </td>

                        <td
                          className="architecture__table-cell"
                          data-label="기능">
                          <div className="architecture__file-desc">
                            {dataSource.function}
                          </div>
                        </td>
                      </tr>
                    )),
                  )}
                </tbody>
              </table>
            </>
          ) : (
            <>
              <h2 className="portfolio__detail-section-title">
                🚀 문제점 개선&결과
              </h2>
              <div className="timeline__container">
                {project.timeline.map((timeLineItem, timelineIndex) => (
                  <div
                    className={`timeline__item timeline__item--${timeLineItem.type}`}
                    key={`timeline-${timelineIndex}`}>
                    <div
                      className={`timeline__content timeline__content--${timeLineItem.type}`}>
                      <div
                        className={`timeline__step timeline__step--${timeLineItem.type}`}>
                        {timeLineItem.type}
                      </div>
                      <h4 className="timeline__heading">
                        {timeLineItem.category}
                      </h4>
                      <ul className="timeline__description">
                        {timeLineItem.details.map((detail, detailIndex) => (
                          <li
                            className="timeline__description--item dash"
                            key={`detail-${timelineIndex}-${detailIndex}`}>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </section>

        <div className="portfolio__detail-grid">
          {/* ##구현 기능 상세 */}
          {project.features && (
            <section className="portfolio__detail-features">
              <h2 className="portfolio__detail-section-title">
                📋 구현 기능 요약
              </h2>

              <div className="portfolio__detail-feature-group">
                <ul className="portfolio__detail-feature-list">
                  {project.features.map((featuresItem, index) => (
                    <li
                      className="portfolio__detail-feature-item dash"
                      key={index}>
                      {featuresItem}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}
          {/* ## 주요 성과 */}
          {project.results && (
            <section className="portfolio__detail-achievements">
              <h2 className="portfolio__detail-section-title">⭐ 주요 성과</h2>
              <ul className="portfolio__detail-achievement-list">
                {project.results.map((result, index) => (
                  <li
                    className="portfolio__detail-achievement-item dash"
                    key={index}>
                    {result}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
