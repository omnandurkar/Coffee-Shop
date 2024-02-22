import React from "react";
import "../cards/Cards.css";

function Cards({ title, content, img }) {
  return (
    <>
      <div className=" rounded-1  shadow-sm m-1 p-1 w-100  bg-light  ">
        <div className="img-div ">
          <img
            src={img}
            className="  rounded m-1 w-100 w-200   "
          ></img>
        </div>

        <div className=" p-2">
          <p className=" fw-bold  fs-4">{title}</p>
          <p className=" p-2 fs-7">{content.substring(0 ,200  )}{content.length > 200? '...' :''}</p>
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
