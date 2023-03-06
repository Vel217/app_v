import React from "react";
import classes from "./Modal.module.css";

function Modal({ setActive, children }) {
  return (
    <div className={`${classes.modal} `} onClick={() => setActive(false)}>
      <div
        className={classes.modal_content}
        onClick={(ev) => ev.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
