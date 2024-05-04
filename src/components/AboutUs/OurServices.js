import React, { useState } from "react";
import "../../styles/AboutUs.css";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
const OurServices = () => {
  const [expanded, setExpanded] = useState({});
  const questions = [
    "Consultation and assessment",
    "Preparation and submission of application forms and supporting documents",
    "Regular follow-ups",
    "Assistance with interview preparation",
    "Post-arrival services",
  ];

  const answers = [
    <p>
      We begin by doing an assessment to understand the eligibility of our
      client for the diverse immigration programs, ensuring a smooth pathway to
      your Canadian dream.
      <br /> <br />
      Which is followed by a consultation for various entry paths such as
      Permanent Residency, Express Entry, PNP, Work Visas, Student Visas,
      Business Visas, Family Sponsorship, Visitor Visa, Start-up Visas,
      Investors, Extensions & even Refusals if any.
    </p>,
    <p>
      Next, we prepare the application forms and gather all the supporting
      documents efficiently. We assist in streamlining this process ensuring
      accuracy and completeness.
      <br /> <br />
      Trust in our experts to guide you through the smooth submission
      procedures, saving time and eliminating stress along the way.
    </p>,
    "Post which we make sure we do regular follow-ups and maintain open communication with immigration authorities on behalf of our clients. Our dedicated approach ensures timely updates and resolves any queries.",
    "We also offer on-point assistance for interview preparation, ensuring that you're ready to shine when it counts. Benefit from personalised guidance and mock sessions to refine your responses. Our support minimises stress and enhances your chances of success, making your interview experience a smooth and rewarding one.",
    "After your application is successful you will also receive comprehensive guidance on settlement and post-arrival in Canada. From housing assistance to cultural integration support, we ensure a smooth transition into your new environment.",
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
    <div className="OurServices">
      <h5 className="heading">What We Can Do For You?</h5>
      <div className="line"></div>
      <div className="text-div">
        <p1>
          Join our community and set off on a unique immigration experience.
          With more than 30 years of combined experience, we've developed the
          knowledge to help you at every stage, making the move to a new chapter
          in your life smooth and successful.
          <br />
          <br />
          {questions.map((item, index) => (
            <React.Fragment key={index}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  background: "#C9C9C9",
                  marginTop: "0.1rem",
                }}
              >
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
                  style={{
                    background: "#DCDDDE",
                    width: "100%",
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
            </React.Fragment>
          ))}
        </p1>
      </div>
    </div>
  );
};

export default OurServices;
