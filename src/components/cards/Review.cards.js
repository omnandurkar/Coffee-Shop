import React from "react";
import '../cards/Review_cards.css'


function Cards({ title, content, img }) {
  return (
    <div className="card-body">
      <div className="card ">
        
        
          <p className="card-text ">
            "{content}"</p>
            <br/>
          <div className="p-1 rounded   ">
          <img
            src={img} className="profile-image"
          ></img>
        </div>
          
          <p className=" title card-text-bg-danger">-{title}</p>
            {/* <small class="text-body-secondary">9 mins</small> */}
          </div>
        </div>
      
   
  );
}

export default Cards;
