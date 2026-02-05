/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from "react";
import { Button, Select, Input } from "antd";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";

interface Option {
  value: string;
  label: string;
}

interface Props {
  value: string | number;
  onChange: (value: string | number) => void;
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
  label?: string;
  placeholder?: string;
  options: Option[];
  loading?: boolean;
  validationError?: string;
  height?: string;
  showSearch?: boolean;
  canAdd?: boolean;
  category?: string;
  onAddNewOption?: () => void;
  neccessary?: boolean;
  onAddNoData?: () => void;
  showInput?: boolean;
  size?: "large" | "middle" | "small";
  status?: "" | "error" | "warning";
  errorMessage?: string;
  disabled?: boolean;
}

const CustomSelect: React.FC<Props> = ({
  value,
  onChange,
  onBlur,
  label,
  showSearch = false,
  options,
  disabled = false,
  loading,
  neccessary,
  validationError,
  placeholder = "Select an option",
  canAdd = false,
  showInput = true,
  category,
  onAddNoData,
  onAddNewOption,
  status,
  errorMessage,
  size = "middle",
}) => {
  const [searchText, setSearchText] = useState("");
  const searchRef = useRef<any>(null);

  const handleDropdownVisibleChange = (open: boolean) => {
    if (open) {
      setTimeout(() => {
        if (searchRef.current) {
          searchRef.current.focus();
        }
      }, 0);
    }
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-row mt-1">
        <label
          htmlFor=""
          className="text-[#0D1821] text-[12px]"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          {label}
        </label>
        <span> {neccessary && <h3 className="text-red-400">*</h3>}</span>
      </div>

      <Select
        className="w-full "
        onChange={onChange}
        disabled={disabled}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        showSearch={showSearch}
        suffixIcon={<DownOutlined size={16} />}
        options={filteredOptions}
        loading={loading}
        size={size}
        style={{
          fontFamily: "Montserrat, sans-serif",
          border: "none",
          height: 54,
        }}
        popupRender={(menu) => (
          <>
            {showInput && (
              <Input
                ref={searchRef}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search..."
                style={{
                  width: "100%",
                  marginBottom: 10,
                  fontFamily: "Montserrat, sans-serif",
                }}
                suffix={<SearchOutlined />}
              />
            )}
            {filteredOptions.length === 0 ? (
              <div style={{ padding: "10px", color: "gray" }}>
                <h3
                  className="text-center text-[#868B90] font-[400] text-[12px]"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {"No results match" + " " + `"${searchText}"`}
                </h3>
              </div>
            ) : (
              menu
            )}
            {canAdd && filteredOptions.length !== 0 && (
              <div style={{ textAlign: "left" }}>
                <Button
                  type="link"
                  onClick={onAddNewOption}
                  className="text-[12px] text-[#2D7DEE]"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    padding: 2,
                    marginLeft: 4,
                  }}
                >
                  + Add new {category}
                </Button>
              </div>
            )}
            {filteredOptions.length === 0 && canAdd && (
              <div style={{ textAlign: "left" }}>
                <Button
                  type="link"
                  onClick={onAddNoData}
                  className="text-[12px] text-[#2D7DEE]"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    padding: 0,
                    marginLeft: 4,
                  }}
                >
                  + Add {searchText} as new {category}
                </Button>
              </div>
            )}
          </>
        )}
        onOpenChange={handleDropdownVisibleChange}
      />
      {status === "error" && errorMessage && (
        <p
          className="text-[11px] text-red-600 mt-1 font-bold"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          {errorMessage}
        </p>
      )}

      {validationError && (
        <p
          className="text-[11px] text-red-600 mt-1 font-bold"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          {validationError}
        </p>
      )}
    </div>
  );
};

export default CustomSelect;
