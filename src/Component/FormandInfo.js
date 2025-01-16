import React from "react";
import "./FormandInfo.css";
import images from "../assets";
const FormandInfo = () => {
    return (
        <>
            <div className="wrapper1">
                <div className="container1">
                    <div className="header1">
                        <p className="header-title1">Achieve your Dreams With</p>
                        <p className="header-subtitle1">
                            <span className="highlight1">KREDITPE </span>
                            <span className="sub-highlight1">INSTANT LOANS </span>
                            <span className="new-highlight1">Within 10 Minutes</span>
                        </p>
                    </div>

                    <div className="sub-header1">
                        Instant Loan | 100% Digital | Collateral-Free Loan | NO CREDIT HISTORY NEED
                    </div>
                    <div className="divider1Container">
                        <hr className="divider1" />

                    </div>

                    <div className="row row-spaced">
                        <div className="box1">
                            <div className="firstheading1">
                                <img src={images?.docimage} alt="docimage" className="img1" />
                                <div className="headName1">Documents Required</div>
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
                        <div className="box2 box-tall">
                            <div className="secondheading">
                                <img src={images?.check} alt="check" className="img2" />
                                <div className="headName2">Who can Apply here</div>
                            </div>
                            <div className="list2">
                                <ul>
                                    <li>STOCK TRADERS, F/O TRADERS, GAMERS</li>
                                    <li>Low Cibil , Bad Cibil Holder</li>
                                    <li>4th Grade / Driver / Shopkeepers... Etc.</li>
                                    <li>Without Income / Salary Person... Etc.</li>
                                    <li>Housewives / Students... Etc.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row row-spaced">
                        <div className="box1">
                            <div className="firstheading1">
                                <img src={images?.eligible} alt="eligible" className="img1" />
                                <div className="headName3">Eligibility For Instant Loan</div>
                            </div>
                            <div className="list2">
                                <ul>
                                    <li>Age - 18 to 70 years anyone can apply</li>
                                    <li>Monthly income of at least Rs.10000/ Month</li>
                                    <li>CREDIT SCORE (No CIBIL / Credit History Check)</li>
                                    {/* <li>Photo</li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="box1 box-tall1">
                            <div className="secondheading">
                                <img src={images?.role} alt="role" className="img2" />
                                <div className="headName4">ROI & Benefits For You</div>
                            </div>
                            <div className="list2">
                                <ul>
                                    <li>CAN USE FUNDS FOR 90 DAYS TO 4 YEARS</li>
                                    <li>ZERO INTEREST FOR 90 DAYS FOR (TRADERS)</li>
                                    <li>MIN 1% ROI/ MONTH FOR LONG TENURE</li>
                                    <li>AGREEMENT FEE-0.65% ONE TIME <span className="smalltext">(No other fee)</span></li>
                                    <li>GET FUNDS IN 10 MIN ONLY.</li>
                                    <li>NO PF, NO INSURANCE, NO OTHER FEE CHARGE</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="centerContent">
                        <img src={images?.logo} alt="logo" className="img2 mr-2" />
                        <p>Banking For All</p>
                    </div>
                </div>


                <div className="sidebox1">


                    <div className="header1">
                        <p className="header-title1">Start Your Application At</p>
                        <p className="header-subtitle1">
                            <span className="highlight1">KREDITPE </span>
                            <span className="sub-highlight1">and get Loan in 10 minutes now </span>
                        </p>
                    </div>


                    <div className="selectField">
                        <span className="textstyle">Choose your location</span>
                        <div className="secondheading">
                            <select className="fields">
                                <option selected >Choose the State</option>
                            </select>
                            <select className="fields">
                                <option selected >City</option>
                            </select>
                        </div>
                    </div>



                    <div className="inputField">
                        <span className="textstyle">Choose your Product</span>
                        <div className="secondheading">
                            <input type="text" className="fields2" placeholder="Instant Loan For Traders" />
                            <input type="text" className="fields2" placeholder="Instant Personal Loan" />
                        </div>
                        <div className="secondheading">
                            <input type="text" className="fields2" placeholder="KYC Loan" />
                            <input type="text" className="fields2" placeholder="Instant Business Loan" />
                        </div>
                    </div>



                    <div className="subformbox">
                        <div className="secondheading">
                            <div className="input-group">
                                <span className="heading3">Mobile no</span>
                                <input
                                    type="text"
                                    className="fields3"
                                    placeholder="Please enter your mobile number"
                                />
                                <p className="validatemsg">*We would require this information to proceed further</p>
                            </div>
                            <div className="input-group">
                                <span className="heading3">Email-ID</span>
                                <input
                                    type="text"
                                    className="fields3"
                                    placeholder="Please enter your Email-ID"
                                />
                            </div>
                        </div>
                        <div className="mt-1">
                            <span className="heading3">Referral Code - Optional</span>
                            <div>
                                <input
                                    type="text"
                                    className="fields3"
                                    placeholder="Please enter the referral code"
                                />
                            </div>
                            <p className="infomsg">Please enter promotional codes, if any</p>
                        </div>

                    </div>
                    <div className="allcontent">
                    <div className="tandc">*If you have an application in progress you can continue from where you left off</div>
                    <div className="content">By proceeding. you hereby consent to our communication via Call/ SMS/ Whatsapp regarding your loan application. You also authorize the bank and its representatives to reach you for any product/offers via bank's authorized channels.</div>
                    <div className="checkboxesdiv"><input type="checkbox" className="checkboxes" /><span className="checkboxcontent">I have read the following T&C and accept the same.</span></div>
                    <div className="checkboxesdiv">
                        <div>
                        <input type="checkbox" className="checkboxes" />
                        <span className="checkboxcontent">I submit my Aadhaar and Voluntary give me my Consent.</span>
                        </div>
                        <div>
                            <button className="checkboxesdiv-button">Next</button>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </>
    )
};

export default FormandInfo;
