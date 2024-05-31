import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h2>Contact Us</h2>
          <p>123 Hospital Road</p>
          <p>City, State, ZIP</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@hospital.com</p>
        </div>
        <div className="footer__section">
          <h2>Quick Links</h2>
          <a href="#home">Home</a><br/><br/>
          <a href="#about">About Us</a><br/><br/>
          <a href="#services">Services</a><br/><br/>
          <a href="#contact">Contact</a><br/>
        </div>
        <div className="footer__section">
          <h2>Follow Us</h2>
          <div className="footer__social-icons">
            <a href="https://facebook.com"><FaFacebook /></a>
            <a href="https://twitter.com"><FaTwitter /></a>
            <a href="https://instagram.com"><FaInstagram /></a>
            <a href="https://linkedin.com"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2024 Hospital Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
