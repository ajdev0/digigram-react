import React from "react";
import Button from "../../common/button";

function Landing() {
  return (
    <div className="page-banner home-banner">
      <div className="container h-100">
        <div className="row align-items-center h-100">
          <div className="col-lg-6 py-3 wow fadeInUp">
            <h1 className="mb-4">
              Great Companies are built on great Products
            </h1>
            <p className="text-lg mb-5">
              Ignite the most powerfull growth engine you have ever built for
              your company
            </p>

            <Button buttonStyle="border text-secondary">More Info</Button>
            <Button buttonStyle="btn-primary btn-split ml-2">
              Watch Video
              <div className="fab">
                <span className="mai-play"></span>
              </div>
            </Button>
          </div>
          <div className="col-lg-6 py-3 wow zoomIn">
            <div className="img-place">
              <img src="/assets/img/bg_image_1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
