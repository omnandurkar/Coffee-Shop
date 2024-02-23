import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import config from "../../config/Detail.json";

function CoffeeDetail() {

    {
        config.map((coffeedata, index) => {
        const {img} = coffeedata;
    
    })}
    return (
        <>
            <Navbar />

            <div className='sub-header-container d-flex'>

                <div className=''>

                </div>
                <div>
                    
                        return (
                            <div className="col">
                                 <img src={img} />
                            </div>
                        );
                    
                </div>
            </div>
        </>
    )
}

export default CoffeeDetail
