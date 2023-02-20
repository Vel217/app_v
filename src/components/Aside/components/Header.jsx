import classes from "./Header.module.css";
import addPeople from "../../../assets/addPeople.svg";
import Modal from "../../Modal/Modal";
import { useState } from "react";
import CreateChat from "../../ModalComponents/CreateChat";
import Search from "../../Input/Search";

function Header() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={classes.header}>
      <Search />
      <img
        className={classes.pic}
        src={addPeople}
        alt="add"
        height="17px"
        onClick={() => setModalActive(true)}
      />

      <Modal active={modalActive} setActive={setModalActive}>
        <CreateChat />
      </Modal>
    </div>
  );
}

export default Header;
