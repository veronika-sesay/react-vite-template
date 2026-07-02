import { Link } from 'react-router-dom';
import './NotFoundPage.css';

export function NotFoundPage() {
  return (
    <section className="notfound-container">
      <div className="notfound-card">
        <p className="notfound-code">404</p>
        <h1>Page not found</h1>
        <p className="notfound-text">
          The page you are trying to open does not exist, or the link is out of
          date.
        </p>

        <div className="notfound-actions">
          <Link to="/" className="notfound-btn notfound-btn-primary">
            Back to Home
          </Link>
          <Link to="/about" className="notfound-btn notfound-btn-secondary">
            Go to About
          </Link>
        </div>
      </div>
    </section>
  );
}
