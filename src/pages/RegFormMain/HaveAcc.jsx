import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./RegFormMain.module.css";

function HaveAcc() {
  const navigate = useNavigate();
  return (
    <div>
      Already have an account?
      <button className={classes.nav} onClick={() => navigate("/")}>
        Sign in
      </button>
    </div>
  );
}

export default HaveAcc;
