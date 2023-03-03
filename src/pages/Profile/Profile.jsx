import AvatarPhoto from "../../components/AvatarPhoto/AvatarPhoto";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import classes from "./Profile.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import {
  changePassword,
  changeProfile,
  getProfile,
  logOut,
} from "../../api/chat-api";
import {
  validEmail,
  validPhone,
  validFName,
  validSName,
} from "../../RegExp/RegExp.js";

function Profile(props) {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [emailErr, setEmailErr] = useState(true);
  const [phoneErr, setPhoneErr] = useState(true);
  const [nameFErr, setFNameError] = useState(true);
  const [nameSErr, setSNameError] = useState(true);

  useEffect(() => {
    getProfile()
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
  const save = () => {
    if (newPassword.length > 1) {
      changePassword(oldPassword, newPassword).then((resp) => {
        if (resp.status === 200) {
          alert("changeProfilePassword");
        }
      });
    }
    changeProfile(firstName, secondName, login, email, phone).then((resp) => {
      if (resp.status === 200) {
        alert("changeProfileWithoutPassword");
      }
    });
  };
  const isDisabled = useMemo(() => {
    return emailErr || phoneErr || nameFErr || nameSErr || !(login.length > 1);
  }, [emailErr, phoneErr, nameFErr, nameSErr, login]);

  const isDisabledPassword = useMemo(() => {
    return oldPassword.length < 1 || newPassword.length < 1;
  }, [oldPassword, newPassword]);

  useEffect(() => {
    const isEmailValid = validEmail.test(email);
    setEmailErr(!isEmailValid);
  }, [email]);

  useEffect(() => {
    const isValidPhone = validPhone.test(phone);
    setPhoneErr(!isValidPhone);
  }, [phone]);
  useEffect(() => {
    const isValidFName = validFName.test(firstName);
    setFNameError(!isValidFName);
  }, [firstName]);

  useEffect(() => {
    const isValidSName = validSName.test(secondName);
    setSNameError(!isValidSName);
  }, [secondName]);

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
          // onKeyUp={validateEmail}
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
          // onKeyUp={validateFName}
          disabled={props.isChange ? null : "disabled"}
        />
        <Input
          value={secondName}
          onChange={setSecondName}
          type="text"
          title="Last Name"
          // onKeyUp={validateSName}
          disabled={props.isChange ? null : "disabled"}
        />
        <Input
          value={phone}
          onChange={setPhone}
          type="text"
          title="Phone"
          // onKeyUp={validatePhone}
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
        {props.isChange && (
          <Button
            isOrange={true}
            onClick={save}
            disabled={isDisabled || isDisabledPassword}
          >
            Save
          </Button>
        )}
      </div>
    </div>
  );
}

export default Profile;
