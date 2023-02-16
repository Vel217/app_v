import ChatInstance from "./ChatInstance";
import classes from "./Chats.module.css";

function Chats() {
  return (
    <div className={classes.chatsWrap}>
      <div>
        {" "}
        <ChatInstance />
      </div>
      <div>
        {" "}
        <ChatInstance />
      </div>
    </div>
  );
}

export default Chats;
