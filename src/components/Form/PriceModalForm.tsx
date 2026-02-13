import { priceSchema } from "@/validations/menu";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { FaRegTimesCircle } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import CustomInput from "../FormElements/Input";
import {
  useCreateMenuPriceMutation,
  useUpdateMenuPriceMutation,
} from "@/hooks/useMenuQuery";
import { Button as BTN } from "antd";
import { Button } from "../ui/Button";

const PriceModalForm = ({
  close,
  menuId,
  menuItemPrice,
  option,
}: {
  close: () => void;
  menuId: string;
  menuItemPrice;
  option: boolean;
}) => {
  const createMenuPrice = useCreateMenuPriceMutation({ close });
  const updateMenuPrice = useUpdateMenuPriceMutation({ close });

  const defaultPrices =
    option === true
      ? menuItemPrice.prices.map((price) => ({
          portionName: price.portionName ?? "",
          promoPrice: price.promoPrice ?? "",
          regularPrice: price.regularPrice ?? "",
          validDate: price.validDate ? price.validDate.substring(0, 16) : "",
        }))
      : [
          {
            portionName: "",
            promoPrice: "",
            regularPrice: "",
            validDate: "",
          },
        ];
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(priceSchema),
    defaultValues: {
      prices: defaultPrices,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "prices",
  });

  const onSubmit = (data: any) => {
    const formattedData = {
      prices: data.prices.map((price) => {
        let dateTime = price.validDate;
        if (dateTime && dateTime.length === 16) {
          dateTime = dateTime + ":00Z";
        }

        return {
          ...price,
          promoPrice: Number(price.promoPrice),
          regularPrice: Number(price.regularPrice),
          validDate: dateTime,
        };
      }),
    };

    option
      ? createMenuPrice.mutate({
          payload: formattedData,
          menuId,
        })
      : updateMenuPrice.mutate({
          payload: formattedData,
          // menuPriceId,
        });
  };

  console.log(menuItemPrice);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full h-[80vh] flex flex-col">
        {/* HEADER */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold text-gray-900">
            {option ? "Edit Price" : " Add Price"}
          </h2>
          <button onClick={close} className="text-gray-400 hover:text-gray-600">
            ✕
          </button>
        </div>

        {/* SCROLLABLE BODY */}
        <form
          className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
          onSubmit={handleSubmit(onSubmit)}
        >
          {fields.map((item, index) => (
            <div
              key={item.id}
              className="relative border p-4 rounded-lg space-y-4"
            >
              {fields.length > 1 && (
                <div
                  className="absolute top-3 right-3 cursor-pointer text-red-500 hover:text-red-700"
                  onClick={() => remove(index)}
                >
                  <FaRegTimesCircle size={18} />
                </div>
              )}

              <div>
                <Controller
                  name={`prices.${index}.portionName` as const}
                  control={control}
                  render={({ field, fieldState }) => (
                    <CustomInput
                      {...field}
                      value={field?.value?.toString() ?? ""}
                      label="Portion Name"
                      placeholder="e.g. Large"
                      necessary
                      status={fieldState.error ? "error" : ""}
                      errorMessage={fieldState.error?.message}
                    />
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Controller
                  name={`prices.${index}.regularPrice` as const}
                  control={control}
                  render={({ field, fieldState }) => (
                    <CustomInput
                      {...field}
                      value={field?.value?.toString() ?? ""}
                      label="Regular Price"
                      placeholder="e.g. $3.00"
                      necessary
                      status={fieldState.error ? "error" : ""}
                      errorMessage={fieldState.error?.message}
                      type="number"
                    />
                  )}
                />
                <Controller
                  name={`prices.${index}.promoPrice` as const}
                  control={control}
                  render={({ field, fieldState }) => (
                    <CustomInput
                      {...field}
                      value={field?.value?.toString() ?? ""}
                      label="Promo Price"
                      placeholder="e.g. $2.50"
                      necessary
                      status={fieldState.error ? "error" : ""}
                      errorMessage={fieldState.error?.message}
                      type="number"
                    />
                  )}
                />
              </div>

              <div>
                <Controller
                  name={`prices.${index}.validDate` as const}
                  control={control}
                  render={({ field, fieldState }) => (
                    <CustomInput
                      {...field}
                      value={field?.value?.toString() ?? ""}
                      label=" Valid Date"
                      // placeholder="e.g. $2.50"
                      necessary
                      status={fieldState.error ? "error" : ""}
                      errorMessage={fieldState.error?.message}
                      type="datetime-local"
                    />
                  )}
                />
              </div>
            </div>
          ))}

          {!menuItemPrice && (
            <div className="flex justify-center">
              <BTN
                icon={<IoIosAddCircle size={20} />}
                onClick={() =>
                  append({
                    portionName: "",
                    regularPrice: "",
                    promoPrice: "",
                    validDate: "",
                  })
                }
                className="w-40 flex items-center justify-center gap-2 py-3"
              >
                Add
              </BTN>
            </div>
          )}
          <div className="flex gap-3 p-6 border-t">
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
              className="flex-1   bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600"
              disabled={createMenuPrice.isPending}
              loading={createMenuPrice.isPending}
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PriceModalForm;
