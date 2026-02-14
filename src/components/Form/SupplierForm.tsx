import { Controller, useForm } from "react-hook-form";
import CustomInput from "../FormElements/Input";
import CustomTextarea from "../FormElements/CustomTextarea";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../ui/Button";
import { ISupplier } from "@/models/supplier";
import {
  useCreateSupplierMutation,
  useUpdateSupplierMutation,
} from "@/hooks/useSupplierQuery";
import { supplierSchema } from "@/validations/supplier";

const MenuForm = ({
  close,
  supplier,
  title,
}: {
  close: () => void;
  supplier: ISupplier | null;
  title: string;
}) => {
  const createSupplier = useCreateSupplierMutation({ close });
  const updateSupplier = useUpdateSupplierMutation({ close });

  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      email: supplier?.email ?? "",
      phone: supplier?.phone ?? "",
      name: supplier?.name ?? "",
      address: supplier?.address,
    },
    resolver: yupResolver(supplierSchema),
  });

  const onSubmit = async (data: any) => {
    supplier
      ? updateSupplier.mutate({
          payload: data,
          supplierId: supplier.id,
        })
      : createSupplier.mutate(data);
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
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <CustomInput
                {...field}
                value={field?.value?.toString() ?? ""}
                label="Name"
                placeholder="e.g. Dangote group"
                necessary
                status={fieldState.error ? "error" : ""}
                errorMessage={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <CustomInput
                {...field}
                value={field?.value?.toString() ?? ""}
                label="Email"
                placeholder="e.g. xyz@gmail.com"
                necessary
                status={fieldState.error ? "error" : ""}
                errorMessage={fieldState.error?.message}
                type="email"
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field, fieldState }) => (
              <CustomInput
                {...field}
                value={field?.value?.toString() ?? ""}
                label="Phonenumber"
                placeholder="e.g. +2347067777777"
                necessary
                status={fieldState.error ? "error" : ""}
                errorMessage={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="address"
            control={control}
            render={({ field, fieldState }) => (
              <CustomTextarea
                {...field}
                value={field?.value?.toString() ?? ""}
                label="Address"
                placeholder="Type suppliers address"
                necessary
                rows={3}
                status={fieldState.error ? "error" : ""}
                errorMessage={fieldState.error?.message}
              />
            )}
          />

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
              disabled={createSupplier.isPending || updateSupplier?.isPending}
              loading={createSupplier.isPending || updateSupplier?.isPending}
            >
              {supplier ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MenuForm;
