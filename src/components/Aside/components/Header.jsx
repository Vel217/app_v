import classes from "./Header.module.css";
import addPeople from "../../../assets/addPeople.svg";
import search from "../../../assets/search.svg";

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.inputArea}>
        <img
          className={classes.search}
          src={search}
          alt="search"
          height="15px"
        />
        <label id="search">
          <input
            className={classes.input}
            type="search"
            placeholder="Search ..."
          />
        </label>
      </div>

      <img className={classes.pic} src={addPeople} alt="add" height="17px" />
    </div>
  );
}

export default Header;
