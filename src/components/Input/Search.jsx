import React from "react";
import classes from "./Search.module.css";
import searchImg from "../../assets/search.svg";

function Search(props) {
  return (
    <div className={classes.inputArea}>
      <label>
        {props.isSearch && (
          <img
            className={classes.searchImg}
            src={searchImg}
            alt="search"
            height="15px"
          />
        )}
        <input
          className={`${classes.input} ${
            props.isSearch ? classes.inputSearch : classes.inputText
          }`}
          type="text"
          placeholder={props.isSearch ? "Search ..." : "name of your chat"}
        />
      </label>
    </div>
  );
}

export default Search;
