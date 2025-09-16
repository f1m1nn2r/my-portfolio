import { NavLink } from 'react-router-dom';
import { projects } from '../data/projects';

export default function PortfolioNavigation() {
  const category = projects.reduce((acc, project) => {
    if (!acc[project.category]) acc[project.category] = [];
    acc[project.category].push(project);
    return acc;
  }, {});

  return (
    <aside className="portfolio__nav-menu">
      <div className="portfolio__nav-inner">
        <nav className="portfolio__nav">
          {Object.entries(category).map(([category, projectList]) => (
            <section className="portfolio__nav-category" key={projectList}>
              <h3 className="portfolio__nav-title">{category}</h3>
              <ul className="portfolio__nav-list">
                {projectList.map(project => (
                  <li className="portfolio__nav-item" key={project.id}>
                    <NavLink
                      className={({ isActive }) =>
                        `portfolio__nav-link ${
                          isActive ? 'portfolio__nav-link--active' : ''
                        }`
                      }
                      to={`/portfolio/${project.id}`}>
                      {project.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>
      </div>
    </aside>
  );
}
