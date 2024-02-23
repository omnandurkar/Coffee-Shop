import React from 'react'
import "./Subscriptions.css"
import Navbar from '../../components/Navbar/Navbar'
import Subimg1 from "./subscribe-and-save.webp"

function Subscriptions() {
  return (
    <>
      <Navbar />
      <div className='sub-header-container'>
        <div>
          <img src={Subimg1} alt='' className='sub-img1' />
        </div>
        Subscriptions
      </div>
    </>
  )
}

export default Subscriptions
