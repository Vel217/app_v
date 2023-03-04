import React from "react";

import AvatarPhoto from "../../components/AvatarPhoto/AvatarPhoto";
import Button from "../../components/Button/Button";
import classes from "./ContactItem.module.css";

function ContactItem({ isCreate, firstName, lastName, onClick, keyId }) {
  const handleClick = () => {
    onClick(keyId);
  };
  console.log(keyId);
  return (
    <div className={classes.wrap}>
      <AvatarPhoto />
      <p>
        {firstName} {lastName}
      </p>
      <Button isOrange={isCreate} isRed={!isCreate} onClick={handleClick}>
        {isCreate ? "Add" : "Delete"}
      </Button>
    </div>
  );
}

export default ContactItem;
