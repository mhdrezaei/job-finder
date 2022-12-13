import { createContext, useState } from "react";
// import axios from "axios";
import { toast } from "react-toastify";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [dark, setDark] = useState(true);
  const [loading, setLoading] = useState(true);
  const [searchResult, setSearchResult] = useState();
  const [countJobs, setCountjobs] = useState(0);
  const [searchStart, setSearchStart] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  // Loading
  const isLoading = (status) => {
    setLoading(status);
  };
  const isDark = (status) => {
    setDark(status)
  }
  // start serching
  const isSearching = (status) => {
    setSearchStart(status);
  };
  // Get All Jobs
  const getAllJobs = async () => {
    const jobs = await fetch("http://localhost:5000/api/v1/alljobs");
    const response = await jobs.json();
    setJobs(response.data);
    console.log(response);
  };
  // add new job
  const addNewJob = (newJob, image) => {
    // console.log(newJob)
    let imgUrl;
    const res = fetch("http://localhost:5000/upload-file", {
      method: "POST",
      body: image,
    })
      .then((res) => res.json())
      .then((res) => {
        // setImageUrl(JSON.stringify(`${res.img}`));
        imgUrl = res.img;

        if (imgUrl) {
          newJob.image = imgUrl;
        }
        const addJob = fetch("http://localhost:5000/api/v1/job/new", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
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
      });
  };
// search jobs
  const searchJob = async (keyword) => {
    console.log(keyword)
    const request = await fetch("http://localhost:5000/api/v1/job/search", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(keyword),
    });
    const response = await request.json();
    console.log(response.data)
    setSearchResult(response.data);
  };
  return (
    <Context.Provider
      value={{
        jobs,
        dark,
        loading,
        countJobs,
        searchStart,
        searchResult,
        searchJob,
        isDark,
        isSearching,
        getAllJobs,
        addNewJob,
        isLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
