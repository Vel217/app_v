import React from "react";
import Aside from "../../components/Aside/Aside";
import ChangeForm from "./ChangeForm";
import classes from "./ChangeProfile.module.css";

function ChangeProfile() {
  return (
    <div className={classes.wrap}>
      <Aside />
      <div className={classes.changeArea}>
        <ChangeForm />
      </div>
    </div>
  );
}

export default ChangeProfile;
