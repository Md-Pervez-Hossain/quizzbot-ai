import React from "react";
// import { data } from "../data/data.js";
import { FaShoppingBag } from "react-icons/fa";

const RecentOrders = () => {
  return (
    <div
      className="w-full col-span-1 relative lg:h-[70vh] 
    h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll"
    >
      <h1>Recent Document</h1>
      <ul>
        {/* {data.map((order, id) => ( */}
        <li
          // key={id}
          className="bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
        >
          <div className="bg-purple-100 rounded-lg p-3">
            <FaShoppingBag className="text-purple-800" />
          </div>
          <div className="pl-4">
            <p className="text-gray-800 font-bold">Total Words</p>
            <p className="text-gray-400 text-sm mt-6 ml-3">
              Saved Documents Details{" "}
            </p>
          </div>
          <p className="lg:flex md:hidden absolute  lg:right-32  text-sm mt-2">
            Saved Document Title
          </p>
        </li>
        {/* ))} */}
      </ul>
    </div>
  );
};

export default RecentOrders;
