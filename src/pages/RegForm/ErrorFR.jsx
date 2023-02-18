import classes from "./ErrorFR.module.css";
function ErrorFR() {
  return (
    <div className={classes.errorfr}>
      <img
        src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-wrong-number-png-image_5418896.jpg"
        width="20px"
        alt="error"
      />
      Wrong login of password
    </div>
  );
}

export default ErrorFR;
