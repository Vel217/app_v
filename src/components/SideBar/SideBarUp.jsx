import React from "react";
import classes from "./SideBarUp.module.css";
import chatPeople from "../../assets/chatPeople.svg";
import settingPic from "../../assets/settingPic.svg";

function SideBarUp() {
  return (
    <div className={classes.wrap}>
      <div className={classes.photo}>
        <img src={chatPeople} alt="pic" height="20px" />
      </div>
      <div className={classes.space}>User Name</div>
      <div className={classes.setting}>
        <img src={settingPic} alt="pic" height="30px" />
      </div>
    </div>
  );
}

export default SideBarUp;
