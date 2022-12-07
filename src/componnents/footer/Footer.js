import React from "react";
import FooterIcons from "./FooterIcons";
import FooterLink from "./FooterLink";
import './Footer.css'
import FooterCopyright from "./FooterCopyright";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="col-12 row">
          <FooterIcons/>
          <FooterLink />
          <FooterCopyright/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
