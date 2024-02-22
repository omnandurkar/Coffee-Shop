import React from 'react'
import "./FaQ.css"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import faqImage from "./faq.webp"

function FaQ() {
  return (
    <>
      <Navbar />
      <div>
        <div className='header-container d-flex justify-content-evenly mt-3'>
          <div>
            <h1 className='heading text-center'>Frequently Asked Questions</h1>
            <h6 className='heading-title'>Need something else? Email <br /> support@coffeeshop.com anytime.</h6>
          </div>
          <img src={faqImage} alt='' className='faq-img' />
        </div>

        <div>

          <div className="accordion accordion-flush queans-container" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed text-danger" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  1. What are your business hours?
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  We are open from 07.00am to 10.00pm every day.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed text-danger" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  2. Where is your coffee grown? How are your coffees sourced?
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                Our coffees are grown globally and sourced seasonally. Coffee grows in the equatorial belt around the world i.e. Latin America, South America, Northeast Africa and Indonesia. As specialty coffees grow at elevations similar to that of our roastery, all our coffees are sourced from the mountains and roasted in the mountains, resulting in unparalleled sweetness only achieved by altitude roasting.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed text-danger" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  3. What is the best case practice to store my coffee beans?
                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  Always store your coffee in airtight containers at cool temperature. Consume it within 1 month of opening the packet.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed text-danger" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  4. How much time will it take for us to deliver your coffee?
                </button>
              </h2>
              <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  We strive to ship our products within 24 hours of receiving your order. After that, it takes 2-3 working days for the shipment to reach you. The delivery may take a longer time in remote areas and tier 3 cities.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed text-danger" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                  5. Where can I write a review for you?
                </button>
              </h2>
              <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  You can leave your valuable feedback on our website.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed text-danger" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                  6. What kind of payments do we accept?
                </button>
              </h2>
              <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  We accept all kinds of payment methods. You can pay directly from your bank with UPI, credit and debit cards.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed text-danger" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                  7. Why is your coffee so sweet?
                </button>
              </h2>
              <div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                Due to less atmospheric pressure from the 6000’ altitude at our roasting headquarters in Lake Tahoe, we are able to begin the sugar caramelization phase of roasting sooner, as well as, stay in it longer. We cannot create more natural sweetness, but we can preserve it. It’s both a function of our roasting style and altitude advantage.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed text-danger" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                  8. How is your coffee a more natural fuel source?
                </button>
              </h2>
              <div id="flush-collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                Coffee’s composition is that of any other agricultural product: fats, carbs, proteins. Unlike other agriculture products, coffee also has organic material and alkaloids that make it a great fuel source. Naturally occurring caffeine, compared to synthetic found in energy drinks, as well as, trace electrolytes make coffee the perfect fuel source.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default FaQ
