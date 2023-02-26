import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import HaveAcc from "./HaveAcc";

import Title from "../../components/Title/Title";

import classes from "./RegFormMain.module.css";
// import { useNavigate } from "react-router-dom";

function RegFormMain() {
  // const navigate = useNavigate();
  function click() {
    const first_name = document.getElementsByName("first_name").value;
    const second_name = document.getElementsByName("second_name").value;
    const login = document.getElementsByName("login").value;
    const email = document.getElementsByName("email").value;
    const password = document.getElementsByName("password").value;
    const phone = document.getElementsByName("phone").value;
    const host = "https://ya-praktikum.tech";
    fetch(`$(host)/api/v2/auth/signup`, {
      method: "POST",
      mode: "cors",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        first_name: first_name,
        second_name: second_name,
        login: login,
        email: email,
        phone: phone,
        password: password,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        fetch(`$(host)/api/v2/auth/user`, {
          method: "GET",
          mode: "cors",
        })
          .then((r) => r.json())
          .then((data) => {
            console.log("user", data);
          });
      });
  }

  return (
    <>
      <div>
        <Title>Create an account:</Title>
        <Input
          id="login"
          type="email"
          placeholder="any.any@mail.com"
          title="Email"
          name="email"
        />
        <Input
          id="login"
          type="text"
          placeholder="LoginName"
          title="Login"
          name="login"
        />
        <Input
          id="firstName"
          type="text"
          placeholder="First Name"
          title="First Name"
          name="first_name"
        />
        <Input
          id="lastName"
          type="text"
          placeholder="Last Name"
          title="Last Name"
          name="second_name"
        />
        <Input
          id="phoneNumber"
          type="tel"
          placeholder="+9(999)999-99-99"
          title="Phone"
          name="phone"
        />
        <Input
          id="passCreate"
          type="password"
          placeholder="*************"
          title="Password"
          name="password"
        />
      </div>

      <div className={classes.buttonBox}>
        <Button
          onClick={() => click()}
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
