import React, { useState } from "react";
import "../../styles/AboutUs.css";
import Instagram from "../../Assets/Instagram_logo.svg";
import Youtube from "../../Assets/youtube.png";
import Twitter from "../../Assets/Twitter.png";
import LinkedIn from "../../Assets/LinkedIn.png";
import facebook from "../../Assets/Facebook.png";
import { useMobile } from "../globalComponents/MobileContext/IsMobileContext";
const TheAquarian = () => {
  const { isMobile } = useMobile();
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (isMobile) {
      setIsActive(!isActive);
    }
  };
  return (
    <div className="TheAquarian">
      <h5 className="heading">The Aquarian Community</h5>
      <div className="line"></div>
      <div className="text-div">
        <p1>
          With Facebook, Instagram and other social media outlets, any person
          can post, tweet, comment and let their voice be heard by millions. We
          invite you to become part of our online community and check out what
          our clients have to say about the quality services we’ve provided for
          them and their families.
          <br />
          <br />
          If you are interested in learning more about the immigration process,
          or if you are ready to embark on the journey that will lead you to
          Canada, fill out an assessment using the link below, or give us a call
          at +1-514-989-9700. We look forward to serving your needs in a
          professional manner!
        </p1>
      </div>
      <br />
      <br />
      {!isActive && (
        <div
          className="button"
          onMouseEnter={() => !isMobile && setIsActive(true)}
          onMouseLeave={() => !isMobile && setIsActive(false)}
          onClick={handleClick}
        >
          Join The Community
        </div>
      )}
      {isActive && (
        <div
          className="button2"
          onMouseLeave={() => !isMobile && setIsActive(false)}
          onClick={handleClick}
        >
          <div className="logos2">
            <a href="" className="mx-0 p-2">
              <img src={LinkedIn} className="cursor-pointer" />
            </a>
            <a
              href="https://www.facebook.com/people/Aquarian-Immigration/61558242973262/"
              className="mx-0 p-2"
            >
              <img src={facebook} className="cursor-pointer" />
            </a>
            <a href="" className="mx-0 p-2">
              <img src={Twitter} className="cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/aquarian_immigration/"
              className="mx-0 p-2"
            >
              <img src={Instagram} className="cursor-pointer" />
            </a>
            <a href="" className="mx-0 p-2">
              <img src={Youtube} className="cursor-pointer" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default TheAquarian;
