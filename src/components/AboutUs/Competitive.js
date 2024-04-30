import React, { useState } from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import "../../styles/AboutUs.css";
import Expertise from "../../Assets/Expertise.png";
const Competitive = () => {
  const [expanded, setExpanded] = useState({});
  const questions = ["EXPERTISE AND EXPERIENCE"];

  const answers = [
    "At Aquarian Immigration we pride ourselves on our extensive knowledge and expertise in Canadian immigration laws and regulations. Our team of immigration experts stays up to date with the latest policies and procedures to provide accurate and reliable advice to our clients. With staff having more that 25+ years of experience in the field, we have successfully assisted numerous clients in achieving their Canadian immigration goals.",
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
      <div style={{ marginLeft: "15%" }} className="line"></div>
      {questions.map((item, index) => (
        <React.Fragment key={index}>
          <div
            className="text-color"
            style={{
              display: "flex",
              justifyContent: "space-between",
              background: "#C9C9C9",
              marginTop: "3rem",
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
              {item}
              <br />
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
