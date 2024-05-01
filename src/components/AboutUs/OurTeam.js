import React from "react";
import "../../styles/AboutUs.css";
import Puneet from "../../Assets/Puneet.jpg";
import Tanpreet from "../../Assets/Tanpreet.jpg";
const OurTeam = () => {
  return (
    <>
      <div className="OurTeam">
        <h5 className="heading">Our Team</h5>
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
      <div className="team-background">
        <div className="imageTeam">
          <img src={Puneet} alt="" />
        </div>
        <div className="textOurTeam">
          <h1 className="Name">Puneet Sawhney</h1>
          <h2 className="designation">Business Head</h2>
          <h3 className="about">
            <br />
            With a strong staff of over 20+ Immigration Lawyers, Regulated
            Canadian Immigration Consultants, immigration advisors and support
            staff, we are in the best position to help you reach your
            immigration goals. Here are just some of the people that make
            Canadim the great company it is:
            <br />
            <br />
          </h3>
        </div>
      </div>
      <div className="team-background">
        <div className="imageTeam">
          <img src={Tanpreet} alt="" />
        </div>
        <div className="textOurTeam">
          <h1 className="Name">Tanpreet Sawhney</h1>
          <h2 className="designation">Director</h2>
          <h3 className="about">
            <br />
            With a strong staff of over 20+ Immigration Lawyers, Regulated
            Canadian Immigration Consultants, immigration advisors and support
            staff, we are in the best position to help you reach your
            immigration goals. Here are just some of the people that make
            Canadim the great company it is:
            <br />
            <br />
          </h3>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
