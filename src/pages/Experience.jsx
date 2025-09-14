export default function Experience() {
  return (
    <section className="experience">
      <div className="experience__container">
        <header className="experience__header">
          <h1 className="experience__title sr-only">경력</h1>
        </header>

        <div className="experience__timeline">
          <article className="experience__item">
            <header className="experience__item-header">
              <h2 className="experience__company">주식회사 아이스크림에듀</h2>
              <div className="experience__position">전략기획팀/사원</div>
              <time className="experience__period" dateTime="2023-09/P">
                (2023.09 - 현재)
              </time>
            </header>
            <ul className="experience__duties">
              <li className="experience__duty">
                JSP 기반 자사 서비스 시스템 안정화 및 성능 최적화
              </li>
              <li className="experience__duty">
                홈페이지 리뉴얼, 랜딩페이지, 제휴사 페이지 등 다양한 웹사이트
                구축
              </li>
              <li className="experience__duty">
                웹 퍼블리싱 및 UI/UX 개선 프로젝트 수행
              </li>
            </ul>
          </article>

          <article className="experience__item">
            <header className="experience__item-header">
              <h2 className="experience__company">주식회사 위즈클라쓰</h2>
              <div className="experience__position">개발파트/사원</div>
              <time className="experience__period" dateTime="2023-06/2023-09">
                (2023.06 - 2023.09)
              </time>
            </header>
            <ul className="experience__duties">
              <li className="experience__duty">
                React, Vue.js 프레임워크 기반 프론트엔드 개발 참여
              </li>
              <li className="experience__duty">
                기존 프로젝트 유지보수 및 코드 리팩토링 경험
              </li>
              <li className="experience__duty">
                컴포넌트 기반 개발 방법론 학습
              </li>
            </ul>
          </article>

          <article className="experience__item">
            <header className="experience__item-header">
              <h2 className="experience__company">주식회사 파이브센스</h2>
              <div className="experience__position">개발파트/사원</div>
              <time className="experience__period" dateTime="2022-02/2023-04">
                (2022.02 - 2023.04)
              </time>
            </header>
            <ul className="experience__duties">
              <li className="experience__duty">
                그누보드 기반 웹사이트 개발 및 커스터마이징
              </li>
              <li className="experience__duty">
                PHP 백엔드 구조 설계에 따른 UI 개발
              </li>
              <li className="experience__duty">
                프로젝트 납품부터 운영까지 전 과정 관리
              </li>
              <li className="experience__duty">
                인프라 구축: 도메인 연결, SSL 인증서 설치, 서버 운영
              </li>
              <li className="experience__duty">
                고객 대응 및 기술지원: CS 업무 및 유지보수 지원
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
