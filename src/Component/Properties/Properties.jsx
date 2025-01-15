import React from 'react'
import "./Properties.css";
import images from '../../assets';
const Properties = () => {
  return (
    <>
      <div className="_properties_container">
        <div className="_properties_heading_container">
          <h1 className="_properties_heading">Why <span style={{ color: "#2A6877" }}>KREDITPE</span></h1>
        </div>

        <div className="_properties_metadat_row_">
          <div className="_properties_metadata_col">
            <div className="_properties_img">
              <img src={images?.safe} alt="" />
            </div>
            <div className="meta_data_title">
              Safe & Secure
            </div>
            <div className="_meta_properties_content">
            <p>No paperwork, No site/bank visits, and No
            physical documents needed</p>
            </div>
          </div>
          <div className="_properties_metadata_col">
            <div className="_properties_img">
              <img src={images?.note} alt="" />
            </div>
            <div className="meta_data_title">
              Safe & Secure
            </div>
            <div className="_meta_properties_content">
            <p>No paperwork, No site/bank visits, and No
            physical documents needed</p>
            </div>
          </div>
          <div className="_properties_metadata_col">
            <div className="_properties_img">
              <img src={images?.bell} alt="" />
            </div>
            <div className="meta_data_title">
              Safe & Secure
            </div>
            <div className="_meta_properties_content">
            <p>No paperwork, No site/bank visits, and No
            physical documents needed</p>
            </div>
          </div>
        </div>
        <div className="_properties_metadat_row_">
          <div className="_properties_metadata_col">
            <div className="_properties_img">
              <img src={images?.thumbs} alt="" />
            </div>
            <div className="meta_data_title">
              Safe & Secure
            </div>
            <div className="_meta_properties_content">
            <p>No paperwork, No site/bank visits, and No
            physical documents needed</p>
            </div>
          </div>
          <div className="_properties_metadata_col">
            <div className="_properties_img">
              <img src={images?.note} alt="" />
            </div>
            <div className="meta_data_title">
              Safe & Secure
            </div>
            <div className="_meta_properties_content">
            <p>No paperwork, No site/bank visits, and No
            physical documents needed</p>
            </div>
          </div>
          <div className="_properties_metadata_col">
            <div className="_properties_img">
              <img src={images?.thumbs} alt="" />
            </div>
            <div className="meta_data_title">
              Safe & Secure
            </div>
            <div className="_meta_properties_content">
            <p>No paperwork, No site/bank visits, and No
            physical documents needed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Properties