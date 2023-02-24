import AvatarPhoto from "../../components/AvatarPhoto/AvatarPhoto";
import Button from "../../components/Button/Button";
import Search from "../../components/Input/Search";

import Title from "../../components/Title/Title";
import classes from "./ChatSettingForm.module.css";
import ContactItem from "./ContactItem";

function ChatSettingForm(props) {
  return (
    <div className={classes.wrap}>
      <div className={classes.avatar}>
        {!props.isCreate && <AvatarPhoto />}
        <Title> {props.isCreate ? "Create a chat" : "Chat Name"}</Title>
      </div>
      <div className={classes.inputArea}>
        <Search />
        <Button isGreen={true}>
          {props.isCreate ? "Save Name" : "Change Name"}
        </Button>
      </div>
      <div className={classes.contactList}>
        <ContactItem isCreate={props.isCreate} />
      </div>
      <Button isRed={!props.isCreate} isGreen={props.isCreate}>
        {props.isCreate ? "Create" : "Delete Chat"}
      </Button>
    </div>
  );
}

export default ChatSettingForm;
