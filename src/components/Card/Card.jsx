import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./Card.module.css";

function Card() {
  return (
    <div className={classes.card}>
      <Outlet />
    </div>
  );
}

export default Card;
