import React, { useContext, useState } from "react";
import Context from "../../../context/context";
import "./TopHeader.css";

function TopHeader() {
  const { isDark , dark } = useContext(Context);
  // const [dark, setDark] = useState(true);
  return (
    <div className="col-md-12">
      <div className="container">
        <div className="row justify-content-between border-bottom">
          <div className="col-md-6">
            <h1 className={!dark ? 'light' : ''}><span className="j-header">J</span>ob Finder </h1>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-end align-items-center h-100 form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                onChange={() => isDark(!dark)}
                checked={dark}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckChecked"
              >
                {dark &&  `🌙`}
                {!dark && `☀️`}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
