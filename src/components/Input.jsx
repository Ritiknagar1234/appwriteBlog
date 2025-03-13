import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="inline-block mb-1 pl-1 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        ref={ref}
        className={`px-4 py-2 rounded-md bg-white text-gray-900 border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none focus:border-primary transition-all duration-200 w-full shadow-sm ${className}`}
        {...props}
      />
    </div>
  );
});

export default Input;
