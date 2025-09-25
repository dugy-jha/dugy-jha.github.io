import { Link } from 'react-router-dom';
import ElectricBorder from '../components/ElectricBorder';
import '../styles/NotFound.css';

function NotFound() {
  return (
    <div className="not-found-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="gradient-text">404</h1>
          <p className="hero-subtitle">
            Page not found
          </p>
        </div>
      </section>

      <section className="not-found-content p-8">
        <div className="container text-center">
          <div className="not-found-message">
            <h2>Oops! This page doesn't exist.</h2>
            <p>The page you're looking for might have been moved, deleted, or doesn't exist.</p>
            <ElectricBorder as={Link} to="/" className="cta-button">
              Go Back Home
            </ElectricBorder>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
