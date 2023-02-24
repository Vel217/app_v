import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import HaveAcc from "./HaveAcc";

import Title from "../../components/Title/Title";

import classes from "./RegFormMain.module.css";
import { useNavigate } from "react-router-dom";

function RegFormMain() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Title>Create an account:</Title>
        <Input
          id="login"
          type="email"
          placeholder="any.any@mail.com"
          title="Email"
        />
        <Input id="login" type="text" placeholder="LoginName" title="Login" />
        <Input
          id="firstName"
          type="text"
          placeholder="First Name"
          title="First Name"
        />
        <Input
          id="lastName"
          type="text"
          placeholder="Last Name"
          title="Last Name"
        />
        <Input
          id="phoneNumber"
          type="tel"
          placeholder="+9(999)999-99-99"
          title="Phone"
        />
        <Input
          id="passCreate"
          type="password"
          placeholder="*************"
          title="Password"
        />
      </div>

      <div className={classes.buttonBox}>
        <Button onClick={() => navigate("/chat")} isOrange={true}>
          CREATE
        </Button>
      </div>
      <HaveAcc />
    </>
  );
}

export default RegFormMain;
