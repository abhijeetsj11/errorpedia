import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Errorpedia. All rights reserved.</p>
        <p>Your comprehensive resource for error solutions.</p>
      </div>
    </footer>
  );
};

export default Footer;
