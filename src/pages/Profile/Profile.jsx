import AvatarPhoto from "../../components/AvatarPhoto/AvatarPhoto";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import classes from "./Profile.module.css";
import { useNavigate } from "react-router-dom";

function Profile(props) {
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
          disabled={props.isChange ? null : "disabled"}
        />
        <Input
          id="login"
          type="text"
          placeholder="LoginName"
          title="Login"
          disabled={props.isChange ? null : "disabled"}
        />
        <Input
          id="firstName"
          type="text"
          placeholder="First Name"
          title="First Name"
          disabled={props.isChange ? null : "disabled"}
        />
        <Input
          id="lastName"
          type="text"
          placeholder="Last Name"
          title="Last Name"
          disabled={props.isChange ? null : "disabled"}
        />
        <Input
          id="phoneNumber"
          type="tel"
          placeholder="+9(999)999-99-99"
          title="Phone"
          disabled={props.isChange ? null : "disabled"}
        />
        {props.isChange && (
          <Input
            id="passCreate"
            type="password"
            placeholder="*************"
            title="Password"
          />
        )}
      </div>
      <div className={classes.buttons}>
        {!props.isChange && (
          <Button
            isOrange={true}
            onClick={() => navigate("/chat/profile/change")}
          >
            Change Profile
          </Button>
        )}
        {!props.isChange && <Button isRed={true}> Logout</Button>}
        {props.isChange && <Button isOrange={true}>Save</Button>}
      </div>
    </div>
  );
}

export default Profile;
