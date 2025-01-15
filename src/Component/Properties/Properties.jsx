import React from "react";
import "./Properties.css";
import images from "../../assets";
const Properties = () => {
  return (
    <>
      <div className="_properties_container">
        <div className="_properties_heading_container">
          <h1 className="_properties_heading">
            Why <span style={{ color: "#2A6877" }}>KREDITPE</span>
          </h1>
        </div>

        <div className="_properties_metadat_row_">
          <div className="_properties_metadata_col">
            <div className="_properties_img">
              <img src={images?.note} alt="" />
            </div>
            <div className="meta_data_title">100% Legal</div>
            <div className="_meta_properties_content">
              <p>
                No paperwork, No site/bank visits, and No physical
                documents needed
              </p>
            </div>
          </div>
          <div className="_properties_metadata_col">
            <div className="_properties_img">
              <img src={images?.safe} alt="" />
            </div>
            <div className="meta_data_title">Safe & Secure</div>
            <div className="_meta_properties_content">
              <p>
                we value your privacy we will never share your data with
                people outside
              </p>
            </div>
          </div>
          <div className="_properties_metadata_col">
            <div className="_properties_img">
              <img src={images?.post} alt="" />
            </div>
            <div className="meta_data_title">Hassle-free-loan</div>
            <div className="_meta_properties_content">
              <p>
                No collateral, No hidden charges added to keep
                things transparent
              </p>
            </div>
          </div>
        </div>
        <div className="_properties_metadat_row_">
          <div className="_properties_metadata_col">
            <div className="_properties_img">
              <img src={images?.bell} alt="" />
            </div>
            <div className="meta_data_title">Instant Disbursal Support</div>
            <div className="_meta_properties_content">
              <p>
                Apply online, complete your KYC, and post- approval. get money
                credited instantly.
              </p>
            </div>
          </div>
          <div className="_properties_metadata_col">
            <div className="_properties_img">
              <img src={images?.thumbs} alt="" />
            </div>
            <div className="meta_data_title">Easy Repayments</div>
            <div className="_meta_properties_content">
              <p>
                Multiple repayment options include Auto Debit, Net Banking,
                Debit Card, UPI, and Bank Transfer.
              </p>
            </div>
          </div>
          <div className="_properties_metadata_col">
            <div className="_properties_img">
              <img src={images?.phone} alt="" />
            </div>
            <div className="meta_data_title">Quick Support</div>
            <div className="_meta_properties_content">
              <p>
                Need assistance with your loan application? We are
                just a call away
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Properties;
