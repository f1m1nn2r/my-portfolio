import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container basic-inner">
        <nav className="footer__navigation" aria-label="푸터 네비게이션">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <Link to="/">이력서 보러가기</Link>
            </li>
            <li className="footer__nav-item">
              <Link to="/">포트폴리오 PDF 보러가기</Link>
            </li>
          </ul>
        </nav>
        <div className="footer__copyright">
          <time datetime="2023/2025" className="footer__period">
            2023-2025
          </time>
        </div>
      </div>
    </footer>
  );
}
