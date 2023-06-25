"use client";
import Home from "@/components/Home/Home";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const page = () => {
  const pathname = usePathname();
  const buttonOptions = [
    {
      id: 1,
      option: "Lesson Planer",
      prompt: "This is Lesson Planer Prompt",
      link: `/generate-questions/teacher-tool/lesson-planer`,
    },
    {
      id: 2,
      option: "Project Ideas",
      prompt: "This is Project Ideas Prompt",
      link: `/generate-questions/teacher-tool/project-ideas`,
    },
    {
      id: 3,
      option: "Study Points",
      prompt: "This is Study Points Prompt",
      link: `/generate-questions/teacher-tool/study-points`,
    },
    {
      id: 4,
      option: "Group Creator",
      prompt: "This is Group Creator Prompt",
      link: `/generate-questions/teacher-tool/group-creator`,
    },
    {
      id: 5,
      option: "Seating Chart",
      prompt: "This is Group Creator Prompt",
      link: `/generate-questions/teacher-tool/seating-chart`,
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-7 gap-5 mt-5 bg-[#f9f9f9] rounded-2xl border border-[#eee]">
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
      <Home></Home>
    </div>
  );
};

export default page;
