import React from "react";
import "./OurStory.css";
import images from "../assets/index";

const OurStory = () => {
  return (
    <>
      <div className="story-title">
        <p>Our Story so far</p>
      </div>

      <div className="wrapper">
        <div className="story-container">
          <div className="image-container">
            <img src={images?.familyimage} alt="Our Story" />
          </div>
          <p className="story-number">1,50,000+</p>
          <p className="family">Happy Family</p>
          <div class="creditpe-container">
            <p class="creditpe-title">
              KREDITPE{" "}
              <span class="creditpe-description">
                helps families achieve their dreams with seamless financial
                support—making life’s goals a reality, together
              </span>
            </p>
          </div>
        </div>

        {/* for Trusted User */}
        <div className="story-container1">
          <div className="image-container1">
            <img src={images?.TrustedUser} alt="Our Story" />
          </div>
          <p className="story-number1">1 Crore+</p>
          <p className="family1">Trusted User</p>
          <div class="creditpe-container1">
            <p class="creditpe-title1">
            Trusted by Users Everywhere <span class="creditpe-description1">KREDITPE</span> is the go-to choice for reliable and transparent financial solutions, earning the trust of countless users on their journey to success.
            </p>
          </div>
        </div>
      </div>

{/* second wrapper */}
      
      <div className="wrapper">
        <div className="story-container2">
          <div className="image-container2">
            <img src={images?.month} alt="Our Story" />
          </div>
          <p className="story-number2">50 Crore / Month+</p>
          <p className="family2">Loan Distributed</p>
          <div class="creditpe-container2">
            <p class="creditpe-title2">
              KREDITPE{" "}
              <span class="creditpe-description2">
              has successfully distributed funds to empower lives, fueling aspirations and making dreams come true for countless individuals and families.
              </span>
            </p>
          </div>
        </div>

        {/* for Trusted User */}
        <div className="story-container3">
          <div className="image-container3">
            <img src={images?.loan} alt="Our Story" />
          </div>
          <p className="story-number3">₹ 1500 Crore ++</p>
          <p className="family3">Loan Distributed Funds</p>
          <div class="creditpe-container3">
            <p class="creditpe-title3">
              KREDITPE{" "}
              <span class="creditpe-description3">
              helps families achieve their dreams with seamless financial support—making life’s goals a reality, together
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStory;
