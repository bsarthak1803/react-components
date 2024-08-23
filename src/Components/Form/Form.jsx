import InputField from "../InputField/InputField";
import { formFields } from "../../utils/constants";
import styles from "./Form.module.css";

import useFormValidation from "../../hooks/useFormValidation";

const initialValues = {
  fullName: "",
  email: "",
  phoneNumber: "",
  password: "",
};

const Form = () => {
  const [values, onChangeHandler, onFormSubmit] =
    useFormValidation(initialValues);

  return (
    <form className={styles.mainForm} onSubmit={onFormSubmit}>
      <>
        {formFields.map((field) => {
          return (
            <InputField
              key={field.id}
              {...field}
              onChangeHandler={onChangeHandler}
              value={values[field.name]}
            />
          );
        })}
        <button type="submit">Submit</button>
      </>
    </form>
  );
};

export default Form;
