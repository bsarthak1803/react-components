export const formFields = [
  {
    id: "fname",
    type: "text",
    name: "fullName",
    label: "Full Name:",
    pattern: `^[a-zA-z]*$`,
    errorMessage:
      "Full Name should have min 3 and max 10 chars, no special character, no digit",
    minlength: 3,
    maxlength: 10,
    required: true,
  },
  {
    id: "eml",
    type: "email",
    name: "email",
    label: "Email:",
    errorMessage: "Email should be a valid email address!!",
    pattern: `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$`,
    required: true,
  },
  {
    id: "pwd",
    type: "password",
    name: "password",
    label: "Password:",
    errorMessage:
      "Password should have min 6 chars, 1 upper-case, 1 numeric, 1 special character",
    required: true,
  },
  {
    id: "phnum",
    type: "number",
    name: "phoneNumber",
    label: "Phone Number:",
    errorMessage: "Phone number should only have 0-9 digits and max 10 digits",
    maxlength: 10,
    required: true,
  },
];
