import React from 'react'
import "./Subscriptions.css"
import Navbar from '../../components/Navbar/Navbar'
import Subimg1 from "./subscribe-and-save.webp"

function Subscriptions() {
  return (
    <>
      <Navbar />
      <div className='sub-header-container'>
        <div>
          <span className='sub-heading m-3 d-block text-center'>ABOUT SUBSCRIPTIONS</span>
          <img src={Subimg1} alt='' className='sub-img1 d-block' />
        </div>
        
        <div>
          <h3 className='text-center p-3'>NEVER RUN OUT OF COFFEE AGAIN</h3>
          <p className='sub-description text-center fs-5'>We offer two subscription options — our standard Subscribe & Save option which offers 10% off all recurring orders, available every 7, 14 or 28 days. Once your coffee subscription is set up and an account is created, it is easy to manually substitute coffees, change frequency to whatever suits your preferences, skip an order if you are heading out of town, etc. We offer free shipping on all orders over ₹999 so we find that many of our customers subscribe in bulk and only receive coffee once a month. We ship all online orders the following business day, and we always ship coffee roasted the same day.</p>
        </div>
      </div>
    </>
  )
}

export default Subscriptions
