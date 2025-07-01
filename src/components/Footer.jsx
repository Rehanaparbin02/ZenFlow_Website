import './css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>ZenFlow</h3>
          <p>Your quiet space for mindful journaling.</p>
        </div>

        <div className="footer-links">
          <ul>
            <li>Home</li>
            <li>Features</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-right">
          <p>© {new Date().getFullYear()} ZenFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
