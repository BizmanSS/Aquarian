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
          Join our online community and become a part of our 7000+ Aquarianite
          family. Read testimonials from our happy customers who benefited from
          the quality services we successfully provide for them and their
          families.
          <br />
          <br />
          If you have questions about the immigration procedure or are ready to
          begin your immigration journey to Canada;
          <br />
          <span style={{ fontWeight: "700" }}>
            Call us at{" "}
            <a style={{ color: "blue" }} href="tel:+919810892192">
              +91 9810892192
            </a>{" "}
            /{" "}
            <a style={{ color: "blue" }} href="tel:+911244671300">
              +91 124 4671300
            </a>
            <br /> Write to us at{" "}
            <a style={{ color: "blue" }} href="mailto:enq@iaquarian.com">
              enq@iaquarian.com
            </a>
          </span>
          <br />
          <br />
          <div className="flexgap">
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
            <div className="button">
              <a href="/contact-us">Lets get in touch</a>
            </div>
          </div>
          <br /> We are happy to assist you in an efficient and committed
          manner!
        </p1>
      </div>
      <br />
      <br />
    </div>
  );
};

export default TheAquarian;
