import classes from "./Button.module.css";

function Button(prop) {
  // TODO: use enums
  const getClassColor = () => {
    if (prop.isGreen) {
      return classes.buttonGreen;
    }

    if (prop.isOrange) {
      return classes.buttonOrange;
    }

    if (prop.isRed) {
      return classes.buttonRed;
    }
  };
  return (
    <button className={`${classes.buttonFR} ${getClassColor()}`}>
      {prop.children}
    </button>
  );
}

export default Button;
