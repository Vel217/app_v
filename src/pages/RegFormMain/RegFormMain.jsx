import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import HaveAcc from "./HaveAcc";
import Title from "../../components/Title/Title";
import classes from "./RegFormMain.module.css";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  validEmail,
  validPhone,
  validFName,
  validSName,
} from "../../RegExp/RegExp.js";
import { signUp } from "../../api/chat-api";

function RegFormMain() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [emailErr, setEmailErr] = useState(true);
  const [phoneErr, setPhoneErr] = useState(true);
  const [nameFErr, setFNameError] = useState(true);
  const [nameSErr, setSNameError] = useState(true);

  const isDisabled = useMemo(() => {
    return (
      emailErr ||
      phoneErr ||
      nameFErr ||
      nameSErr ||
      !(password.length > 1) ||
      !(login.length > 1)
    );
  }, [emailErr, phoneErr, nameFErr, nameSErr, password, login]);

  const click = () => {
    signUp(firstName, secondName, login, email, phone, password).then((res) => {
      if (res.status === 200) {
        navigate("/chat");
      }
      if (res.status === 409) {
        alert("Login already exists");
      }
    });
  };
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
    <>
      <div>
        <Title>Create an account:</Title>
        <Input
          value={email}
          onChange={setEmail}
          type="email"
          placeholder="any.any@mail.com"
          title="Email"
          name="email"
          errorText={!email || !emailErr ? "" : "Your email is invalid"}
        />

        <Input
          value={login}
          onChange={setLogin}
          type="text"
          placeholder="LoginName"
          title="Login"
          name="login"
        />
        <Input
          value={firstName}
          onChange={setFirstName}
          type="text"
          placeholder="First Name"
          title="First Name"
          name="first_name"
          errorText={
            !firstName || !nameFErr ? "" : "Your first name is invalid"
          }
        />
        <Input
          value={secondName}
          onChange={setSecondName}
          type="text"
          placeholder="Last Name"
          title="Last Name"
          name="second_name"
          errorText={
            !secondName || !nameSErr ? "" : "Your last name is invalid"
          }
        />
        <Input
          value={phone}
          onChange={setPhone}
          type="tel"
          placeholder="In format '9(999)999-99-99'"
          title="Phone"
          name="phone"
          errorText={!phone || !phoneErr ? "" : "Your phone is invalid"}
        />

        <Input
          value={password}
          onChange={setPassword}
          type="password"
          placeholder="*************"
          title="Password"
          name="password"
        />
      </div>

      <div className={classes.buttonBox}>
        <Button onClick={click} isOrange={true} disabled={isDisabled}>
          CREATE
        </Button>
      </div>
      <HaveAcc />
    </>
  );
}

export default RegFormMain;
