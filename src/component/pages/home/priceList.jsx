import React from "react";
import Price from "./price";

function PriceList() {
  return (
    <div class="page-section border-top">
      <div class="container">
        <div class="text-center wow fadeInUp">
          <h2 class="title-section">Pricing Plan</h2>
          <div class="divider mx-auto"></div>
        </div>

        <div class="row justify-content-center">
          <Price planTitle="Membership" planPrice="30" animation="fadeInLeft" />
          <Price
            planTitle="Dedicated"
            planPrice="60"
            planLabel="Best"
            activey
            animation="fadeInUp"
          />
          <Price planTitle="Private" planPrice="90" animation="fadeInRight" />
        </div>
      </div>
    </div>
  );
}

export default PriceList;
