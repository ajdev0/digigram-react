import React from "react";

function Client({ image }) {
  return (
    <div class="item wow zoomIn">
      <img src={image} alt="" />
    </div>
  );
}

export default Client;
