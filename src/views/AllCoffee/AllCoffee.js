import React from 'react'
import Cards from '../../components/cards/Cards'
import config from '../../config/coffee.json'

function AllCoffee() {
  return (
    <div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div className='col'> 
      {
        config.map((coffeedata,index)=>{
          const {img,title,content}=coffeedata
          return(
            <Cards img={img} title={title} content={content} />

  
          )
  
        })
      }

      
      </div>

      </div>
    </div>
  )
}

export default AllCoffee
