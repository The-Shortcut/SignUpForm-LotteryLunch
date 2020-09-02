import React from "react";

import companyLogo from "../images/shortcut-logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={companyLogo} alt="company_logo" className="company-logo" />
    </div>
  );
};

export default Header;
