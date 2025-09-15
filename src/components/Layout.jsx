import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  const location = useLocation();

  const currentPage =
    location.pathname === '/' ? 'about' : location.pathname.split('/')[1];

  return (
    <>
      <div className={`component-layout ${currentPage}`}>
        <Header />
        <div className="center-component basic-inner">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
