import React from 'react';
import Image1 from "./Home1.jpg";
import './HomeComp1.css'

export default function HomeComp1() {
  return (
    <div className=''>

      {/* <div className="b-example-divider "></div> */}

      <div className=" col-xxl-11 px-0 py-5 h-100 flex justify-content home-comp-1  ">
        <div className="row flex-lg-row align-items-center g-5 py-5 ">
          <div className="col-10 col-sm-8 col-lg-6 py-5">
            <img src={Image1} className="d-block mx-lg-auto img-fluid opacity-0 " alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div className="col-lg-6 bg-white rounded  text-section ">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1>
            <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
