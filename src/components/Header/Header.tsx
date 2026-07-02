import { NavLink } from 'react-router-dom';
import './Header.css';

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <NavLink to="/" className="site-brand">
          React Vite Template
        </NavLink>

        <nav className="site-nav" aria-label="Main navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `site-nav-link${isActive ? ' site-nav-link-active' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `site-nav-link${isActive ? ' site-nav-link-active' : ''}`
            }
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
