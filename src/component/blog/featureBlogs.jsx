import React from "react";
import Post from "./post";

function FeatureBlogs() {
  return (
    <div class="page-section border-top">
      <div class="container">
        <div class="text-center wow fadeInUp">
          <div class="subhead">Our Blog</div>
          <h2 class="title-section">
            Read our latest <span class="marked">News</span>
          </h2>
          <div class="divider mx-auto"></div>
        </div>
        <div class="row my-5 card-blog-row">
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
      </div>
    </div>
  );
}

export default FeatureBlogs;
