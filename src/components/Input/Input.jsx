import classes from "./Input.module.css";

function Input(props) {
  return (
    <div className={classes.inputWrapper}>
      <div>{props.title}</div>
      <label id={props.id}>
        <input
          className={classes.input}
          type={props.type}
          placeholder={props.placeholder}
        ></input>
      </label>
    </div>
  );
}

export default Input;
