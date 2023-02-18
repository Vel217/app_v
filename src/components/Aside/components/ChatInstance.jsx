import AvatarPhoto from "../../AvatarPhoto/AvatarPhoto";
import classes from "./ChatInstance.module.css";

function ChatInstance() {
  return (
    <div className={classes.chatWrap}>
      <AvatarPhoto />
      <div className={classes.chatName}>
        <p className={classes.chatNameMain}>Chat name</p>
        <p className={classes.chatText}>Chat name</p>
      </div>
      <div className={classes.time}>
        <p className={classes.dataTime}>16 feb 2022</p>
        <p className={classes.countMes}> 1 mes</p>
      </div>
    </div>
  );
}

export default ChatInstance;
