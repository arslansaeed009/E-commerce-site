import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-1">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/mainn.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-bolder">New Season Arrivals</h5>
              <p className="card-text fs-5 ">
               "Explore a world of endless choices, where every click opens the door to curated elegance – your premier destination for seamless online shopping experiences.".
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
