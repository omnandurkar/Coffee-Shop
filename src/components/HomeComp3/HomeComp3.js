import React from 'react';
import Image1 from './about-icon-1.png';
import Image2 from './about-icon-2.png';
import Image3 from './about-icon-3.png';
import Image4 from './about-icon-4.png';
import { Link } from 'react-router-dom';
import './HomeComp3.css'

export default function HomeComp3() {
    return (
        <div className='home3-bg'>

            <div className="container px-4 py-5 g-font-b ">
                <h3 className="pb-2 border-bottom ">Who We Are</h3>

                <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                    <div className="col d-flex flex-column align-items-start gap-2">
                        <h1 className="fw-bold ">About Coffee Shop</h1>
                        <p className="text-body-secondary">Step into our coffee haven where every sip is a journey of flavor and every moment is cherished. At Coffee Shop, we're dedicated to crafting the perfect brew and creating lasting memories."</p>
                        <Link to="/contact" className="btn btn-outline-dark btn-lg ">Know More</Link>
                    </div>

                    <div className="col">
                        <div className="row row-cols-1 row-cols-sm-2 g-4">
                            <div className="col d-flex flex-column gap-2">
                                <div className="feature-icon-small d-inline-flex align-items-center justify-content-start  fs-4 rounded-3">
                                    <img src={Image1} />
                                </div>
                                <h4 className="fw-semibold mb-0 text-body-emphasis">The best World sorts</h4>
                                <p className="text-body-secondary">Explore the globe in a single sip with our handpicked selection of the world's finest coffee varieties.</p>
                            </div>

                            <div className="col d-flex flex-column gap-2">
                                <div className="feature-icon-small d-inline-flex align-items-center justify-content-start  fs-4 rounded-3">
                                    <img src={Image2} />
                                </div>
                                <h4 className="fw-semibold mb-0 text-body-emphasis">Many points of sale</h4>
                                <p className="text-body-secondary">Conveniently find our exceptional brews across multiple locations, ensuring that great coffee is always within reach.</p>
                            </div>

                            <div className="col d-flex flex-column gap-2">
                                <div className="feature-icon-small d-inline-flex align-items-center justify-content-start  fs-4 rounded-3">
                                    <img src={Image3} />
                                </div>
                                <h4 className="fw-semibold mb-0 text-body-emphasis">Professional baristas</h4>
                                <p className="text-body-secondary">Elevating your coffee experience with expertise and passion, our professional baristas craft perfection in every cup.</p>
                            </div>

                            <div className="col d-flex flex-column gap-2">
                                <div className="feature-icon-small d-inline-flex align-items-center justify-content-start  fs-4 rounded-3">
                                    <img src={Image4} />
                                </div>
                                <h4 className="fw-semibold mb-0 text-body-emphasis">24/7 fast delivery</h4>
                                <p className="text-body-secondary">Enjoy the convenience of round-the-clock service with our fast delivery, ensuring your favorite brews are just a click away.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
