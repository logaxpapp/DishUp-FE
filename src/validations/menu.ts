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
