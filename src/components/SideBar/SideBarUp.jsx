import React from "react";
import classes from "./SideBarUp.module.css";

import settingPic from "../../assets/settingPic.svg";
import AvatarPhoto from "../AvatarPhoto/AvatarPhoto";

function SideBarUp() {
  return (
    <div className={classes.wrap}>
      <AvatarPhoto />

      <p className={classes.PersonName}>User Name</p>

      <img src={settingPic} alt="pic" height="30px" />
    </div>
  );
}

export default SideBarUp;
