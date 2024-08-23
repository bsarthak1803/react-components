import { useState } from "react";

const useFormValidation = (initialState) => {
  //encapsulated the formvalidation logic inside a custom hook
  const [values, setValues] = useState(initialState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => {
      return { ...prevValues, [name]: value };
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
  };
  return [values, onChangeHandler, onFormSubmit];
};

export default useFormValidation;
