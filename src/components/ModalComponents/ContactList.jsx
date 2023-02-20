import React from "react";
import ContactItem from "./ContactItem";
import classes from "./ContactList.module.css";

function ContactList() {
  return (
    <div className={classes.wrap}>
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
    </div>
  );
}

export default ContactList;
