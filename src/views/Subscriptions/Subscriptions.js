import React from 'react'
import "./Subscriptions.css"
import Navbar from '../../components/Navbar/Navbar'
import Subimg1 from "./subscribe-and-save.webp"
import Subimg2 from "./subscribe-img.jpg"
import Footer from "../../components/Footer/Footer"
import HomeComp6 from '../../components/HomeComp6/HomeComp6'
import VideoComp from '../../components/VideoComp/VideoComp'

function Subscriptions() {
  return (
    <>
      <Navbar />
      <div className='sub-header-container g-font-b'>
          <h1 className='sub-heading  m-3 d-block text-center'>ABOUT SUBSCRIPTIONS</h1>

         

        <div>


          <img src={Subimg2} alt='' className='sub-img1 d-block'/>
        </div>
        
        <div>
          <h3 className='text-center p-3'>NEVER RUN OUT OF COFFEE AGAIN</h3>
          <p className='sub-description text-center fs-5'>We offer two subscription options — our standard Subscribe & Save option which offers 10% off all recurring orders, available every 7, 14 or 28 days. Once your coffee subscription is set up and an account is created, it is easy to manually substitute coffees, change frequency to whatever suits your preferences, skip an order if you are heading out of town, etc. We offer free shipping on all orders over ₹999 so we find that many of our customers subscribe in bulk and only receive coffee once a month. We ship all online orders the following business day, and we always ship coffee roasted the same day.</p>
        </div>

        <div>
          {/* <img src={Subimg1} alt='' className='sub-img1 d-block'/> */}

          <VideoComp/>
          <p className='sub-description text-center fs-5'>The other subscription option is called Subscribe By Usage, which allows customers to sign up for a Bottomless subscription to our coffee. This option allows for 20% off your first order, and 10% off all future recurring orders. You'll receive a smart WIFI scale to store your coffee on, and Bottomless will automatically renew your subscription when you're running low.</p>
        </div>

      </div>

      {/* <span className='sub-heading m-5 d-block text-center'>SUBSCRIPTIONS</span>


      <div className="row row-cols-1 row-cols-md-3 mb-3 d-flex justify-content-around text-center">
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Pro</h4>
                </div>
                <div className="card-body sub-body">
                  <h1 className="card-title pricing-card-title">₹499<small class="text-body-secondary fw-light">/month</small></h1>
                  <ul className="list-unstyled mt-3 mb-4 d-block">
                    <li>Free Delivery</li>
                    <li>Limited Orders</li>
                    <li>Priority email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button type="button" className="btn btn-lg btn-primary">Get started</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-primary">
                <div className="card-header py-3 text-bg-primary border-primary">
                  <h4 className="my-0 fw-normal">Ultra Pro</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">₹999<small class="text-body-secondary fw-light">/month</small></h1>
                  <ul className="list-unstyled mt-3 mb-4 d-block">
                    <li>Fast Delivery</li>
                    <li>Surprise Gift</li>
                    <li>Phone and email support</li>
                    <li>Unlimited Orders</li>
                  </ul>
                  <button type="button" className="btn btn-lg btn-primary">Contact us</button>
                </div>
              </div>
            </div>
          </div> */}

          <HomeComp6/>

      <Footer />
    </>
  )
}

export default Subscriptions
