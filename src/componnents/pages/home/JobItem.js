import React from "react";
import "./JobItem.css";

function JobItem({ title, src, salary, category, address }) {
  return (
    <div className="col-4 mb-2">
      <div className="job">
        <div className="job__image-holder">
          <img
            src={src}
            alt={title}
            width="410px"
            height="300px"
            className="job__image img-fluid"
          />
          <span className="job__category"> {category} </span>
        </div>
        <div className="job__info">
          <h3 className="job__title">{title}</h3>
          <div className="d-flex justify-content-between p-3">
          <p className="job__salary">{salary} $</p>
          <p className="job__address">{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobItem;
