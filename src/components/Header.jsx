import { useState, useRef, useEffect } from 'react';
import Navigation from './Navigation';

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const brandRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (brandRef.current) {
        const brandHeight = brandRef.current.offsetHeight;
        const scrollY = window.scrollY;

        setIsFixed(scrollY > brandHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__container">
        {/* 타이틀, 디스크립션 영역 */}
        <div className="header__brand" ref={brandRef}>
          <h1 className="header__title">PORTFOLIO</h1>
          <p className="header__description">
            3년간 웹 에이전시, SI, 교육업을 거치며 개발 효율성과 사용자 경험
            개선이라는
            <br /> 두 가지 목표를 동시에 추구해 온{' '}
            <span>UI/UX 개발자 김민중</span>입니다.
          </p>
        </div>
        {/* 네비게이션 */}
        <Navigation isFixed={isFixed} />
      </div>
    </header>
  );
}
