import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <div className="company_logo">
          <a
            href="https://theshortcut.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/shortcut-logo-mobile.png")}
              alt="shortcut-logo"
            />
          </a>
        </div>
        <div className="social_logo">
          <a
            href="https://web.facebook.com/theshortcut/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={require("../images/facebook.png")} alt="facebook-icon" />
          </a>
        </div>
        <div className="social_logo">
          <a
            href="https://www.instagram.com/theshortcutorg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/instagram.png")}
              alt="instagram-icon"
            />
          </a>
        </div>
        <div className="social_logo">
          <a
            href="https://twitter.com/theshortcutorg?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={require("../images/twitter.png")} alt="twitter-icon" />
          </a>
        </div>
        <div className="social_logo">
          <a
            href="https://www.linkedin.com/company/theshortcut/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={require("../images/linkedin.png")} alt="linkedin-icon" />
          </a>
        </div>
      </div>
      <p className="copyright"> © 2020, The Shortcut. All rights reserved.</p>
    </div>
  );
};
export default Footer;
