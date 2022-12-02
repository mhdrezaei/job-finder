import { createContext, useState } from "react";
// import axios from "axios";
import { toast } from "react-toastify";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [countJobs, setCountjobs] = useState(0);

    // Loading
    const isLoading = (status) => {
        setLoading(status);
    }


  // add new job

  const addNewJob = (newJob) => {
    const addJob = fetch("http://localhost:5000/api/v1/job/new", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => {
        if (!res.status) {
          toast.error(`This is an HTTP error: The status is ${res.status}`);
          return;
        }
        return res.json();
      })
      .then((actualData) => {
        actualData.success
          ? toast.success(actualData.message)
          : toast.error(actualData.message);
        
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err);
      });
      
  };
  return (
    <Context.Provider value={{ jobs,loading, countJobs, addNewJob ,isLoading }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
