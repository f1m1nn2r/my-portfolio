import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container basic-inner">
        {/* 타이틀, 디스크립션 영역 */}
        <div className="header__brand">
          <h1 className="header__title">PORTFOLIO</h1>
          <p className="header__description">
            3년간 웹 에이전시, SI, 교육업을 거치며 개발 효율성과 사용자 경험
            개선이라는 두 가지 목표를 동시에 추구해 온 UI/UX 개발자
            김민중입니다.
          </p>
        </div>
        {/* 네비게이션 */}
        <Navigation />
      </div>
    </header>
  );
}
