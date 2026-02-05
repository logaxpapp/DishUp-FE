import * as yup from "yup";

export const businessDetailsSchema = yup.object({
  countryCode: yup.string().required("Country code is required"),
  stateId: yup.string().required("State is required"),
  city: yup.string().required("City is required"),
  businessName: yup.string().required("Business name is required"),
  taxId: yup.string().required("TaxID is required"),
  zipCode: yup.string().required("Zip code is required"),
  registrationNumber: yup.string().required("Registration number is required"),
  bankName: yup.string().required("Bank name is required"),
  accountNumber: yup
    .string()
    .required("Account number is required")
    .matches(/^\d+$/, "Account number must contain only numbers")
    .min(6, "Account number is too short")
    .max(20, "Account number is too long"),
  holderName: yup.string().required("Account holder name is required"),
  routingNumber: yup
    .string()
    .required("Routing number is required")
    .matches(/^\d+$/, "Routing number must contain only numbers"),
  swiftCode: yup
    .string()
    .required("Swift code is required")
    .matches(/^[A-Z0-9]{8,11}$/, "Invalid SWIFT code"),
});
