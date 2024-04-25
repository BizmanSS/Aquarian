import React from "react";
import "../../styles/AboutUs.css";
import Expertise from "../../Assets/Expertise.png";
const Competitive = () => {
  return (
    <div className="WhoWe" style={{ marginLeft: "5%" }}>
      <h1 style={{ marginLeft: "15%" }}>Competitive advantages</h1>
      <div style={{ marginLeft: "15%" }} className="line"></div>
      <div
        style={{
          background: "#C2C2C2",
          marginTop: "3rem",

          marginLeft: "3rem",
          width: "80%",
        }}
      >
        <div
          className="text-div"
          style={{
            background: "#C2C2C2",
            paddingTop: "3rem",
            marginLeft: "3rem",
            paddingBottom: "3rem",
            width: "90%",
          }}
        >
          <div style={{ display: "flex", gap: "3rem" }}>
            <img style={{ width: "10%" }} alt="" src={Expertise} />
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
