import React from 'react';
import Login from '../Login/Login';
import Image1 from "./slider_1.png";

export default function LoginPage() {
  return (
    <>
    
    <div className=" home-comp-1 w-100 bg-white g-font-b">
            <div className="container col-xl-8 px-0 py-5 h-75 flex justify-content-center  ">


              <div className="row flex-lg-row align-items-center g-5 py-5 ">
                <div className="col-10 col-sm-8 col-lg-6 py-5">
                  <img
                  
                    src={Image1}
                    className="d-block mx-auto img-fluid float "
                    alt="Bootstrap Themes"
                    width="700"
                    height="500"
                    loading="lazy"
                  />
                </div>
                <div className="col-lg-6 bg-white rounded px-5 py-5  ">
                  <h1 className="display-5 fw-bolder text-body-emphasis lh-1 mb-3 text-capitalize ">
                    Login to Fuel Your Day
                  </h1>
                  <p className="fs-6">
                    Indulge in the Artistry of Our Handcrafted Brews, Where Every Sip Fuels Your Dreams and Ignites Your Passion for Life
                  </p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    
                  <Login/>

                    
                    

                  </div>
                </div>
              </div>
            </div>
          </div>

          

          <>
          
         
          
          </>
    
    
    </>
  )
}
