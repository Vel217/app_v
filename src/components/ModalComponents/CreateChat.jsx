import { useState } from "react";
import { addUserToChat, createChat, searchUser } from "../../api/chat-api";
import ContactItem from "../../pages/ChatSetting/ContactItem";
import Button from "../Button/Button";
import Search from "../Input/Search";
import Title from "../Title/Title";
import classes from "./CreateChat.module.css";

function CreateChat() {
  const [nameChat, setNameChat] = useState("");
  const [chatId, setChatId] = useState(null);
  const [personName, setPersonName] = useState("");
  const [personsList, setPersonsList] = useState([]);
  const [personsId, setPersonsId] = useState("");

  const onCreate = () => {
    createChat(nameChat)
      .then((res) => res.json())
      .then((data) => {
        setChatId(data.id);
      });
  };
  const onSearchUser = () => {
    searchUser(personName)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return setPersonsList(data);
      });
  };

  const handleClick = (personId) => {
    setPersonsId(personId);
    addUserToChat(personId, chatId)
      .then((res) => res.jason())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className={classes.wrap}>
      {!chatId && (
        <>
          <Title> Create a chat</Title>
          <div className={classes.inputArea}>
            <Search value={nameChat} onChange={setNameChat} />
            <Button isGreen={true} onClick={onCreate}>
              Save Name
            </Button>
          </div>
        </>
      )}
      {chatId && (
        <>
          <div className={classes.wrap}>
            <div className={classes.avatar}>
              <Title> {nameChat}</Title>
            </div>
            <div className={classes.inputArea}>
              <Search
                isSearch={true}
                value={personName}
                onChange={setPersonName}
              />
              <Button isGreen={true} onClick={onSearchUser}>
                Search
              </Button>
            </div>
            <div className={classes.contactList}>
              {personsList.map((item) => (
                <ContactItem
                  isCreate={true}
                  firstName={item.first_name}
                  lastName={item.second_name}
                  key={item.id}
                  keyId={item.id}
                  onClick={handleClick}
                />
              ))}
            </div>
            <Button isGreen={true}>Save change</Button>
          </div>
        </>
      )}
    </div>
  );
}

export default CreateChat;
