import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between px-8 py-4 bg-white">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-[61px] h-[57px]" />
          <div className="ml-4">
            <p className="font-[Geologica] font-bold text-[35px] leading-[43.75px]">
              KREDITPE
            </p>
            <p className="font-[Gautami] font-bold text-[15px] leading-[28.59px]">
              Loan in 10 min Only
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
            APPLE
          </button>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
            Local
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
