"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/logo.png";
import { FaRegCommentDots } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { LuLogOut } from "react-icons/lu";
import { FiHome } from "react-icons/fi";
import { BsReverseLayoutSidebarReverse, BsSave } from "react-icons/bs";
import { AiOutlineGift, AiOutlineFileText } from "react-icons/ai";

const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname);
  const header = [
    {
      id: 1,
      name: "Generate Questions",
      link: `/generate-questions`,
    },

    {
      id: 2,
      name: "Saved Questions",
      link: "/saved-questions",
    },
  ];
  const AccountSettings = [
    {
      id: 1,
      name: "Membership",
      link: "/membership",
    },
    {
      id: 2,
      name: "Transaction",
      link: "/transaction",
    },
  ];
  return (
    <div className="sticky top-20 z-50">
      <div className=" mt-5">
        <div className="">
          <div className="">
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                width={150}
                height={150}
                className="mb-8 "
              ></Image>
            </Link>
          </div>
          <div className="mt-5">
            <Link href="/dashboard">
              <div className="flex items-center gap-2  font-normal">
                <RxDashboard className="text-[20px]"></RxDashboard>
                <span>Dashboard</span>
              </div>
            </Link>
          </div>
          <div className="flex flex-col justify-between ">
            <div>
              <h2 className=" font-bold mt-10 mb-5  ">Ai Content</h2>
              {header?.map((header) => {
                return (
                  <Link
                    href={`${header.link} `}
                    className={` ${
                      pathname === header.link
                        ? ` bg-transparent bg-clip-text font-semibold  text-[#FC495F] `
                        : ""
                    } flex items-center gap-3 mb-5 `}
                    key={header.id}
                  >
                    {header.name === "Generate Questions" ? (
                      <>
                        <div className="flex items-center gap-3 justify-center font-normal">
                          <FiHome className="text-[20px]"></FiHome>{" "}
                          <span>{header.name}</span>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                    {header.name === "About" ? (
                      <>
                        <div className="flex items-center gap-3 justify-center font-normal">
                          <BsReverseLayoutSidebarReverse className="text-[20px]"></BsReverseLayoutSidebarReverse>{" "}
                          {header.name}
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                    {header.name === "Saved Questions" ? (
                      <>
                        <div className="flex items-center gap-3 justify-center font-normal">
                          <BsSave className="text-[20px]"></BsSave>{" "}
                          {header.name}
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                    {header.name === "Contact" ? (
                      <>
                        <div className="flex items-center gap-3 justify-center font-normal">
                          <FaRegCommentDots className="text-[20px]"></FaRegCommentDots>{" "}
                          {header.name}
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </Link>
                );
              })}
            </div>
            <div>
              <h2 className=" font-bold mb-5 mt-16  ">Account Settings</h2>
              {AccountSettings.map((item) => {
                return (
                  <Link
                    href={`${item.link} `}
                    className={` ${
                      pathname === item.link
                        ? `  font-semibold  text-[#FC495F] `
                        : ""
                    } flex items-center gap-3 mb-5 `}
                    key={item.id}
                  >
                    {item.name === "Membership" ? (
                      <>
                        <div className="flex items-center gap-3 justify-center font-normal">
                          <AiOutlineGift className="text-[20px]"></AiOutlineGift>{" "}
                          {item.name}
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                    {item.name === "Transaction" ? (
                      <>
                        <div className="flex items-center gap-3 justify-center font-normal">
                          <AiOutlineFileText className="text-[20px]"></AiOutlineFileText>{" "}
                          {item.name}
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </Link>
                );
              })}
              <div className="flex items-center gap-3 cursor-pointer">
                <LuLogOut className="text-[20px]"></LuLogOut>{" "}
                <span>Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
