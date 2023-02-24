import React from "react";
import AvatarPhoto from "../../components/AvatarPhoto/AvatarPhoto";
import Button from "../../components/Button/Button";
import classes from "./ContactItem.module.css";

function ContactItem(props) {
  return (
    <div className={classes.wrap}>
      <AvatarPhoto />
      <p>Name LastName</p>
      <Button isOrange={props.isCreate} isRed={!props.isCreate}>
        {props.isCreate ? "Add person" : "Delete"}
      </Button>
    </div>
  );
}

export default ContactItem;
