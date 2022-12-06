import React from "react";
import Hero from "../../ui/Hero";
import AllJobs from "./AllJobs";
import Search from "./Search";

function Home() {
  return (
    <>
      <Hero>
        <Search />
      </Hero>
      <AllJobs />
    </>
  );
}

export default Home;
