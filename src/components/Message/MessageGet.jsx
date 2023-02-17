import React from "react";
import classes from "./MessageGet.module.css";
import green from "../../assets/green.svg";
import chatPeople from "../../assets/chatPeople.svg";

function MessageGet(prop) {
  return (
    <div className={classes.wrapGet}>
      <div className={classes.message_outer}>
        <div className={classes.message_avatar}>
          <img src={chatPeople} alt="avatar" height="20px"></img>
        </div>
        <div className={classes.message_inner}>
          <div className={classes.message_spacer}></div>
          <div className={classes.message_b}>
            Hello! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Animi, laboriosam ipsam. {prop.children}
          </div>
        </div>
        <div className={classes.message_status}>
          <img src={green} alt="status" width="10px" />
        </div>
      </div>
    </div>
  );
}

export default MessageGet;
