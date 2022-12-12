import React, { useContext, useState } from "react";
import {BsSearch} from 'react-icons/bs'
import "./Search.css";
import Context from "../../../context/context";


function Search() {
  const [keyword , setKeyword] = useState({keyword : ''})
  const { isSearching , searchJob } = useContext(Context)
  const handleSearch = (e) => {
    isSearching(true)
    setTimeout(() => {
      searchJob({ keyword : e.target.value})

    },1500)
  }
  return (
    <div>
      <h1 className="caption text-center mx-2">You can here search jobs</h1>
      <form className="text-center">
        <input onKeyDown={handleSearch} className="search-input" type="text" value={keyword.keyword} onChange={(e) => setKeyword({kayword :e.target.value}) }  placeholder="type job title here..."/>
        <button className="search-btn"><BsSearch/></button>
      </form>
    </div>
  );
}

export default Search;
