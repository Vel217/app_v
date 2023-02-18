import classes from "./Message.module.css";

import chatPeople from "../../assets/chatPeople.svg";

function Message(prop) {
  return (
    <div
      className={`${classes.message_outer} ${
        prop.isPush ? classes.messagePush : classes.messageGet
      } `}
    >
      <img
        src={chatPeople}
        className={classes.message_avatar}
        alt="avatar"
        height="20px"
      ></img>

      <p className={classes.message_text}>{prop.children}</p>

      <div className={classes.status}></div>
    </div>
  );
}

export default Message;
