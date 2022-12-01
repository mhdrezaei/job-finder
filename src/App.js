import React, { Fragment } from "react";
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import "./App.css";
import Header from "./componnents/header/Header";
import Home from "./componnents/pages/home/Home";
import AddJobs from "./componnents/pages/jobs/AddJobs";

function App() {
  return (
    <Fragment>
    <Router>

    
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add-job' element={<AddJobs/>}/>
     </Routes>
    </Router>
    </Fragment>
  );
}

export default App;
