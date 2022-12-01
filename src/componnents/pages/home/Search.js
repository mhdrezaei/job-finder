import React from "react";
import "./Search.css";
function Search() {
  return (
    <div>
      <h1 className="caption text-center mx-2">You can here search jobs</h1>
      <form className="text-center">
        <input className="search-input" type="text" />
        <button className="search-btn">🕵️</button>
      </form>
    </div>
  );
}

export default Search;
