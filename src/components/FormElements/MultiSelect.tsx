import React from "react";
import { Select, Form, Tag } from "antd";

const { Option } = Select;

interface OptionType {
  value: string;
  text: string;
}

interface CustomMultiSelectProps {
  id?: string;
  label?: string;
  options: OptionType[];
  value?: string[];
  onChange?: (values: string[]) => void;
  placeholder?: string;
  status?: "" | "error" | "warning";
  necessary?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  footerNote?: string;
}

const CustomMultiSelect: React.FC<CustomMultiSelectProps> = ({
  id,
  label,
  options,
  value = [],
  onChange,
  placeholder = "Select options",
  status = "",
  necessary = false,
  errorMessage,
  disabled,
  footerNote,
}) => {
  // CUSTOM TAG STYLING
  const tagRender = (props: any) => {
    const { label, closable, onClose } = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{
          marginRight: 4,
          borderRadius: "6px",
          padding: "0 10px", // Reduced vertical padding as the container centers it
          display: "flex",
          alignItems: "center",
          fontWeight: 600,
          fontSize: "12px",
          border: "none",
          backgroundColor: "#FFF7ED",
          color: "#EA580C",
          height: "32px", // Fixed height for tags to look consistent
          marginTop: "2px", // Slight offset to clear the top border
        }}
      >
        {label}
      </Tag>
    );
  };

  return (
    <Form.Item
      validateStatus={status}
      help={null}
      className="w-full"
      style={{ marginBottom: 0 }}
    >
      {label && (
        <div className="flex flex-row items-center gap-1 mb-1.5">
          <label className="block text-sm font-semibold text-gray-800">
            {label}
          </label>
          {necessary && <span className="text-red-500">*</span>}
        </div>
      )}

      <Select
        id={id}
        mode="multiple"
        allowClear
        showSearch
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        status={status}
        className="custom-select w-full"
        style={{
          width: "100%",
          padding: 10,
        }}
        dropdownStyle={{ borderRadius: "8px" }}
        tagRender={tagRender}
        optionFilterProp="children"
        maxTagCount="responsive"
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            <span className="text-sm font-medium">{option.text}</span>
          </Option>
        ))}
      </Select>

      {status === "error" && (
        <p className="text-[11px] font-bold text-red-600 mt-1.5 ml-1">
          {errorMessage}
        </p>
      )}

      {footerNote && (
        <p className="font-[400] text-[10px] text-gray-500 mt-1">
          {footerNote}
        </p>
      )}

      <style jsx global>{`
        /* 1. Set the height of the main container */
        .custom-select .ant-select-selector {
          min-height: 56px !important;
          padding: 4px 12px !important;
          border-radius: 10px !important;
          border: 1px solid #d1d5db !important;
          display: flex !important;
          align-items: center !important; /* This centers the content vertically */
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05) !important;
        }

        /* 2. Center the placeholder text */
        .custom-select .ant-select-selection-placeholder {
          line-height: 46px !important; /* Adjusted to sit centered in a 56px box */
          inset-inline-start: 12px !important;
        }

        /* 3. Adjust the search input and selected items area */
        .custom-select .ant-select-selection-overflow {
          display: flex !important;
          align-items: center !important;
          min-height: 46px !important;
        }

        /* 4. Focus state */
        .custom-select.ant-select-focused .ant-select-selector {
          border-color: #f97316 !important;
          box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.1) !important;
        }

        /* 5. Clear button and Arrow alignment */
        .custom-select .ant-select-arrow,
        .custom-select .ant-select-clear {
          top: 50% !important;
          transform: translateY(-50%) !important;
        }
      `}</style>
    </Form.Item>
  );
};

export default CustomMultiSelect;
