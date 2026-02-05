"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { businessDetailsSchema } from "@/validations/profile";
import { FileUpload } from "@/components/ui/FileUpload";
import { Button } from "@/components/ui/Button";
import { Select } from "antd";
import { useMemo, useState } from "react";
import {
  useGetAllBanksQuery,
  useGetAllCountryQuery,
  useGetAllStatesQuery,
} from "@/hooks/useBaseQuery";
import CustomInput from "@/components/FormElements/Input";
import { uploadRequest } from "@/utils/Providers";
import { API_ENDPOINTS } from "@/constants/api";

export default function BusinessDetailsPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(businessDetailsSchema),
  });
  const [selectedState, setSelectedState] = useState<string>("");
  const [licenseFile, setLicenseFile] = useState<File | null>(null);
  const [licenseError, setLicenseError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { data: allBanks } = useGetAllBanksQuery();
  const { data: countries } = useGetAllCountryQuery();
  const { data: states } = useGetAllStatesQuery(selectedState);

  const banks = useMemo(
    () => allBanks?.map((b) => ({ label: b?.name, value: b?.code })) || [],
    [allBanks],
  );
  const countryData = useMemo(
    () => countries?.map((b) => ({ label: b?.name, value: b?.code2 })) || [],
    [countries],
  );
  const stateData = useMemo(
    () => states?.map((b) => ({ label: b?.name, value: b?.id })) || [],
    [states],
  );
  const onSubmit = async (data: any) => {
    setLicenseError("");

    if (!licenseFile) {
      setLicenseError("Business license is required.");
      return;
    }

    try {
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append("file", licenseFile);

      const uploadRes = await uploadRequest.post(
        API_ENDPOINTS.FILE.UPLOAD_FILE,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );

      const uploadedUrl = uploadRes?.data?.data?.url;

      const finalPayload = {
        ...data,
        businessLiscenseUrl: uploadedUrl,
      };

      console.log("FINAL SUBMISSION DATA 👉", finalPayload);

      // C. Call your final profile completion API here...
      // await completeProfile(finalPayload);
    } catch (error) {
      console.error("Submission failed", error);
      setLicenseError("Failed to upload image. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:block relative h-full w-full">
        <Image
          src="/chef-pizza.png"
          alt="Business onboarding"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-16 text-white">
          <Link href="/" className="absolute top-6 left-16">
            <Image src="/logo.png" alt="Logo" width={180} height={54} />
          </Link>

          <h1 className="text-4xl font-bold mb-4">
            Tell Us About Your Business
          </h1>

          <p className="text-lg max-w-md">
            Provide accurate details to help us verify and onboard your business
            faster.
          </p>
        </div>
      </div>

      <div className="h-full overflow-y-auto bg-white px-8 lg:px-16 py-12">
        <div className="max-w-3xl mx-auto">
          <div className=" bg-white z-10 pb-4 mb-8">
            <h2 className="text-3xl font-bold">Business Details</h2>
            <p className="text-muted-foreground">
              Fill in your business information below
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <Controller
              name="businessName"
              control={control}
              render={({ field, fieldState }) => (
                <CustomInput
                  {...field}
                  value={field?.value?.toString() ?? ""}
                  label="Zip Code"
                  placeholder="Enter your busness name"
                  necessary
                  status={fieldState.error ? "error" : ""}
                  errorMessage={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="taxId"
              control={control}
              render={({ field, fieldState }) => (
                <CustomInput
                  {...field}
                  value={field?.value?.toString() ?? ""}
                  label="Tax ID"
                  type="number"
                  placeholder="Enter your taxID"
                  necessary
                  status={fieldState.error ? "error" : ""}
                  errorMessage={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="countryCode"
              control={control}
              render={({ field, fieldState }) => (
                <div>
                  <label className="text-[#0D1821] text-[14px] font-medium">
                    Country
                  </label>
                  <Select
                    {...field}
                    value={field.value?.toString() ?? ""}
                    onChange={(value) => {
                      setSelectedState(value);
                      field.onChange(value);
                    }}
                    options={countryData}
                    placeholder="Select country"
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

            <Controller
              name="stateId"
              control={control}
              render={({ field, fieldState }) => (
                <div>
                  <label className="text-[#0D1821] text-[12px] font-medium">
                    State
                  </label>

                  <Select
                    {...field}
                    value={field.value?.toString() ?? ""}
                    onChange={(value) => field.onChange(value)}
                    options={stateData || []}
                    placeholder="Select state"
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

            <Controller
              name="city"
              control={control}
              render={({ field, fieldState }) => (
                <CustomInput
                  {...field}
                  value={field?.value?.toString() ?? ""}
                  label="City"
                  placeholder="Enter your city"
                  necessary
                  status={fieldState.error ? "error" : ""}
                  errorMessage={fieldState.error?.message}
                />
              )}
            />

            <Controller
              name="zipCode"
              control={control}
              render={({ field, fieldState }) => (
                <CustomInput
                  {...field}
                  value={field?.value?.toString() ?? ""}
                  label="Zip Code"
                  placeholder="Enter your zip code"
                  necessary
                  status={fieldState.error ? "error" : ""}
                  errorMessage={fieldState.error?.message}
                  type="number"
                />
              )}
            />

            <Controller
              name="registrationNumber"
              control={control}
              render={({ field, fieldState }) => (
                <CustomInput
                  {...field}
                  value={field?.value?.toString() ?? ""}
                  label="Registration Number"
                  placeholder="Enter your registration number"
                  necessary
                  status={fieldState.error ? "error" : ""}
                  errorMessage={fieldState.error?.message}
                />
              )}
            />

            <Controller
              name="bankName"
              control={control}
              render={({ field, fieldState }) => (
                <div>
                  <label className="text-[#0D1821] text-[14px] font-medium">
                    Bank Name
                  </label>
                  <Select
                    {...field}
                    value={field.value?.toString() ?? ""}
                    onChange={(value) => field.onChange(value)}
                    options={banks || []}
                    placeholder="Select bank"
                    style={{ width: "100%", height: "54px", marginTop: "2px" }}
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

            <Controller
              name="accountNumber"
              control={control}
              render={({ field, fieldState }) => (
                <CustomInput
                  {...field}
                  value={field?.value?.toString() ?? ""}
                  label="Account Number"
                  placeholder="Enter your account number"
                  necessary
                  status={fieldState.error ? "error" : ""}
                  errorMessage={fieldState.error?.message}
                  type="number"
                />
              )}
            />

            <Controller
              name="holderName"
              control={control}
              render={({ field, fieldState }) => (
                <CustomInput
                  {...field}
                  value={field?.value?.toString() ?? ""}
                  label="Account Holder Name"
                  placeholder="Enter your account holder name"
                  necessary
                  status={fieldState.error ? "error" : ""}
                  errorMessage={fieldState.error?.message}
                />
              )}
            />

            <Controller
              name="routingNumber"
              control={control}
              render={({ field, fieldState }) => (
                <CustomInput
                  {...field}
                  value={field?.value?.toString() ?? ""}
                  label="Routing number"
                  placeholder="Enter your routing number"
                  necessary
                  status={fieldState.error ? "error" : ""}
                  errorMessage={fieldState.error?.message}
                  type="number"
                />
              )}
            />

            <Controller
              name="swiftCode"
              control={control}
              render={({ field, fieldState }) => (
                <CustomInput
                  {...field}
                  value={field?.value?.toString() ?? ""}
                  label="Swift code "
                  placeholder="Enter your swift code"
                  necessary
                  status={fieldState.error ? "error" : ""}
                  errorMessage={fieldState.error?.message}
                  type="number"
                />
              )}
            />

            <div className="col-span-1 md:col-span-2">
              <label className="text-[#0D1821] text-[14px] font-medium block mb-2">
                Business License <span className="text-red-500">*</span>
              </label>

              <FileUpload
                label="Select Business License"
                onChange={(file) => {
                  setLicenseFile(file);
                  if (file) setLicenseError("");
                }}
              />

              {licenseError && (
                <p className="text-[11px] font-bold text-red-600 mt-2 italic">
                  {licenseError}
                </p>
              )}

              {licenseFile && (
                <p className="text-[11px] font-bold text-[#009688] mt-2 italic">
                  Ready for upload: {licenseFile.name}
                </p>
              )}
            </div>

            <div className="col-span-1 md:col-span-2 mt-4">
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Uploading & Saving..." : "Continue"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
