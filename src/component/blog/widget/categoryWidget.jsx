import React from "react";
import { Link } from "react-router-dom";
function CategoryWidget() {
  return (
    <div className="widget-box">
      <h4 className="widget-title">Category</h4>
      <div className="divider"></div>

      <ul className="categories">
        <li>
          <Link to="#">LifeStyle</Link>
        </li>
        <li>
          <Link to="#">Food</Link>
        </li>
        <li>
          <Link to="#">Healthy</Link>
        </li>
        <li>
          <Link to="#">Sports</Link>
        </li>
        <li>
          <Link to="#">Entertainment</Link>
        </li>
      </ul>
    </div>
  );
}

export default CategoryWidget;
