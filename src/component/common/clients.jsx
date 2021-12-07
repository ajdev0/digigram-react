import React from "react";
import Client from "./client";

function Clients() {
  return (
    <div class="page-section client-section">
      <div class="container-fluid">
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 justify-content-center">
          <Client image="/assets/img/clients/airbnb.png" />
          <Client image="/assets/img/clients/google.png" />
          <Client image="/assets/img/clients/stripe.png" />
          <Client image="/assets/img/clients/paypal.png" />
          <Client image="/assets/img/clients/mailchimp.png" />
        </div>
      </div>
    </div>
  );
}

export default Clients;
