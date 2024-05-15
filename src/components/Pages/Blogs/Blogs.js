import React from "react";
import "../../../styles/Blogs.css";
import { useMobile } from "../../globalComponents/MobileContext/IsMobileContext";
const Blog = () => {
  const { isMobile } = useMobile();

  return (
    <div style={{ marginTop: "10rem", background: "#FFF" }}>
      <div className="BlogHeader">
        <p className="link">
          <a href="/">Home</a>
          {" > "}Blogs
        </p>
        <div className="header-content">
          <h1 className="heading-about">Welcome to Our Blogs</h1>
        </div>
      </div>
    </div>
  );
};

export default Blog;
