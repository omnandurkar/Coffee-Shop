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
          <img src={shop} className="shop img-fluid rounded-3" />
        </div>

        <div className='my-auto ps-3 '>

          <div className='m-4 '>
            <p className='g-font-b'>
              739, Lakshimi Hills, Kanyakumari Road, Manjuli Nagar, Chennai-373112.
            </p>
            <p className='g-font-b'>
              Mo.No.:- 7796486645
            </p>

            <img src={insta} className='media' />
            <img src={youtube} className='media' />
            <img src={twitter} className='media' />

          </div>



        </div>

      </div>

      <div className='text-center mt-4 p-5'>
        <h1 className='g-font-b'>
          We started to brew on 1989
        </h1>
        <p>
          Since its inception in 1989, Coffee Shop has been a cornerstone of our community, serving up exceptional coffee and fostering unforgettable moments for our loyal customers. Over the past three decades, we've grown from a modest local haunt to a beloved destination for coffee enthusiasts far and wide. Our commitment to quality, consistency, and warmth has remained steadfast throughout the years, as we continue to pour passion into every cup and create a welcoming space where friendships are forged, ideas are sparked, and memories are made. As we reflect on our journey, we're grateful for the support of our community and excited for the future ahead.
        </p>
      </div>
      <div className='text-center'>
        <h1 className='g-font-b'>Won the best coffee award 2023</h1>

        <p className=''>"At Coffee Shop, we're honored to be recognized as the home of the best coffee of 2023. This prestigious award is a testament to our dedication to crafting exceptional coffee experiences for our customers."From our carefully sourced beans to our expertly trained baristas, every cup of coffee at Coffee Shop is crafted with passion and precision. Winning the award for the best coffee of 2023 reaffirms our commitment to excellence in every sip.Being named the best coffee of 2023 is more than just an accolade for us at Coffee Shop; it's a validation of our relentless pursuit of quality and flavor. We take pride in serving not just a beverage, but an experience that delights the senses and warms the soul.
        </p>
      </div>

      <Footer />
    </div>
  )
}

export default ContactUs
