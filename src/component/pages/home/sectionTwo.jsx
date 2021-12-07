import Button from "../../common/button";
import React from "react";

function SectionTwo() {
  return (
    <div className="page-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 py-3 wow fadeInLeft">
            <h2 className="title-section">
              We're <span className="marked">ready to</span> Serve you with best
            </h2>
            <div className="divider"></div>
            <p className="mb-5">
              We provide marketing services to startups & small business to
              looking for partner for their digital media, design & dev lead
              generation & communication.
            </p>
            <Button buttonStyle="btn-primary">More Details</Button>
            <Button buttonStyle="btn-outline ml-2">See pricing</Button>
          </div>
          <div className="col-lg-6 py-3 wow zoomIn">
            <div className="img-place text-center">
              <img src="/assets/img/bg_image_3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
