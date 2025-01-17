import React from 'react'
import "./Footer.css"
import images from '../../assets'
const Footer = () => {
  return (
    <>
    <div className='_footer_container_fluild'>
      <div className="_footer_container">

        <div className="_footer_col_left">
          <div className="_footer_col_left_row"> 
            <img src={images?.footerimg} alt="prefr" className='prefr_img' />
          </div>
          <div className="_footer_col_left_row">
            <h2 className='footer_heading'>About Us</h2>
          </div>
          <div className="_footer_col_left_row">
            <p className="footer_contnet">
              Kreditpe Journey
            </p>
            <p className="footer_contnet">
              CEO’s Message
            </p>
          </div>
          <div className="_footer_col_left_row">
            <h1 className="bolder_heading">
              Download The App Now
            </h1>
          </div>
          <div className="_footer_col_left_row _footer_col_left_row_">
            <div className="_QR_container">
              <img src={images?.QR} alt="QR" />
            </div>

            <div className="_QR_Info_data">
              <img src={images?.Link} alt="QR" />
              <img src={images?.playStore} alt="QR" />
            </div>
          </div>
        </div>

        <div className="_footer_col_mid">
          <div className="_header_footer">
            <h2 className='footer_heading'>Our Address</h2>
          </div>
          <div className="_address_meta_data">
            <p className="footer_contnet footer_contnet_">
              Corporate Office
            </p>
            <p className="footer_contnet footer_contnet_">
              21/23 Street No23
              PATEL NAGAR NO-08.
            </p>

            <p className="footer_contnet">
              Mail-id
            </p>
          </div>
        </div>



        <div className="_footer_col_mid">
          <div className="_header_footer">
            <h2 className='footer_heading'>Reach Us</h2>
          </div>
          <div className="_address_meta_data">
            <p className="footer_contnet footer_contnet_">
              Sitemap
            </p>
            <p className="footer_contnet footer_contnet_">
              Disclaimer
            </p>

            <p className="footer_contnet footer_contnet_">
              Careers
            </p>
            <p className="footer_contnet">
              Privacy Policy
            </p>
          </div>
        </div>


        <div className="_footer_col_mid">
          <div className="_header_footer">
            <h2 className='footer_heading'>Contact with us</h2>
          </div>
          <div className="_address_meta_data">
            <p className="footer_contnet footer_contnet_ ">
              Retail Customer  Help
            </p>
            <p className="footer_contnet footer_contnet_">
              <img src={images?.mail} alt="mail" />
              kreditpe1@gmail.com
            </p>

            <p className="footer_contnet">
              <div className="contact_image_container">
                <img src={images?.contact} alt="contact" />
              </div>
              <div className="_contact_meta_data">
                <p className="footer_contnet footer_contnet_ ">
                  Monday to Saturday
                  9.30 AM - 9.30PM 
                </p>
                <p className="footer_contnet">
                </p>
              </div>
            </p>
          </div>
        </div>



        <div className="_footer_col_right">
        
          <div className="_header_footer">
            <h2 className='footer_heading'>Supported Options</h2>
          </div>
          <div className="_footer_col_right_img_row">
            <img src={images?.prefr} alt="zest" />
            <img src={images?.zest} alt="zest" />
            <img src={images?.hero} alt="zest" />
          </div>
          <div className="_footer_col_right_img_row">
            <img src={images?.poonawalla} alt="zest" />
            <img src={images?.unity} alt="zest" />
            <img src={images?.adityaBirla} alt="zest" />
          </div> <div className="_footer_col_right_img_row">
            <img src={images?.iifl} alt="zest" />
            <img src={images?.Razorpay} alt="zest" />
            <img src={images?.fimable} alt="zest" />
          </div>
        
        </div>
      </div>

      <div className="_lower_footer_container">
        <p className="footer_contnet ">
        @Kreditpe 2024 | All Rights Reserved
        </p>
      </div>

    </div>
    </>
  )
}

export default Footer