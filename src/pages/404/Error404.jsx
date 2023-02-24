import React from "react";
import Button from "../../components/Button/Button";
import classes from "./Error404.module.css";
import { useNavigate } from "react-router-dom";
import error from "../../assets/error.svg";

function Error404(props) {
  const navigate = useNavigate();

  return (
    <div className={classes.wrap}>
      <div className={classes.container}>
        <img src={error} alt="errorImg" />
        <div className={classes.wrapError}>
          <p>{props.isError500 ? "500" : "404"}</p>
          <p>
            {props.isError500 ? "Service is unavailable" : "Page not found"}
          </p>
        </div>
      </div>
      <Button isOrange={true} onClick={() => navigate("/chat")}>
        Let`s go chating
      </Button>
    </div>
  );
}

export default Error404;
