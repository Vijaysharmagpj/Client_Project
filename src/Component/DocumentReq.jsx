import React from "react";
import "./DocumentReq.css";
import images from "../assets";

const DocumentReq = () => {
  return (
    <>
    <div className="wrapper-docu">
      <p className="title">Document Required</p>
    </div>
      <div className="container-docu">
        <div className="steps-container">
          <div className="step">
            <div className="circle">
              <img
                src={images?.photocheck}
                alt="Photo Check Icon"
                className="icon"
              />
            </div>
            <h3>Photo Check</h3>
            <p>
              Photo Check enables secure document upload for quick loan
              approval.
            </p>
          </div>
          <div className="step-bottom">
            <div className="circle">
              <img
                src={images?.identitycheck}
                alt="Identity Check Icon"
                className="icon"
              />
            </div>
            <h3>Identity Check</h3>
            <p>
              "Identity Check" verifies personal documents for faster, secure
              loan approval.
            </p>
          </div>
          <div className="step">
            <div className="circle">
              <img
                src={images?.kyccheck}
                alt="KYC Check Icon"
                className="icon"
              />
            </div>
            <h3>KYC Check</h3>
            <p>
              KYC Check verifies user identity and documents for secure loan
              processing.
            </p>
          </div>
          <div className="step-bottom">
            <div className="circle">
              <img
                src={images.incomecheck}
                alt="Income Check Icon"
                className="icon"
              />
            </div>
            <h3>Income Check (Bank Statement)</h3>
            <p>
              Income Check verifies the user's income details to assess loan
              eligibility.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentReq;
