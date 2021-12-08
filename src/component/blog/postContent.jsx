import React from "react";
import { Link } from "react-router-dom";

function PostContent({
  thumnail,
  authorImage,
  authorName,
  postTitle,
  publishDate,
  commentCount,
  postBody,
}) {
  return (
    <div className="blog-single-wrap">
      <div className="header">
        <div className="post-thumb">
          <img src={thumnail} alt="" />
        </div>
        <div className="meta-header">
          <div className="post-author">
            <div className="avatar">
              <img src={authorImage} alt="" />
            </div>
            by <Link to="/">{authorName}</Link>
          </div>

          <div className="post-sharer">
            <Link to="/" className="btn social-facebook">
              <span className="mai-logo-facebook-f"></span>
            </Link>
            <Link to="/" className="btn social-twitter">
              <span className="mai-logo-twitter"></span>
            </Link>
            <Link to="/" className="btn social-linkedin">
              <span className="mai-logo-linkedin"></span>
            </Link>
            <Link to="/" className="btn">
              <span className="mai-mail"></span>
            </Link>
          </div>
        </div>
      </div>
      <h1 className="post-title">{postTitle}</h1>
      <div className="post-meta">
        <div className="post-date">
          <span className="icon">
            <span className="mai-time-outline"></span>
          </span>{" "}
          <Link to="/">{publishDate}</Link>
        </div>
        <div className="post-comment-count ml-2">
          <span className="icon">
            <span className="mai-chatbubbles-outline"></span>
          </span>{" "}
          <Link to="/">{commentCount} Comments</Link>
        </div>
      </div>
      <div className="post-content">{postBody}</div>
    </div>
  );
}

export default PostContent;
