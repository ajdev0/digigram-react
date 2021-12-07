import React from "react";

function CarouselItem({ img, about, name, postion }) {
  return (
    <div className="item">
      <div className="row align-items-center">
        <div className="col-md-6 py-3">
          <div className="testi-image">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="col-md-6 py-3">
          <div className="testi-content">
            <p>{about}</p>
            <div className="entry-footer">
              <strong>{name}</strong> &mdash;
              <span className="text-grey">{postion}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;
