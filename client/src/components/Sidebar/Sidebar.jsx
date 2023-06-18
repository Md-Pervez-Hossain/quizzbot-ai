import Home from "../../components/Home/Home";

import Link from "next/link";
import React, { Children } from "react";
import About from "../About/About";
import Links from "./Links";

const Sidebar = () => {
  return (
    <div className="w-10/12 mx-auto ">
      {/* <div className="grid grid-cols-4 gap-16 ">
        <div className="col-span-1 bg-white shadow-lg p-10 ">
          <Links></Links>
        </div>
        <div className="col-span-3">
          <About></About>
        </div>
      </div> */}
    </div>
  );
};

export default Sidebar;
