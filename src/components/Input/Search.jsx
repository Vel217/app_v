import React from "react";
import classes from "./Search.module.css";
import search from "../../assets/search.svg";

function Search() {
  return (
    <div className={classes.inputArea}>
      <img className={classes.search} src={search} alt="search" height="15px" />
      <label id="search">
        <input
          className={classes.input}
          type="search"
          placeholder="Search ..."
        />
      </label>
    </div>
  );
}

export default Search;
