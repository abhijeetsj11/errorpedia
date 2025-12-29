const About = () => {
  return (
    <div className="page-container">
      <h1>About Errorpedia</h1>
      <p>Your comprehensive resource for understanding and solving programming errors.</p>
      
      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Errorpedia is dedicated to helping developers of all skill levels understand and 
            resolve programming errors quickly and efficiently. We believe that every error 
            is an opportunity to learn and improve.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Offer</h2>
          <ul>
            <li>Comprehensive error explanations across multiple programming languages</li>
            <li>Practical solutions with code examples</li>
            <li>Organized categories for easy navigation</li>
            <li>Regular updates with new error solutions</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Coverage</h2>
          <p>
            We cover a wide range of technologies including JavaScript, React, Node.js, 
            TypeScript, HTTP errors, Database issues, Git problems, and much more.
          </p>
        </section>

        <section className="about-section">
          <h2>Get Involved</h2>
          <p>
            Have an error solution to share? Want to contribute to the community? 
            Feel free to reach out and help make Errorpedia even better!
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
