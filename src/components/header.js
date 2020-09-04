import React from "react";

import companyLogo from "../images/shortcut-logo.png";

const Header = () => {
  return (
    <div className="header">
      <a
        href="https://theshortcut.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={companyLogo} alt="company_logo" className="company-logo" />
      </a>
    </div>
  );
};

export default Header;
