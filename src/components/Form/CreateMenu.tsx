import React, { useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import CustomInput from "../FormElements/Input";
import CustomTextarea from "../FormElements/CustomTextarea";
import { Select } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { menuSchema } from "@/validations/menu";
import { FileUpload } from "../ui/FileUpload";
import {
  useCreateMenuMutation,
  useUpdateMenuMutation,
} from "@/hooks/useMenuQuery";
import { Button } from "../ui/Button";
import { uploadRequest } from "@/utils/Providers";
import { API_ENDPOINTS } from "@/constants/api";
import { capitalizeFirstLetter } from "@/helpers/capitalizeFirstLetter";
import { IMenuLists } from "@/models/menu";
interface CreateMenuProps {
  close: () => void;
  categories: {
    id: string;
    createdAt: string;
    description: string;
    name: string;
  }[];
  menuItemList: IMenuLists;
  title: string;
}

const MenuForm = ({
  close,
  categories,
  menuItemList,
  title,
}: CreateMenuProps) => {
  const [mealImageUrl, setMealImageUrl] = useState<File | null>(null);
  const createMenu = useCreateMenuMutation({ close });
  const updateMenu = useUpdateMenuMutation({ close });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [existingImageUrl, setExistingImageUrl] = useState<string | null>(null);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      itemName: menuItemList?.itemName ?? "",
      categoryIds: menuItemList?.menuCategories[0]?.category?.id ?? "",
      mealTime: menuItemList?.mealTime ?? "",
      description: menuItemList?.description ?? "",
      defaultStock: menuItemList?.defaultStock ?? 0,
      reorderThreshold: menuItemList?.reorderThreshold ?? 0,
    },
    resolver: yupResolver(menuSchema),
  });

  const allCategories = useMemo(
    () => categories?.map((c) => ({ label: c?.name, value: c?.id })) || [],
    [categories],
  );
  const allMealTime = useMemo(
    () =>
      ["Breakfast", "Lunch", "Dinner"]?.map((c) => ({
        label: c,
        value: c,
      })) || [],
    [],
  );
  useEffect(() => {
    if (menuItemList?.mealImageUrl) {
      setExistingImageUrl(menuItemList.mealImageUrl);
    }
  }, [menuItemList]);

  const onSubmit = async (data) => {
    const payload = {
      itemName: data?.itemName,
      description: data?.description,
      mealTime: data?.mealTime?.toUpperCase(),
      defaultStock: data?.defaultStock,
      reorderThreshold: data?.reorderThreshold,
      categoryIds: data?.categoryIds ? [data.categoryIds] : [],
    };

    try {
      setIsSubmitting(true);

      let uploadedUrl: string | undefined;

      if (mealImageUrl) {
        const formData = new FormData();
        formData.append("file", mealImageUrl);

        const uploadRes = await uploadRequest.post(
          API_ENDPOINTS.FILE.UPLOAD_FILE,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } },
        );

        uploadedUrl = uploadRes?.data?.data?.url;
      }

      const finalPayload = {
        ...payload,
        mealImageUrl: uploadedUrl ?? existingImageUrl,
      };

      updateMenu
        ? updateMenu.mutate({ payload: finalPayload, menuId: menuItemList?.id })
        : createMenu.mutate(finalPayload);
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
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
              name={"itemName"}
              control={control}
              render={({ field, fieldState }) => (
                <CustomInput
                  {...field}
                  value={field?.value?.toString() ?? ""}
                  label="Item Name"
                  placeholder="e.g. Cheeseburger"
                  necessary
                  status={fieldState.error ? "error" : ""}
                  errorMessage={fieldState.error?.message}
                />
              )}
            />
          </div>

          <div>
            <Controller
              name="categoryIds"
              control={control}
              render={({ field, fieldState }) => (
                <div>
                  <label className="text-[#0D1821] text-[14px] font-medium">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <Select
                    {...field}
                    value={field.value?.toString() ?? ""}
                    onChange={(value) => {
                      field.onChange(value);
                    }}
                    options={allCategories || []}
                    placeholder="Select Category"
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
              name="mealTime"
              control={control}
              render={({ field, fieldState }) => (
                <div>
                  <label className="text-[#0D1821] text-[14px] font-medium">
                    Meal Time <span className="text-red-500">*</span>
                  </label>
                  <Select
                    {...field}
                    value={field.value?.toString() ?? ""}
                    onChange={(value) => {
                      field.onChange(value);
                    }}
                    options={allMealTime || []}
                    placeholder="Select Type"
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
          {/*
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Image
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <svg
                className="w-12 h-12 mx-auto text-gray-400 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <p className="text-sm text-gray-600">
                Click to upload or drag and drop
              </p>
            </div>
          </div> */}

          <div>
            <Controller
              name={"description"}
              control={control}
              render={({ field, fieldState }) => (
                <CustomTextarea
                  {...field}
                  value={field?.value?.toString() ?? ""}
                  label="Description"
                  placeholder="Brief description of the item"
                  necessary
                  rows={5}
                  status={fieldState.error ? "error" : ""}
                  errorMessage={fieldState.error?.message}
                />
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Controller
                name={"defaultStock"}
                control={control}
                render={({ field, fieldState }) => (
                  <CustomInput
                    {...field}
                    value={field?.value?.toString() ?? ""}
                    placeholder="e.g. 50"
                    necessary
                    status={fieldState.error ? "error" : ""}
                    errorMessage={fieldState.error?.message}
                    type="number"
                    label="Default Stock"
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name={"reorderThreshold"}
                control={control}
                render={({ field, fieldState }) => (
                  <CustomInput
                    {...field}
                    value={field?.value?.toString() ?? ""}
                    placeholder="e.g. 5"
                    necessary
                    status={fieldState.error ? "error" : ""}
                    errorMessage={fieldState.error?.message}
                    type="number"
                    label="Reorder Threshold"
                  />
                )}
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <FileUpload
              label="Upload Menu Image"
              onChange={(file) => setMealImageUrl(file)}
            />

            {mealImageUrl ? (
              <p className="text-[11px] font-bold text-[#009688] mt-2 italic">
                Ready for upload: {mealImageUrl.name}
              </p>
            ) : existingImageUrl ? (
              <div className="mt-2">
                <img
                  src={existingImageUrl}
                  alt="Existing Menu"
                  className="w-36 h-36 object-cover rounded-md"
                />
              </div>
            ) : null}
          </div>
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags/Promotions
            </label>
            <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>Select/Add List</option>
            </select>
          </div> */}

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
              size="lg"
              className="flex-1 px-4 py-2.5 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600"
              disabled={
                createMenu.isPending || updateMenu?.isPending || isSubmitting
              }
              loading={
                createMenu.isPending || updateMenu?.isPending || isSubmitting
              }
            >
              {menuItemList ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MenuForm;
