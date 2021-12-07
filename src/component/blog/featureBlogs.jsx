import React from "react";
import Post from "./post";

function FeatureBlogs() {
  return (
    <div className="page-section border-top">
      <div className="container">
        <div className="text-center wow fadeInUp">
          <div className="subhead">Our Blog</div>
          <h2 className="title-section">
            Read our latest <span className="marked">News</span>
          </h2>
          <div className="divider mx-auto"></div>
        </div>
        <div className="row my-5 card-blog-row">
          <Post
            author="Sam Newman"
            publishDate="23 Apr 2020"
            postTitle="What is Business Management?"
          />
          <Post
            author="Sam Newman"
            authorImg="/assets/img/person/person_1.jpg"
            publishDate="23 Apr 2020"
            postTitle="What is Business Management?"
            postExcerpt="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Post
            author="Sam Newman"
            authorImg="/assets/img/person/person_3.jpg"
            publishDate="23 Apr 2020"
            postTitle="What is Business Management?"
            postExcerpt="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Post
            author="Sam Newman"
            authorImg="/assets/img/person/person_2.jpg"
            publishDate="23 Apr 2020"
            postTitle="What is Business Management?"
            postExcerpt="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          />
        </div>
        <div className="text-center">
          <a href="blog.html" className="btn btn-outline-primary rounded-pill">
            Discover More
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeatureBlogs;
