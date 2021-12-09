import React from "react";
import { Link } from "react-router-dom";
function RecentPostWidget() {
  return (
    <div class="widget-box">
      <h4 class="widget-title">Recent Post</h4>
      <div class="divider"></div>

      <div class="blog-item">
        <Link class="post-thumb" to="">
          <img src="/assets/img/blog/blog-1.jpg" alt="" />
        </Link>
        <div class="content">
          <h6 class="post-title">
            <Link to="#">Even the all-powerful Pointing has no control</Link>
          </h6>
          <div class="meta">
            <Link to="#">
              <span class="mai-calendar"></span> July 12, 2018
            </Link>
            <Link to="#">
              <span class="mai-person"></span> Admin
            </Link>
            <Link to="#">
              <span class="mai-chatbubbles"></span> 19
            </Link>
          </div>
        </div>
      </div>

      <div class="blog-item">
        <Link class="post-thumb" to="">
          <img src="/assets/img/blog/blog-2.jpg" alt="" />
        </Link>
        <div class="content">
          <h6 class="post-title">
            <Link to="#">Even the all-powerful Pointing has no control</Link>
          </h6>
          <div class="meta">
            <Link to="#">
              <span class="mai-calendar"></span> July 12, 2018
            </Link>
            <Link to="#">
              <span class="mai-person"></span> Admin
            </Link>
            <Link to="#">
              <span class="mai-chatbubbles"></span> 19
            </Link>
          </div>
        </div>
      </div>

      <div class="blog-item">
        <Link class="post-thumb" to="">
          <img src="/assets/img/blog/blog-3.jpg" alt="" />
        </Link>
        <div class="content">
          <h6 class="post-title">
            <Link to="#">Even the all-powerful Pointing has no control</Link>
          </h6>
          <div class="meta">
            <Link to="#">
              <span class="mai-calendar"></span> July 12, 2018
            </Link>
            <Link to="#">
              <span class="mai-person"></span> Admin
            </Link>
            <Link to="#">
              <span class="mai-chatbubbles"></span> 19
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentPostWidget;
