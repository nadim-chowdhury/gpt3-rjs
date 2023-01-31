import React from "react";
import "./footer.css";

import gpt3Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into the future before others
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="img" />
          <p>All Rights Reserved by</p>
          <p>Nadim Chowdhury.</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overviews</p>
          <p>Social Media</p>
          <p>Countries</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Dhaka, Bangladesh</p>
          <p>+880 1971258803</p>
          <p>nadim-chowdhury@outlook.com</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>&copy; 2023 All Rights Reserved by Nadim Chowdhury.</p>
      </div>
    </div>
  );
};

export default Footer;
