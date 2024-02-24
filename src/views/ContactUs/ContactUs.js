import React from 'react'
import shop from"./shop.jpg";
import Navbar from '../../components/Navbar/Navbar';

function ContactUs() {
  return (
    <div>
      <Navbar/>
      <div className='sub-header-container text-center mb-3'>
      <h6>
        Contact us
      </h6>
      <h1>
        Coffee Shop
      </h1>
      </div>

      <center>
        <img src={shop} className='img-fluid'/>
      </center>

      <div className='d-flex flex-row justify-content-center mt-3'>

        <div>
          739, Lakshimi Hills, Kanyakumari Road, Manjuli Nagar, Chennai-373112.
        </div>

        <div>
          
        </div>

      </div>
    </div>
  )
}

export default ContactUs
