import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Context from "../../../context/context";
import ModalJob from "../../modal/Modal";
import "./JobItem.css";

function JobItem({ title, src, salary, category, address, date , description }) {
  const { dark } = useContext(Context)
  const [isShow, invokeModal] = React.useState(false);
  const initModal = () => {
    return invokeModal(!isShow);
  };
  return (
    <div className="col-4 mb-2">
      <div className={!dark ? "job light" : "job"} >
        <div className="job-content">
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
            <h4 className="job__title">{title}</h4>
            <div className="d-flex justify-content-between p-1">
              <p className="job__salary">{salary} $</p>
              <p className="job__address">{address}</p>
            </div>
          </div>
        </div>
        <div className="see-more">
          <button className="btn-modal" variant="success" onClick={initModal}>
            See More
          </button>
        </div>
      </div>
      <ModalJob
        initModal={initModal}
        show={isShow}
        title={title}
        salary={salary}
        image={src}
        address={address}
        category={category}
        date={date}
        description={description}
      />
    </div>
  );
}

export default JobItem;
