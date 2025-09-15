import { NavLink } from 'react-router-dom';
import { projects } from '../data/projects';

export default function PortfolioNavigation() {
  return (
    <aside className="portfolio__nav-menu">
      <div className="portfolio__nav-inner">
        <nav className="portfolio__nav">
          {Object.entries(
            projects.reduce((acc, project) => {
              if (!acc[project.category]) acc[project.category] = [];
              acc[project.category].push(project);
              return acc;
            }, {}),
          ).map(([category, projectList]) => (
            <div key={category}>
              <h3 className="portfolio__nav-title" role="presentation">
                {category}
              </h3>
              <ul className="portfolio__nav-list">
                {projectList.map(project => (
                  <li className="portfolio__nav-item" key={project.id}>
                    <NavLink
                      className="portfolio__nav-link"
                      to={`/portfolio/${project.id}`}>
                      {project.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
