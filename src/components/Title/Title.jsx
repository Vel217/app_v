import React from "react";
import classes from "./Title.module.css";
function Title({ children }) {
  return <div className={classes.title1}> {children}</div>;
}

export default Title;
