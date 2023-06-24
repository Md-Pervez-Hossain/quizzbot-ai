import React from "react";
const buttonOptions = [
  "True/false",
  "Multiple Questions",
  "Short Answers",
  "Blanks",
  "Matching",
  "Calculations",
  "Teacher Tool",
];
const Options = () => {
  return (
    <div className="mt-5 bg-[#f9f9f9] rounded-2xl border border-gray-300">
      <div className="grid grid-cols-7 gap-5">
        {buttonOptions.map((option, index) => (
          <div
            key={index}
            className="hover:border-b-2 hover:border-b-gradient-color-62 hover:text-gradient-color-62 text-[#626262] font-semibold mx-2 py-5 cursor-pointer text-center flex items-center justify-center hover:bg-transparent hover:transition duration-300 ease-in-out relative text-sm"
            style={{ height: "70px" }}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Options;
