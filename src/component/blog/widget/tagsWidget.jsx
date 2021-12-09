import React from "react";
import { Link } from "react-router-dom";

function TagsWidget() {
  return (
    <div class="widget-box">
      <h4 class="widget-title">Tag Cloud</h4>
      <div class="divider"></div>

      <div class="tag-clouds">
        <Link to="#" class="tag-cloud-link">
          Projects
        </Link>
        <Link to="#" class="tag-cloud-link">
          Design
        </Link>
        <Link to="#" class="tag-cloud-link">
          Travel
        </Link>
        <Link to="#" class="tag-cloud-link">
          Brand
        </Link>
        <Link to="#" class="tag-cloud-link">
          Trending
        </Link>
        <Link to="#" class="tag-cloud-link">
          Knowledge
        </Link>
        <Link to="#" class="tag-cloud-link">
          Food
        </Link>
      </div>
    </div>
  );
}

export default TagsWidget;
