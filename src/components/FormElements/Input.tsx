import React, { useState } from "react";
import { Input, InputProps, Form } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

interface CustomInputProps extends InputProps {
  label?: string;
  placeholder?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  status?: "" | "error" | "warning";
  size?: "large" | "small" | "middle";
  type?: "number" | "text" | "email" | "date" | "password" | "datetime-local";
  variant?: "filled" | "outlined";
  className?: string;
  necessary?: boolean;
  value?: string;
  errorMessage?: string;
  footerNote?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  type = "text",
  prefix,
  suffix,
  status = "",
  size = "middle",
  className = "",
  necessary = false,
  value,
  errorMessage,
  footerNote,
  disabled,
  onChange,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  const inputStyle = {
    borderRadius: "8px",
    fontFamily: "Montserrat, sans-serif",
    height: "56px",
    overscrollBehavior: "contain",
  };

  const errorStyle = status === "error" ? { borderColor: "#ff4d4f" } : {};

  const passwordSuffix = isPassword ? (
    <span
      onClick={() => setShowPassword((prev) => !prev)}
      className="cursor-pointer text-gray-500"
    >
      {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
    </span>
  ) : (
    suffix
  );

  return (
    <Form.Item
      validateStatus={status}
      help={null}
      className="w-full"
      style={{ marginBottom: 0 }}
    >
      {label && (
        <div className="flex flex-row items-center gap-1 mb-1">
          <label className="block text-sm font-medium text-gray-700">
            {label}
          </label>
          {necessary && <span className="text-red-500">*</span>}
        </div>
      )}

      <Input
        type={isPassword ? (showPassword ? "text" : "password") : type}
        placeholder={placeholder}
        prefix={prefix}
        suffix={passwordSuffix}
        size={size}
        status={status}
        style={{ ...inputStyle, ...errorStyle }}
        className={className}
        value={value}
        onChange={onChange}
        readOnly={disabled}
        onWheel={(e) => {
          if (type === "number") {
            e.preventDefault();
            e.currentTarget.blur();
          }
        }}
        {...rest}
      />

      {status === "error" && (
        <p className="text-[11px] font-bold text-red-600 mt-1">
          {errorMessage}
        </p>
      )}

      {footerNote && (
        <p
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="font-[400] text-[10px] text-[#0D1821] mt-1"
        >
          {footerNote}
        </p>
      )}
    </Form.Item>
  );
};

export default CustomInput;
