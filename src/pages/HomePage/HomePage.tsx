import './HomePage.css';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <section className="home-container">
      <div className="home-card">
        <p className="home-eyebrow">React + Vite Starter</p>
        <h1>Build quickly, keep it clean.</h1>
        <p className="home-description">
          This template gives you a simple base for pages, routing and reusable
          components so you can focus on features.
        </p>

        <div className="home-actions">
          <Link to="/about" className="home-btn home-btn-primary">
            Explore About Page
          </Link>
          <a
            href="https://vite.dev"
            className="home-btn home-btn-secondary"
            target="_blank"
            rel="noreferrer"
          >
            Vite Docs
          </a>
        </div>

        <ul className="home-features">
          <li>Fast local development</li>
          <li>Organized project structure</li>
          <li>Ready for scaling</li>
        </ul>
      </div>
    </section>
  );
}
