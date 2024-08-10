import { useState } from "react";
import styles from "./InputField.module.css";
const InputField = ({
  id,
  type,
  name,
  label,
  onChangeHandler,
  errorMessage,
  pattern,
  maxlength,
  minlength,
  required,
  value,
}) => {
  const [focused, setFocused] = useState(false);

  const onBlurHandler = () => {
    setFocused(true);
  };
  return (
    <>
      <section className={styles.inputFieldContainer}>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          name={name}
          id={id}
          onChange={onChangeHandler}
          required={required}
          onBlur={onBlurHandler}
          focused={focused.toString()} //it should be a string value
          pattern={pattern ? pattern : ""}
          maxLength={maxlength ? maxlength : null}
          minLength={minlength ? minlength : null}
        ></input>
        <span className={styles.errorField} id="error">
          {errorMessage ? errorMessage : ""}
        </span>
      </section>
    </>
  );
};

export default InputField;
