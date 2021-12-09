import React from "react";
import CommentForm from "./commentForm";
import PostContent from "./postContent";
import Widget from "./widget/widget";

function BlogSingle() {
  return (
    <main>
      <div class="page-section pt-5">
        <div class="container">
          <nav aria-label="Breadcrumb">
            <ul class="breadcrumb p-0 mb-0 bg-transparent">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="blog.html">Blog</a>
              </li>
              <li class="breadcrumb-item active">
                Second divided from form fish beastr
              </li>
            </ul>
          </nav>

          <div class="row">
            <div class="col-lg-8">
              <PostContent
                thumnail="/assets/img/blog/blog-1.jpg"
                authorImage="/assets/img/person/person_1.jpg"
                authorName="Stephen Doe"
                postTitle="Second divided from form fish beastr"
                publishDate="March 10, 2020"
                commentCount="4"
                postBody={` <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui saepe aliquid perferendis neque eos commodi nulla, veniam ex mollitia, quod dignissimos id exercitationem corporis. At optio laudantium suscipit in nam!</p>
                <blockquote class="quote">“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
                <span class="author">― Marilyn Monroe</span></blockquote>
                <p>Praesent vel mi bibendum, finibus leo ac, condimentum arcu. Pellentesque sem ex, tristique sit amet suscipit in, mattis imperdiet enim. Integer tempus justo nec velit fringilla, eget eleifend neque blandit. Sed tempor magna sed congue auctor. Mauris eu turpis eget tortor ultricies elementum. Phasellus vel placerat orci, a venenatis justo. Phasellus faucibus venenatis nisl vitae vestibulum. Praesent id nibh arcu. Vivamus sagittis accumsan felis, quis vulputate</p>
              `}
              />
              <CommentForm />
            </div>
            <div class="col-lg-4">
              <Widget />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BlogSingle;
