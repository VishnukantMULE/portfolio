import React from 'react';
import './Footer.css'; // Import the external CSS file
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="company-info">
        <p className="company-name">Vishnukant Mule</p>
        <p className="company-address">Mumbai-400601, Maharashtra, India</p>
      </div>
    
      <div className="social-links">
        <a className="linkedin-link" href="https://www.linkedin.com/in/vishnukant-mule-5a9ba5221/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />&nbsp;
        </a>
        <a className="github-link" href="https://github.com/VishnukantMULE" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />&nbsp;
        </a>
        <a className="instagram-link" href="https://www.instagram.com/i___mr_akshay___i/" target="_blank" rel="noopener noreferrer">
          <FaInstagramSquare size={30} />
        </a>
      </div>
      <div className="all-rights-reserved">
      © Vishnukant Mule - All rights reserved
      </div>
    </footer>
  );
}
