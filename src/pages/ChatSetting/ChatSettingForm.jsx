import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getProfile, getUsersSetting } from "../../api/chat-api";
import AvatarPhoto from "../../components/AvatarPhoto/AvatarPhoto";
import Button from "../../components/Button/Button";
import Search from "../../components/Input/Search";
import Title from "../../components/Title/Title";
import classes from "./ChatSettingForm.module.css";
import ContactItem from "./ContactItem";

function ChatSettingForm() {
  const [usersList, setUsersList] = useState([]);
  const [profile, setProfile] = useState(null);
  const location = useLocation();
  const [url, setUrl] = useState(location.pathname);

  useEffect(() => {
    setUrl(location.pathname);
  }, [location.pathname]);
  let idLocal = url.replace(/[^0-9]/g, "");

  useEffect(() => {
    getProfile().then((res) =>
      res.json().then((data) => {
        setProfile(data.id);
      })
    );
  }, []);

  useEffect(() => {
    getUsersSetting(idLocal)
      .then((res) => res.json())
      .then((data) => {
        let filteredList = data.filter((item) => item.id !== profile);
        setUsersList(filteredList);
      });
  }, []);

  return (
    <div className={classes.wrap}>
      <div className={classes.avatar}>
        <AvatarPhoto />
        <Title>Name of chat</Title>
      </div>
      <div className={classes.inputArea}>
        <Search />
        <Button isGreen={true}>Change Name</Button>
      </div>
      <div className={classes.contactList}>
        {usersList.map((item) => (
          <ContactItem
            firstName={item.first_name}
            lastName={item.second_name}
            key={item.id}
          />
        ))}
      </div>
      <Button isRed={true}>Delete Chat</Button>
    </div>
  );
}

export default ChatSettingForm;
