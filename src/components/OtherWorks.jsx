import { Link } from 'react-router-dom';
import { useProjects } from '../contexts/ProjectContext';

export default function OtherWorks() {
  const { otherWorks } = useProjects();

  return (
    <>
      <header className="other-works__header ">
        <h2 className="other-works__title">기타 작업물</h2>
      </header>
      <div className="other-works__search-box">
        <input type="text" className="other-works__search-input" />
      </div>
      <ul className="other-works__filter-tabs">
        <li className="other-works__filter-tab">
          <button className="other-works__filter-tab-button">전체</button>
        </li>
        {otherWorks.map((otherWork, index) => (
          <li className="other-works__filter-tab" key={index}>
            <button className="other-works__filter-tab-button">
              {otherWork.category}
            </button>
          </li>
        ))}
      </ul>
      <div className="other-works__content">
        {otherWorks.map(
          (otherWork, otherWorkIndex) =>
            otherWork.details?.map((detail, detailIndex) => (
              <div
                key={`${otherWorkIndex}-${detailIndex}`}
                className="other-works__card">
                <header className="other-works__card-header">
                  <h3 className="other-works__card-title">{detail.name}</h3>
                  <span className="other-works__card-category">
                    {otherWork.category}
                  </span>
                </header>
                <p className="other-works__card-description">
                  {detail.description}
                </p>
                <div className="other-works__card-meta">
                  <time className="other-works__card-period">
                    {detail.period}
                  </time>
                  {detail.link && (
                    <a
                      href={detail.link}
                      target="_blank"
                      rel="noopener noreferrer">
                      자세히 보기
                    </a>
                  )}
                </div>
              </div>
            )) || null,
        )}
      </div>
    </>
  );
}
