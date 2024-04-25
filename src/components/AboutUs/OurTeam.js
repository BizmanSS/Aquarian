import React from "react";
import "../../styles/AboutUs.css";
import Puneet from "../../Assets/Puneet.jpg";

const OurTeam = () => {
  return (
    <>
      <div
        className="WhoWe"
        style={{
          paddingTop: "5%",
          marginLeft: "40%",
          width: "50%",
          paddingBottom: "5%",
        }}
      >
        <h1>Our Team</h1>
        <div className="line"></div>
        <div className="text-div">
          <p1>
            With a strong staff of over 20+ Immigration Lawyers, Regulated
            Canadian Immigration Consultants, immigration advisors and support
            staff, we are in the best position to help you reach your
            immigration goals. Here are just some of the people that make
            Canadim the great company it is:
          </p1>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          position: "relative",
          background: "#343436",
          marginLeft: "40%",
          marginBottom: "3rem",
          width: "54%",
          gap: "3rem",
        }}
      >
        <div
          style={{
            width: "25%",
            paddingTop: "2rem",
            paddingBottom: "2rem",
            marginLeft: "-13%",
          }}
        >
          <img src={Puneet} alt="" />
        </div>
        <div style={{ width: "70%", paddingTop: "5%" }}>
          <h1 className="Name">Puneet Sawhney</h1>
          <h2 className="designation">Business Head</h2>
          <p1 className="about">
            <br />
            With a strong staff of over 20+ Immigration Lawyers, Regulated
            Canadian Immigration Consultants, immigration advisors and support
            staff, we are in the best position to help you reach your
            immigration goals. Here are just some of the people that make
            Canadim the great company it is:
            <br />
            <br />
          </p1>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
