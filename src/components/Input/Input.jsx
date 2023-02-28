import classes from "./Input.module.css";

function Input({
  title,
  id,
  value,
  onChange,
  onKeyUp,
  onBlur,
  type,
  placeholder,
  disabled,
  errorText,
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
          onBlur={onBlur}
          className={classes.input}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          required="required"
        />
      </label>
      {!!errorText && <p className={classes.errorText}>{errorText}</p>}
    </div>
  );
}

export default Input;
