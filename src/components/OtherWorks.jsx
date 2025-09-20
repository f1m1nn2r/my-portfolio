import { Link } from 'react-router-dom';
export default function OtherWorks() {
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
        <li className="other-works__filter-tab">
          <button className="other-works__filter-tab-button">홈페이지</button>
        </li>
        <li className="other-works__filter-tab">
          <button className="other-works__filter-tab-button">
            랜딩 페이지
          </button>
        </li>
        <li className="other-works__filter-tab">
          <button className="other-works__filter-tab-button">기타</button>
        </li>
      </ul>
      <div className="other-works__content">
        <div className="other-works__card">
          <header className="other-works__card-header">
            <h3 className="other-works__card-title">프로젝트명</h3>
            <span className="other-works__card-category">카테고리명</span>
          </header>
          <p className="other-works__card-description">
            프로젝트 설명 간략 1~2줄
          </p>
          <div className="other-works__card-meta">
            <time dateTime="" className="other-works__card-period">
              소요 기간
            </time>
            <Link to="">자세히 보기</Link>
          </div>
        </div>
      </div>
    </>
  );
}
