import React from "react";
import { Link, useLocation } from "react-router-dom";

function Post({ author, authorImg, publishDate, postTitle, postExcerpt }) {
  const location = useLocation();
  let postClass = ["col-lg-3 py-3 wow fadeInUp", "col-lg-4 py-3"];
  if (location.pathname == "/blog") {
    postClass = postClass[1];
  } else {
    postClass = postClass[0];
  }
  return (
    <div className={`col-md-6 ${postClass}`}>
      <div className="card-blog">
        <div className="header">
          {authorImg && (
            <div className="avatar">
              <img src={authorImg} alt="" />
            </div>
          )}
          <div className="entry-footer">
            <div className="post-author">{author}</div>
            <Link to="" className="post-date">
              {publishDate}
            </Link>
          </div>
        </div>
        <div className="body">
          <div className="post-title">
            <Link to="/blog-single">{postTitle}</Link>
          </div>
          <div className="post-excerpt">{postExcerpt}</div>
        </div>
        <div className="footer">
          <Link to="/blog-single">
            Read More <span className="mai-chevron-forward text-sm"></span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Post;
