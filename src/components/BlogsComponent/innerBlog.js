import React,{ useState, useEffect, useMemo, useRef} from "react";
import "../../styles/Blogs.css";
import BlogDummy from "../../Assets/blogDummyImage.png";
import sideBlog from "../../Assets/sideBlogDummy.png";
import innerBlog from "../../Assets/innerBlog.png";
const BlogPosts = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);
    const bubbleRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      // Check if the Home > Blogs > Inner Blogs link is visible
      const innerBlogsLink = document.querySelector(".link");
      if (innerBlogsLink) {
        const bounding = innerBlogsLink.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
          setShowBackToTop(false);
        } else {
          setShowBackToTop(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling behavior
    });
  };
  function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);
  
    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting)
        ),
      []
    );
  
    useEffect(() => {
      observer.observe(ref.current);
  
      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);
  
    return isIntersecting;
  }
  
  const makeDivRelative = useIsInViewport(bubbleRef);

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
  ];
  const BlogPost = ({ title, description, date, image, path }) => {
    return (
      <div className="post-card-similar">
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
        <a href={path}><h1>{title}</h1></a>
          <p2>
            <a href={path}>Know more{" >"}</a>
          </p2>
        </div>
      </div>
    );
  };
  const keywords = [
    {
      title: "New Year Edition",
    },
    {
      title: "New Year Edition",
    },
    {
      title: "New Year Edition",
    },
  ];
  const Keywords = ({ title }) => {
    return (
      <div className="post-card-keywords">
        <div>
        <h1>{title}</h1>
        </div>
      </div>
    );
  };
  
  
  const innerPosts = [
    {
      title: "New Year Edition: Top UI/UX Design trends rushing to us in 2021",
      description:
        <p>In the heart of a bustling city, where the skyline is painted with towering skyscrapers and the streets hum with the rhythm of life, there exists a quaint little café tucked away in a quiet corner. Its name, whispered among the locals with a fondness reserved for cherished secrets, is "Serenity Brews."
        <br/><br/>
        As you step through the door, a wave of warmth envelops you, both from
        the aromatic embrace of freshly brewed coffee and the genuine smiles of
        the baristas behind the counter. The air is alive with the symphony of
        clinking cups, murmured conversations, and the occasional burst of
        laughter.
        <br/><br/>
        Finding a cozy nook by the window, you sink into a plush armchair, letting the
        soft melodies of a jazz ensemble drifting from hidden speakers lull you into
        a state of peaceful contemplation. The world outside seems to fade away,
        leaving only the comforting presence of this sanctuary of caffeine and
        camaraderie.
        <br/><br/>
        The menu offers an array of delights, from velvety lattes adorned with
        intricate latte art to flaky pastries that promise a symphony of flavors with
        each delicate bite. You indulge in a steaming cup of their signature blend,
        savoring every sip as it dances across your palate, awakening your senses
        with its rich, complex notes.
        <br/><br/>
        As you gaze out the window, watching the ebb and flow of city life, you can't
        help but feel grateful for this moment of respite amidst the chaos. In a
        world where time never seems to stand still, places like Serenity Brews serve
        as gentle reminders to slow down, breathe, and appreciate the simple
        pleasures that make life truly meaningful.</p>,
      date: "24 December",
      image: innerBlog,
     
    },
];
const InnerBlog = ({ title, description, date, image}) => {
    return (
      <div className="post-card-inner">
        
          <img alt="" src={image} />
       
        <p1>{date}</p1>
        <h1>{title}</h1>
        <p2>
          {description}
        </p2>
      </div>
    );
  };

  return (
    <>
    <div style={{ marginTop: "10rem", background: "#FFF" }}>
     
      <div className="BlogHeader">
        <p className="link">
          <a href="/">Home</a>
          {" > "}<a href="/blogs">Blogs</a>{" > "}Inner Blog Title
        </p>
        <div className="header-content">
          <h1 className="heading-about">Blog Title</h1>
        </div>
      </div>
      <div className="left-blog">
        <div>
        <h1 className="title-heading">Keywords</h1>
          <div className="blog-card-recent">
            {keywords.map((post, index) => (
              <Keywords key={index} {...post} />
            ))}
          </div>
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
            {innerPosts.map((post, index) => (
              <InnerBlog key={index} {...post} />
            ))}
          </div>
        </div>
      </div>
      <div className="similar-blog">
       <div className="similar-div-heading">
       <h1 className="title-heading">Similar Blogs</h1>
       <a href="/blogs">All Articles</a>
       </div><br/>
          <div className="blog-cards-similar">
            {posts.map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
          </div>
        </div>
        
    </div>
    {showBackToTop && (
        <div className={ makeDivRelative ? "relativeDiv" : "backToTop"} onClick={scrollToTop}>
          BACK TO TOP
        </div>
      )}
      <div ref={bubbleRef}></div>
    </>
  );
};

export default BlogPosts;
