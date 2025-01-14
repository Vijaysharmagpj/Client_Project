import React from "react";

const FormandInfo = () => {
    return (
        <>
            <div className="w-[1376px] h-[817px] top-[884px]  rounded-[20px] bg-[#FFF9DD] relative font-dm-sans" style={{ left: "31px" }}>
                <div className="w-[726px] h-[83px] gap-[1px] relative ml-[15px] relative" style={{border:'1px solid #FFF9DD', marginTop:'15px'}}>  {/*second div*/}
                    <p className="h-[39px] text-[30px] mt-[15px] font-semibold leading-[39.06px] text-center from-font decoration-none">
                        Achieve your Dreams With
                    </p>
                    <p className="w-[726px] h-[43px] gap-[7px] text-[33px]">
                        <span className="w-[155px] font-extrabold" style={{ color: '#2A6877' }}>KREDITPE </span>
                        <span className="w-[564px] font-semibold">INSTANT LOANS </span><span className="font-semibold" style={{ color: '#2A6877' }}>Within 10 Minutes</span>
                    </p>
                </div>

                {/* sub-header box */}
                <div className="w-[530px] h-[20px] left-[78px] mt-[11px] leading-[19.53px] relative" style={{ border: '1px solid #FFF9DD', marginTop: '20px', fontWeight: '500',fontSize: '15px', }}>
                    Instant Loan | 100% Digital | Collateral-Free Loan | NO CREDIT HISTORY NEED
                </div>
                <hr className="w-[384px] top-[45px] left-[176px] relative border-t-[1px] border-black" />

            <div className="w-[245px] h-[183px] relative top-[81px] left-[9px]" style={{border:'1px solid red'}}></div>
            {/* <div className="w-[237px] h-[217px] relative top-[81px] left-[351px]" style={{border:'1px solid red'}}></div>
            <div className="w-[316px] h-[196px] relative top-[250px] left-[9px]" style={{border:'1px solid red'}}></div>
            <div className="w-[237px] h-[217px] relative top-[250px] left-[351px]" style={{border:'1px solid red'}}></div> */}
            </div>
        </>
    );
};

export default FormandInfo;
