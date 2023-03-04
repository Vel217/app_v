import classes from "./Header.module.css";
import addPeopleImg from "../../../assets/addPeople.svg";
import Modal from "../../Modal/Modal";
import { useState } from "react";
import CreateChat from "../../ModalComponents/CreateChat";
import Search from "../../Input/Search";

function Header() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={classes.header}>
      <Search isSearch={true} />
      <button>
        <img
          className={classes.pic}
          src={addPeopleImg}
          alt="add"
          height="17px"
          onClick={() => setModalActive(true)}
        />
      </button>
      {modalActive && (
        <Modal active={modalActive} setActive={setModalActive}>
          <CreateChat />
        </Modal>
      )}
    </div>
  );
}

export default Header;
