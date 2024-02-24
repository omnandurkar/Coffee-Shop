import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar'
import config from "../../config/coffee.json";
import "./CoffeeDetail.css"
import upward from "./upward-arrow.png"
import downward from "./down-arrow.png"
import Footer from '../../components/Footer/Footer';


function CoffeeDetail() {

    const { id } = useParams()

    const [coffeedata, setCoffeedata] = useState({})

    useEffect(() => {
        config.forEach((infoObj) => {
            if (infoObj.id == id) {
                setCoffeedata(infoObj)
            }
        })
    }, [id])

    const increaseQuantity = () => {
        const quantityElement = document.getElementById("quantity");
        let quantity = parseInt(quantityElement.innerText);
        quantityElement.innerText = ++quantity;
    }


    const decreaseQuantity = () => {
        const quantityElement = document.getElementById("quantity");
        let quantity = parseInt(quantityElement.innerText);
        quantityElement.innerText = --quantity;
    }


    return (
        <>
            <Navbar />

           


            <div className="container col-xl-12 px-0 py-5 h-75 flex justify-content-center g-font-b  ">


                <div className="row flex-lg-row align-items-center g-5 py-5 ">
                    <div className="col-10 col-sm-8 col-lg-6 py-5">

                        <div className='me-4'>
                            <img src={coffeedata.img} className='coffee-img img-fluid' />
                        </div>
                    </div>

                    <div className='col-lg-6 bg-white rounded px-5 py-5 '>
                        <div className="">
                            <div className='d-flex flex-column '>
                                <h1 className=''>
                                    {coffeedata.title}
                                </h1>
                                <b className='text-danger mb-3  '>
                                    {coffeedata.price}
                                </b>

                                <p className='description  '>
                                    {coffeedata.description}
                                </p>
                            </div>

                            <div className='d-flex flex-row  '>
                                <div className='d-flex flex-row justify-content-evenly  counter'>


                                    <b id='quantity' className='quantity'>
                                        1
                                    </b>

                                    <div className='d-flex flex-column '>
                                        <img src={upward} onClick={decreaseQuantity} className='minus' />

                                        <img src={downward} onClick={increaseQuantity} className='minus' />
                                    </div>


                                </div>

                                <div>
                                    <button
                                        type="button"
                                        className="btn btn-outline-dark    btn-md px-4 me-md-2 text-decoration-none "
                                    >Buy now
                                    </button>

                                </div>
                            </div>
                            <div className='d-flex my-3'>
                                <b className='font-bold'>Category: </b>
                                <p className='fs-6 text-capitalize '> {coffeedata.category}</p>
                            </div>

                            <div className='d-flex'>
                                <b className='font-bold'>Product Id: </b>
                                <p className='fs-6'> {coffeedata.pId}</p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

            <Footer />

        </>
    )


}

export default CoffeeDetail
