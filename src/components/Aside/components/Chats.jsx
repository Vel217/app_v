import ChatInstance from "./ChatInstance";
import classes from "./Chats.module.css";
import { useNavigate } from "react-router-dom";

function Chats() {
  const navigate = useNavigate();

  return (
    <div className={classes.chatsWrap} onClick={() => navigate("/chat/start")}>
      <div>
        <ChatInstance />
      </div>
      <div>
        <ChatInstance />
      </div>
    </div>
  );
}

export default Chats;
