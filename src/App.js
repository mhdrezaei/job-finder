import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./componnents/header/Header";
import Home from "./componnents/pages/home/Home";
import AddJobs from "./componnents/pages/jobs/AddJobs";
import { ContextProvider } from "./context/context";

function App() {
  return (
    <ContextProvider >
      <Fragment>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-job" element={<AddJobs />} />
          </Routes>
        </Router>
        <ToastContainer />
      </Fragment>
    </ContextProvider>
  );
}

export default App;
