import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="company">
        <div className="header">Company</div>
        <div className="footer-option">
          Blog
        </div>
        <div className="footer-option">
          About Us
        </div>
        <div className="footer-option">
          Contact Us
        </div>
        <div className="footer-option">
          Privacy Policy
        </div>
        <div className="footer-option">
          Term and Conditions
        </div>
      </div>
      <div className="brand">
        <div className="header">Brands & Retailers</div>
        <div className="footer-option">
          Partner and Us
        </div>
        <div className="footer-option">
          Login
        </div>
      </div>
      <div className="follow">
        <div className="header">Follow Us</div>
        <div className="footer-icons">
          <img src="images/twitter.png" alt="twitter"/>
          <img src="images/facebook.png" alt="facebook"/>
          <img src="images/instagram.png" alt="instagram"/>
          <img src="images/linkedin.png" alt="linkedin"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
