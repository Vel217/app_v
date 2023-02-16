import React from "react";
import Aside from "../../components/Aside/Aside";
import classes from "./ChatWindow.module.css";
import Windo from "./Windo";

function ChatWindow() {
  return (
    <div className={classes.window}>
      <div className={classes.aside}>
        <Aside />
      </div>
      <div className={classes.windo}>
        <Windo />
      </div>
    </div>
  );
}

export default ChatWindow;
