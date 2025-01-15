import React from "react";
import "./Getstart.css";
import images from "../assets/index";

const Getstart = () => {
  return (
    <>
      <div className="wrapper">
        <p className="started">
          Get Started&nbsp;<span>quick and easy</span>
        </p>
      </div>


      {/* <div className="container">
        <div  className="image-container">
        <img className="bg-image" src={images?.bg} alt="bg" />
        <img className="kyc-image" src={images.CheckEligibility} alt="kyc" />
          <p>Check Eligibility</p>
        </div>
        <div className="image-container">
          <img className="bg-image" src={images?.bg} alt="bg" />
          <img className="kyc-image" src={images?.kyc} alt="kyc" />
          <p>Complete KYC</p>
        </div>

        <div className="image-container">
          <img className="bg-image" src={images?.bg} alt="bg" />
          <img className="kyc-image" src={images.setforloan} alt="set for loan" />
          <p>Set Your Loan Amount</p>
        </div>

        <div className="image-container">
          <img className="bg-image" src={images?.bg} alt="bg" />
          <img className="kyc-image" src={images.addamount} alt="add amount" />
          <p>Add Amount</p>
        </div>
        <div className="image-container">
          <img className="bg-image" src={images?.bg} alt="bg" />
          <img className="kyc-image" src={images.readyforloan} alt="ready for loan" />
          <p>Ready For Loan</p>
        </div>
      </div> */}


      <div className="_attritubes_container">
        <div className="_attribute_container_col">
          <div className="circular_bg">
             <img src={images.readyforloan} alt="readyforloan"/>
          </div>
          <h2 className="attribute_container_col_heading">Check <br /> Eligibility</h2>
        </div>
        
         <div className="_attribute_container_col">
          <div className="circular_bg">
             <img src={images.readyforloan} alt="readyforloan"/>
          </div>
          <h2 className="attribute_container_col_heading">Check <br /> Eligibility</h2>
        </div>
        <div className="_attribute_container_col">
          <div className="circular_bg">
             <img src={images.readyforloan} alt="readyforloan"/>
          </div>
          <h2  className="attribute_container_col_heading">Check <br /> Eligibility</h2>
        </div>
        <div className="_attribute_container_col">
          <div className="circular_bg">
             <img src={images.readyforloan} alt="readyforloan"/>
          </div>
          <h2  className="attribute_container_col_heading">Check <br /> Eligibility</h2>
        </div>
        <div className="_attribute_container_col">
          <div className="circular_bg">
             <img src={images.readyforloan} alt="readyforloan"/>
          </div>
          <h2  className="attribute_container_col_heading">Check  <br />Eligibility</h2>
        </div>
      </div>
    </>
  );
};
export default Getstart;
