import React from "react";
import classes from "./ChatSetting.module.css";
import ChatSettingForm from "./ChatSettingForm";

function ChatSetting() {
  return (
    <div className={classes.wrap}>
      <div className={classes.changeArea}>
        <ChatSettingForm />
      </div>
    </div>
  );
}

export default ChatSetting;
