import chatPeopleImg from "../../assets/chatPeople.svg";
import classes from "./AvatarPhoto.module.css";

function AvatarPhoto() {
  return (
    <div className={classes.photo}>
      <img src={chatPeopleImg} alt="chatPeoplePhoto" height="25px" />
    </div>
  );
}

export default AvatarPhoto;
