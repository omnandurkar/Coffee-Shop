import React from "react";
import Cards from "../../components/cards/Cards";
import config from "../../config/coffee.json";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Herosec from "../../components/Hero-section/Herosec";

function AllCoffee() {
  return (
    <div className="  ">
      <Navbar />
      <Herosec />

      <h2 className="text-center fs-24 mx-2  ">Menu</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mx-2 ">
        {config.map((coffeedata, index) => {
          const { img, title, content } = coffeedata;
          return (
            <div className="col">
              <Cards img={img} title={title} content={content} />
            </div>
          );
        })}
      </div>

      {/*  */}

      <div class="px-4 py-5 my-5 text-center">
        {/* <img
          class="d-block mx-auto mb-4"
          src="../assets/brand/bootstrap-logo.svg"
          alt=""
          width="72"
          height="57"
        /> */}
        <h1 class="display-5 fw-bolder text-body-emphasis text-capitalize ">Coffee shop</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world's most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
              Contact
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              Secondary
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AllCoffee;
