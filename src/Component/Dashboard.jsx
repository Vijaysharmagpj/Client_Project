import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import images from "../assets/index";

const Dashboard = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "APPPLY INSTANT LOAN HERE FOR UPTO - 5 LACS NOW.";

  useEffect(() => {
    let index = 0; // Track the index of the next character to type
    const typingInterval = setInterval(() => {
      // Only update if the index is less than the full text length
      if (index < fullText.length-1) {
        setTypedText((prevText) => prevText + fullText[index]);
        index += 1;
      } else {
        clearInterval(typingInterval); // Clear interval when text is fully typed
      }
    }, 100); // Adjust typing speed here (100ms)

    return () => clearInterval(typingInterval); // Cleanup on component unmount
  }, []);

  return (
    <>
      <div className="dashboard-container" style={{padding:"10px 20px"}}>
        <div className="dashboard-content">
          <div className="dashboard-header">
            <p className="header-title">
              {typedText}
            </p>
            <p>
              <span className="header-subtitle">IF YOU ARE A</span>
              <span className="header-highlight">
                (STOCK TRADERS/BAD CIBIL PROFILE/UN-EMPLOYED/SHOP KEEPERS/SMALL
                BUSINESSMEN...ETC)
              </span>
            </p>
            <div className="loan-services">
              <p className="services-description">
                Our loan services offer a hassle-free and streamlined borrowing
                experience, providing you with the funds you need in a timely manner
                to meet your financial requirements.
              </p>
            </div>
          </div>
          <div className="image-dashboard">
            <img src={images.bro} alt="images" />
          </div>
        </div>
      </div>
      <div style={{padding:"10px 20px"}}>
      <button className="getstart">Get started</button>
      </div>
    </>
  );
};

export default Dashboard;
