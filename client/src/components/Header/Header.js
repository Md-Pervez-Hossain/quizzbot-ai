import Image from "next/image";
import React from "react";
import image from "../../../public/pervez hossain.jpg";

const Header = () => {
  return (
    <div>
      <div className="flex justify-end items-center gap-8 py-2 z-0 relative">
        <h2>Welcome, Pervez Hossain</h2>
        <Image
          src={image}
          width={50}
          height={50}
          className="rounded-full bg-gradient-to-r from-[#FC495F] from-62% to-[#FFc371] to-38% p-1"
        />
      </div>
    </div>
  );
};

export default Header;
