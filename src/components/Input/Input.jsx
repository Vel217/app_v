import classes from "./Input.module.css";

function Input({
  title,
  id,
  value,
  onChange,
  onKeyUp,
  type,
  placeholder,
  disabled,
  errorText,
  name,
}) {
  return (
    <div className={classes.inputWrapper}>
      <div>{title}</div>
      <label id={id}>
        <input
          value={value}
          onInput={(e) => {
            onChange(e.target.value);
          }}
          onKeyUp={onKeyUp}
          className={classes.input}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          name={name}
        />
      </label>
      {!!errorText && <p className={classes.errorText}>{errorText}</p>}
    </div>
  );
}

export default Input;
