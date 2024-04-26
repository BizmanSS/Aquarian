import React, { useRef, useEffect } from 'react';
import '../../../styles/AboutUs.css';
import Instagram from '../../../Assets/Instagram_logo.svg';
import Youtube from '../../../Assets/youtube.png';
import Twitter from '../../../Assets/Twitter.png';
import LinkedIn from '../../../Assets/LinkedIn.png';
import facebook from '../../../Assets/Facebook.png';
import WhoWeAre from '../../AboutUs/WhoWeAre.js';
import Competitive from '../../AboutUs/Competitive.js';
import Expertise from '../../../Assets/Expertise.png';
import OurTeam from '../../AboutUs/OurTeam.js';
import Tanpreet from '../../../Assets/Tanpreet.jpg';
import OurServices from '../../AboutUs/OurServices.js';
import TheAquarian from '../../AboutUs/TheAquarian.js';
import AquarianFlower from '../../../Assets/AquarianFlower.jpg';
const AboutUsPage = () => {
  const whoWeAreRef = useRef(null);
  const competitiveRef = useRef(null);
  const ourTeamRef = useRef(null);
  const ourServicesRef = useRef(null);
  const theAquarianRef = useRef(null);
  const buttonBelowRef = useRef(null);
  const subHeadingContentRef = useRef(null);

  const scrollToRef = (ref) => {
    const scrollTop = ref.current.offsetTop - window.innerHeight * 0.25; // 10% of the window height
    window.scrollTo({ top: scrollTop, behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          subHeadingContentRef.current.style.position = 'absolute';
        } else {
          subHeadingContentRef.current.style.position = 'fixed';
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(buttonBelowRef.current);

    return () => {
      observer.unobserve(buttonBelowRef.current);
    };
  }, []);
  return (
    <div style={{ marginTop: '10rem', background: '#E0E0E0' }}>
      <div className='AboutUsHeader'>
        <p className='link'>Home {' > '}About Us</p>
        <div className='header-content'>
          <h1 className='heading-about'>About Us.</h1>
          <p1 className='text-heading'>
            The Federal Skilled Worker (FSW) program
            <br /> is one of the three programs contained <br />
            within Canada’s Express
          </p1>
        </div>
      </div>
      <div className='sub-heading-content' ref={subHeadingContentRef}>
        <div
          style={{
            display: 'flex',
            marginLeft: '2%',
            paddingTop: '20%',
            width: '80%',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <div className='line-heading'></div>
          <div style={{ display: 'block' }}>
            <p onClick={() => scrollToRef(whoWeAreRef)} className='sub-heading'>
              Who We Are
            </p>
            <p
              onClick={() => scrollToRef(competitiveRef)}
              className='sub-heading'
            >
              Competitive Advantages
            </p>
            <p onClick={() => scrollToRef(ourTeamRef)} className='sub-heading'>
              Our Team
            </p>
            <p
              onClick={() => scrollToRef(ourServicesRef)}
              className='sub-heading'
            >
              Our Services
            </p>
            <p
              onClick={() => scrollToRef(theAquarianRef)}
              className='sub-heading'
            >
              The Aquarian Community
            </p>
          </div>
        </div>
        <div>
          <h1 className='follow'>Follow Us</h1>
        </div>
        <div className='logos'>
          <div className='mx-0 p-2'>
            <img src={LinkedIn} className='cursor-pointer w-[2.2rem]' />
          </div>
          <div className='mx-0 p-2'>
            <img src={facebook} className='cursor-pointer w-[2.2rem]' />
          </div>
          <div className='mx-0 p-2'>
            <img src={Twitter} className='cursor-pointer w-[2.2rem]' />
          </div>
          <div className='mx-0 p-2'>
            <img src={Instagram} className='cursor-pointer w-[2.2rem]' />
          </div>
          <div className='mx-0 p-2'>
            <img src={Youtube} className='cursor-pointer w-[2.2rem]' />
          </div>
        </div>
      </div>
      <div
        style={{
          background: '#FFF',
          width: '80%',
          display: 'block',
          marginLeft: '20%',
          paddingBottom: '3rem',
        }}
      >
        <div ref={whoWeAreRef}>
          <WhoWeAre />
        </div>
        <div ref={competitiveRef}>
          <Competitive />
        </div>
      </div>
      <div
        className='WhoWe'
        style={{ marginLeft: '24%', paddingTop: '1%', paddingBottom: '1%' }}
      >
        <div
          style={{
            background: '#C2C2C2',
            marginTop: '3rem',
            marginLeft: '3rem',
            width: '64%',
          }}
        >
          <div
            className='text-div'
            style={{
              background: '#C2C2C2',
              paddingTop: '3rem',
              marginLeft: '3rem',
              paddingBottom: '3rem',
              width: '90%',
            }}
          >
            <div style={{ display: 'flex', gap: '3rem' }}>
              <img style={{ width: '10%' }} alt='' src={Expertise} />
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
        className='WhoWe'
        style={{ marginLeft: '24%', paddingTop: '1%', paddingBottom: '1%' }}
      >
        <div
          style={{
            background: '#C2C2C2',
            marginTop: '3rem',
            marginLeft: '3rem',
            width: '64%',
          }}
        >
          <div
            className='text-div'
            style={{
              background: '#C2C2C2',
              paddingTop: '3rem',
              marginLeft: '3rem',
              paddingBottom: '3rem',
              width: '90%',
            }}
          >
            <div style={{ display: 'flex', gap: '3rem' }}>
              <img style={{ width: '10%' }} alt='' src={Expertise} />
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
        className='WhoWe'
        style={{ marginLeft: '24%', paddingTop: '1%', paddingBottom: '1%' }}
      >
        <div
          style={{
            background: '#C2C2C2',
            marginTop: '3rem',
            marginLeft: '3rem',
            width: '64%',
          }}
        >
          <div
            className='text-div'
            style={{
              background: '#C2C2C2',
              paddingTop: '3rem',
              marginLeft: '3rem',
              paddingBottom: '3rem',
              width: '90%',
            }}
          >
            <div style={{ display: 'flex', gap: '3rem' }}>
              <img style={{ width: '10%' }} alt='' src={Expertise} />
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
          background: '#FFF',
          width: '80%',
          display: 'block',
          marginLeft: '0%',
          paddingBottom: '2rem',
        }}
      >
        <div
          className='WhoWe'
          style={{ marginLeft: '30%', paddingTop: '0.1%' }}
        >
          <div
            style={{
              background: '#C2C2C2',
              marginLeft: '3rem',
              width: '80%',
            }}
          >
            <div
              className='text-div'
              style={{
                background: '#C2C2C2',
                paddingTop: '3rem',
                marginLeft: '3rem',
                paddingBottom: '3rem',
                width: '90%',
              }}
            >
              <div style={{ display: 'flex', gap: '3rem' }}>
                <img style={{ width: '10%' }} alt='' src={Expertise} />
                <h1>FREE ONLINE ASSESSMENT</h1>
              </div>
              <p1>
                <br />
                We offer free online assessment tools and consultations making
                immigration to Canada easily accessible to you.
                <br />
                <br />
              </p1>
              <div className='button'>
                <br />
                FREE ASSESSMENT
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        <div ref={ourTeamRef}>
          <OurTeam />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          position: 'relative',
          background: '#343436',
          marginLeft: '32%',
          marginTop: '3rem',
          width: '43%',
          gap: '3rem',
        }}
      >
        <div
          style={{
            width: '25%',
            paddingTop: '2rem',
            paddingBottom: '2rem',
            marginLeft: '-13%',
          }}
        >
          <img src={Tanpreet} alt='' />
        </div>
        <div style={{ width: '70%', paddingTop: '5%' }}>
          <h1 className='Name'>Tanpreet Sawhney</h1>
          <h2 className='designation'>Director</h2>
          <p1 className='about'>
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
          background: '#FFF',
          width: '80%',
          display: 'block',
          marginTop: '3rem',
          marginLeft: '20%',
          paddingTop: '3rem',
          paddingBottom: '3rem',
        }}
      >
        <div ref={ourServicesRef}>
          <OurServices />
        </div>
        <div ref={theAquarianRef}>
          <TheAquarian />
        </div>
      </div>
      <div
        className='below-section'
        style={{ marginTop: '8rem', paddingBottom: '8rem' }}
      >
        <div
          className='image'
          style={{
            backgroundImage: `url(${AquarianFlower})`,
            width: '30%',
            marginLeft: '28%',
            marginRight: 'auto',
            display: 'block',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <h1
            className='content'
            style={{ paddingTop: '10%', paddingLeft: '10%', color: '#fff' }}
          >
            Ready to
            <br />
            start?
          </h1>
        </div>
        <div
          className='below-image'
          style={{
            width: '30%',
            marginLeft: '48%',
            marginTop: '-8%',
          }}
        >
          <div
            className='text-div-below-image'
            style={{
              color: '#f2f2f2',
              marginLeft: '3rem',
              marginRight: '3rem',
            }}
          >
            <p1>
              <br />
              If you are interested in learning more about the immigration
              process, or if you are ready to embark on the journey that will
              lead you to Canada, fill out a free online assessment form using
              the link below or give us a call at 1-514-989-9700. We look
              forward to serving your needs in a professional manner!
              <br />
              <br />
            </p1>
            <div className='buttonBelow' ref={buttonBelowRef}>
              <br />
              Free Online Assessment Form
              <br />
              <br />
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
