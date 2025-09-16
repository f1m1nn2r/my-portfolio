import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <nav className="footer__navigation" aria-label="푸터 네비게이션">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <Link
                to="/resume.pdf"
                className="footer__nav-link"
                target="_blank"
                rel="noopener noreferrer">
                이력서 보러가기 <i aria-hidden="true">▶</i>
              </Link>
            </li>
            <li className="footer__nav-item">
              <Link
                to="/work_experience.pdf"
                className="footer__nav-link"
                target="_blank"
                rel="noopener noreferrer">
                경력기술서 보러가기 <i aria-hidden="true">▶</i>
              </Link>
            </li>
            <li className="footer__nav-item">
              <Link
                to="/"
                className="footer__nav-link"
                rel="noopener noreferrer">
                포트폴리오 PDF 보러가기 <i aria-hidden="true">▶</i>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="footer__copyright">
          <time dateTime="2023/2025" className="footer__period">
            2023-2025
          </time>
        </div>
      </div>
    </footer>
  );
}
