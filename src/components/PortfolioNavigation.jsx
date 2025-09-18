import { NavLink } from 'react-router-dom';
import { projects } from '../data/projects';

export default function PortfolioNavigation() {
  return (
    <aside
      className="project-selection"
      role="complementary"
      aria-label="프로젝트 네비게이션">
      <header className="project-selection__header">
        <h2 className="project-selection__title">프로젝트 선택</h2>
      </header>
      <nav className="project-selection__content">
        <ul className="project-selection__list" role="list">
          {projects.map((project, index) => (
            <li className="project-selection__item" key={index}>
              <NavLink
                className={({ isActive }) =>
                  `project-selection__link ${
                    isActive ? 'project-selection__link-active' : ''
                  }`
                }
                to={`/portfolio/${project.id}`}>
                <h3 className="project-selection__label">{project.label}</h3>
                <p className="project-selection__desc">{project.preview}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
