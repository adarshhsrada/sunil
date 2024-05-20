import React from 'react';
// import './App.css'; // Import your CSS styles

const App = () => {
  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <h1>Sunil Architect</h1>
        <p>Welcome to the portfolio of Sunil Kumar.</p>
      </header>

      {/* Portfolio Section */}
      <section className="portfolio">
        <h2>Portfolio</h2>
        <div className="portfolio-items">
          {/* Portfolio Item 1 */}
          <div className="portfolio-item">
            <h3>Project 1</h3>
            <div className="project-video">
              <img src="images/image_1.jpg" alt="Project 2" />
              {/* Embed video using React Player or similar library */}

            </div>
          </div>

          {/* Portfolio Item 2 (Add more items as needed) */}
          <div className="portfolio-item">
            <h3>Project 2</h3>
            <div className="project-image">
              {/* Add images for the project */}
              <img src="images/image_2.jpg" alt="Project 2" />
            </div>
          </div>
          <div className="portfolio-item">
            <h3>Project 3</h3>
            <div className="project-image">
              {/* Add images for the project */}
              <img src="images/image_3.jpg" alt="Project 2" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About</h2>
        <p>
          I am a professional architect with expertise in designing innovative and
          sustainable buildings. With more than 5 years of experience, i have successfully completed
          numerous projects that blend creativity with functionality.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact</h2>
        <p>For inquiries and collaborations, please contact:</p>
        <ul>
          <li>Email: architect@example.com</li>
          <li>Phone: +1234567890</li>
          {/* Add more contact details if necessary */}
        </ul>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <p>Location: Mohali, Punjab , India</p>
          <p>Social Media: Follow us on <a href="#">Instagram</a> and <a href="#">LinkedIn</a></p>
        </div>
      </footer>
    </div>
  );
};

export default App;
