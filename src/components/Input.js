import { useField } from "formik";
import React from "react";

const Input = ({
  name,
  type = "text",
  placeholder = "",
  className = "",
  autoComplete,
  label,
  wrapperClassName = "",
}) => {
  const [{ onBlur, onChange, value }, { error, touched }] = useField(name);

  return (
    <div className={wrapperClassName}>
      {label && (
        <label
          for={name}
          class="block text-sm font-medium leading-5 mb-1 text-gray-700"
        >
          {label}
        </label>
      )}

      <input
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        type={type}
        value={value}
        name={name}
        autoComplete={autoComplete}
        className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${className} ${
          error && touched ? "border-red-500" : ""
        }`}
      />
      {error && touched && <div class="text-xs text-red-500 mt-1">{error}</div>}
    </div>
  );
};
export default Input;
