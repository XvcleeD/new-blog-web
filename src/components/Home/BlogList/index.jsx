import React from "react";
import BlogItem from "./BlogItem/index";
import "./style.css";

export const BlogList = ({ blogs }) => (
  <div className="blogList-wrap">
    {blogs.map((blog) => (
      <BlogItem blog={blog} key={blog.id} />
    ))}
  </div>
);
