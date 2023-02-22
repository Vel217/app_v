import classes from "./Button.module.css";

function Button({ children, ...props }) {
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
    <button {...props} className={`${classes.buttonFR} ${getClassColor()}`}>
      {children}
    </button>
  );
}

export default Button;
