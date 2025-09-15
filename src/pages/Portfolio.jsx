import { Outlet } from 'react-router-dom';
import PortfolioNavigation from '../components/PortfolioNavigation';

export default function Portfolio() {
  return (
    <>
      <section className="portfolio">
        <div className="portfolio__container">
          <PortfolioNavigation />
          <div className="portfolio__content">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
}
