import classes from "./Button.module.css";

function Button({ children, ...props }) {
  return (
    <button {...props} className={classes.buttonFR}>
      {" "}
      {children}{" "}
    </button>
  );
}

export default Button;
