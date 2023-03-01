import classes from "./Button.module.css";

function Button({ children, type = "button", ...props }) {
  // TODO: use enums
  const getClassColor = () => {
    if (props.isGreen) {
      return classes.buttonGreen;
    }

    if (props.isOrange) {
      return classes.buttonOrange;
    }

    if (props.isRed) {
      return classes.buttonRed;
    }
  };
  return (
    <button
      onClick={props.onClick}
      className={`${classes.button} ${getClassColor()}`}
      disabled={props.disabled}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
