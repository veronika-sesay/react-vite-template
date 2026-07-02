import './AboutPage.css';

export function AboutPage() {
  return (
    <section className="about-container">
      <div className="about-card">
        <p className="about-eyebrow">About This Template</p>
        <h1>Simple React + Vite starter for small web projects</h1>
        <p className="about-lead">
          This project is designed for junior and less experienced coders who
          want a clean starting point without heavy architecture.
        </p>

        <div className="about-grid">
          <article className="about-block">
            <h2>Who it is for</h2>
            <ul>
              <li>Students learning React basics.</li>
              <li>Developers building first client projects.</li>
              <li>Teams that need a simple boilerplate.</li>
            </ul>
          </article>

          <article className="about-block">
            <h2>What you get</h2>
            <ul>
              <li>Routing with Home, About and 404 pages.</li>
              <li>Separated Header and Footer components.</li>
              <li>Centralized global styles and design tokens.</li>
            </ul>
          </article>

          <article className="about-block">
            <h2>How to use it</h2>
            <ol>
              <li>Clone the template and install dependencies.</li>
              <li>Adjust the pages for your project content.</li>
              <li>Add new reusable components as you grow.</li>
            </ol>
          </article>
        </div>
      </div>
    </section>
  );
}
