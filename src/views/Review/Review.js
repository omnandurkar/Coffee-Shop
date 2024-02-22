import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Cards from '../../components/cards/Review.cards';
import './Review.css';
import { Review_card } from '../../config/Review_cards';


function Review() {
  return (
    <div className='body'>
      <Navbar/>
   
    <div >
      
      <h1 className="heading">Your Words Matter</h1>
      <img src="https://img.freepik.com/premium-photo/cup-coffee-latte-with-heart-shape-coffee-beans-old-wooden-table-ai-generative_985774-15.jpg" className='head-img'></img>
      <h1 className='heading-1'>Featured Reviews</h1>
      <br/> <br/>
      <div className='content'>
      {
            Review_card.map((Review_card,index)=>{
              const{content, img, title}=Review_card
              return(<Cards
              content={content}
              img={img}
              title={title}
              />)
            })
          }
          </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Review
