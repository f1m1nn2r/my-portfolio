import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <nav className="header__navigation" aria-label="헤더 네비게이션">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/" className="header__nav-link">
              About me
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/experience" className="header__nav-link">
              Experience
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/portfolio" className="header__nav-link">
              Portfolio
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/contact" className="header__nav-link">
              Contact
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/behind" className="header__nav-link">
              Behind
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
