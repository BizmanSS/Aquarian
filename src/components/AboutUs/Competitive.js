import React from "react";
import "../../styles/AboutUs.css";
import Expertise from "../../Assets/Expertise.png";
const Competitive = () => {
  return (
    <div className="Competitve">
      <h1>Competitive advantages</h1>
      <div style={{ marginLeft: "15%" }} className="line"></div>
      <div className="text-color">
        <div className="text-div-color">
          <div className="gapImage">
            <img alt="" src={Expertise} />
            <h1>EXPERTISE AND EXPERIENCE</h1>
          </div>
          <p1>
            <br />
            At Aquarian Immigration we pride ourselves on our extensive
            knowledge and expertise in Canadian immigration laws and
            regulations. Our team of immigration experts stays up to date with
            the latest policies and procedures to provide accurate and reliable
            advice to our clients. With staff having more that 25+ years of
            experience in the field, we have successfully assisted numerous
            clients in achieving their Canadian immigration goals.
          </p1>
        </div>
      </div>
    </div>
  );
};

export default Competitive;
