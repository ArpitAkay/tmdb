import React from "react";

const Button = ({
  type,
  disabled,
  children,
}: {
  type: "submit" | "reset" | "button";
  disabled: boolean;
  children: React.ReactNode;
}) => {
  return (
    <button
      type={type}
      className={`text-white p-2 rounded-sm ${
        disabled ? "bg-gray-400 cursor-not-allowed" : "bg-slate-800"
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
