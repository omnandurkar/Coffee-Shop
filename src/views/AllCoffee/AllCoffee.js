import React from 'react'
import Cards from '../../components/cards/Cards'
import config from '../../config/coffee.json'


function AllCoffee() {
  return (
    <div className='bg-cream  '>
      <h2 className='text-center fs-24 mx-2'>Menu</h2>
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
    </div>
  )
}

export default AllCoffee
