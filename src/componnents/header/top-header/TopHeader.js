import React, { useState } from "react";
import "./TopHeader.css";

function TopHeader() {
  const [dark, setDark] = useState(true);
  return (
    <div className="col-md-12">
      <div className="container">
        <div className="row justify-content-between border-bottom p-3">
          <div className="col-md-6">
            <h1><span className="j-header">J</span>ob Finder </h1>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-end form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                onChange={() => setDark(!dark)}
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
