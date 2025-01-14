import React from "react";
import img1 from "../assets/image.png";
import "./OurStory.css";

const OurStory = () => {
  return (
    <>
      <div className="story-title">
        <p>Our Story so far</p>
      </div>

      <div className="story-container">
        <img src={img1} alt="Our Story" className="story-image" />
        <p className="story-number">1,50,000+</p>
        <p className="family">Happy Family</p>
      </div>
    </>
  );
};

export default OurStory;
