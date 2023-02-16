import classes from "./ChatInstance.module.css";
import chatPeople from "../../../assets/chatPeople.svg";

function ChatInstance() {
  return (
    <div className={classes.chatWrap}>
      <div className={classes.photo}>
        <img
          className={classes.img}
          src={chatPeople}
          alt="chatPeoplePhoto"
          height="25px"
        ></img>
      </div>
      <div className={classes.chatName}>
        <div className={classes.chatNameMain}>Chat name</div>
        <div className={classes.chatText}>Chat text</div>
      </div>
      <div className={classes.time}>
        <div className={classes.dataTime}>16 feb 2022</div>
        <div className={classes.countMes}> 1 mes</div>
      </div>
    </div>
  );
}

export default ChatInstance;
