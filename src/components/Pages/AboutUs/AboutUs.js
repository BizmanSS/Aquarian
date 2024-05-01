import React, { useRef, useEffect } from 'react';
import '../../../styles/AboutUs.css';
import Instagram from '../../../Assets/Instagram_logo.svg';
import Youtube from '../../../Assets/youtube.png';
import Twitter from '../../../Assets/Twitter.png';
import LinkedIn from '../../../Assets/LinkedIn.png';
import facebook from '../../../Assets/Facebook.png';
import WhoWeAre from '../../AboutUs/WhoWeAre.js';
import Competitive from '../../AboutUs/Competitive.js';
import OurTeam from '../../AboutUs/OurTeam.js';
import Tanpreet from '../../../Assets/Tanpreet.jpg';
import OurServices from '../../AboutUs/OurServices.js';
import TheAquarian from '../../AboutUs/TheAquarian.js';
//import AquarianFlower from "../../../Assets/AquarianFlower.jpg";
import { useMobile } from '../../globalComponents/MobileContext/IsMobileContext.js';
const AboutUsPage = () => {
  const { isMobile } = useMobile();
  const whoWeAreRef = useRef(null);
  const competitiveRef = useRef(null);
  const ourTeamRef = useRef(null);
  const ourServicesRef = useRef(null);
  const theAquarianRef = useRef(null);

  const scrollToRef = (ref) => {
    const scrollTop = ref.current.offsetTop - window.innerHeight * 0.25; // 10% of the window height
    window.scrollTo({ top: scrollTop, behavior: 'smooth' });
  };

  return (
    <div
      style={{
        marginTop: '10rem',
        background: '#E0E0E0',
        paddingBottom: '3rem',
      }}
    >
      <div className='AboutUsHeader'>
        <p className='link'>Home {' > '}About Us</p>
        <div className='header-content'>
          <h1 className='heading-about'>About Us.</h1>
        </div>
      </div>
      {!isMobile && (
        <div className='sub-heading-content'>
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
              <p
                onClick={() => scrollToRef(whoWeAreRef)}
                className='sub-heading'
              >
                Who We Are
              </p>
              <p
                onClick={() => scrollToRef(competitiveRef)}
                className='sub-heading'
              >
                Competitive Advantages
              </p>
              <p
                onClick={() => scrollToRef(ourTeamRef)}
                className='sub-heading'
              >
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
            <a href='' className='mx-0 p-2'>
              <img src={LinkedIn} className='cursor-pointer w-[2.2rem]' />
            </a>
            <a
              href='https://www.facebook.com/people/Aquarian-Immigration/61558242973262/'
              className='mx-0 p-2'
            >
              <img src={facebook} className='cursor-pointer w-[2.2rem]' />
            </a>
            <a href='' className='mx-0 p-2'>
              <img src={Twitter} className='cursor-pointer w-[2.2rem]' />
            </a>
            <a
              href='https://www.instagram.com/aquarian_immigration/'
              className='mx-0 p-2'
            >
              <img src={Instagram} className='cursor-pointer w-[2.2rem]' />
            </a>
            <a href='' className='mx-0 p-2'>
              <img src={Youtube} className='cursor-pointer w-[2.2rem]' />
            </a>
          </div>
        </div>
      )}

      <div className='background-div' style={{ marginTop: '-80px' }}>
        <div ref={whoWeAreRef}>
          <WhoWeAre />
        </div>
        <div ref={competitiveRef}>
          <Competitive />
        </div>
      </div>

      <div className='background-div-left'>
        <div ref={ourTeamRef}>
          <OurTeam />
        </div>
      </div>
      <div className='team-background-outer'>
        <div className='imageTeam'>
          <img src={Tanpreet} alt='' />
        </div>
        <div className='textOurTeam'>
          <h1 className='Name'>Tanpreet Sawhney</h1>
          <h2 className='designation'>Director</h2>
          <h3 className='about'>
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
      <div className='background-div' style={{ marginTop: '2rem' }}>
        <div ref={ourServicesRef}>
          <OurServices />
        </div>
        <div ref={theAquarianRef}>
          <TheAquarian />
        </div>
      </div>
      {/*<div
        className='below-section'
        style={{ marginTop: '8rem', paddingBottom: '8rem' }}
      >
        <div
          className='image'
          style={{
            backgroundImage: url(${AquarianFlower}),
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
      </div> */}
    </div>
  );
};

export default AboutUsPage;
