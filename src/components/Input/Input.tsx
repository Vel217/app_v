import classes from "./Input.module.css";

function Input({
  value,
  onChange,
  type = "text",
  title,
  disabled,
  errorText,
  name,
  id,
  placeholder,
}: {
  value: string;
  onChange: (e: string) => void;
  type?: "text" | "password";
  title: string;
  disabled?: boolean;
  errorText?: string;
  name?: string;
  id?: string;
  placeholder?: string;
}) {
  return (
    <div className={classes.inputWrapper}>
      <div>{title}</div>
      <label id={id}>
        <input
          value={value}
          onInput={(e) => {
            onChange((e.target as HTMLInputElement).value);
          }}
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
