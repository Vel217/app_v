import React from "react";
import Button from "../Button/Button";
import Title from "../Title/Title";

import ContactList from "./ContactList";
import classes from "./CreateChat.module.css";

function CreateChat() {
  return (
    <div className={classes.wrap}>
      <Title>Create a chat</Title>
      <div className={classes.inputArea}>
        <input
          type="text"
          className={classes.input}
          placeholder="Give name for your  chat"
        />
        <Button isGreen={true}>Save name</Button>
      </div>
      <ContactList />
      <Button isOrange={true}>Create</Button>
    </div>
  );
}

export default CreateChat;
