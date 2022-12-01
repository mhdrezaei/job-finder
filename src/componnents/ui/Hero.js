import React from "react";
import "./Hero.css";
function Hero({ children }) {
  return (
    <div className="hero">
      <div className="col-md-12">
        <div className="container">
          <div className="row justify-content-center">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
