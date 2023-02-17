import classes from "./Footer.module.css";
import message from "../../../assets/message.svg";
import seting from "../../../assets/setting.svg";

function Footer() {
  return (
    <div className={classes.footerWrap}>
      <div className={classes.img1}>
        <img src={message} alt="message" width="25px" />
      </div>
      <div className={classes.img2}>
        <img src={seting} alt="setting" width="25px" />
      </div>
    </div>
  );
}

export default Footer;
