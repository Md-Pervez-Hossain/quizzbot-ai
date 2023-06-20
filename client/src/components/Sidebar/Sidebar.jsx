"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/logo.png";
import { FaRegCommentDots } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { BsReverseLayoutSidebarReverse, BsSave } from "react-icons/bs";
import {
  AiOutlineGift,
  AiOutlineFileText,
  AiOutlineHome,
} from "react-icons/ai";
import PrimaryButton from "../PrimaryButton";

const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname);
  const header = [
    {
      id: 1,
      name: "Generate Questions",
      link: "/generate-questions",
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Contact",
      link: "/contact",
    },

    {
      id: 4,
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
    <div>
      <div className="flex flex-col justify-self-end  ">
        <div>
          <div>
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
          <div>
            <Link href="/dashboard">
              <div className="flex items-center gap-2  font-normal">
                <RxDashboard></RxDashboard>
                <span>Dashboard</span>
              </div>
            </Link>
          </div>
          <div>
            <h2 className=" font-bold mt-5 mb-5  ">Ai Content</h2>
            {header?.map((header) => {
              return (
                <Link
                  href={`${header.link} `}
                  className={` ${
                    pathname === header.link
                      ? ` bg-transparent bg-clip-text font-semibold  text-[#FC495F] `
                      : ""
                  } flex items-center gap-2 mb-5 `}
                  key={header.id}
                >
                  {header.name === "Generate Questions" ? (
                    <>
                      <div className="flex items-center gap-2 justify-center font-normal">
                        <AiOutlineHome></AiOutlineHome>{" "}
                        <span>{header.name}</span>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  {header.name === "About" ? (
                    <>
                      <div className="flex items-center gap-2 justify-center font-normal">
                        <BsReverseLayoutSidebarReverse></BsReverseLayoutSidebarReverse>{" "}
                        {header.name}
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  {header.name === "Saved Questions" ? (
                    <>
                      <div className="flex items-center gap-2 justify-center font-normal">
                        <BsSave></BsSave> {header.name}
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  {header.name === "Contact" ? (
                    <>
                      <div className="flex items-center gap-2 justify-center font-normal">
                        <FaRegCommentDots></FaRegCommentDots> {header.name}
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </Link>
              );
            })}
            <h2 className=" font-bold mb-5 mt-10 ">Account Settings</h2>
            {AccountSettings.map((item) => {
              return (
                <Link
                  href={`${item.link} `}
                  className={` ${
                    pathname === item.link
                      ? `  font-semibold  text-[#FC495F] `
                      : ""
                  } flex items-center gap-2 mb-5 `}
                  key={item.id}
                >
                  {item.name === "Membership" ? (
                    <>
                      <div className="flex items-center gap-2 justify-center font-normal">
                        <AiOutlineGift></AiOutlineGift> {item.name}
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  {item.name === "Transaction" ? (
                    <>
                      <div className="flex items-center gap-2 justify-center font-normal">
                        <AiOutlineFileText></AiOutlineFileText> {item.name}
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
        <div>
          <PrimaryButton>Logout</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
