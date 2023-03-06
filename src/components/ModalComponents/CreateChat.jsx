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
  const [usersToAdd, setUsersToAdd] = useState([]);
  const [filteredPersonList, setFilteredPersonList] = useState([]);

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
        let userToAddId = usersToAdd.map((item) => item.id);
        let difference = data.filter((x) => {
          return !userToAddId.includes(x.id);
        });
        setFilteredPersonList(difference);
        setPersonsList(data);
      });
  };

  const handleClickAdd = (personId) => {
    let filteredPersons = personsList.filter((item) => item.id === personId);
    setUsersToAdd(usersToAdd.concat(filteredPersons));

    setFilteredPersonList(personsList.filter((item) => item.id !== personId));
  };
  const handleClickDelete = (personId) => {
    let filteredUsers = usersToAdd.filter((item) => item.id !== personId);
    setUsersToAdd(filteredUsers);
  };

  const onSave = () => {
    let usersId = usersToAdd.map((item) => item.id);
    addUserToChat(usersId, chatId);
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
              <p>Search person </p>
              {personsList.length === 0 && <p>list is empty</p>}
              {filteredPersonList.map((item) => (
                <ContactItem
                  isCreate={true}
                  firstName={item.first_name}
                  lastName={item.second_name}
                  key={item.id}
                  onClick={() => handleClickAdd(item.id)}
                />
              ))}
            </div>
            <div className={classes.contactList}>
              <p>Person for add</p>
              {usersToAdd.map((item) => (
                <ContactItem
                  isCreate={false}
                  firstName={item.first_name}
                  lastName={item.second_name}
                  key={item.id}
                  onClick={() => handleClickDelete(item.id)}
                />
              ))}
            </div>
            <Button isGreen={true} onClick={onSave}>
              Save change
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default CreateChat;
