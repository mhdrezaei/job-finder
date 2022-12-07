import React from "react";
import { Link } from "react-router-dom";
import './FooterLink.css'
function FooterLink() {
  return (
    <div className="col-6">
      <ul className="footer-menu">
        <li className="footer-menu__item">
          <Link to="/" className="footer-menu__link">
            Home
          </Link>
        </li>
        <li className="footer-menu__item">
          <Link to="/All-jobs" className="footer-menu__link">
            All jobs
          </Link>
        </li>
        <li className="footer-menu__item">
          <Link to="/add-job" className="footer-menu__link">
            Add job
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default FooterLink;
