import { Outlet } from "react-router-dom";

import classes from "./ChangeProfile.module.css";

function ChangeProfile() {
  return (
    <div className={classes.wrap}>
      <div className={classes.changeArea}>
        <Outlet />
      </div>
    </div>
  );
}

export default ChangeProfile;
