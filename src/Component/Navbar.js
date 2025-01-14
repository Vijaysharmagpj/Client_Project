import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute top-[29px] left-[49px] flex items-center">
          <img src={logo} alt="logo" className="w-[61px] h-[57px]" />
          <div className="ml-[20px]">
            <p
              className="font-[Geologica] font-weight: 700 text-[35px] leading-[43.75px] w-[175px] h-[44px]"
              style={{ position: "absolute", top: "23px", left: "129px" }}
            >
              KREDITPE
            </p>
            <p
              className="font-[Gautami] font-weight: 700 text-[15px] leading-[28.59px] w-[131px] h-[29px]"
              style={{ position: "absolute", top: "64px", left: "150px" }}
            >
              Loan in 10 min Only
            </p>
          </div>
        </div>
        <div>
          <button>APPLE</button>
          <button>Local</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
