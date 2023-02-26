import classes from "./Message.module.css";

import chatPeopleImg from "../../assets/chatPeople.svg";
import { login } from "../../api/chat-api.js";

function Message(prop) {
  return (
    <div
      className={`${classes.message_outer} ${
        prop.isPush ? classes.messagePush : classes.messageGet
      } `}
    >
      <img
        src={chatPeopleImg}
        className={classes.message_avatar}
        alt="avatar"
        height="20px"
      ></img>
      <button onClick={() => login()}>get response</button>

      <p className={classes.message_text}>{prop.children}</p>

      <div className={classes.status}></div>
    </div>
  );
}

export default Message;
