import classes from "./Header.module.css";
import addPeople from "../../../assets/addPeople.svg";
import search from "../../../assets/search.svg";

function Header() {
  return (
    <div className={classes.blockUp}>
      <div className={classes.inputArea}>
        <img
          className={classes.search}
          src={search}
          alt="search"
          height="15px"
        ></img>
        <label id="search">
          <input
            className={classes.input}
            type="search"
            placeholder="Search ..."
          ></input>
        </label>
      </div>
      <div className={classes.pic}>
        <img src={addPeople} alt="add" height="17px"></img>
      </div>
    </div>
  );
}

export default Header;
