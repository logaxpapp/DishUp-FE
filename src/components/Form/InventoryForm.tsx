import { IInventoryLists } from "@/models/inventory";
import { ICategory } from "@/models/location";
import { IMenuLists } from "@/models/menu";
import { inventorySchema } from "@/validations/inventory";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import CustomInput from "../FormElements/Input";
import { Select } from "antd";
import { ISupplier } from "@/models/supplier";
import CustomTextarea from "../FormElements/CustomTextarea";
import {
  useCreateInventoryMutation,
  useUpdateteInventoryMutation,
} from "@/hooks/useInventoryQuery";
import { Button } from "../ui/Button";

const InventoryForm = ({
  close,
  menuItems,
  categories,
  singleInventory,
  suppliers,
}: {
  close: () => void;
  menuItems: IMenuLists[];
  suppliers: ISupplier[];
  categories:
    | { createdAt: string; description: string; id: string; name: string }[]
    | null;
  singleInventory: IInventoryLists | null;
}) => {
  const menuLists = useMemo(
    () => menuItems?.map((b) => ({ label: b.itemName, value: b?.id })) || [],
    [menuItems],
  );
  const suppliersList = useMemo(
    () => suppliers?.map((b) => ({ label: b.name, value: b?.id })) || [],
    [suppliers],
  );
  const create = useCreateInventoryMutation({ close });
  const update = useUpdateteInventoryMutation({ close });

  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      menuId: singleInventory?.menuId ?? "",
      barcode: singleInventory?.barcode ?? "",
      unit: singleInventory?.unit ?? "",
      currentStock: Number(singleInventory?.currentStock) ?? 0,
      reorderLevel: Number(singleInventory?.reorderLevel) ?? 0,
      leadTime: Number(singleInventory?.leadTime) ?? 0,
      supplierId: singleInventory?.supplierId ?? "",
      additionalNote: singleInventory?.additionalNote ?? "",
    },
    resolver: yupResolver(inventorySchema),
  });
  const onSubmit = async (data: any) => {
    singleInventory
      ? update.mutate({ payload: data, inventoryId: singleInventory?.id })
      : create.mutate({
          payload: data,
        });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            {singleInventory ? "Edit Inventory Item" : "Add Inventory Item"}
          </h2>
          <button onClick={close} className="text-gray-400 hover:text-gray-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Controller
              name="menuId"
              control={control}
              render={({ field, fieldState }) => (
                <div>
                  <label className="text-[#0D1821] text-[14px] font-medium">
                    Select Menu <span className="text-red-500">*</span>
                  </label>
                  <Select
                    {...field}
                    value={field.value?.toString() ?? ""}
                    onChange={(value) => {
                      field.onChange(value);
                    }}
                    options={menuLists}
                    placeholder="Select menu"
                    style={{ width: "100%", height: "54px" }}
                    status={fieldState.error ? "error" : ""}
                    showSearch={{
                      optionFilterProp: "label",
                      filterSort: (optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase()),
                    }}
                  />
                  {fieldState.error?.message && (
                    <p className="text-[11px] font-bold text-red-600 mt-1">
                      {fieldState.error.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          <div>
            <Controller
              name="barcode"
              control={control}
              render={({ field, fieldState }) => (
                <CustomInput
                  {...field}
                  value={field?.value?.toString() ?? ""}
                  placeholder="e.g. CHK-BRS-00123"
                  necessary
                  status={fieldState.error ? "error" : ""}
                  errorMessage={fieldState.error?.message}
                  label=" SKU/Barcode"
                />
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 items-center justify-center">
            <div className="mt-1">
              <Controller
                name="unit"
                control={control}
                render={({ field, fieldState }) => (
                  <div>
                    <label className="text-[#0D1821] text-[14px] font-medium ">
                      Unit of Measure <span className="text-red-500">*</span>
                    </label>
                    <Select
                      {...field}
                      options={[
                        { label: "KG", value: "KG" },
                        { label: "LBS", value: "LBS" },
                        { label: "UNITS", value: "UNITS" },
                      ]}
                      placeholder=" Unit of Measure"
                      style={{ width: "100%", height: "54px" }}
                      status={fieldState.error ? "error" : ""}
                    />
                    {fieldState.error && (
                      <p className="text-[11px] font-bold text-red-600 mt-1">
                        {fieldState.error.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>

            <div>
              <Controller
                name="currentStock"
                control={control}
                render={({ field, fieldState }) => (
                  <CustomInput
                    {...field}
                    value={field?.value?.toString() ?? ""}
                    placeholder="0"
                    necessary
                    status={fieldState.error ? "error" : ""}
                    errorMessage={fieldState.error?.message}
                    type="number"
                    label="Current Stock"
                  />
                )}
              />
            </div>
          </div>

          <div>
            <Controller
              name="reorderLevel"
              control={control}
              render={({ field, fieldState }) => (
                <CustomInput
                  {...field}
                  value={field?.value?.toString() ?? ""}
                  placeholder="e.g. 10"
                  necessary
                  status={fieldState.error ? "error" : ""}
                  errorMessage={fieldState.error?.message}
                  type="number"
                  label="Reorder Level"
                />
              )}
            />
          </div>

          <div>
            <Controller
              name="leadTime"
              control={control}
              render={({ field, fieldState }) => (
                <CustomInput
                  {...field}
                  value={field?.value?.toString() ?? ""}
                  placeholder="e.g. 1"
                  necessary
                  status={fieldState.error ? "error" : ""}
                  errorMessage={fieldState.error?.message}
                  type="number"
                  label="Lead Time"
                />
              )}
            />
          </div>

          <div>
            <Controller
              name="supplierId"
              control={control}
              render={({ field, fieldState }) => (
                <div>
                  <label className="text-[#0D1821] text-[14px] font-medium">
                    Select Supplier <span className="text-red-500">*</span>
                  </label>
                  <Select
                    {...field}
                    value={field.value?.toString() ?? ""}
                    onChange={(value) => {
                      field.onChange(value);
                    }}
                    options={suppliersList}
                    placeholder="Select supplier"
                    style={{ width: "100%", height: "54px" }}
                    status={fieldState.error ? "error" : ""}
                    showSearch={{
                      optionFilterProp: "label",
                      filterSort: (optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase()),
                    }}
                  />
                  {fieldState.error?.message && (
                    <p className="text-[11px] font-bold text-red-600 mt-1">
                      {fieldState.error.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          <div>
            <Controller
              name="additionalNote"
              control={control}
              render={({ field, fieldState }) => (
                <CustomTextarea
                  {...field}
                  value={field?.value?.toString() ?? ""}
                  label=" Additional Notes (Optional)"
                  placeholder="Add any notes..."
                  necessary
                  rows={3}
                  status={fieldState.error ? "error" : ""}
                  errorMessage={fieldState.error?.message}
                />
              )}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={close}
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
            >
              Cancel
            </button>
            <Button
              type="submit"
              variant="primary"
              className="flex-1 px-4 py-2.5 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600"
              disabled={create.isPending || update?.isPending}
              loading={create.isPending || update.isPending}
            >
              {singleInventory ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InventoryForm;
