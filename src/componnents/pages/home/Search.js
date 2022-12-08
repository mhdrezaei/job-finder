import React from "react";
import {BsSearch} from 'react-icons/bs'
import "./Search.css";
function Search() {
  return (
    <div>
      <h1 className="caption text-center mx-2">You can here search jobs</h1>
      <form className="text-center">
        <input className="search-input" type="text" />
        <button className="search-btn"><BsSearch/></button>
      </form>
    </div>
  );
}

export default Search;
