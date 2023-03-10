import classes from "./Aside.module.css";
import Chats from "./components/Chats";
import Footer from "./components/Footer";
import Header from "./components/Header";

function Aside() {
  return (
    <div className={classes.aside}>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.chats}>
        <Chats />
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Aside;
