import classes from "./Input.module.css";

function Input({ title, id, value, onChange, type, placeholder, disabled }) {
  return (
    <div className={classes.inputWrapper}>
      <div>{title}</div>
      <label id={id}>
        <input
          value={value}
          onInput={(e) => {
            onChange(e.target.value);
          }}
          className={classes.input}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
        />
      </label>
    </div>
  );
}

export default Input;
