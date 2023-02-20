import React from "react";
import classes from "./Modal.module.css";

function Modal({ active, setActive, children }) {
  return (
    <div
      className={`${classes.modal} ${
        active ? classes.modalActive : classes.modalInactive
      }`}
      onClick={() => setActive(false)}
    >
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
