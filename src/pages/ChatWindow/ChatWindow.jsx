import { Outlet } from "react-router-dom";
import Aside from "../../components/Aside/Aside";
import classes from "./ChatWindow.module.css";

function ChatWindow() {
  return (
    <div className={classes.window}>
      <Aside />
      <div className={classes.otherContent}>
        <Outlet />
      </div>
    </div>
  );
}

export default ChatWindow;
