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
      path: "",
    },
    {
      title: "New Year Edition: Top UI/UX Design trends rushing to us in 2021",
      description:
        "The Federal Skilled Worker (FSW) program is one of the three programs contained within Canada's Express",
      date: "24 December",
      image: BlogDummy,
      path: "",
    },
    {
      title: "New Year Edition: Top UI/UX Design trends rushing to us in 2021",
      description:
        "The Federal Skilled Worker (FSW) program is one of the three programs contained within Canada's Express",
      date: "24 December",
      image: BlogDummy,
      path: "",
    },
    {
      title: "New Year Edition: Top UI/UX Design trends rushing to us in 2021",
      description:
        "The Federal Skilled Worker (FSW) program is one of the three programs contained within Canada's Express",
      date: "24 December",
      image: BlogDummy,
      path: "",
    },
    {
      title: "New Year Edition: Top UI/UX Design trends rushing to us in 2021",
      description:
        "The Federal Skilled Worker (FSW) program is one of the three programs contained within Canada's Express",
      date: "24 December",
      image: BlogDummy,
      path: "",
    },
    {
      title: "New Year Edition: Top UI/UX Design trends rushing to us in 2021",
      description:
        "The Federal Skilled Worker (FSW) program is one of the three programs contained within Canada's Express",
      date: "24 December",
      image: BlogDummy,
      path: "",
    },
  ];
  const recentBlogs = [
    {
      title: "New Year Edition: Top UI/UX Design trends rushing to us in 2021",
      image: sideBlog,
      path: "",
    },
    {
      title: "New Year Edition: Top UI/UX Design trends rushing to us in 2021",
      image: sideBlog,
      path: "",
    },
    {
      title: "New Year Edition: Top UI/UX Design trends rushing to us in 2021",
      image: sideBlog,
      path: "",
    },
  ];
  const RecentBlogs = ({ title, image, path }) => {
    return (
      <div className="post-card-recent">
        <a href={path}>
          <img alt="" src={image} />
        </a>
        <div>
          <h1>{title}</h1>
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
      path: "",
    },
    {
      title: "New Year Edition: Top UI/UX Design trends rushing to us in 2021",
      image: sideBlog,
      path: "",
    },
    {
      title: "New Year Edition: Top UI/UX Design trends rushing to us in 2021",
      image: sideBlog,
      path: "",
    },
  ];
  const TrendingBlogs = ({ title, image, path }) => {
    return (
      <div className="post-card-recent">
        <a href={path}>
          <img alt="" src={image} />
        </a>
        <div>
          <h1>{title}</h1>
          <p2>
            <a href={path}>Know more{" >"}</a>
          </p2>
        </div>
      </div>
    );
  };
  const latestBlogs = [
    {
      title: "New Year Edition: Top UI/UX Design trends rushing to us in 2021",
      image: sideBlog,
      path: "",
    },
    {
      title: "New Year Edition: Top UI/UX Design trends rushing to us in 2021",
      image: sideBlog,
      path: "",
    },
    {
      title: "New Year Edition: Top UI/UX Design trends rushing to us in 2021",
      image: sideBlog,
      path: "",
    },
  ];
  const LatestBlogs = ({ title, image, path }) => {
    return (
      <div className="post-card-recent">
        <a href={path}>
          <img alt="" src={image} />
        </a>
        <div>
          <h1>{title}</h1>
          <p2>
            <a href={path}>Know more{" >"}</a>
          </p2>
        </div>
      </div>
    );
  };
  const BlogPost = ({ title, description, date, image, path }) => {
    return (
      <div className="post-card">
        <a href={path}>
          <img alt="" src={image} />
        </a>
        <p1>{date}</p1>
        <h1>{title}</h1>
        <p2>
          {description} <a href={path}>Read more...</a>
        </p2>
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
          <h1 className="title-heading">Latest Blogs</h1>
          <div className="blog-card-recent">
            {latestBlogs.map((post, index) => (
              <LatestBlogs key={index} {...post} />
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
