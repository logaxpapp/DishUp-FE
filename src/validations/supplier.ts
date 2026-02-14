import * as yup from "yup";

export const supplierSchema = yup.object({
  name: yup.string().required("Supplier name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required")
    .min(10, "Email must be at least 10 characters")
    .max(60, "Email must not be more than 60 characters"),
  phone: yup
    .string()
    .required("Phone number is required")
    .min(10, "Phone number must be at least 10 characters")
    .max(18, "Phone number must not be more than 18 characters"),
  address: yup.string().required("Address is required"),
});
