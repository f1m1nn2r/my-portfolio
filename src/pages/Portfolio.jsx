import { Outlet } from 'react-router-dom';
import { ProjectProvider } from '../contexts/ProjectContext';
import PortfolioNavigation from '../components/PortfolioNavigation';
import OtherWorks from '../components/OtherWorks';

export default function Portfolio() {
  return (
    <ProjectProvider>
      <section className="portfolio__page">
        <div className="portfolio__container">
          <PortfolioNavigation />
          <div className="portfolio__content">
            <Outlet />
          </div>
        </div>
        <section className="other__works">
          <div className="other-works__container">
            <OtherWorks />
          </div>
        </section>
      </section>
    </ProjectProvider>
  );
}
