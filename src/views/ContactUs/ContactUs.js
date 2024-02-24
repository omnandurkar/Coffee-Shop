import React from 'react'
import shop from "./shop.jpg";
import insta from "./instagram.png";
import twitter from "./twitter.png";
import youtube from "./youtube.png";
import Navbar from '../../components/Navbar/Navbar';
import "./Contact.css";

function ContactUs() {
  return (
    <div>
      <Navbar />
      <div className='sub-header-container text-center mb-3'>
        <h6>
          Contact us
        </h6>
        <h1>
          Coffee Shop
        </h1>
      </div>


      <div className='d-flex flex-fow justify-content-center '>
        <div>
          <img src={shop} className="shop img-fluid" />
        </div>

        <div className=''>

          <div>
            <p>
              739, Lakshimi Hills, Kanyakumari Road, Manjuli Nagar, Chennai-373112.
            </p>
            <p>
              Mo.No.:- 7796486645
            </p>

          </div>


          <img src={insta} className='media' />
          <img src={youtube} className='media' />
          <img src={twitter} className='media' />
        </div>

      </div>
    </div>
  )
}

export default ContactUs
