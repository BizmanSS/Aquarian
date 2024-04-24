import React, { useEffect, useRef, useState } from "react";
import logo from "../../../Assets/logo1.png";
import logo3 from "../../../Assets/logo3.png";
import logo2 from "../../../Assets/logo2.png";
import { RiMenu2Fill } from "react-icons/ri";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const [ismobile, setIsMobile] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    // Initial call to set mobile status on component mount
    handleResize();
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    menuRef.current.classList.add("scale-90");
    setTimeout(() => {
      menuRef.current.classList.remove("scale-90");
    }, 200);
  };
  return (
    <div className="bg-[#000000] rounded-2xl h-[12rem] flex flex-col items-center w-[100%]">
      {!ismobile ? (
        <>
          {" "}
          <div className="bg-[#242525] fixed w-full h-[40px] text-[13px] z-10 flex items-center justify-end">
            <div className="flex items-center justify-end mr-[7rem]">
              <p className="px-4 py-1 text-[#939393] cursor-pointer">
                About Us
              </p>
              <p className="px-4 py-1 text-[#939393] cursor-pointer">
                Contact Us
              </p>
              <div className="px-4 py-1 text-[#939393] flex items-center justify-center text-[0.6rem]">
                <div className="mx-1 border border-[#939393] rounded-full p-2">
                  <FaLinkedinIn className="cursor-pointer" />
                </div>
                <div className="mx-1 border border-[#939393] rounded-full p-2">
                  <FaFacebookF className="cursor-pointer" />
                </div>
                <div className="mx-1 border border-[#939393] rounded-full p-2">
                  <FaXTwitter className="cursor-pointer" />
                </div>
                <div className="mx-1 border border-[#939393] rounded-full p-2">
                  <FaInstagram className="cursor-pointer" />
                </div>
                <div className="mx-1 border border-[#939393] rounded-full p-2">
                  <FaYoutube className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start mt-8 ">
            <img
              src={logo}
              alt="logo"
              className="cursor-pointer w-[18rem] mr-20"
            />
            <ul className="flex items-center justify-center text-white text-[14px] gap-8 mx-10">
              <li className="cursor-pointer border-b-[3px] border-b-transparent hover:border-b-[#01F9E1] transition ease-in delay-100 duration-300">
                Home
              </li>
              <li className="cursor-pointer border-b-[3px] border-b-transparent hover:border-b-[#01F9E1] transition ease-in delay-100 duration-300">
                Immigrate
              </li>
              <li className="cursor-pointer border-b-[3px] border-b-transparent hover:border-b-[#01F9E1] transition ease-in delay-100 duration-300">
                Work
              </li>
              <li className="cursor-pointer border-b-[3px] border-b-transparent hover:border-b-[#01F9E1] transition ease-in delay-100 duration-300">
                Study
              </li>
              <li className="cursor-pointer border-b-[3px] border-b-transparent hover:border-b-[#01F9E1] transition ease-in delay-100 duration-300">
                Invest
              </li>
              <li className="cursor-pointer border-b-[3px] border-b-transparent hover:border-b-[#01F9E1] transition ease-in delay-100 duration-300">
                Visit
              </li>
              <li className="cursor-pointer border-b-[3px] border-b-transparent hover:border-b-[#01F9E1] transition ease-in delay-100 duration-300">
                Employers
              </li>
              <li className="cursor-pointer border-b-[3px] border-b-transparent hover:border-b-[#01F9E1] transition ease-in delay-100 duration-300">
                Sponsorship
              </li>
              <li className="cursor-pointer text-xl">
                <CiSearch />
              </li>
              <li className="cursor-pointer">
                <button className="bg-[#01F9E1] font-normal text-black px-4 py-2 rounded-[10px] text-[16px] hover:scale-105 transition ease-in delay-60 duration-150 mr-10">
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <div className="w-full flex items-center justify-center sm:justify-around mt-6 mr-14">
          <div className="flex items-center justify-start">
            <img src={logo2} alt="logo" className="cursor-pointer w-[4.2rem]" />
          </div>
          <div className="flex items-start justify-start">
            <img src={logo3} alt="logo" className="cursor-pointer w-40" />
          </div>
          <div
            className="flex items-center justify-start p-2 bg-[#01F9E1] cursor-pointer rounded-lg transition ease-in delay-50 duration-200"
            onClick={handleMenuClick}
            ref={menuRef}
          >
            <RiMenu2Fill className="text-black text-3xl " />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
