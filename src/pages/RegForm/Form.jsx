import Button from "../../components/Button/Button";
import Error from "./ErrorFR";

import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";

import { useNavigate } from "react-router-dom";
import classes from "../RegFormMain/RegFormMain.module.css";

function Form() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Title>Hello!</Title>
        <Input
          id="login"
          type="email"
          placeholder="any.any@mail.com"
          title="Login"
        />
        <Input
          id="pass"
          type="password"
          placeholder="***************"
          title="Password"
        />
      </div>
      <div>
        <Error />
      </div>
      <div className={classes.buttonBox}>
        <Button isOrange={true} onClick={() => navigate("/chat")}>
          Let`s go CHATING
        </Button>
        <Button isGreen={true} onClick={() => navigate("/create")}>
          Create an account
        </Button>
      </div>
    </>
  );
}

export default Form;
