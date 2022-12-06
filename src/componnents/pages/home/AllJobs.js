import React, { useContext, useEffect } from "react";
import Context from "../../../context/context";
import JobItem from "./JobItem";
import "./AllJobs.css";
function AllJobs() {
  const { getAllJobs, jobs } = useContext(Context);

  useEffect(() => {
    getAllJobs();
  }, []);
  return (
    <div className="all-jobs">
      <div className="col-12">
        <div className="container">
          <div className="row">
            {jobs.map((job) => (
              <JobItem title={job.title} src={job.image} salary={job.salary} address={job.address} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllJobs;
