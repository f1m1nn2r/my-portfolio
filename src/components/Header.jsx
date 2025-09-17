import { Link } from 'react-router-dom';
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
        {/* 타이틀, 문서 다운로드 영역 */}
        <div className="header__brand" ref={brandRef}>
          <h1 className="header__title">PORTFOLIO</h1>

          <nav className="header__documents">
            <ul className="header__documents-list">
              <li className="header__documents-item">
                <Link
                  to="/resume.pdf"
                  className="header__documents-link"
                  target="_blank"
                  rel="noopener noreferrer">
                  이력서 보러가기 <i aria-hidden="true">▶</i>
                </Link>
              </li>
              <li className="header__documents-item">
                <Link
                  to="/work-experience.pdf"
                  className="header__documents-link"
                  target="_blank"
                  rel="noopener noreferrer">
                  경력기술서 보러가기 <i aria-hidden="true">▶</i>
                </Link>
              </li>
              <li className="header__documents-item">
                <Link
                  to="/"
                  className="header__documents-link"
                  rel="noopener noreferrer">
                  포트폴리오 PDF 보러가기 <i aria-hidden="true">▶</i>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* 네비게이션 */}
        <Navigation isFixed={isFixed} />
      </div>
    </header>
  );
}
