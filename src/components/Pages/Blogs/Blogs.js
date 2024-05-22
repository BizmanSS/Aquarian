import React from "react";
import "../../../styles/Blogs.css";
import BlogDummy from "../../../Assets/blogDummyImage.png";
import sideBlog from "../../../Assets/sideBlogDummy.png";
const BlogPosts = () => {
  const posts = [
    {
      title: "New Year Edition: Top UI/UX Design trends rushing to us in 2021",
      description:
        "The Federal Skilled Worker (FSW) program is one of the three programs contained within Canada's Express",
      date: "24 December",
      image: BlogDummy,
      path: "/blogs/innerBlog",
    },
    {
      title: "New Year Edition: Top UI/UX Design trends rushing to us in 2021",
      description:
        "The Federal Skilled Worker (FSW) program is one of the three programs contained within Canada's Express",
      date: "24 December",
      image: BlogDummy,
      path: "/blogs/innerBlog",
    },
    {
      title: "New Year Edition: Top UI/UX Design trends rushing to us in 2021",
      description:
        "The Federal Skilled Worker (FSW) program is one of the three programs contained within Canada's Express",
      date: "24 December",
      image: BlogDummy,
      path: "/blogs/innerBlog",
    },
    {
      title: "New Year Edition: Top UI/UX Design trends rushing to us in 2021",
      description:
        "The Federal Skilled Worker (FSW) program is one of the three programs contained within Canada's Express",
      date: "24 December",
      image: BlogDummy,
      path: "/blogs/innerBlog",
    },
    {
      title: "New Year Edition: Top UI/UX Design trends rushing to us in 2021",
      description:
        "The Federal Skilled Worker (FSW) program is one of the three programs contained within Canada's Express",
      date: "24 December",
      image: BlogDummy,
      path: "/blogs/innerBlog",
    },
    {
      title: "New Year Edition: Top UI/UX Design trends rushing to us in 2021",
      description:
        "The Federal Skilled Worker (FSW) program is one of the three programs contained within Canada's Express",
      date: "24 December",
      image: BlogDummy,
      path: "/blogs/innerBlog",
    },
  ];
  const BlogPost = ({ title, description, date, image, path }) => {
    return (
      <div className="post-card">
        <a href={path}>
          <img alt="" src={image} />
        </a>
        <p1>{date}</p1>
        <a href={path}><h1>{title}</h1></a>
        <p2>
          {description}{" "}
          <a style={{ color: "#b90124", fontStyle: "italic" }} href={path}>
            Read more...
          </a>
        </p2>
      </div>
    );
  };
  const recentBlogs = [
    {
      title: "New Year Edition: Top UI/UX Design trends rushing to us in 2021",
      image: sideBlog,
      path: "/blogs/innerBlog",
    },
    {
      title: "New Year Edition: Top UI/UX Design trends rushing to us in 2021",
      image: sideBlog,
      path: "/blogs/innerBlog",
    },
    {
      title: "New Year Edition: Top UI/UX Design trends rushing to us in 2021",
      image: sideBlog,
      path: "/blogs/innerBlog",
    },
  ];
  const RecentBlogs = ({ title, image, path }) => {
    return (
      <div className="post-card-recent">
        <a href={path}>
          <img alt="" src={image} />
        </a>
        <div>
        <a href={path}><h1>{title}</h1></a>
          <p2>
            <a href={path}>Know more{" >"}</a>
          </p2>
        </div>
      </div>
    );
  };
  const trendingBlogs = [
    {
      title: "New Year Edition: Top UI/UX Design trends rushing to us in 2021",
      image: sideBlog,
      path: "/blogs/innerBlog",
    },
    {
      title: "New Year Edition: Top UI/UX Design trends rushing to us in 2021",
      image: sideBlog,
      path: "/blogs/innerBlog",
    },
    {
      title: "New Year Edition: Top UI/UX Design trends rushing to us in 2021",
      image: sideBlog,
      path: "/blogs/innerBlog",
    },
  ];
  const TrendingBlogs = ({ title, image, path }) => {
    return (
      <div className="post-card-recent">
        <a href={path}>
          <img alt="" src={image} />
        </a>
        <div>
        <a href={path}><h1>{title}</h1></a>
          <p2>
            <a href={path}>Know more{" >"}</a>
          </p2>
        </div>
      </div>
    );
  };
  
  

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
      <div className="left-blog">
        <div>
          <h1 className="title-heading">Recent Blogs</h1>
          <div className="blog-card-recent">
            {recentBlogs.map((post, index) => (
              <RecentBlogs key={index} {...post} />
            ))}
          </div>
          <h1 className="title-heading">Trending Blogs</h1>
          <div className="blog-card-recent">
            {trendingBlogs.map((post, index) => (
              <TrendingBlogs key={index} {...post} />
            ))}
          </div>
          
        </div>
        <div className="blog-cards-container">
          <div className="blog-cards">
            {posts.map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
