import * as yup from "yup";

export const inventorySchema = yup.object({
  menuId: yup.string().required("Menu is required"),
  barcode: yup.string().required("Bar code is required"),
  unit: yup.string().required("Unit is required"),
  currentStock: yup
    .number()
    .required("Enter stock")
    .typeError("Must be a number"),
  reorderLevel: yup
    .number()
    .required("Enter Reorder level")
    .typeError("Must be a number"),
  leadTime: yup
    .number()
    .required("Enter Lead time")
    .typeError("Lead time must be a number"),
  supplierId: yup.string().required("Menu is required"),
  additionalNote: yup.string().required("Additional note is required"),
});
