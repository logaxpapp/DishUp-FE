import * as yup from "yup";
export const combinedMenuSchema = yup.object().shape({
  itemName: yup.string().required("Item name is required"),
  description: yup.string().required("Description is required"),
  mealTime: yup.string().required("Meal time is required"),
  defaultStock: yup
    .number()
    .required("Enter stock")
    .typeError("Must be a number"),
  reorderThreshold: yup
    .number()
    .required("Enter threshold")
    .typeError("Must be a number"),
  categoryIds: yup
    .array()
    .of(yup.string())
    .min(1, "Select at least one")
    .required(),
  hasPortions: yup.boolean(),
  regularPrice: yup.number().when("hasPortions", {
    is: false,
    then: (schema) =>
      schema
        .required("Regular price is required")
        .typeError("Must be a number"),
  }),
  promoPrice: yup.number().when("hasPortions", {
    is: false,
    then: (schema) =>
      schema.required("Promo price is required").typeError("Must be a number"),
  }),
  validDate: yup.string().when("hasPortions", {
    is: false,
    then: (schema) => schema.required("Date is required"),
  }),
  prices: yup.array().when("hasPortions", {
    is: true,
    then: (schema) =>
      schema
        .of(
          yup.object().shape({
            portionName: yup.string().required("Required"),
            regularPrice: yup.number().required("Required").typeError("Number"),
            promoPrice: yup.number().required("Required").typeError("Number"),
            validDate: yup.string().required("Required"),
          }),
        )
        .min(1, "Add at least one portion"),
  }),
});

// export const menuSchema = yup.object({
//   itemName: yup.string().required("Item name is required"),
//   description: yup.string().required("Description is required"),
//   mealTime: yup.string().required("Meal time is required"),
//   defaultStock: yup
//     .number()
//     .required("Enter default stock")
//     .typeError("Default stock must be a number"),
//   reorderThreshold: yup
//     .number()
//     .required("Enter reorder threshold")
//     .typeError("Reorder threshold must be a number"),
//   categoryIds: yup
//     .array()
//     .of(yup.string())
//     .min(1, "At least one category is required")
//     .required("Category is required"),
// });

export const priceSchema = yup.object().shape({
  prices: yup
    .array()
    .of(
      yup.object().shape({
        portionName: yup.string().required("Portion name is required"),
        regularPrice: yup.string().required("Regular price is required"),
        promoPrice: yup.string().required("Promo price is required"),
        validDate: yup
          .string()
          .required("Valid date and time is required")
          .matches(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2})?$/,
            "Date must be in YYYY-MM-DDTHH:mm or YYYY-MM-DDTHH:mm:ss format",
          ),
      }),
    )
    .required("At least one portion name is required")
    .min(1, "At least one portion name is required"),
});
