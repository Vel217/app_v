import classes from "./Input.module.css";

function Input({
  title,
  id,
  value,
  onChange,
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
          onBlur={onBlur}
          className={classes.input}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
        />
      </label>
      {!!errorText && <p>{errorText}</p>}
    </div>
  );
}

export default Input;
