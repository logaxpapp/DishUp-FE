import React from "react";
import { ClipLoader } from "react-spinners";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  loading = false,
  children,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center gap-2";

  const variantStyles = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white shadow-lg",
    secondary: "bg-gray-800 hover:bg-gray-900 text-white",
    outline: "border-2 border-orange-500 text-orange-500 hover:bg-orange-50",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const spinnerColor = variant === "outline" ? "#f97316" : "#ffffff";

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${
        loading ? "opacity-70 cursor-not-allowed" : ""
      }`}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? <ClipLoader size={20} color={spinnerColor} /> : children}
    </button>
  );
};
