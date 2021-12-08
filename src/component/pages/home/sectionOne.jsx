import React from "react";

function SectionOne() {
  return (
    <div className="page-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 py-3 wow zoomIn">
            <div className="img-place text-center">
              <img src="assets/img/bg_image_2.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 py-3 wow fadeInRight">
            <h2 className="title-section">
              We're <span className="marked">Dynamic</span> Team of Creatives
              People
            </h2>
            <div className="divider"></div>
            <p>
              We provide marketing services to startups & small business to
              looking for partner for their digital media, design & dev lead
              generation & communication.
            </p>

            <a href="#" className="btn btn-primary">
              More Details
            </a>
            <a href="#" className="btn btn-outline border ml-2">
              Success Stories
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
