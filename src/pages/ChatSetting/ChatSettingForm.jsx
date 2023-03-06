import AvatarPhoto from "../../components/AvatarPhoto/AvatarPhoto";
import Button from "../../components/Button/Button";
import Search from "../../components/Input/Search";
import Title from "../../components/Title/Title";
import classes from "./ChatSettingForm.module.css";
import ContactItem from "./ContactItem";

function ChatSettingForm() {
  return (
    <div className={classes.wrap}>
      <div className={classes.avatar}>
        <AvatarPhoto />
        <Title>Name of chat</Title>
      </div>
      <div className={classes.inputArea}>
        <Search />
        <Button isGreen={true}>Change Name</Button>
      </div>
      <div className={classes.contactList}>
        <ContactItem />
      </div>
      <Button isRed={true}>Delete Chat</Button>
    </div>
  );
}

export default ChatSettingForm;
