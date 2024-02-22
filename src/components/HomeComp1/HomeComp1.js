import React from 'react';
// import Image1 from "./Home1.jpg";
import Image2 from './slider_1.png';
import Image3 from './slider_4.png';
import Image4 from './slider_5.png';
import './HomeComp1.css'

export default function HomeComp1() {
  return (
    <div className=''>

      <div className="containerrrr home-comp-1">


        <div className="  border-top ">
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2000">


                <div className="container col-xxl-8 px-4 py-5">
                  <div className="row flex-lg-row align-items-center g-5 py-5">


                    <div className="col-10 col-sm-8 col-lg-6">
                      <img src={Image2}
                        className="d-block mx-lg-auto img-fluid rounded " alt="Doraemon Gadget" width="700"
                        height="500" loading="lazy" />
                    </div>

                    <div className="col-lg-6">
                      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Espresso</h1>
                      <p className="lead">Experience the bold kick of our meticulously brewed espresso, crafted with precision for an intense and satisfying caffeine punch..</p>
                      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <a  href="#" className="text-decoration-none ">
                          <button type="button" className="btn btn-outline-dark  btn-lg px-4 me-md-2">View
                            More</button>
                        </a>

                      </div>
                    </div>

                  </div>
                </div>


              </div>
              <div className="carousel-item" data-bs-interval="2000">

                <div className="container col-xxl-8 px-4 py-5">
                  <div className="row flex-lg-row align-items-center g-5 py-5">

<div className="col-10 col-sm-8 col-lg-6">
                      <img src={Image3} className="d-block mx-lg-auto img-fluid rounded "
                        alt="Doraemon Gadget" width="700" height="500" loading="lazy" />
                    </div>

                    <div className="col-lg-6">
                      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Cappuccino</h1>
                      <p className="lead">Indulge in the velvety smoothness of our cappuccino, where perfectly balanced espresso meets creamy steamed milk and frothy foam for a true Italian treat.</p>
                      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <a  href="#" className="text-decoration-none ">
                          <button type="button" className="btn btn-outline-dark  btn-lg px-4 me-md-2">View
                            More</button>
                        </a>

                      </div>
                    </div>

                    

                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">

                <div className="container col-xxl-8 px-4 py-5">
                  <div className="row flex-lg-row align-items-center g-5 py-5">
                    
<div className="col-10 col-sm-8 col-lg-6">
                      <img src={Image4} className="d-block mx-lg-auto img-fluid rounded "
                        alt="Doraemon Gadget" width="700" height="500" loading="lazy" />
                    </div>

                    <div className="col-lg-6">
                      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3"> Latte</h1>
                      <p className="lead">Savor the creamy richness of our lattes, expertly crafted with a delicate balance of espresso and steamed milk, offering a comforting and satisfying sip every time.
                      </p>
                      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <a href="#" className="text-decoration-none ">
                          <button type="button" className="btn btn-outline-dark  btn-lg px-4 me-md-2">View
                            More</button>
                        </a>

                      </div>
                    </div>

                    

                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next">
              <span className="carousel-control-next-icon " aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

      </div>



    </div>
  )
}
