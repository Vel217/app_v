import React from "react";
import Aside from "../components/Aside/Aside";
import Message from "../components/Message/Message";
import MessageGet from "../components/Message/MessageGet";
import SideBarDown from "../components/SideBar/SideBarDown";
import SideBarUp from "../components/SideBar/SideBarUp";
import classes from "./ChatFrame.module.css";

function ChatFrame() {
  return (
    <div className={classes.window}>
      <Aside />
      <div className={classes.rightColumn}>
        <SideBarUp />

        <div className={classes.chatAreaSend}>
          <Message> 1</Message>
          <MessageGet>1</MessageGet>
          <Message> 2</Message>
          <MessageGet>2</MessageGet>
          <MessageGet>2</MessageGet>
          <Message>3 </Message>

          <Message> 4</Message>
        </div>

        <SideBarDown />
      </div>
    </div>
  );
}

export default ChatFrame;
