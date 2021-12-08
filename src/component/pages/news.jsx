import React from "react";
import Post from "../blog/post";
import PageHeader from "../common/pageHeader";

const News = () => {
  return (
    <div>
      <PageHeader pageTitle="News" />
      <main>
        <div class="page-section">
          <div class="container">
            <div class="row">
              <Post
                author="Sam Newman"
                authorImg="/assets/img/person/person_1.jpg"
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
              <Post
                author="Sam Newman"
                authorImg="/assets/img/person/person_3.jpg"
                publishDate="23 Apr 2020"
                postTitle="What is Business Management?"
                postExcerpt="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
              />
              <Post
                author="Sam Newman"
                authorImg="/assets/img/person/person_1.jpg"
                publishDate="23 Apr 2020"
                postTitle="What is Business Management?"
                postExcerpt="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
              />
              <div class="col-12 mt-5">
                <nav aria-label="Page Navigation">
                  <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                      <a
                        class="page-link"
                        href="#"
                        tabindex="-1"
                        aria-disabled="true"
                      >
                        Previous
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item active" aria-current="page">
                      <a class="page-link" href="#">
                        2 <span class="sr-only">(current)</span>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default News;
