import React from 'react';
import Image2 from './Home2.jpg';
import './HomeComp2.css'

export default function HomeComp2() {
    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row justify-content-center align-items-center g-5 py-5">

                <div className="col-lg-4 text-end  list1" >
                    <h4>Turkish Coffee</h4>
                    <p>This is the perfect place to find a nice and cozy spot to sip some.</p>
                    <h4>Croissant</h4>
                    <p>This is the perfect place to find a nice and cozy spot to sip some.</p>
                    <h4>French Toast</h4>
                    <p>This is the perfect place to find a nice and cozy spot to sip some.</p>
                    <h4>Pancakes</h4>
                    <p>This is the perfect place to find a nice and cozy spot to sip some.</p>
                    
                </div>

                <div className="col-lg-4 text-center">
                    <img src={Image2} className="d-block mx-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>

                <div className="col-lg-4 text-stat list2" >
                    <h4>Coffee To Go</h4>
                    <p>This is the perfect place to find a nice and cozy spot to sip some.</p>
                    <h4>Morning Coffee</h4>
                    <p>This is the perfect place to find a nice and cozy spot to sip some.</p>
                    <h4>Espresso</h4>
                    <p>This is the perfect place to find a nice and cozy spot to sip some.</p>
                    <h4>Chocolate</h4>
                    <p>This is the perfect place to find a nice and cozy spot to sip some.</p>
                </div>

            </div>
        </div>
    )
}
