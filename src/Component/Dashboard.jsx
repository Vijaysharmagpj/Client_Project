import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="dashboard-header">
          <p className="header-title">
            APPLY INSTANT LOAN HERE FOR UPTO - 5 LACS NOW.
          </p>
          <span className="header-subtitle">
            IF YOU ARE A
          </span>
          <span className="header-highlight">
            (STOCK TRADERS/BAD CIBIL PROFILE/UN-EMPLOYED/SHOP KEEPERS/SMALL
            BUSINESSMEN...ETC)
          </span>
        </div>
      </div>
      <div className="loan-services">
        <p className="services-description">
          Our loan services offer a hassle-free and streamlined borrowing
          experience, providing you with the funds you need in a timely manner
          to meet your financial requirements.
        </p>
      </div>
      <button className="getstart">Get started</button>
    </div>
  );
};

export default Dashboard;
