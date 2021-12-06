import React from "react";

function Feature({ src, title, text }) {
  return (
    <div className="col-md-6 col-lg-4 py-3 wow fadeInUp">
      <div className="d-flex flex-row">
        <div className="img-fluid mr-3">
          <img src={src} alt="" />
        </div>
        <div>
          <h5>{title}</h5>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Feature;
