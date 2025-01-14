import React from 'react'
import "./Footer.css"
import images from '../../assets'
const Footer = () => {
  return (
    <>
      <div className="_footer_container">

        <div className="_footer_col_left">
          <div className="_footer_col_left_row">
            <img src={images?.prefr} alt="prefr" className='prefr_img' />
          </div>
          <div className="_footer_col_left_row"></div>
          <div className="_footer_col_left_row"></div>
          <div className="_footer_col_left_row"></div>
          <div className="_footer_col_left_row"></div>
        </div>

        <div className="_footer_col_mid">
          <h1 style={{ color: "white" }}>Hello</h1>
        </div>
        <div className="_footer_col_mid">
          <h1 style={{ color: "white" }}>Hello</h1>
        </div>
        <div className="_footer_col_mid">
          <h1 style={{ color: "white" }}>Hello</h1>
        </div>
        <div className="_footer_col_right">
          <h1 style={{ color: "white" }}>Hello</h1>
        </div>
      </div>
    </>
  )
}

export default Footer