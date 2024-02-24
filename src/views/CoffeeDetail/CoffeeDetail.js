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

            <div className='sub-header-container d-flex flex-row justify-content-around '>

                <div className=''>

                    <h1>Here is your clas</h1>

                </div>

                <div>

                    <div className="">
                        <img className='h-4' src={img} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default CoffeeDetail
