import React from "react";

const DropdownOptions = ({ label, name, options }) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="text-sm">
        {label}
      </label>
      <select
        name={name}
        id={name}
        required
        className="px-3 py-2 w-full rounded-2xl border-2 border-[#eee] mt-2"
      >
        {options?.map((option) => (
          <option key={option} value={option} className="rounded-2xl  ">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownOptions;
