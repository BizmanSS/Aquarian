import React, { useState } from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import "../../styles/AboutUs.css";
import Expertise from "../../Assets/Expertise.png";
import Integrity from "../../Assets/Integrity and trust.png";
import One from "../../Assets/one to one solution.png";
import Efficiency from "../../Assets/Efficiency and Accuracy.png";
import Free from "../../Assets/free assessment.png";
const Competitive = () => {
  const [expanded, setExpanded] = useState({});
  const questions = [
    "Expertise & Experience",
    "Integrity and Trust",
    "One-on-One Solutions",
    "Efficiency and Accuracy",
    "Free Online Assessment",
  ];
  const imageAdvantage = [Expertise, Integrity, One, Efficiency, Free];

  const answers = [
    "At Aquarian Immigration we pride ourselves on our extensive knowledge and expertise in Canadian immigration laws and regulations. Our team of immigration experts stays up to date with the latest policies and procedures to provide accurate and reliable advice to our clients. With staff having more that 25+ years of experience in the field, we have successfully assisted numerous clients in achieving their Canadian immigration goals.",
    "At Aquarian Immigration, we prioritise the best interests of our clients. We believe in providing genuine and honest advice tailored to each individual's unique circumstances. Our team takes the time to understand our clients' goals, aspirations, and concerns, allowing us to provide personalised and strategic immigration solutions. Our commitment to integrity ensures that our clients receive honest assessments of their eligibility and realistic expectations regarding their immigration prospects.",
    "We understand that the immigration process can be overwhelming and complex. That's why we believe in providing personalized attention and handholding to our clients throughout their immigration journey. Our dedicated team of professionals will be there for you every step of the way, offering guidance, support, and reassurance. We believe in building strong relationships with our clients based on trust, transparency, and open communication.",
    "We understand that the immigration process can be overwhelming and complex. That's why we believe in providing personalized attention and handholding to our clients throughout their immigration journey. Our dedicated team of professionals will be there for you every step of the way, offering guidance, support, and reassurance. We believe in building strong relationships with our clients based on trust, transparency, and open communication.",
    <div>
      <p1>
        <br />
        We offer free online assessment tools and consultations making
        immigration to Canada easily accessible to you.
        <br />
        <br />
      </p1>
      <div className="button">
        <br />
        FREE ASSESSMENT
        <br />
        <br />
      </div>
    </div>,
  ];
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
      {questions.map((item, index) => (
        <React.Fragment key={index}>
          <div
            className="text-color"
            style={{
              display: "flex",
              justifyContent: "space-between",
              background: "#C9C9C9",
              marginTop: "0.1rem",
            }}
          >
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
              <div className="gapImage">
                <img alt="" src={imageAdvantage[index]} />
                <h1>{item}</h1>
              </div>
              <br />
            </div>
            <div
              style={{
                alignItems: "flex-end",
                marginTop: "auto",
                marginBottom: "auto",
                marginRight: "2rem",
              }}
              onClick={() => toggleExpand(index)}
            >
              {expanded[index] ? <IoMdRemove /> : <IoMdAdd />}
            </div>
          </div>

          {expanded[index] && (
            <div
              className="text-color"
              style={{ marginTop: "0rem", background: "#DCDDDE" }}
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
        </React.Fragment>
      ))}
    </div>
  );
};

export default Competitive;
