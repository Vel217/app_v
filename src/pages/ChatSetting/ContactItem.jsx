import React from "react";
import AvatarPhoto from "../../components/AvatarPhoto/AvatarPhoto";
import Button from "../../components/Button/Button";
import classes from "./ContactItem.module.css";

function ContactItem() {
  return (
    <div className={classes.wrap}>
      <AvatarPhoto />
      <p>Name LastName</p>
      <Button isRed={true}>Delete</Button>
    </div>
  );
}

export default ContactItem;
