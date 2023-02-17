import React from "react";
import Aside from "../../components/Aside/Aside";
import classes from "./ChatWindow.module.css";
import Windo from "./Windo";

function ChatWindow() {
  return (
    <div className={classes.window}>
      <Aside />

      <Windo />
    </div>
  );
}

export default ChatWindow;
