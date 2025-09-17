import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import PortfolioDetail from './pages/PortfolioDetail';
import Contact from './pages/Contact';
import Behind from './pages/Behind';
import './styles/index.css';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<About />} />
            <Route path="portfolio" element={<Portfolio />}>
              <Route index element={<Navigate to="all-services" replace />} />
              <Route path=":projectId" element={<PortfolioDetail />} />
            </Route>
            <Route path="contact" element={<Contact />} />
            <Route path="behind" element={<Behind />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
