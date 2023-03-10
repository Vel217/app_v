import ChatInstance from "./ChatInstance";
import classes from "./Chats.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getChatsList } from "../../../api/chat-api";

function Chats() {
  const navigate = useNavigate();
  const [chatList, setChatList] = useState([]);
  const [isActive, setIsActive] = useState(null);
  const handleClick = (id) => {
    navigate(`/chat/start/${id}`);
    setIsActive(id);
  };
  useEffect(() => {
    getChatsList()
      .then((res) => res.json())
      .then((data) => setChatList(data));
  }, []);

  return (
    <div className={classes.chatsWrap}>
      {chatList.map((item, e) => (
        <div style={{ border: isActive === item.id ? "3px dotted red" : null }}>
          <ChatInstance
            chatName={item.title}
            id={item.id}
            key={e}
            onClick={() => handleClick(item.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default Chats;
