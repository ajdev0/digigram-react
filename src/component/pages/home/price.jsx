import React from "react";
import Button from "../../common/button";

function Price({ planTitle, planPrice, planLabel, activey, animation }) {
  let active = activey;
  if (active == true) {
    active = "active";
  }
  return (
    <div className={`col-12 col-lg-auto py-3 wow ${animation}`}>
      <div className={`card-pricing ${active}`}>
        <div className="header">
          {planLabel && <div className="price-labled">{planLabel}</div>}
          <div className="price-icon">
            <span className="mai-people"></span>
          </div>
          <div className="price-title">{planTitle}</div>
        </div>
        <div className="body py-3">
          <div className="price-tag">
            <span className="currency">$</span>
            <h2 className="display-4">{planPrice}</h2>
            <span className="period">/monthly</span>
          </div>
          <div className="price-info">
            <p>Choose the plan that right for you</p>
          </div>
        </div>
        <div className="footer">
          <Button buttonStyle="btn-outline rounded-pill">Choose Plan</Button>
        </div>
      </div>
    </div>
  );
}

export default Price;
