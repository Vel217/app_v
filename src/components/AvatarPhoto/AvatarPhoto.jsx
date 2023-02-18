import chatPeople from "../../assets/chatPeople.svg";
import classes from "./AvatarPhoto.module.css";

function AvatarPhoto() {
  return (
    <div className={classes.photo}>
      <img src={chatPeople} alt="chatPeoplePhoto" height="25px" />
    </div>
  );
}

export default AvatarPhoto;
