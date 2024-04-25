import React from "react";
import "../../../styles/AboutUs.css";
import Instagram from "../../../Assets/Instagram_logo.svg";
import Youtube from "../../../Assets/youtube.png";
import Twitter from "../../../Assets/Twitter.png";
import LinkedIn from "../../../Assets/LinkedIn.png";
import facebook from "../../../Assets/Facebook.png";
import WhoWeAre from "../../AboutUs/WhoWeAre.js";
import Competitive from "../../AboutUs/Competitive.js";
import Expertise from "../../../Assets/Expertise.png";
import OurTeam from "../../AboutUs/OurTeam.js";
import Tanpreet from "../../../Assets/Tanpreet.jpg";
const AboutUsPage = () => {
  return (
    <div style={{ marginTop: "10rem", background: "#E0E0E0" }}>
      <div className="AboutUsHeader">
        <p className="link">Home {" > "}About Us</p>
        <div className="header-content">
          <h1 className="heading-about">About Us.</h1>
          <p1 className="text-heading">
            The Federal Skilled Worker (FSW) program
            <br /> is one of the three programs contained <br />
            within Canada’s Express
          </p1>
        </div>
      </div>
      <div className="sub-heading-content">
        <div
          style={{
            display: "flex",
            marginLeft: "2%",
            paddingTop: "20%",
            width: "80%",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <div className="line-heading"></div>
          <div style={{ display: "block" }}>
            <p className="sub-heading">Who We Are</p>
            <p className="sub-heading">Competitive Advantages</p>
            <p className="sub-heading">Our Team</p>
            <p className="sub-heading">Our Services</p>
            <p className="sub-heading">The Aquarian Community</p>
          </div>
        </div>
        <div>
          <h1 className="follow">Follow Us</h1>
        </div>
        <div className="logos">
          <div className="mx-0 p-2">
            <img src={LinkedIn} className="cursor-pointer w-[2.2rem]" />
          </div>
          <div className="mx-0 p-2">
            <img src={facebook} className="cursor-pointer w-[2.2rem]" />
          </div>
          <div className="mx-0 p-2">
            <img src={Twitter} className="cursor-pointer w-[2.2rem]" />
          </div>
          <div className="mx-0 p-2">
            <img src={Instagram} className="cursor-pointer w-[2.2rem]" />
          </div>
          <div className="mx-0 p-2">
            <img src={Youtube} className="cursor-pointer w-[2.2rem]" />
          </div>
        </div>
      </div>
      <div
        style={{
          background: "#FFF",
          width: "80%",
          display: "block",
          marginLeft: "20%",
          paddingBottom: "3rem",
        }}
      >
        <WhoWeAre />
        <Competitive />
      </div>
      <div
        className="WhoWe"
        style={{ marginLeft: "24%", paddingTop: "1%", paddingBottom: "1%" }}
      >
        <div
          style={{
            background: "#C2C2C2",
            marginTop: "3rem",
            marginLeft: "3rem",
            width: "64%",
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
              <h1>Integrity and Trust</h1>
            </div>
            <p1>
              <br />
              At Aquarian Immigration, we prioritise the best interests of our
              clients. We believe in providing genuine and honest advice
              tailored to each individual's unique circumstances. Our team takes
              the time to understand our clients' goals, aspirations, and
              concerns, allowing us to provide personalised and strategic
              immigration solutions. Our commitment to integrity ensures that
              our clients receive honest assessments of their eligibility and
              realistic expectations regarding their immigration prospects.
            </p1>
          </div>
        </div>
      </div>
      <div
        className="WhoWe"
        style={{ marginLeft: "24%", paddingTop: "1%", paddingBottom: "1%" }}
      >
        <div
          style={{
            background: "#C2C2C2",
            marginTop: "3rem",
            marginLeft: "3rem",
            width: "64%",
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
              <h1>One-on-One Solutions</h1>
            </div>
            <p1>
              <br />
              We understand that the immigration process can be overwhelming and
              complex. That's why we believe in providing personalized attention
              and handholding to our clients throughout their immigration
              journey. Our dedicated team of professionals will be there for you
              every step of the way, offering guidance, support, and
              reassurance. We believe in building strong relationships with our
              clients based on trust, transparency, and open communication.
            </p1>
          </div>
        </div>
      </div>
      <div
        className="WhoWe"
        style={{ marginLeft: "24%", paddingTop: "1%", paddingBottom: "1%" }}
      >
        <div
          style={{
            background: "#C2C2C2",
            marginTop: "3rem",
            marginLeft: "3rem",
            width: "64%",
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
              <h1>Efficiency and Accuracy</h1>
            </div>
            <p1>
              <br />
              We understand that the immigration process can be overwhelming and
              complex. That's why we believe in providing personalized attention
              and handholding to our clients throughout their immigration
              journey. Our dedicated team of professionals will be there for you
              every step of the way, offering guidance, support, and
              reassurance. We believe in building strong relationships with our
              clients based on trust, transparency, and open communication.
            </p1>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "#FFF",
          width: "80%",
          display: "block",
          marginLeft: "0%",
          paddingBottom: "2rem",
        }}
      >
        <div
          className="WhoWe"
          style={{ marginLeft: "30%", paddingTop: "0.1%" }}
        >
          <div
            style={{
              background: "#C2C2C2",
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
                <h1>FREE ONLINE ASSESSMENT</h1>
              </div>
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
            </div>
          </div>
        </div>
        <OurTeam />
      </div>
      <div
        style={{
          display: "flex",
          position: "relative",
          background: "#343436",
          marginLeft: "32%",
          marginTop: "3rem",
          width: "43%",
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
          <img src={Tanpreet} alt="" />
        </div>
        <div style={{ width: "70%", paddingTop: "5%" }}>
          <h1 className="Name">Tanpreet Sawhney</h1>
          <h2 className="designation">Director</h2>
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
      <div
        style={{
          background: "#FFF",
          width: "80%",
          display: "block",
          marginTop: "3rem",
          marginLeft: "20%",
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      ></div>
    </div>
  );
};

export default AboutUsPage;
