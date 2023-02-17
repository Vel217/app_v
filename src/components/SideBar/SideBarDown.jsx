import React from "react";
import Button from "../Button/Button";

import classes from "./SideBarDown.module.css";

function SideBarDown() {
  return (
    <div className={classes.wrap}>
      <div className={classes.input}>
        <input
          className={classes.inputText}
          id="textMessage"
          type="text"
          placeholder="put your text here, ubludok"
        ></input>
      </div>
      <Button> Send</Button>
    </div>
  );
}

export default SideBarDown;
