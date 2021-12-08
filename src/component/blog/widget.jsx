import React from "react";
import { Link } from "react-router-dom";
import SearchWidget from "./searchWidget";
function Widget() {
  return (
    <div class="widget">
      <div class="widget-box">
        <SearchWidget />
      </div>

      <div class="widget-box">
        <h4 class="widget-title">Category</h4>
        <div class="divider"></div>

        <ul class="categories">
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
    </div>
  );
}

export default Widget;
