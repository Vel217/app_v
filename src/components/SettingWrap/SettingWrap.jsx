import { Outlet } from "react-router-dom";

import classes from "./SettingWrap.module.css";

function SettingWrap() {
  return (
    <div className={classes.wrap}>
      <div className={classes.changeArea}>
        <Outlet />
      </div>
    </div>
  );
}

export default SettingWrap;
