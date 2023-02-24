import classes from "./Footer.module.css";
import messageImg from "../../../assets/message.svg";
import settingImg from "../../../assets/setting.svg";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className={classes.wrap}>
      <button className={classes.button} onClick={() => navigate("/chat")}>
        <img src={messageImg} alt="message" width="25px" />
      </button>

      <button
        className={classes.button}
        onClick={() => navigate("/chat/profile")}
      >
        <img src={settingImg} alt="setting" width="25px" />
      </button>
    </div>
  );
}

export default Footer;
