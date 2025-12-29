const About = () => {
  return (
    <div className="page-container">
      <h1>About Errorpedia</h1>
      
      <div className="about-content">
        <section className="about-section">
          <h2>🚀 What is Errorpedia?</h2>
          <p>
            Errorpedia is a developer-focused platform created to help programmers understand 
            and fix common coding errors in a simple and structured way.
          </p>
          <p>
            Instead of searching through long forum threads or confusing documentation, 
            Errorpedia provides clear explanations and quick solutions to the most frequent 
            errors faced during development.
          </p>
        </section>

        <section className="about-section">
          <h2>🧠 Why Errorpedia Exists</h2>
          <p>While learning programming, developers often struggle with:</p>
          <ul>
            <li>Unclear error messages</li>
            <li>Repetitive bugs</li>
            <li>Lack of simple explanations</li>
            <li>Time wasted searching for solutions</li>
          </ul>
          <p>
            Errorpedia was built to solve this problem by organizing real-world errors 
            into easy-to-understand categories with practical fixes.
          </p>
        </section>

        <section className="about-section">
          <h2>📚 What You'll Find Here</h2>
          <ul>
            <li>✔ Common programming errors explained clearly</li>
            <li>✔ Step-by-step fixes</li>
            <li>✔ Categorized errors (JavaScript, React, CSS, Git, API, etc.)</li>
            <li>✔ Beginner-friendly explanations</li>
            <li>✔ Clean and distraction-free UI</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>🎯 Goal of This Project</h2>
          <p>The main goal of Errorpedia is to help developers:</p>
          <ul>
            <li>Understand why errors happen</li>
            <li>Learn how to debug efficiently</li>
            <li>Improve problem-solving skills</li>
            <li>Become more confident developers</li>
          </ul>
          <p>This project is also a part of my learning journey as a frontend developer.</p>
        </section>
      </div>
    </div>
  );
};

export default About;
