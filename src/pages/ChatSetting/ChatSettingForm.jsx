import AvatarPhoto from "../../components/AvatarPhoto/AvatarPhoto";
import Button from "../../components/Button/Button";

import Title from "../../components/Title/Title";
import classes from "./ChatSettingForm.module.css";
import ContactItem from "./ContactItem";

function ChatSettingForm() {
  return (
    <div className={classes.wrap}>
      <div className={classes.avatar}>
        <AvatarPhoto />
        <Title> Chat Name</Title>
      </div>
      <div className={classes.inputArea}>
        <input
          type="text"
          className={classes.input}
          placeholder="change name of your chat"
        />
        <Button isGreen={true}> Change name</Button>
      </div>
      <div className={classes.contactList}>
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
      </div>
      <Button isRed={true}>Delete a chat</Button>
    </div>
  );
}

export default ChatSettingForm;
