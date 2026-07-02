import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import './MainLayout.css';

export const MainLayout = () => {
  return (
    <div className="site-shell">
      <Header />

      <main className="site-main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
