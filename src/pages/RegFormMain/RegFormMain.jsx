import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import HaveAcc from "./HaveAcc";
import Title from "../../components/Title/Title";
import classes from "./RegFormMain.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  validEmail,
  validPhone,
  validFName,
  validSName,
} from "../../RegExp/RegExp.js";

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

  const click = async () => {
    const host = "https://ya-praktikum.tech";
    const url = `${host}/api/v2/auth/signup`;
    const data = {
      first_name: firstName,
      second_name: secondName,
      login: login,
      email: email,
      phone: phone,
      password: password,
    };
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log(data);

    console.log(response);

    if (response.status === 200) {
      navigate("/chat");
    }
    if (response.status === 409) {
      alert("Login already exists");
    } else {
      console.log("pup");
    }
  };

  const validateEmail = () => {
    if (!validEmail.test(email)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
  };
  const validatePhone = () => {
    if (!validPhone.test(phone)) {
      setPhoneErr(true);
      console.log("123");
    } else {
      setPhoneErr(false);
      console.log("456");
    }
  };
  const validateFName = () => {
    if (!validFName.test(firstName)) {
      setFNameError(true);
    } else {
      setFNameError(false);
    }
  };
  const validateSName = () => {
    if (!validSName.test(secondName)) {
      setSNameError(true);
    } else {
      setSNameError(false);
    }
  };

  // if (
  //   (!setEmailErr && !setPhoneErr && !setFNameError && !setSNameError) ===
  //   disabled
  // ) {
  //   setDisabled(true);
  // } else {
  //   setDisabled(false);
  // }

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
          onKeyUp={validateEmail}
          errorText={email === "" || !emailErr ? "" : "Your email is invalid"}
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
          onKeyUp={validateFName}
          errorText={
            firstName === "" || !nameFErr ? "" : "Your first name is invalid"
          }
        />
        <Input
          value={secondName}
          onChange={setSecondName}
          type="text"
          placeholder="Last Name"
          title="Last Name"
          name="second_name"
          onKeyUp={validateSName}
          errorText={
            secondName === "" || !nameSErr ? "" : "Your last name is invalid"
          }
        />
        <Input
          value={phone}
          onChange={setPhone}
          type="tel"
          placeholder="In format '9(999)999-99-99'"
          title="Phone"
          name="phone"
          onKeyUp={validatePhone}
          errorText={phone === "" || !phoneErr ? "" : "Your phone is invalid"}
        />

        <Input
          value={password}
          onChange={setPassword}
          type="password"
          placeholder="*************"
          title="Password"
          name="password"
          required={true}
        />
      </div>

      <div className={classes.buttonBox}>
        <Button
          onClick={click}
          isOrange={true}
          disabled={
            emailErr ||
            phoneErr ||
            nameFErr ||
            nameSErr ||
            !(password.length > 1) ||
            !(login.length > 1)
          }
        >
          CREATE
        </Button>
      </div>
      <HaveAcc />
    </>
  );
}

export default RegFormMain;
