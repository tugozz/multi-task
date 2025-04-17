import React from "react";

export const Input = ({
  type,
  placeholder,
  errorMessage,
  label,
  onChange,
  value,
  name,
}) => {
  return (
    <div>
      <label className="text-[12px] font-bold text-error">
        {label}
        <span className="text-red-600">*</span>
      </label>
      <div>
        <input
          name={name}
          onChange={onChange}
          type={type}
          value={value}
          placeholder={placeholder}
          className="pl-1.5 w-[416] h-12  border-gray-300 text-[15px] border rounded-[5px]  "
        />
        {errorMessage && (
          <p className="text-red-600 text-[13px] m-[3px]">{errorMessage} </p>
        )}
      </div>
    </div>
  );
};
