import ChatInstance from "./ChatInstance";
import classes from "./Chats.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getChatsList } from "../../../api/chat-api";

function Chats() {
  const navigate = useNavigate();
  const [chatList, setChatList] = useState([]);
  const handleClick = (id) => {
    navigate("/chat/start");
    console.log("id", id);
  };
  useEffect(() => {
    getChatsList()
      .then((res) => res.json())
      .then((data) => setChatList(data));
  }, []);

  return (
    <div className={classes.chatsWrap}>
      {chatList.map((item) => (
        <ChatInstance
          chatName={item.title}
          id={item.id}
          key={item.id}
          onClick={() => handleClick(item.id)}
        />
      ))}
    </div>
  );
}

export default Chats;
