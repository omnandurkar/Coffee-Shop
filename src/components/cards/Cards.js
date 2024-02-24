import React from "react";
import { Link } from "react-router-dom";
import "../cards/Cards.css";

function Cards({ id, title, content, img }) {
  return (
    <>
      <div className=" rounded-1  shadow-lg m-1 p-1 w-100  bg-light hover ">
        <div className="img-div ">
          <img src={img} className="  rounded m-1 w-100 w-200   "></img>
        </div>

        <div className=" p-2">
          <p className=" fw-bold  fs-4">{title}</p>
          <p className=" p-2 fs-7">
            {content.substring(0, 200)}
            {content.length > 200 ? "..." : ""}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-outline-dark    btn-md px-4 me-md-2 text-decoration-none "
              >
                <Link className="text-decoration-none text-" to={`/menu/${id}`}>View More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
