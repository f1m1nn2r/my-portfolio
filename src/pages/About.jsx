export default function About() {
  return (
    <section className="about__page">
      <div className="about__container">
        <header className="about__header">
          <h2 className="about__title">
            <i aria-hidden="true">🙋‍♀️</i>
            <br />
            안녕하세요,
            <br />
            사용자 경험과 개발 효율성을 <br />
            함께 고민하는 김민중입니다.
          </h2>
          <p className="about__description">
            JSP와 React 기반 프론트엔드 개발 경험을 바탕으로
            <br /> 교육 콘텐츠 웹 퍼블리싱을 담당하고 있습니다.
          </p>
        </header>

        <div className="about__content">
          <article className="about__section">
            <h3 className="about__section-title"># 업무 성향</h3>
            <p className="about__section-text">
              저는 예외 상황을 미리 발견하고 해결하는 것을 좋아합니다. <br />
              <span className="about__highlight">
                주어진 기획서를 넘어, "만약 이런 경우라면?"을 끊임없이 고민
              </span>
              하며, 실제로 그런 예외 상황들이 발견될 때 가장 보람을 느낍니다.
              <br />
              이런 호기심 덕분에 기획서에 없던{' '}
              <span className="about__highlight">
                예외 상황들을 미리 발견하고 대응
              </span>
              할 수 있었습니다. <br /> 코드로 결과물을 완성하는 것만큼이나, 그
              과정에서{' '}
              <span className="about__highlight">
                새로운 문제를 발견하고 해결할 때 가장 큰 성취감
              </span>
              을 느낍니다.
            </p>
          </article>

          <article className="about__section">
            <h3 className="about__section-title"># 기술 스택</h3>
            <div className="about__section-text">
              <p className="about__paragraph"></p>
            </div>
          </article>

          <article className="about__section">
            <h3 className="about__section-title"># 취미</h3>
            <div className="about__section-text">
              <p className="about__paragraph">
                업무 외에는 새로운 음악을 찾아 플레이리스트에 담는 것을
                좋아합니다. [조용한 카페에서 듣기 좋은 노래]라는 제목의 플레이
                리스트는 17명이 저장할 정도입니다. 같이 들어보실래요? 🎧{' '}
                <a
                  href="https://open.spotify.com/playlist/0g5eOKmRWAHkelxGs7663f?si=b9e999127990472e"
                  className="about__spotify-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Spotify 플레이리스트 듣기">
                  👉 Spotify에서 듣기
                </a>
              </p>
              <p className="about__paragraph">
                패션에 대해서도 관심이 많아 나름의 스타일링 철학을 가지고
                있는데요, 상의가 단순하면 하의는 독특하게, 하의가 단순하면
                상의에 포인트를 주는 개인적인 규칙이 있습니다.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
