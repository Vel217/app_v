import AvatarPhoto from "../../AvatarPhoto/AvatarPhoto";
import classes from "./ChatInstance.module.css";

function ChatInstance({ chatName, id, onClick }) {
  return (
    <div className={classes.chatWrap} onClick={onClick}>
      <AvatarPhoto />
      <div className={classes.chatName}>
        <p className={classes.chatNameMain}>{chatName}</p>
        <p className={classes.chatText}>Chat message</p>
      </div>
      <div className={classes.time}>
        <p className={classes.dataTime}>{id}</p>
        <p className={classes.countMes}> 1 mes</p>
      </div>
    </div>
  );
}

export default ChatInstance;
