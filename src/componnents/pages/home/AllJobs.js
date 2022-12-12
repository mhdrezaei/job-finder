import React, { useContext, useEffect } from "react";
import Context from "../../../context/context";
import JobItem from "./JobItem";
import { BsXSquareFill } from "react-icons/bs";
import "./AllJobs.css";
import Spinner from "../../ui/Spinner";
function AllJobs() {
  const { getAllJobs, jobs, searchStart, isSearching, searchResult, loading } =
    useContext(Context);
  const closeSearch = () => {
    isSearching(false);
  };
  useEffect(() => {
    if (!searchStart) {
      getAllJobs();
    }
  }, []);
  if (!searchStart) {
    return (
      <div className="all-jobs">
        <div className="col-12">
          <div className="container">
            <div className="row">
              {jobs.map((job) => (
                <JobItem
                  title={job.title}
                  description={job.description}
                  src={job.image}
                  salary={job.salary}
                  address={job.address}
                  date={job.date}
                  category={job.industry}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="all-jobs">
        <div className="col-12">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h4>Search for : </h4>
              <BsXSquareFill onClick={closeSearch} className="close" />
            </div>
            <hr />
            <div className="row">
              {!loading ? <Spinner /> : searchResult &&
               searchResult.map((job) => (
                  <JobItem
                    title={job.title}
                    description={job.description}
                    src={job.image}
                    salary={job.salary}
                    address={job.address}
                    date={job.date}
                    category={job.industry}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AllJobs;