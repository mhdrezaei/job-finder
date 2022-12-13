import React, { useContext } from "react";
import FooterIcons from "./FooterIcons";
import FooterLink from "./FooterLink";
import './Footer.css'
import FooterCopyright from "./FooterCopyright";
import Context from "../../context/context";

function Footer() {
  const { dark } = useContext(Context)
  return (
    <div className={!dark ? "footer light" : "footer" }>
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
