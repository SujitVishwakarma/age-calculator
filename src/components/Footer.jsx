import React from 'react';
import './Footer.css'; 
import logo from '../components/profile logo.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="copyright">
          &copy; {new Date().getFullYear()} Sujit. All rights reserved.
        </div>
        <div className="logo">
          {/* Replace 'logo.png' with your actual logo image file */}
          <img src={logo} alt="Your Logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
