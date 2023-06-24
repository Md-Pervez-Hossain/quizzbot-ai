import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// className={`hover:border-b-2 hover:border-b-gradient-color-62 hover:text-gradient-color-62 text-[#626262] font-semibold mx-2 py-5 cursor-pointer text-center flex items-center justify-center hover:bg-transparent hover:transition duration-300 ease-in-out relative text-sm`}
const Options = () => {
  const pathname = usePathname();
  console.log(pathname);
  const buttonOptions = [
    {
      id: 1,
      option: "True/false",
      prompt: "This is True/ False Prompt",
      link: `/generate-questions/true-false`,
    },
    {
      id: 2,
      option: "Multiple Questions",
      prompt: "This is Multiple Questions Prompt",
      link: "/generate-questions/multiple-questions",
    },
    {
      id: 3,
      option: "Short Answers",
      prompt: "This is Short Answers Prompt",
      link: "/generate-questions/short-answers",
    },
    {
      id: 4,
      option: "Blanks",
      prompt: "This is Blanks Prompt",
      link: "/generate-questions/blanks",
    },
    {
      id: 5,
      option: "Matching",
      prompt: "This is Matching Prompt",
      link: "/generate-questions/matching",
    },
    {
      id: 6,
      option: "Calculations",
      prompt: "This is Calculations Prompt",
      link: "/generate-questions/calculations",
    },
    {
      id: 7,
      option: "Teacher Tool",
      prompt: "This is Teacher Tool Prompt",
      link: "/generate-questions/teacher-tool",
    },
  ];
  return (
    <div className="mt-5 bg-[#f9f9f9] rounded-2xl border border-[#eee]">
      <div className="grid grid-cols-7 gap-5">
        {buttonOptions?.map((buttonOption) => (
          <Link
            href={buttonOption.link}
            key={buttonOption.id}
            className={` ${
              pathname === buttonOption.link
                ? `border-b-2 border-b-gradient-color-62 hover:text-gradient-color-62 bg-transparent bg-clip-text font-bold  text-[#FC495F] `
                : ""
            } hover:border-b-2 hover:border-b-gradient-color-62 hover:text-gradient-color-62 text-[#626262] font-semibold mx-2 py-5 cursor-pointer text-center flex items-center justify-center hover:bg-transparent hover:transition duration-300 ease-in-out relative text-sm `}
            style={{ height: "70px" }}
          >
            {buttonOption.option}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Options;
