import React from 'react'
import Cards from '../../components/cards/Cards'
import config from '../../config/coffee.json'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'


function AllCoffee() {
  return (
    <div className='  '>
      <Navbar/>
      
      <h2 className='text-center fs-24 mx-2 mt-5 '>Menu</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mx-2 ">
      
      {
        config.map((coffeedata,index)=>{
          const {img,title,content}=coffeedata
          return(
            <div className='col'> 
            <Cards img={img} title={title} content={content} />
            </div>

          )
  
        })
      }

      
      

      </div>
      <Footer/>
    </div>
  )
}

export default AllCoffee
