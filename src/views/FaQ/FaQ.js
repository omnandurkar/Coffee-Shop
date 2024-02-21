import React from 'react'
import "./FaQ.css"
import Navbar from "../../components/Navbar/Navbar"
import faqImage from "./faq.webp"

function FaQ() {
  return (
    <>
      <Navbar />
      <div>
        <div className='header-container d-flex justify-content-evenly'>
          <div>
            <h1 className='heading'>Frequently Asked Questions</h1>
            <h6 className='heading-title'>Need something else? Email <br/> support@coffeeshop.com anytime.</h6>
          </div>
          <img src={faqImage} alt='' className='faq-img' />
        </div>
      </div>
    </>
  )
}

export default FaQ
