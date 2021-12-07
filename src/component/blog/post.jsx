import React from "react";
import { Link } from "react-router-dom";

function Post({ author, authorImg, publishDate, postTitle, postExcerpt }) {
  return (
    <div class="col-md-6 col-lg-3 py-3 wow fadeInUp">
      <div class="card-blog">
        <div class="header">
          {authorImg && (
            <div class="avatar">
              <img src={authorImg} alt="" />
            </div>
          )}
          <div class="entry-footer">
            <div class="post-author">{author}</div>
            <Link to="" class="post-date">
              {publishDate}
            </Link>
          </div>
        </div>
        <div class="body">
          <div class="post-title">
            <Link to="/blog-single">{postTitle}</Link>
          </div>
          <div class="post-excerpt">{postExcerpt}</div>
        </div>
        <div class="footer">
          <Link to="/blog-single">
            Read More <span class="mai-chevron-forward text-sm"></span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Post;
