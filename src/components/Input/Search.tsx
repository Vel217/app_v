import React from "react";
import classes from "./Search.module.css";
import searchImg from "../../assets/search.svg";

function Search({
  value,
  onChange,
  isSearch,
}: {
  value: string;
  onChange: (e: string) => void;
  isSearch?: boolean;
}) {
  return (
    <div className={classes.inputArea}>
      <label>
        {isSearch && (
          <img
            className={classes.searchImg}
            src={searchImg}
            alt="search"
            height="15px"
          />
        )}
        <input
          className={`${classes.input} ${
            isSearch ? classes.inputSearch : classes.inputText
          }`}
          value={value}
          onInput={(e) => {
            onChange((e.target as HTMLInputElement).value);
          }}
          type="text"
          placeholder={isSearch ? "Search ..." : "name of your chat"}
        />
      </label>
    </div>
  );
}

export default Search;
