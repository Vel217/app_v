import Button from "../../components/Button/Button";
import ErrorFR from "./ErrorFR";
import Hello from "./hello";
import Input from "../../components/Input/Input";

function Form1() {
  return (
    <div className="form1">
      <div>
        <Hello />
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
        <ErrorFR />
      </div>
      <div className="buttonBox">
        <Button>Let`s go CHATING</Button>
        <Button>Create an account</Button>
      </div>
    </div>
  );
}

export default Form1;
