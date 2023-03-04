import React from "react";

import AvatarPhoto from "../../components/AvatarPhoto/AvatarPhoto";
import Button from "../../components/Button/Button";
import classes from "./ContactItem.module.css";

function ContactItem({ isCreate, firstName, lastName, onClick }) {
  return (
    <div className={classes.wrap}>
      <AvatarPhoto />
      <p>
        {firstName} {lastName}
      </p>
      {isCreate && (
        <Button isOrange={isCreate} onClick={onClick}>
          Add
        </Button>
      )}
      {!isCreate && (
        <Button isRed={!isCreate} onClick={onClick}>
          Delete
        </Button>
      )}
    </div>
  );
}

export default ContactItem;
