import React from "react";
import Button from "../Button/Button";

import classes from "./SideBarDown.module.css";

function SideBarDown() {
  return (
    <div className={classes.wrap}>
      <textarea
        className={classes.inputText}
        id="textMessage"
        rows="2"
        placeholder="put your text here, ubludok"
      />

      <Button> Send</Button>
    </div>
  );
}

export default SideBarDown;
