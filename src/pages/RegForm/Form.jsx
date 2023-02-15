import Button from "../../components/Button/Button";
import Error from "./ErrorFR";

import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  return (
    <Card>
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
      <div className="buttonBox">
        <Button>Let`s go CHATING</Button>
        <Button onClick={() => navigate("/create")}>Create an account</Button>
      </div>
    </Card>
  );
}

export default Form;
