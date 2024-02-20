import React from "react";
import '../cards/Cards.css'

function Cards({ title, content, img }) {
  return (
    <>
      <div className="card shadow-sm  w-50 h-50 m-2 p-1  ">
        <div className="p-1 rounded bg-cream  ">
          <img
            src={img} className="w-100 ` rounded "
          ></img>
        </div>
        <div className="card-body">
          <p className="card-text-bg-danger">{title}</p>
          <p className="card-text ">{content}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">
                view more
              </button>
            </div>
            {/* <small class="text-body-secondary">9 mins</small> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
