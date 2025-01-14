import React from "react";
import "./FormandInfo.css";
import images from "../assets";
const FormandInfo = () => {
    return(
<>
<div className="container">
        <div className="header">
            <p className="header-title">Achieve your Dreams With</p>
            <p className="header-subtitle">
                <span className="highlight">KREDITPE </span>
                <span className="sub-highlight">INSTANT LOANS </span>
                <span className="new-highlight">Within 10 Minutes</span>
            </p>
        </div>

        <div className="sub-header">
            Instant Loan | 100% Digital | Collateral-Free Loan | NO CREDIT HISTORY NEED
        </div>

        <hr className="divider" />

        <div className="row">
            <div className="box">
                <div className="firstheading">
                     <img src={images?.docimage} alt="docimage" className="img1" />
                    <div className="headName">Documents Required</div>
                </div>
                <div className="list1">
                    <ul>
                        <li>Aadhaar Card</li>
                        <li>PAN Card</li>
                        <li>Bank Statement Certificate</li>
                        <li>Photo</li>
                    </ul>
                </div>
            </div>
            <div className="box box-tall">
            <div className="secondheading">
            <img src={images?.check} alt="check" className="img2" />
                    <div className="headName2">Who can Apply here</div>
                </div>
                <div className="list2"></div>
            </div>
        </div>

        {/* <div className="row row-spaced">
            <div className="box1"></div>
            <div className="box1 box-tall1"></div>
        </div> */}
    </div>
</>
    )
};

export default FormandInfo;
