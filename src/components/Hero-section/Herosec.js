import React from "react";
import img1 from '../Hero-section/img1.png'
import '../HomeComp1/HomeComp1.css'

function Herosec() {
  return (
    <>
      <div>
        <div className="container col-xl-8 px-0 py-5 h-75 flex justify-content-center   ">
          <div className="row flex-lg-row align-items-center g-5 py-5 ">
            <div className="col-10 col-sm-8 col-lg-6 py-5">
              <img
                src={img1}
                className="d-block mx-auto img-fluid "
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6 bg-white rounded px-5 py-5  ">
              <h1 className="display-5 fw-bolder text-body-emphasis lh-1 mb-3 text-capitalize ">
              Fuel Your Day, Brew Your Dreams
              </h1>
              <p className="fs-6">
              Indulge in the Artistry of Our Handcrafted Brews, Where Every Sip Fuels Your Dreams and Ignites Your Passion for Life
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-md-2 text-capitalize "
                >
                  Discover Our Brews
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosec;
