import Image from "next/image";
import React from "react";
import image from "../../../public/pervez hossain.jpg";

const Header = () => {
  return (
    <div>
      <div className="flex justify-end items-center gap-12 py-2">
        <Image
          src={image}
          width={60}
          height={60}
          className="rounded-full"
        ></Image>
      </div>
      <div className="mt-5 ">
        <div className="grid grid-cols-7 gap-5">
          <div className="bg-white font-semibold hover:text-white rounded-lg px-2 py-5  cursor-pointer text-center flex items-center justify-center hover:bg-gradient-to-r from-gradient-color-62 from-62%  to-gradient-color-38  to-38% hover:transition duration-700 ease-in-out">
            <h2>True/false </h2>
          </div>
          <div className="bg-white font-semibold hover:text-white rounded-lg px-2 py-5  cursor-pointer text-center flex items-center justify-center hover:bg-gradient-to-r from-gradient-color-62 from-62%  to-gradient-color-38  to-38% hover:transition duration-700 ease-in-out">
            <h2>Multiple Questions</h2>
          </div>
          <div className="bg-white font-semibold hover:text-white rounded-lg px-2 py-5  cursor-pointer text-center flex items-center justify-center hover:bg-gradient-to-r from-gradient-color-62 from-62%  to-gradient-color-38  to-38% hover:transition duration-700 ease-in-out">
            <h2>Short Answers </h2>
          </div>
          <div className="bg-white font-semibold hover:text-white rounded-lg px-2 py-5  cursor-pointer text-center flex items-center justify-center hover:bg-gradient-to-r from-gradient-color-62 from-62%  to-gradient-color-38  to-38% hover:transition duration-700 ease-in-out">
            <h2>Blanks </h2>
          </div>
          <div className="bg-white font-semibold hover:text-white rounded-lg px-2 py-5  cursor-pointer text-center flex items-center justify-center hover:bg-gradient-to-r from-gradient-color-62 from-62%  to-gradient-color-38  to-38% hover:transition duration-700 ease-in-out">
            <h2>Matching </h2>
          </div>
          <div className="bg-white  font-semibold hover:text-white rounded-lg px-2 py-5  cursor-pointer text-center flex items-center justify-center hover:bg-gradient-to-r from-gradient-color-62 from-62%  to-gradient-color-38  to-38% hover:transition duration-700 ease-in-out">
            <h2>Calculations</h2>
          </div>
          <div className="bg-white font-semibold hover:text-white rounded-lg px-2 py-5  cursor-pointer text-center flex items-center justify-center hover:bg-gradient-to-r from-gradient-color-62 from-62%  to-gradient-color-38  to-38% hover:transition duration-700 ease-in-out">
            <h2>Teacher Tool</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
