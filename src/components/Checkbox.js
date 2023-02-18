import { useField } from "formik";
import React from "react";

const Checkbox = ({ name, className = "", label, wrapperClassName = "" }) => {
  const [{ onBlur, onChange, value }, { error, touched }] = useField(name);

  return (
    <div className={wrapperClassName}>
      <label className="relative flex items-start mt-2">
        <div className="flex items-center h-5">
          <input
            name={name}
            checked={value}
            onBlur={onBlur}
            onChange={onChange}
            type="checkbox"
            className={`form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer  ${className} ${
              error && touched ? "border-red-500" : ""
            }`}
          />
        </div>{" "}
        {label && (
          <div className="ml-2 text-sm leading-5">
            {label}
            {error && touched && (
              <div class="text-xs text-red-500 mt-1">{error}</div>
            )}
          </div>
        )}
      </label>
    </div>
  );
};
export default Checkbox;
