import classes from "./Footer.module.css";
import message from "../../../assets/message.svg";
import seting from "../../../assets/setting.svg";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className={classes.footerWrap}>
      <div className={classes.img1}>
        <img src={message} alt="message" width="25px" />
      </div>
      <div className={classes.img2}>
        <button
          className={classes.buttonSetting}
          onClick={() => navigate("/chat/change_profile")}
        >
          <img src={seting} alt="setting" width="25px" />
        </button>
      </div>
    </div>
  );
}

export default Footer;
