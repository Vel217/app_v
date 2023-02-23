import AvatarPhoto from "../../components/AvatarPhoto/AvatarPhoto";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import classes from "./ChangeForm.module.css";
import { useNavigate } from "react-router-dom";

function ChangeForm() {
  const navigate = useNavigate();
  return (
    <div className={classes.wrap}>
      <div className={classes.avatar}>
        <AvatarPhoto />
        <p className={classes.profileName}> My Name</p>
      </div>
      <div className={classes.form}>
        <Input
          id="login"
          type="email"
          placeholder="any.any@mail.com"
          title="Email"
          disabled="disabled"
        />
        <Input
          id="login"
          type="text"
          placeholder="LoginName"
          title="Login"
          disabled="disabled"
        />
        <Input
          id="firstName"
          type="text"
          placeholder="First Name"
          title="First Name"
          disabled="disabled"
        />
        <Input
          id="lastName"
          type="text"
          placeholder="Last Name"
          title="Last Name"
          disabled="disabled"
        />
        <Input
          id="phoneNumber"
          type="tel"
          placeholder="+9(999)999-99-99"
          title="Phone"
          disabled="disabled"
        />
        <Input
          id="passCreate"
          type="password"
          placeholder="*************"
          title="Password"
          disabled="disabled"
        />
      </div>
      <div className={classes.buttons}>
        <Button
          isOrange={true}
          onClick={() => navigate("/chat/profile/change")}
        >
          Change Profile
        </Button>
        <Button isRed={true}> Logout</Button>
      </div>
    </div>
  );
}

export default ChangeForm;
