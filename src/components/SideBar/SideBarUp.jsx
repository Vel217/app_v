import React from "react";
import classes from "./SideBarUp.module.css";

import settingPicImg from "../../assets/settingPic.svg";
import AvatarPhoto from "../AvatarPhoto/AvatarPhoto";
import { useNavigate } from "react-router-dom";

function SideBarUp() {
  const navigate = useNavigate();

  return (
    <div className={classes.wrap}>
      <AvatarPhoto />

      <p className={classes.PersonName}>User Name</p>
      <button onClick={() => navigate("setting")}>
        <img src={settingPicImg} alt="pic" height="30px" />
      </button>
    </div>
  );
}

export default SideBarUp;
