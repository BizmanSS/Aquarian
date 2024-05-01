import React, { useState } from "react";
import "../../styles/AboutUs.css";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import Expertise from "../../Assets/Expertise.png";
import Integrity from "../../Assets/Integrity and trust.png";
import One from "../../Assets/one to one solution.png";
import Efficiency from "../../Assets/Efficiency and Accuracy.png";
import { useMobile } from "../globalComponents/MobileContext/IsMobileContext";
import Free from "../../Assets/free assessment.png";
const Competitive = () => {
  const { isMobile } = useMobile();
  const [expandedIndex, setExpandedIndex] = useState({});
  const [expanded, setExpanded] = useState({});
  const questions = [
    "Expertise & Experience",
    "Integrity and Trust",
    "One-on-One Solutions",
    "Efficiency and Accuracy",
  ];
  const questions2 = ["Free Online Assessment"];
  const imageAdvantage = [Expertise, Integrity, One, Efficiency];
  const imageAdvantage2 = [Free];
  const answers = [
    "At Aquarian Immigration we pride ourselves on our extensive knowledge and expertise in Canadian immigration laws and regulations. Our team of immigration experts stays up to date with the latest policies and procedures to provide accurate and reliable advice to our clients. With staff having more that 30+ years of experience in the field, we have successfully assisted numerous clients in achieving their Canadian immigration goals.",
    "At Aquarian Immigration, we prioritise the best interests of our clients. We believe in providing genuine and honest advice tailored to each individual's unique circumstances. Our team takes the time to understand our clients' goals, aspirations, and concerns, allowing us to provide personalised and strategic immigration solutions. Our commitment to integrity ensures that our clients receive honest assessments of their eligibility and realistic expectations regarding their immigration prospects.",
    "We understand that the immigration process can be overwhelming and complex. That's why we believe in providing personalized attention and handholding to our clients throughout their immigration journey. Our dedicated team of professionals will be there for you every step of the way, offering guidance, support, and reassurance. We believe in building strong relationships with our clients based on trust, transparency, and open communication.",
    "We understand that the immigration process can be overwhelming and complex. That's why we believe in providing personalized attention and handholding to our clients throughout their immigration journey. Our dedicated team of professionals will be there for you every step of the way, offering guidance, support, and reassurance. We believe in building strong relationships with our clients based on trust, transparency, and open communication.",
  ];
  const answers2 = [
    <div>
      <p1>
        <br />
        We offer free online assessment tools and consultations making
        immigration to Canada easily accessible to you.
        <br />
        <br />
      </p1>
      <div className="button" style={{ width: "100%" }}>
        FREE ASSESSMENT
      </div>
    </div>,
  ];
  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Close if already expanded
    } else {
      setExpandedIndex(index); // Expand if not already expanded
    }
  };
  const toggleExpand = (index) => {
    setExpanded((prevExpanded) => {
      const newExpanded = {};
      Object.keys(prevExpanded).forEach((key) => {
        newExpanded[key] = false;
      });
      newExpanded[index] = !prevExpanded[index];
      return newExpanded;
    });
  };

  return (
    <div className="Competitve">
      <h5 className="heading">Competitive advantages</h5>
      <div
        style={{ marginLeft: "15%", marginBottom: "3rem" }}
        className="line"
      ></div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-[100%] gap-1 mt-0 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2">
          {questions.map((item, index) => (
            <React.Fragment key={index}>
              <div style={{ display: "block" }}>
                <div
                  className="text-color"
                  onClick={() => (isMobile ? handleToggle(index) : null)}
                  onMouseEnter={() =>
                    !isMobile ? setExpandedIndex(index) : null
                  }
                  onMouseLeave={() =>
                    !isMobile ? setExpandedIndex(null) : null
                  }
                  style={{
                    display: "block",
                    background: "#C9C9C9",
                    marginTop: "0.1rem",
                  }}
                >
                  <div
                    style={{
                      color: "#505050",
                      marginLeft: "2rem",
                      width: "80%",
                    }}
                  >
                    <br />
                    <div className="gapImage">
                      <img alt="" src={imageAdvantage[index]} />
                      <h1>{item}</h1>
                    </div>
                    <br />
                  </div>
                </div>

                {expandedIndex === index && (
                  <div
                    className="text-color"
                    style={{
                      marginTop: "0rem",
                      background: "#DCDDDE",
                    }}
                  >
                    {/* Content when the box is expanded */}
                    <p style={{ marginLeft: "2rem", marginRight: "2rem" }}>
                      <br />
                      {answers[index]}
                      <br />
                      <br />
                    </p>
                  </div>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      {questions2.map((item, index) => (
        <React.Fragment key={index}>
          <div className="text-color2" onClick={() => toggleExpand(index)}>
            {" "}
            <div
              style={{
                color: "#505050",
                alignItems: "flex-start",
                marginLeft: "2rem",
                width: "80%",
              }}
            >
              <br />
              <div className="gapImage2">
                <img alt="" src={imageAdvantage2[index]} />
                <h1>{item}</h1>
              </div>
              <br />
            </div>
          </div>

          {expanded[index] && (
            <div
              className="text-color2"
              style={{
                marginTop: "0rem",
                background: "#DCDDDE",
              }}
            >
              {/* Content when the box is expanded */}
              <p style={{ marginLeft: "2rem", marginRight: "2rem" }}>
                <br />
                {answers2[index]}
                <br />
                <br />
              </p>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Competitive;
