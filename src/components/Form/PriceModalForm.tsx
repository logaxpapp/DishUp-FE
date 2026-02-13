import { priceSchema } from "@/validations/menu";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { FaRegTimesCircle, FaEdit, FaTrash } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import CustomInput from "../FormElements/Input";
import {
  useCreateMenuPriceMutation,
  useDeleteMenuPriceMutation,
  useUpdateMenuPriceMutation,
} from "@/hooks/useMenuQuery";
import { Button as BTN, Popconfirm, message } from "antd";
import { Button } from "../ui/Button";

const PriceModalForm = ({
  close,
  menuId,
  menuItemPrice,
  option,
}: {
  close: () => void;
  menuId: string;
  menuItemPrice: any;
  option: boolean;
}) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const createMenuPrice = useCreateMenuPriceMutation({ close });
  const updateMenuPrice = useUpdateMenuPriceMutation();
  const deleteMenuPrice = useDeleteMenuPriceMutation({ close });

  const defaultPrices =
    option && menuItemPrice?.prices
      ? menuItemPrice.prices.map((price: any) => ({
          id: price.id,
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
    resetField,
    getValues,
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

  const onSubmitBulk = (data: any) => {
    const formattedData = {
      prices: data.prices.map((price: any) => ({
        ...price,
        promoPrice: Number(price.promoPrice),
        regularPrice: Number(price.regularPrice),
        validDate: price.validDate ? `${price.validDate}:00Z` : null,
      })),
    };
    createMenuPrice.mutate({ payload: formattedData, menuId });
  };

  const handleSingleUpdate = (index: number) => {
    const row = getValues(`prices.${index}`);
    const menuPriceId = menuItemPrice?.prices[index]?.id;

    const payload = {
      ...row,
      promoPrice: Number(row?.promoPrice),
      regularPrice: Number(row?.regularPrice),
      validDate: row?.validDate ? `${row?.validDate}:00Z` : null,
    };
    updateMenuPrice.mutate(
      {
        payload,
        menuPriceId,
      },
      {
        onSuccess: () => setEditingIndex(null),
      },
    );
  };

  const handleCancelEdit = (index: number) => {
    const original = defaultPrices[index];
    resetField(`prices.${index}`, { defaultValue: original });
    setEditingIndex(null);
  };

  const handleDelete = async (index: number) => {
    if (option && menuItemPrice.prices[index]?.id) {
      const priceId = menuItemPrice.prices[index].id;
      return deleteMenuPrice
        .mutateAsync({
          menuPriceId: priceId,
        })
        .then(() => {
          remove(index);
        })
        .catch((err) => {
          console.error("Delete failed:", err);
        });
    } else {
      remove(index);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full h-[90vh] flex flex-col shadow-xl">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold text-gray-900">
            {option ? "Manage Pricing" : "Add New Pricing"}
          </h2>
          <button onClick={close} className="text-gray-400 hover:text-gray-600">
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
          {fields.map((item, index) => {
            const isEditingThis = editingIndex === index;
            const isDisabled = option && !isEditingThis;

            return (
              <div
                key={item.id}
                className={`relative border p-4 rounded-lg transition-all duration-200 ${
                  isEditingThis
                    ? "border-orange-500 ring-2 ring-orange-500/20 bg-orange-50/10"
                    : "border-gray-200"
                }`}
              >
                {option ? (
                  <div className="absolute top-[-10] right-[-5] flex gap-2 z-30">
                    <div className="absolute -top-3 -right-3 z-30">
                      <Popconfirm
                        title="Delete this price?"
                        onConfirm={() => handleDelete(index)}
                        okText="Yes"
                        cancelText="No"
                        okButtonProps={{
                          loading: deleteMenuPrice.isPending,
                          danger: true,
                        }}
                      >
                        <button
                          type="button"
                          className="flex items-center justify-center w-8 h-8 rounded-full bg-red-50 hover:bg-red-100 border border-red-100 shadow-sm transition-colors text-red-500"
                        >
                          <FaTrash size={14} />
                        </button>
                      </Popconfirm>
                    </div>
                  </div>
                ) : (
                  fields.length > 1 && (
                    <div
                      className="absolute -top-2 -right-2 flex items-center justify-center bg-red-500 hover:bg-red-600 p-1.5 rounded-full z-30 cursor-pointer shadow-md transition-transform hover:scale-110"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        remove(index);
                      }}
                    >
                      <FaRegTimesCircle size={18} className="text-white" />
                    </div>
                  )
                )}

                <div
                  className={isDisabled ? "opacity-50 pointer-events-none" : ""}
                >
                  <div className="space-y-4">
                    <Controller
                      name={`prices.${index}.portionName`}
                      control={control}
                      render={({ field, fieldState }) => (
                        <CustomInput
                          {...field}
                          label="Portion Name"
                          placeholder="e.g. Large"
                          status={fieldState.error ? "error" : ""}
                          errorMessage={fieldState.error?.message}
                        />
                      )}
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <Controller
                        name={`prices.${index}.regularPrice`}
                        control={control}
                        render={({ field, fieldState }) => (
                          <CustomInput
                            {...field}
                            label="Regular Price"
                            type="number"
                            status={fieldState.error ? "error" : ""}
                            errorMessage={fieldState.error?.message}
                          />
                        )}
                      />
                      <Controller
                        name={`prices.${index}.promoPrice`}
                        control={control}
                        render={({ field, fieldState }) => (
                          <CustomInput
                            {...field}
                            label="Promo Price"
                            type="number"
                            status={fieldState.error ? "error" : ""}
                            errorMessage={fieldState.error?.message}
                          />
                        )}
                      />
                    </div>

                    <Controller
                      name={`prices.${index}.validDate`}
                      control={control}
                      render={({ field, fieldState }) => (
                        <CustomInput
                          {...field}
                          label="Valid Date"
                          type="datetime-local"
                          status={fieldState.error ? "error" : ""}
                          errorMessage={fieldState.error?.message}
                        />
                      )}
                    />
                  </div>
                </div>

                {option && (
                  <div className="mt-4 pt-4 border-t border-dashed flex justify-end gap-2">
                    {!isEditingThis ? (
                      <BTN
                        type="dashed"
                        icon={<FaEdit />}
                        onClick={() => setEditingIndex(index)}
                      >
                        Modify Price
                      </BTN>
                    ) : (
                      <>
                        <BTN danger onClick={() => handleCancelEdit(index)}>
                          Cancel
                        </BTN>
                        <BTN
                          type="primary"
                          className="bg-orange-500 hover:bg-orange-600"
                          onClick={() => handleSingleUpdate(index)}
                          loading={updateMenuPrice.isPending}
                          disabled={updateMenuPrice.isPending}
                        >
                          Set Price
                        </BTN>
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {!option && (
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
                className="w-full flex items-center justify-center gap-2 py-5 border-dashed"
              >
                Add Another Portion
              </BTN>
            </div>
          )}
        </div>

        <div className="flex gap-3 p-6 border-t bg-gray-50 rounded-b-2xl">
          <button
            type="button"
            onClick={close}
            className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition-colors"
          >
            Close
          </button>

          {!option && (
            <Button
              onClick={handleSubmit(onSubmitBulk)}
              variant="primary"
              className="flex-1 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600"
              disabled={createMenuPrice.isPending}
              loading={createMenuPrice.isPending}
            >
              Save All
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PriceModalForm;
