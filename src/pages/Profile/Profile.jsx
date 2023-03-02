import AvatarPhoto from "../../components/AvatarPhoto/AvatarPhoto";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import classes from "./Profile.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { profile, logOut } from "../../api/chat-api";

function Profile(props) {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    profile()
      .then((resp) => resp.json())
      .then((data) => {
        setEmail(data.email);
        setFirstName(data.first_name);
        setSecondName(data.second_name);
        setLogin(data.login);
        setPhone(data.phone);
      });
  }, []);

  const click = () => {
    logOut().then((resp) => {
      if (resp.status === 200) {
        navigate("/");
      }
    });
  };

  return (
    <div className={classes.wrap}>
      <div className={classes.avatar}>
        <AvatarPhoto />
        <p className={classes.profileName}> My Name</p>
      </div>
      <div className={classes.form}>
        <Input
          value={email}
          onChange={setEmail}
          type="email"
          title="Email"
          disabled={props.isChange ? null : "disabled"}
        />
        <Input
          value={login}
          onChange={setLogin}
          type="text"
          title="Login"
          disabled={props.isChange ? null : "disabled"}
        />
        <Input
          value={firstName}
          onChange={setFirstName}
          type="text"
          title="First Name"
          disabled={props.isChange ? null : "disabled"}
        />
        <Input
          value={secondName}
          onChange={setSecondName}
          type="text"
          title="Last Name"
          disabled={props.isChange ? null : "disabled"}
        />
        <Input
          value={phone}
          onChange={setPhone}
          type="text"
          title="Phone"
          disabled={props.isChange ? null : "disabled"}
        />
        {props.isChange && (
          <Input
            value={oldPassword}
            onChange={setOldPassword}
            type="password"
            placeholder="*****"
            title="Old Password"
          />
        )}
        {props.isChange && (
          <Input
            value={newPassword}
            onChange={setNewPassword}
            type="password"
            title="New Password"
          />
        )}
      </div>
      <div className={classes.buttons}>
        {!props.isChange && (
          <Button
            isOrange={true}
            onClick={() => navigate("/chat/profile/change")}
          >
            Change Profile
          </Button>
        )}
        {!props.isChange && (
          <Button isRed={true} onClick={click}>
            Logout
          </Button>
        )}
        {props.isChange && <Button isOrange={true}>Save</Button>}
      </div>
    </div>
  );
}

export default Profile;
