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

function Profile(props: { isChange?: boolean }) {
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

  const [isFormChanged, setIsFormChanged] = useState(false);

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
        navigate("/chat/profile");
      }
    });
  };
  const isDisabled = useMemo(() => {
    return (
      !isFormChanged ||
      emailErr ||
      phoneErr ||
      nameFErr ||
      nameSErr ||
      login.length < 1
    );
  }, [emailErr, phoneErr, nameFErr, nameSErr, login, isFormChanged]);

  const isDisabledPassword = useMemo(() => {
    const firstCondition = oldPassword.length === 0 && newPassword.length === 0;
    const secondCondition = oldPassword.length > 1 && newPassword.length > 1;

    return !(firstCondition || secondCondition) || !isFormChanged;
  }, [oldPassword, newPassword, isFormChanged]);

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

  const onChange = (setState: (value: string) => void) => {
    return (value: string) => {
      if (!isFormChanged) {
        setIsFormChanged(true);
      }
      if (value === "") {
        setIsFormChanged(false);
      }
      setState(value);
    };
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
          onChange={onChange(setEmail)}
          title="Email"
          disabled={!props.isChange}
          errorText={!email || !emailErr ? "" : "Your email is invalid"}
        />
        <Input
          value={login}
          onChange={onChange(setLogin)}
          title="Login"
          disabled={!props.isChange}
        />
        <Input
          value={firstName}
          onChange={onChange(setFirstName)}
          title="First Name"
          disabled={!props.isChange}
          errorText={
            !firstName || !nameFErr ? "" : "Your first name is invalid"
          }
        />
        <Input
          value={secondName}
          onChange={onChange(setSecondName)}
          title="Last Name"
          disabled={!props.isChange}
          errorText={
            !secondName || !nameSErr ? "" : "Your last name is invalid"
          }
        />
        <Input
          value={phone}
          onChange={onChange(setPhone)}
          title="Phone"
          disabled={!props.isChange}
          errorText={!phone || !phoneErr ? "" : "Your phone is invalid"}
        />

        {props.isChange && (
          <>
            <Input
              value={oldPassword}
              onChange={onChange(setOldPassword)}
              type="password"
              placeholder="*****"
              title="Old Password"
            />
            <Input
              value={newPassword}
              onChange={onChange(setNewPassword)}
              type="password"
              title="New Password"
            />
          </>
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
