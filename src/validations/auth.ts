import * as yup from "yup";

export const registerSchema = yup.object({
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters"),

  lastName: yup
    .string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters"),

  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required")
    .min(10, "Email must be at least 10 characters")
    .max(60, "Email must not be more than 60 characters"),

  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .min(10, "Phone number must be at least 10 characters")
    .max(18, "Phone number must not be more than 18 characters"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number"),

  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export const loginSchema = yup.object({
  username: yup
    .string()
    .required("Username is required")
    .min(2, "Username must be at least 2 characters"),
  password: yup.string().required("Password is required"),
});
