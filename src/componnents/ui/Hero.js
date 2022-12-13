import React, { useContext } from "react";
import Context from "../../context/context";
import "./Hero.css";

function Hero({ children }) {
const { dark } = useContext(Context)
  return (
    <div className={!dark ? 'hero hero-light' : 'hero'}>
      <div className="col-md-12">
        <div className="container">
          <div className="row justify-content-center">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
