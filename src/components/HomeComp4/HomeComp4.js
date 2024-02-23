import React from 'react';
import Image1 from './coffee-cup-1.png';
import './HomeComp4.css'
import { Link } from 'react-router-dom';

export default function HomeComp4() {
    return (
        <div className="mx-auto col-xxl-12 container px-2  py-5 g-font-b">

            <div className="row justify-content-center align-items-center g-5 py-5">
                <div className="col-4 col-lg-2">
                    <h4 className=" fw-bold text-body-emphasis ">More Than</h4>
                    <h1 className="g-font-b num opacity-75 mb-3 ">6400</h1>
                    <h4 className=" fw-bold text-body-emphasis lh-1 mb-3">Customers Trust Us</h4>
                    
                </div>

                <div className="col-6 col-lg-3 ">
                    <img src={Image1} className="d-block mx-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>
                <div className="col-8 col-lg-4">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 g-font-b">Become our dealer</h1>
                    <p className="g-font-s ">Join our network and become a dealer of excellence, bringing our exceptional coffee experience to even more enthusiasts in your area.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-dark btn-lg px-4 me-md-2 g-font-b">Become  A Dealer</button>
                        <Link to='/contact'>
                        <button type="button" className="btn btn-outline-dark btn-lg px-4 g-font-b">Contact Us</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
