import Button from "../../components/Button/Button";
import Error from "./ErrorFR";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import { useNavigate } from "react-router-dom";
import classes from "../RegFormMain/RegFormMain.module.css";
import { useState } from "react";
import { signIn } from "../../api/chat-api";

function Form() {
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorBlock, setErrorBlock] = useState(false);

  const click = () => {
    signIn(login, password).then((res) => {
      if (res.status === 200) {
        navigate("/chat");
      }
      if (res.status === 401) {
        setErrorBlock(true);
      }
    });
    setLogin("");
    setPassword("");
  };

  return (
    <>
      <div>
        <Title>Hello!</Title>

        <Input
          value={login}
          onChange={setLogin}
          name="login"
          type="text"
          placeholder="any.any217"
          title="Login"
        />
        <Input
          value={password}
          onChange={setPassword}
          name="password"
          type="password"
          placeholder="***************"
          title="Password"
        />
      </div>
      <div>{errorBlock ? <Error /> : null} </div>
      <div className={classes.buttonBox}>
        <Button
          isOrange={true}
          onClick={click}
          disabled={password.length < 1 || login.length < 1}
          type="submit"
        >
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
