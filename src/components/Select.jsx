import React, { useId } from "react";

const Select = React.forwardRef(function Select(
  { options = [], label, className = "", ...props },
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
      <select
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-md bg-white text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 w-full ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;
