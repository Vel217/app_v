import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import HaveAcc from "./HaveAcc";

import Title from "../../components/Title/Title";

import classes from "./RegFormMain.module.css";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

function RegFormMain() {
  // const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
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
  };

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
        />
        <Input
          value={secondName}
          onChange={setSecondName}
          type="text"
          placeholder="Last Name"
          title="Last Name"
          name="second_name"
        />
        <Input
          value={phone}
          onChange={setPhone}
          type="tel"
          placeholder="+9(999)999-99-99"
          title="Phone"
          name="phone"
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
        <Button
          onClick={click}
          // onClick={() => navigate("/chat")}
          isOrange={true}
        >
          CREATE
        </Button>
      </div>
      <HaveAcc />
    </>
  );
}

export default RegFormMain;
