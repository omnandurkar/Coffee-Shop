import React from 'react';
import Image1 from './coffe_logo2.png';
import Image2 from './bakery.png';
import Image3 from './brandit.png';
import Image4 from './cupcake.png';
import Image5 from './vintage.png';
import Image6 from './restaurants.png';


export default function HomeComp6() {
  return (
    <>


    <div className="container px-4 py-5" id="icon-grid">
        {/* <h2 className="pb-2 border-bottom"></h2> */}
        

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-4 py-5 g-font-b">
            <div className="col d-flex align-items-start">
                <img src={Image1} className='mx-4' />
                
            </div>
            <div className="col d-flex align-items-start">
                <img src={Image2} className='mx-4' />
                
            </div>
            <div className="col d-flex align-items-start">
                <img src={Image3} className='mx-4' />
                
            </div>
            <div className="col d-flex align-items-start">
                <img src={Image4} className='mx-4' />
                
            </div>
            <div className="col d-flex align-items-start">
                <img src={Image5} className='mx-4' />
                
            </div>
            <div className="col d-flex align-items-start">
                <img src={Image6} className='mx-4' />
                
            </div>

        </div>

        <h2 className="pb-2 border-bottom"></h2>
    </div>
</>
  )
}
