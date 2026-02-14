import React, { useEffect, useMemo, useState } from "react";
import { Controller, useForm, useFieldArray } from "react-hook-form";
import CustomInput from "../FormElements/Input";
import CustomTextarea from "../FormElements/CustomTextarea";
import { Select, Switch } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { FileUpload } from "../ui/FileUpload";
import {
  useCreateMenuMutation,
  useUpdateMenuMutation,
} from "@/hooks/useMenuQuery";
import { Button } from "../ui/Button";
import { uploadRequest } from "@/utils/Providers";
import { API_ENDPOINTS } from "@/constants/api";
import { IMenuLists } from "@/models/menu";
import CustomMultiSelect from "../FormElements/MultiSelect";
import { FaTrash, FaPlusCircle } from "react-icons/fa";
import { combinedMenuSchema } from "@/validations/menu";
import { capitalizeFirstLetter } from "@/helpers/capitalizeFirstLetter";

const MenuForm = ({ close, categories, menuItemList, title }: any) => {
  const [mealImageUrl, setMealImageUrl] = useState<File | null>(null);
  const [existingImageUrl, setExistingImageUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createMenu = useCreateMenuMutation({ close });
  const updateMenu = useUpdateMenuMutation({ close });
  console.log(menuItemList);

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      itemName: menuItemList?.itemName ?? "",
      categoryIds:
        menuItemList?.menuCategories?.map((item: any) => item.categoryId) ?? [],
      mealTime: capitalizeFirstLetter(
        menuItemList?.mealTime?.toLowerCase() ?? "",
      ),
      description: menuItemList?.description ?? "",
      defaultStock: menuItemList?.defaultStock ?? 0,
      reorderThreshold: menuItemList?.reorderThreshold ?? 0,
      hasPortions: menuItemList?.hasPortions ?? false,

      regularPrice:
        menuItemList?.hasPortions === false
          ? menuItemList?.prices?.[0]?.regularPrice
          : 0,
      promoPrice:
        menuItemList?.hasPortions === false
          ? menuItemList?.prices?.[0]?.promoPrice
          : 0,
      validDate:
        menuItemList?.hasPortions === false
          ? menuItemList?.prices?.[0]?.validDate?.substring(0, 16)
          : "",

      prices:
        menuItemList?.hasPortions === true
          ? menuItemList?.prices?.map((p: any) => ({
              portionName: p.portionName,
              regularPrice: p.regularPrice,
              promoPrice: p.promoPrice,
              validDate: p.validDate?.substring(0, 16),
            }))
          : [
              {
                portionName: "",
                regularPrice: "",
                promoPrice: "",
                validDate: "",
              },
            ],
    },
    resolver: yupResolver(combinedMenuSchema),
  });
  console.log(getValues(), errors);
  const { fields, append, remove } = useFieldArray({ control, name: "prices" });
  const hasPortions = watch("hasPortions");

  useEffect(() => {
    if (menuItemList?.mealImageUrl)
      setExistingImageUrl(menuItemList.mealImageUrl);
  }, [menuItemList]);

  const allCategories = useMemo(
    () => categories?.map((c) => ({ text: c?.name, value: c?.id })) || [],
    [categories],
  );

  const onSubmit = async (data: any) => {
    try {
      setIsSubmitting(true);
      let uploadedUrl = existingImageUrl;

      if (mealImageUrl) {
        const formData = new FormData();
        formData.append("file", mealImageUrl);
        const res = await uploadRequest.post(
          API_ENDPOINTS.FILE.UPLOAD_FILE,
          formData,
        );
        uploadedUrl = res?.data?.data?.url;
      }

      const basePayload = {
        itemName: data.itemName,
        description: data.description,
        mealTime: data.mealTime.toUpperCase(),
        defaultStock: Number(data.defaultStock),
        reorderThreshold: Number(data.reorderThreshold),
        categoryIds: data.categoryIds,
        mealImageUrl: uploadedUrl,
        hasPortions: data.hasPortions,
      };

      const finalPayload = data.hasPortions
        ? {
            ...basePayload,
            prices: data.prices.map((p: any) => ({
              ...p,
              regularPrice: Number(p.regularPrice),
              promoPrice: Number(p.promoPrice),
              validDate: `${p.validDate}:00Z`,
            })),
          }
        : {
            ...basePayload,
            regularPrice: Number(data.regularPrice),
            promoPrice: Number(data.promoPrice),
            validDate: `${data.validDate}:00Z`,
          };
      console.log(finalPayload);

      menuItemList
        ? updateMenu.mutate({ payload: finalPayload, menuId: menuItemList.id })
        : createMenu.mutate(finalPayload);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <button onClick={close} className="text-gray-400 hover:text-gray-600">
            ✕
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="itemName"
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

          <Controller
            name="categoryIds"
            control={control}
            render={({ field, fieldState }) => (
              <CustomMultiSelect
                {...field}
                value={
                  (Array.isArray(field.value) ? field.value : []) as string[]
                }
                options={allCategories}
                label="Categories"
                necessary
                status={fieldState.error ? "error" : ""}
                errorMessage={fieldState.error?.message}
              />
            )}
          />

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
                  options={[
                    { label: "Breakfast", value: "Breakfast" },
                    { label: "Lunch", value: "Lunch" },
                    { label: "Dinner", value: "Dinner" },
                  ]}
                  placeholder="Select Type"
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

          <Controller
            name="description"
            control={control}
            render={({ field, fieldState }) => (
              <CustomTextarea
                {...field}
                value={field?.value?.toString() ?? ""}
                label="Description"
                placeholder="Brief description"
                necessary
                rows={3}
                status={fieldState.error ? "error" : ""}
                errorMessage={fieldState.error?.message}
              />
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <Controller
              name="defaultStock"
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
            <Controller
              name="reorderThreshold"
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

          <div className="col-span-1 md:col-span-2">
            <FileUpload label="Upload Menu Image" onChange={setMealImageUrl} />
            {mealImageUrl ? (
              <p className="text-[11px] font-bold text-[#009688] mt-2 italic">
                Ready for upload: {mealImageUrl.name}
              </p>
            ) : (
              existingImageUrl && (
                <div className="mt-2">
                  <img
                    src={existingImageUrl}
                    className="w-36 h-36 object-cover rounded-md"
                  />
                </div>
              )
            )}
          </div>

          {/* PRICING TOGGLE LOGIC */}
          <div className="p-4 bg-gray-50 rounded-xl space-y-4 border border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-700">
                Does this item have portions?
              </span>
              <Controller
                name="hasPortions"
                control={control}
                render={({ field }) => (
                  <Switch checked={field.value} onChange={field.onChange} />
                )}
              />
            </div>

            {!hasPortions ? (
              <div className="space-y-4">
                <Controller
                  name="regularPrice"
                  control={control}
                  render={({ field, fieldState }) => (
                    <CustomInput
                      {...field}
                      value={field?.value?.toString() ?? ""}
                      label="Regular Price"
                      type="number"
                      status={fieldState.error ? "error" : ""}
                      errorMessage={fieldState.error?.message}
                    />
                  )}
                />
                <div className="grid grid-cols-2 gap-4">
                  <Controller
                    name="promoPrice"
                    control={control}
                    render={({ field, fieldState }) => (
                      <CustomInput
                        {...field}
                        value={field?.value?.toString() ?? ""}
                        label="Promo Price"
                        type="number"
                        status={fieldState.error ? "error" : ""}
                        errorMessage={fieldState.error?.message}
                      />
                    )}
                  />
                  <Controller
                    name="validDate"
                    control={control}
                    render={({ field, fieldState }) => (
                      <CustomInput
                        {...field}
                        value={field?.value?.toString() ?? ""}
                        label="Valid Until"
                        type="datetime-local"
                        status={fieldState.error ? "error" : ""}
                        errorMessage={fieldState.error?.message}
                      />
                    )}
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {fields.map((item, index) => (
                  <div
                    key={item.id}
                    className="relative p-3 bg-white border rounded-lg space-y-3"
                  >
                    <Controller
                      name={`prices.${index}.portionName`}
                      control={control}
                      render={({ field }) => (
                        <CustomInput
                          {...field}
                          value={field?.value?.toString() ?? ""}
                          label="Portion Name"
                          placeholder="e.g. Large"
                        />
                      )}
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <Controller
                        name={`prices.${index}.regularPrice`}
                        control={control}
                        render={({ field }) => (
                          <CustomInput
                            {...field}
                            value={field?.value?.toString() ?? ""}
                            label="Regular Price"
                            type="number"
                          />
                        )}
                      />
                      <Controller
                        name={`prices.${index}.promoPrice`}
                        control={control}
                        render={({ field }) => (
                          <CustomInput
                            {...field}
                            value={field?.value?.toString() ?? ""}
                            label="Promo Price"
                            type="number"
                          />
                        )}
                      />
                    </div>
                    <Controller
                      name={`prices.${index}.validDate`}
                      control={control}
                      render={({ field }) => (
                        <CustomInput
                          {...field}
                          value={field?.value?.toString() ?? ""}
                          label="Valid Date"
                          type="datetime-local"
                        />
                      )}
                    />
                    {fields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full"
                      >
                        <FaTrash size={10} />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() =>
                    append({
                      portionName: "",
                      regularPrice: "",
                      promoPrice: "",
                      validDate: "",
                    })
                  }
                  className="flex items-center gap-1 text-orange-500 text-sm font-bold"
                >
                  <FaPlusCircle /> Add Portion
                </button>
              </div>
            )}
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
