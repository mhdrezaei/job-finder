import React, { Fragment } from "react";
import "./App.css";
import Header from "./componnents/header/Header";
import Home from "./componnents/pages/home/Home";

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
    </Fragment>
  );
}

export default App;
