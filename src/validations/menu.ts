import * as yup from "yup";

export const menuSchema = yup.object({
  itemName: yup.string().required("Item name is required"),
  description: yup.string().required("Description is required"),
  mealTime: yup.string().required("Meal time is required"),
  defaultStock: yup
    .number()
    .required("Enter default stock")
    .typeError("Default stock must be a number"),
  reorderThreshold: yup
    .number()
    .required("Enter reorder threshold")
    .typeError("Reorder threshold must be a number"),
  categoryIds: yup.string().required("Category is required"),
});

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
