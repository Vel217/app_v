import React from "react";
import AvatarPhoto from "../AvatarPhoto/AvatarPhoto";
import Button from "../Button/Button";
import classes from "./ContactItem.module.css";

function ContactItem() {
  return (
    <div className={classes.wrap}>
      <AvatarPhoto />
      <p>Name LastName</p>
      <Button isOrange={true}> Add person</Button>
    </div>
  );
}

export default ContactItem;
