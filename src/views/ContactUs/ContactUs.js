import React from 'react'
import shop from "./shop.jpg";
import insta from "./instagram.png";
import twitter from "./twitter.png";
import youtube from "./youtube.png";
import Navbar from '../../components/Navbar/Navbar';
import "./Contact.css";
import Footer from '../../components/Footer/Footer';

function ContactUs() {
  return (
    <div>
      <Navbar />
      <div className='sub-header-container text-center mb-3'>
        <h6>
          Contact us
        </h6>
        <h1 className='g-font-b'>
          Coffee Shop
        </h1>
      </div>


      <div className='d-flex flex-fow justify-content-center '>
        <div>
          <img src={shop} className="shop img-fluid" />
        </div>

        <div className='my-auto ps-3 '>

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
      <div className='text-center mt-4 p-5'>
        <h1 className='g-font-b'>Won the best coffee award 2023</h1>

        <p className=''>"At Coffee Shop, we're honored to be recognized as the home of the best coffee of 2023. This prestigious award is a testament to our dedication to crafting exceptional coffee experiences for our customers."</p>

        <p>
        From our carefully sourced beans to our expertly trained baristas, every cup of coffee at Coffee Shop is crafted with passion and precision. Winning the award for the best coffee of 2023 reaffirms our commitment to excellence in every sip.
        </p>

        <p>
        Being named the best coffee of 2023 is more than just an accolade for us at Coffee Shop; it's a validation of our relentless pursuit of quality and flavor. We take pride in serving not just a beverage, but an experience that delights the senses and warms the soul.
        </p>
      </div>

      <Footer/>
    </div>
  )
}

export default ContactUs
