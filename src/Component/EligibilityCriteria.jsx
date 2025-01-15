import React from "react";
import "./EligibilityCriteria.css";
import images from "../assets";

const EligibilityCriteria = () => {
  return (
    <>
      <div className="eligibility-container">
        <p className="eligibility-text">Eligibility Criteria</p>
      </div>
      <div className="eligibility-wrapper">
        <div className="custom-div">
          <img src={images?.noneed} alt="no need" />
          <p className="criteria">Eligibility Criteria - 1</p>
          <p className="history">Credit History No Needed</p>
          <p className="nocredit">
            No credit card required to apply for loan sanction. Simple and
            hassle-free process.
          </p>
        </div>
        <div className="custom-div1">
          <img src={images?.income} alt="incomeimg" />
          <p className="criteria2">Eligibility Criteria - 2</p>
          <p className="income">Income Min 10,000/ Month</p>
          <p className="miniincome">
            Minimum income requirement: ₹10,000 per month to qualify for loan
            sanction.
          </p>
        </div>
        <div className="custom-div2">
          <img src={images?.age} alt="age" />
          <p className="criteria3">Eligibility Criteria - 3</p>
          <p className="age18">Age 18+ years</p>
          <p className="ageyear">
            Eligibility: Age 18 years and above to apply for loan sanction.
          </p>
        </div>
      </div>
    </>
  );
};
export default EligibilityCriteria;
