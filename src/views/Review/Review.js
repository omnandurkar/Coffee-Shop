import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Review_cards from '../../components/cards/Review.cards';
import './Review.css';
import { Review_card } from '../../config/Review_card';


function Review() {
  return (
    <div className='body'>
      <Navbar/>
   
    <div >
      
      <p className='title'>Your Words Matter</p>
      <p className='description'>Share your experiences and feedback to help us brew excellence at Our Coffee Shop .<br/>
       Your voice guides our journey towards perfection.</p>
      <img src="https://th.bing.com/th/id/R.3c67e53d682589dcb8ce02dd3ac1e20c?rik=LeUqj%2bnBd3%2f0WA&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2017%2f11%2f17%2f239445-coffee-coffee_beans-cup.jpg&ehk=%2bEd%2bhMjaHGMrExklwM9MNbALfkaDNqvDmS67gs%2bf2OA%3d&risl=&pid=ImgRaw&r=0" className='head-img'></img>
      <h1 className='heading-1'>Featured Reviews</h1>
      <br/> <br/>
      <div className='content-1'>
      {
            Review_card.map((Review_card,index)=>{
              const{content, img, title}=Review_card
              return(<Review_cards
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
