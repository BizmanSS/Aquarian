import React, { useState, useEffect } from 'react';
import '../../styles/AboutUs.css';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
const OurServices = () => {
  const [expanded, setExpanded] = useState({});
  const questions = [
    'Consultation and assessment of eligibility for various Canadian immigration programs',
    'Preparation and submission of application forms and supporting documents',
    'Regular follow-ups and communication with immigration authorities on behalf of clients',
    'Assistance with interview preparation, if required',
    'Guidance on settlement and post-arrival services in Canada',
  ];

  const answers = [
    'Receive expert consultation and precise eligibility assessments for diverse immigration programs, ensuring a smooth pathway to your Canadian dream. \n\nPermanent Residency, Express Entry, PNP, Work Visas, Student Visas, Business Visas, Family Sponsorship, Visitor Visa, Start-up Visas, Investors, Extensions & Refusals',
    'Prepare application forms and gather supporting documents efficiently. Streamline the process with our assistance, ensuring accuracy and completeness. Trust in our expertise to guide you through smooth submission procedures, saving time and eliminating stress along the way.',
    'We handle regular follow-ups and maintain open communication with immigration authorities on behalf of our clients. Our dedicated approach ensures timely updates and resolves any queries.',
    "We offer on-point assistance for interview preparation, ensuring you're ready to shine when it counts. Benefit from personalised guidance and mock sessions to refine your responses. Our support minimises stress and maximises your chances of success, making your interview experience a smooth and rewarding one.",
    'Receive comprehensive guidance on settlement and post-arrival services in Canada. From housing assistance to cultural integration support, we ensure a smooth transition into your new environment.',
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
    <div className='WhoWe'>
      <h1>Our Services</h1>
      <div className='line'></div>
      <div className='text-div' style={{ width: '70%' }}>
        <p1>
          As a Canadian Immigration Law Firm which has been in operation for
          almost 20 years, Canadim has a range of legal departments providing
          personalized guidance for Canada’s many immigration pathways.
          <br />
          <br />
          {questions.map((item, index) => (
            <React.Fragment key={index}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  background: '#C9C9C9',
                  marginTop: '3rem',
                }}
              >
                <div
                  style={{
                    color: '#505050',
                    alignItems: 'flex-start',
                    marginLeft: '2rem',
                    width: '80%',
                  }}
                >
                  <br />
                  {item}
                  <br />
                  <br />
                </div>
                <div
                  style={{
                    alignItems: 'flex-end',
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    marginRight: '2rem',
                  }}
                  onClick={() => toggleExpand(index)}
                >
                  {expanded[index] ? <IoMdRemove /> : <IoMdAdd />}
                </div>
              </div>

              {expanded[index] && (
                <div
                  style={{
                    background: '#DCDDDE',
                    width: '100%',
                  }}
                >
                  {/* Content when the box is expanded */}
                  <p style={{ marginLeft: '2rem', marginRight: '2rem' }}>
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
