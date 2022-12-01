import React, { Fragment } from "react";
import "./FormJob.css";
function FormJob() {
    const jobSubmit =(e) =>{
        e.preventDefault();
    }
  return (
    <Fragment>
      <div className="col-12">
        <div className="container">
          <div className="jobform">
            <form onSubmit={jobSubmit} className="jobform__form">
              <div class="mb-3">
                <label htmlFor="industry" className="form-label jobform__label">
                  Job Title :
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="Enter Your job title"
                />
              </div>
              <div class="mb-3">
                <label htmlFor="email" className="form-label jobform__label">
                  Email Address :
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter Your job title"
                />
              </div>
              <div class="mb-3">
                <label htmlFor="address" className="form-label jobform__label">
                  Job Address :
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  placeholder="Enter Your job address"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="industry" className="form-label jobform__label">
                  Job industry :
                </label>
                <select
                  class="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="mb-3">
                <label htmlFor="salary" className="form-label jobform__label">
                  Job Salary :
                </label>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Dollar amount (with dot and two decimal places)"
                  />
                  <span class="input-group-text">$</span>
                  <span class="input-group-text">0.00</span>
                </div>
              </div>
              <div className="text-center mb-3" >
                <button type="submit" className="jobform__btn">Send</button> 
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default FormJob;
