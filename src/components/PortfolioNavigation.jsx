import { NavLink } from "react-router-dom";
import { projects } from "../data/projects";

export default function PortfolioNavigation() {
  return (
    <aside className="portfolio__nav">
      <div className="portfolio__nav-inner">
        <nav>
          <ul>
            <li>📱 홈페이지</li>
            {projects.map((projectsList) => {
              <li>
                <NavLink to={projectsList.link}>{projectsList.label}</NavLink>
              </li>;
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
