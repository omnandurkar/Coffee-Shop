import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import config from "../../config/Detail.json";
import img from "./Espresso_0.avif"

function CoffeeDetail() {

    {
        config.map((coffeedata, index) => {
            const { img } = coffeedata;

        })
    }
    return (
        <>
            <Navbar />

            <div className='sub-header-container d-flex'>

                <div className=''>

                </div>
                <div>


                    <div className="col">
                        <img src={img} />
                    </div>


                </div>
            </div>
        </>
    )
}

export default CoffeeDetail
