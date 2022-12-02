import React, { Fragment, useState, useContext } from "react";
import { toast } from "react-toastify";
import Context from "../../../context/context";
import "./FormJob.css";
function FormJob() {
  const { loading, isLoading, addNewJob } = useContext(Context);
  const [formData, setFormData] = useState({
    title: "",
    email: "",
    address: "",
    industry: "",
    salary: "",
    selectedFile: "",
    description: "",
  });
  const { title, email, address, industry, salary, description, selectedFile } =
    formData;
  const jobSubmit = (e) => {
    e.preventDefault();
    isLoading(false);

    if (
      title === "" ||
      title.trim() === 0 ||
      email === "" ||
      address === "" ||
      industry === "" ||
      selectedFile === '' ||
      salary === '' ||
      description === ""
    ) {
      toast.error("All field are necessary!!!");
      isLoading(true);
      return;
    }
     addNewJob(formData);
     isLoading(true);
     setFormData({
      title: "",
      email: "",
      address: "",
      industry: "",
      salary: '',
      selectedFile: '',
      description: "",
    });

  };

  const onChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };
  return (
    <Fragment>
      <div className="col-12">
        <div className="container">
          <div className="jobform">
            <form onSubmit={jobSubmit} className="jobform__form">
              <div className="mb-3">
                <label htmlFor="industry" className="form-label jobform__label">
                  Job Title :
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Enter Your job title"
                  onChange={onChange}
                  value={title}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label jobform__label">
                  Email Address :
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Your job title"
                  onChange={onChange}
                  value={email}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label jobform__label">
                  Job Address :
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Enter Your job address"
                  onChange={onChange}
                  value={address}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="industry" className="form-label jobform__label">
                  Job industry :
                </label>
                <select
                  id="industry"
                  className="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                  onChange={onChange}
                  defaultValue="Select industry for job"
                  value={industry}
                >
                  <option value="Art">Art</option>
                  <option value="Banking">Banking</option>
                  <option value="Bussiness">Bussiness</option>
                  <option value="Programing">Programing</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="salary" className="form-label jobform__label">
                  Job Salary :
                </label>
                <div className="input-group">
                  <input
                    id="salary"
                    type="text"
                    className="form-control"
                    aria-label="Dollar amount (with dot and two decimal places)"
                    onChange={onChange}
                    value={salary}
                  />
                  <span className="input-group-text">$</span>
                  <span className="input-group-text">0.00</span>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="selectedFile" className="form-label">
                  Select a image :
                </label>
                <input
                  className="form-control form-control-lg"
                  id="selectedFile"
                  type="file"
                  onChange={onChange}
                  value={selectedFile}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="description"
                  className="form-label jobform__label"
                >
                  Job Description :
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="description"
                  cols="15"
                  rows="8"
                  placeholder="Enter Your job description"
                  onChange={onChange}
                  value={description}
                />
              </div>
              <div className="text-center mb-3">
                <button type="submit" className="jobform__btn">
                  {!loading ? "Loading..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default FormJob;
