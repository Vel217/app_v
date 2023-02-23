import Message from "../Message/Message";

import SideBarDown from "../SideBar/SideBarDown";
import SideBarUp from "../SideBar/SideBarUp";
import classes from "./ChatFrame.module.css";

function ChatFrame() {
  return (
    <div className={classes.window}>
      <div className={classes.rightColumn}>
        <SideBarUp />

        <div className={classes.chatAreaSend}>
          <Message>
            Hello! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Animi, laboriosam ipsam.
          </Message>
          <Message isPush={true}>
            Hello! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Animi, laboriosam ipsam.
          </Message>
        </div>

        <SideBarDown />
      </div>
    </div>
  );
}

export default ChatFrame;
