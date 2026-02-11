import React from "react";
import { Input, InputProps, Form } from "antd";

const { TextArea } = Input;

import { TextAreaProps } from "antd/es/input";

interface CustomTextareaProps extends Omit<
  TextAreaProps,
  "onChange"
> {
  label?: string;
  placeholder?: string;
  status?: "" | "error" | "warning";
  size?: "large" | "small" | "middle";
  className?: string;
  necessary?: boolean;
  value?: string;
  errorMessage?: string;
  footerNote?: string;
  disabled?: boolean;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const CustomTextarea: React.FC<CustomTextareaProps> = ({
  label,
  placeholder,
  status = "",
  size = "middle",
  className = "",
  necessary = false,
  value,
  errorMessage,
  footerNote,
  disabled,
  rows = 4,
  onChange,
  ...rest
}) => {
  const textareaStyle = {
    borderRadius: "8px",
    fontFamily: "Montserrat, sans-serif",
  };

  const errorStyle = status === "error" ? { borderColor: "#ff4d4f" } : {};

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

      <TextArea
        placeholder={placeholder}
        rows={rows}
        size={size}
        status={status}
        style={{ ...textareaStyle, ...errorStyle }}
        className={className}
        value={value}
        onChange={onChange}
        readOnly={disabled}
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

export default CustomTextarea;
