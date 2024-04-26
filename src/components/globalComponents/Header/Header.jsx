import React, { useEffect, useRef, useState } from "react";
import logo from "../../../Assets/logo1.png";
import logo3 from "../../../Assets/logo3.png";
import logo2 from "../../../Assets/logo2.png";
import { RiMenu2Fill } from "react-icons/ri";
import Instagram from "../../../Assets/Instagram_logo.svg";
import Youtube from "../../../Assets/youtube.png";
import Twitter from "../../../Assets/Twitter.png";
import LinkedIn from "../../../Assets/LinkedIn.png";
import facebook from "../../../Assets/Facebook.png";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";

const Header = () => {
  const [ismobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [selectedProgram, setSelectedProgram] = useState("PNP");
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
  const handleItemClick = (index) => {
    setActiveItem(index);
  };
  const handleMenuClick = () => {
    menuRef.current.classList.add("scale-90");
    setTimeout(() => {
      menuRef.current.classList.remove("scale-90");
    }, 200);
  };
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  // console.log(activeItem);
  const handleItemProgramClick = (program) => {
    setSelectedProgram(program);
  };

  const HeaderComponent = ({ text, textContent }) => {
    return (
      <ul class="flex flex-col gap-0 -mt-2">
        <li>
          <details class="group">
            <summary class="flex items-center justify-between gap-2 p-2 font-normal marker:content-none hover:cursor-pointer">
              <span class="flex gap-2">
                <span>{text}</span>
              </span>
              <svg
                class="w-3 h-3 text-gray-500 transition group-open:rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                ></path>
              </svg>
            </summary>
            <article class="px-4 pb-4">
              <ul class="flex flex-col gap-4 pl-2 mt-1 font-thin">
                {textContent &&
                  textContent.map((item, index) => (
                    <li class="flex gap-2" key={index}>
                      <a href="/">{textContent[index]}</a>
                    </li>
                  ))}
              </ul>
            </article>
          </details>
        </li>
      </ul>
    );
  };
  return (
    <div className="bg-[#000000] rounded-2xl h-[12rem] fixed z-20 top-0 flex flex-col items-center justify-start w-[100%]">
      {!ismobile ? (
        <>
          {" "}
          <div className="bg-[#242525] fixed w-full h-[40px] text-[13px] z-10 flex items-center justify-end">
            <div className="flex items-center justify-end mr-[7rem]">
              <p className="px-4 py-1 text-[#939393] cursor-pointer">
                <a href="/about-us">About Us</a>
              </p>
              <p className="px-4 py-1 text-[#939393] cursor-pointer">
                <a href="/contact-us">Contact Us</a>
              </p>
              <div className="px-4 py-1 text-[#939393] flex items-center justify-center text-[0.6rem]">
                <div className="mx-0 p-2">
                  <img
                    src={LinkedIn}
                    className="cursor-pointer w-[1.2rem]"
                    alt=""
                  />
                </div>
                <div className="mx-0 p-2">
                  <img
                    src={facebook}
                    className="cursor-pointer w-[1.2rem]"
                    alt=""
                  />
                </div>
                <div className="mx-0 p-2">
                  <img
                    src={Twitter}
                    className="cursor-pointer w-[1.2rem]"
                    alt=""
                  />
                </div>
                <div className="mx-0 p-2">
                  <img
                    src={Instagram}
                    className="cursor-pointer w-[1.2rem]"
                    alt=""
                  />
                </div>
                <div className="mx-0 p-2">
                  <img
                    src={Youtube}
                    className="cursor-pointer w-[1.2rem]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] flex items-center justify-between mt-8 ml-10 relative">
            <img
              src={logo}
              alt="logo"
              className="cursor-pointer w-[18rem] mr-10"
            />
            <ul
              className="flex items-center justify-center text-white text-[14px] gap-8 hover:bg-[#FFFEFE] py-3 px-4 absolute left-[22rem] rounded-t-xl hover:text-black overflow-hidden"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <li
                onClick={() => handleItemClick(0)}
                className={`cursor-pointer border-b-[3px] border-b-transparent transition ease-in delay-100 duration-300 ${
                  activeItem === 0 ? "border-b-[#009889]" : ""
                }`}
              >
                <a href="/">Home</a>
              </li>
              <li
                onClick={() => handleItemClick(1)}
                className={`cursor-pointer border-b-[3px] border-b-transparent transition ease-in delay-100 duration-300 ${
                  activeItem === 1 ? "border-b-[#009889]" : ""
                }`}
              >
                Immigrate
              </li>
              <li
                onClick={() => handleItemClick(2)}
                className={`cursor-pointer border-b-[3px] border-b-transparent transition ease-in delay-100 duration-300 ${
                  activeItem === 2 ? "border-b-[#009889]" : ""
                }`}
              >
                Work
              </li>
              <li
                onClick={() => handleItemClick(3)}
                className={`cursor-pointer border-b-[3px] border-b-transparent transition ease-in delay-100 duration-300 ${
                  activeItem === 3 ? "border-b-[#009889]" : ""
                }`}
              >
                Study
              </li>
              <li
                onClick={() => handleItemClick(4)}
                className={`cursor-pointer border-b-[3px] border-b-transparent transition ease-in delay-100 duration-300 ${
                  activeItem === 4 ? "border-b-[#009889]" : ""
                }`}
              >
                Invest
              </li>
              <li
                onClick={() => handleItemClick(5)}
                className={`cursor-pointer border-b-[3px] border-b-transparent transition ease-in delay-100 duration-300 ${
                  activeItem === 5 ? "border-b-[#009889]" : ""
                }`}
              >
                Visit
              </li>
              <li
                onClick={() => handleItemClick(6)}
                className={`cursor-pointer border-b-[3px] border-b-transparent transition ease-in delay-100 duration-300 ${
                  activeItem === 6 ? "border-b-[#009889]" : ""
                }`}
              >
                Employers
              </li>
              <li
                onClick={() => handleItemClick(7)}
                className={`cursor-pointer border-b-[3px] border-b-transparent transition ease-in delay-100 duration-300 ${
                  activeItem === 7 ? "border-b-[#009889]" : ""
                }`}
              >
                Sponsorship
              </li>
            </ul>
            {isHovering && (
              <div
                className="h-auto bg-[#FFFEFE] z-40 absolute top-[5.8rem] left-[22rem] w-[39.2rem] rounded-b-xl"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="w-[90%] h-[1.2px] bg-[#009889]"></div>
                </div>
                <div className="flex items-start justify-between p-4">
                  <div className=" w-[30%] h-auto flex flex-col items-start justify-start">
                    {activeItem === 0 && (
                      <div className="font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px]">
                        Home
                      </div>
                    )}
                    {activeItem === 1 && (
                      <div className="flex items-start justify-center">
                        <div className="flex flex-col items-start justify-center">
                          <div className="font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px]">
                            Immigration
                          </div>
                          <div className="pl-6 text-[13px] text-left mt-4 ">
                            Make Canada your permanent home! PR allows you to
                            live, work and study in Canada{" "}
                          </div>
                          <div className="text-[11px] text-[#009889] pl-6 flex items-center justify-center mt-4">
                            Explore Immigration{" "}
                            <IoIosArrowForward className="relative top-[1px]" />
                          </div>
                        </div>
                      </div>
                    )}
                    {activeItem === 2 && (
                      <>
                        <div className="font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px]">
                          Work
                        </div>
                        <div className="pl-6 text-[13px] text-left mt-4 ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Blanditiis quos in nesciunt ratione autem ut
                          numquam voluptate
                        </div>
                        <div className="text-[11px] text-[#009889] pl-6 flex items-center justify-center mt-4">
                          Explore Work{" "}
                          <IoIosArrowForward className="relative top-[1px]" />
                        </div>
                      </>
                    )}
                    {activeItem === 3 && (
                      <>
                        <div className="font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px]">
                          Study
                        </div>
                        <div className="pl-6 text-[13px] text-left mt-4 ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Blanditiis quos in nesciunt ratione autem ut
                          numquam voluptate
                        </div>
                        <div className="text-[11px] text-[#009889] pl-6 flex items-center justify-center mt-4">
                          Explore Study{" "}
                          <IoIosArrowForward className="relative top-[1px]" />
                        </div>
                      </>
                    )}
                    {activeItem === 4 && (
                      <>
                        <div className="font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px]">
                          Invest
                        </div>
                        <div className="pl-6 text-[13px] text-left mt-4 ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Blanditiis quos in nesciunt ratione autem ut
                          numquam voluptate
                        </div>
                        <div className="text-[11px] text-[#009889] pl-6 flex items-center justify-center mt-4">
                          Explore Invest{" "}
                          <IoIosArrowForward className="relative top-[1px]" />
                        </div>
                      </>
                    )}
                    {activeItem === 5 && (
                      <>
                        <div className="font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px]">
                          Visit
                        </div>
                        <div className="pl-6 text-[13px] text-left mt-4 ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Blanditiis quos in nesciunt ratione autem ut
                          numquam voluptate
                        </div>
                        <div className="text-[11px] text-[#009889] pl-6 flex items-center justify-center mt-4">
                          Explore Visit{" "}
                          <IoIosArrowForward className="relative top-[1px]" />
                        </div>
                      </>
                    )}
                    {activeItem === 6 && (
                      <>
                        <div className="font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px]">
                          Employers
                        </div>
                        <div className="pl-6 text-[13px] text-left mt-4 ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Blanditiis quos in nesciunt ratione autem ut
                          numquam voluptate
                        </div>
                        <div className="text-[11px] text-[#009889] pl-6 flex items-center justify-center mt-4">
                          Explore Employers{" "}
                          <IoIosArrowForward className="relative top-[1px]" />
                        </div>
                      </>
                    )}
                    {activeItem === 7 && (
                      <>
                        <div className="font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px]">
                          Sponsorship
                        </div>
                        <div className="pl-6 text-[13px] text-left mt-4 ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Blanditiis quos in nesciunt ratione autem ut
                          numquam voluptate
                        </div>
                        <div className="text-[11px] text-[#009889] pl-6 flex items-center justify-center mt-4">
                          Explore Sponsorship{" "}
                          <IoIosArrowForward className="relative top-[1px]" />
                        </div>
                      </>
                    )}
                  </div>
                  <div className=" w-[38%] h-auto flex items-start justify-start">
                    <div className="flex flex-col items-start justify-start">
                      <ul className="text-[11px] flex flex-col items-start justify-start gap-3">
                        <li onClick={() => handleItemProgramClick("PNP")}>
                          PNP
                        </li>
                        <li
                          onClick={() =>
                            handleItemProgramClick("Express Entry")
                          }
                        >
                          Express Entry
                        </li>
                        <li
                          onClick={() =>
                            handleItemProgramClick("After Permanent Residency")
                          }
                        >
                          After Permanent Residency
                        </li>
                        <li
                          onClick={() =>
                            handleItemProgramClick("AGRI FOOD PILOT")
                          }
                        >
                          AGRI FOOD PILOT
                        </li>
                        <li
                          onClick={() =>
                            handleItemProgramClick(
                              "Atlantic Immigration Programme"
                            )
                          }
                        >
                          Atlantic Immigration Programme{" "}
                        </li>
                        <li
                          onClick={() =>
                            handleItemProgramClick("Business Class")
                          }
                        >
                          Business Class
                        </li>
                        <li
                          onClick={() =>
                            handleItemProgramClick("Caregiver Program")
                          }
                        >
                          Caregiver Program
                        </li>
                        <li
                          onClick={() =>
                            handleItemProgramClick("Canadian Immigration FAQs")
                          }
                        >
                          Canadian Immigration FAQs
                        </li>
                        <li
                          onClick={() =>
                            handleItemProgramClick(
                              "Rural And Northern Immigration Pilot"
                            )
                          }
                        >
                          Rural And Northern Immigration Pilot
                        </li>
                        <li
                          onClick={() =>
                            handleItemProgramClick("TR to PR Route")
                          }
                        >
                          TR to PR Route
                        </li>
                      </ul>
                    </div>
                  </div>
                  {selectedProgram === "PNP" && (
                    <div className=" w-[30%] auto flex items-start justify-center">
                      <div className="flex flex-col items-center justify-center">
                        <ul className="text-[11px]">
                          <li>
                            <HeaderComponent
                              text={"Alberta Immigrant Nominee Program"}
                              textContent={[
                                "Alberta Opportunity Stream",
                                "Alberta Express Entry",
                                "Alberta Accelerated Tech",
                                "Farm Stream",
                                "Graduate Entrepreneur Stream",
                                "Foreign Graduate Entrepreneur Stream",
                              ]}
                            />
                          </li>
                          <li>
                            {" "}
                            <HeaderComponent
                              text={"British Columbia"}
                              textContent={[
                                "Skills Immigration Stream",
                                "BC PNP Tech",
                                "Entrepreneur Immigration Stream",
                              ]}
                            />
                          </li>
                          <li>
                            {" "}
                            <HeaderComponent
                              text={"Manitoba"}
                              textContent={[
                                "Skilled Workers in Manitoba",
                                "Skilled Workers Overseas",
                                "International Education Stream ",
                                "Business Investor Stream",
                              ]}
                            />
                          </li>
                          <li>
                            {" "}
                            <HeaderComponent
                              text={"New Brunswick"}
                              textContent={[
                                "New Brunswick Express Entry Labor Market Stream",
                                "New Brunswick Strategic Initiative",
                                "New Brunswick Entrepreneurial Stream (closed) ",
                                "Post-Graduate Entrepreneurial Stream",
                                "Skilled Worker Applicants with Employer Support	",
                                "New Brunswick Business Immigration Stream",
                                "Atlantic Immigration Pilot Program",
                              ]}
                            />
                          </li>
                          <li>
                            {" "}
                            <HeaderComponent
                              text={"Newfoundland and Labrador"}
                              textContent={[
                                "Express Entry Skilled Worker Category",
                                " Skilled Worker Category",
                                "International Graduate Category ",
                                "International Entrepreneur Category",
                                "International Graduate Entrepreneur Category	",
                              ]}
                            />{" "}
                          </li>
                          <li>
                            {" "}
                            <HeaderComponent
                              text={"Northwest Territories"}
                              textContent={[
                                "Northwest Territories Express Entry",
                                " Northwest Territories Employer Driven",
                                "Critical Impact Worker ",
                                "Northwest Territories Skilled Worker ",
                                " Northwest Territories Business Driven",
                                " Northwest Territories Entrepreneur",
                              ]}
                            />
                          </li>
                          <li>
                            {" "}
                            <HeaderComponent
                              text={"Nova Scotia"}
                              textContent={[
                                "Nova Scotia Experience: Express Entry",
                                " Entrepreneur Category",
                                "International Graduate Entrepreneur Category ",
                                "International Graduates In Demand	 ",
                                " Skilled Worker Category",
                                " Physician Stream	",
                                " Nova Scotia Labor Market Priorities		",
                                " Nova Scotia Labor Market Priorities for Physicians	",
                                " Occupations In Demand		",
                                " Critical Construction Worker Pilot 	",
                              ]}
                            />
                          </li>
                          <li>
                            {" "}
                            <HeaderComponent
                              text={"Ontario"}
                              textContent={[
                                "Ontario Human Capital ",
                                " Ontario Employer Job Offer",
                                "Ontario Entrepreneur ",
                                "Regional Immigration Pilot	 ",
                              ]}
                            />
                          </li>
                          <li>
                            {" "}
                            <HeaderComponent
                              text={"Prince Edward Island"}
                              textContent={[
                                "PEI PNP Express Entry ",
                                "Business Impact",
                                "Work Permit ",
                                "Labor Impact	 ",
                                "Skilled Worker in PEI   ",
                                "Skilled Worker Outside Canada",
                                "Critical Worker ",
                                "International Graduate ",
                              ]}
                            />
                          </li>
                          <li>
                            {" "}
                            <HeaderComponent text={"Saskatchewan"} />
                          </li>
                          <li>
                            {" "}
                            <HeaderComponent text={"Yukon"} />
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {selectedProgram === "Express Entry" && (
                    <div className=" w-[30%] auto flex items-start justify-center">
                      <div className="flex flex-col items-center justify-center">
                        <ul className="text-[11px]">
                          <li>
                            <HeaderComponent
                              text={"Federal Skilled Worker Class"}
                            />
                          </li>
                          <li>
                            {" "}
                            <HeaderComponent
                              text={"Canadian Experience Class (CEC) "}
                            />
                          </li>
                          <li>
                            {" "}
                            <HeaderComponent
                              text={"Federal Skilled Trades Class "}
                            />
                          </li>
                          <li>
                            {" "}
                            <HeaderComponent
                              text={"Comprehensive Ranking System (CRS) Score"}
                              textContent={["CRS Score Calculator"]}
                            />
                          </li>
                          <li>
                            {" "}
                            <HeaderComponent
                              text={"Express Entry Draws"}
                            />{" "}
                          </li>
                          <li>
                            {" "}
                            <HeaderComponent
                              text={
                                "Invitation to Apply (ITA) & the electronic Application for Permanent Residence (eAPR)"
                              }
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {selectedProgram === "After Permanent Residency" && (
                    <div className=" w-[30%] auto flex items-start justify-center">
                      <div className="flex flex-col items-center justify-center">
                        <ul className="text-[11px]">
                          <li>
                            <HeaderComponent
                              text={"Permanent Resident Cards"}
                            />
                          </li>
                          <li>
                            {" "}
                            <HeaderComponent
                              text={"Permanent Resident Card Renewal"}
                            />
                          </li>
                          <li>
                            {" "}
                            <HeaderComponent
                              text={"Permanent Resident Travel Document"}
                            />
                          </li>
                          <li>
                            {" "}
                            <HeaderComponent text={"Residency Obligations"} />
                          </li>
                          <li>
                            {" "}
                            <HeaderComponent
                              text={"Canadian Citizenship"}
                            />{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {selectedProgram === "AGRI FOOD PILOT" && (
                    <div className=" w-[30%] auto flex items-start justify-center">
                      <div className="flex flex-col items-center justify-center">
                        <ul className="text-[11px]"></ul>
                      </div>
                    </div>
                  )}
                  {selectedProgram === "Atlantic Immigration Programme" && (
                    <div className=" w-[30%] auto flex items-start justify-center">
                      <div className="flex flex-col items-center justify-center"></div>
                    </div>
                  )}
                  {selectedProgram === "Business Class" && (
                    <div className=" w-[30%] auto flex items-start justify-center">
                      <div className="flex flex-col items-center justify-center">
                        <ul className="text-[11px]">
                          <li>
                            <HeaderComponent text={"Federal Self-Employed"} />
                          </li>
                          <li>
                            {" "}
                            <HeaderComponent
                              text={"Canada Start-Up Visa (SUV)"}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {selectedProgram === "Caregiver Program" && (
                    <div className=" w-[30%] auto flex items-start justify-center">
                      <div className="flex flex-col items-center justify-center">
                        <ul className="text-[11px]">
                          <li>
                            <HeaderComponent
                              text={"Home Child Care Provider Pilot"}
                            />
                          </li>
                          <li>
                            {" "}
                            <HeaderComponent
                              text={"Home Support Worker Pilot	"}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {selectedProgram === "Canadian Immigration FAQs" && (
                    <div className=" w-[30%] auto flex items-start justify-center">
                      <div className="flex flex-col items-center justify-center"></div>
                    </div>
                  )}
                  {selectedProgram ===
                    "Rural And Northern Immigration Pilot" && (
                    <div className=" w-[30%] auto flex items-start justify-center">
                      <div className="flex flex-col items-center justify-center"></div>
                    </div>
                  )}
                  {selectedProgram === "TR to PR Route" && (
                    <div className=" w-[30%] auto flex items-start justify-center">
                      <div className="flex flex-col items-center justify-center"></div>
                    </div>
                  )}
                </div>
              </div>
            )}
            <div className="flex items-center justify-center gap-6 relative right-[7rem]">
              <div className="cursor-pointer text-xl text-white text-[14px] ">
                <CiSearch />
              </div>
              <div className="cursor-pointer text-white text-[14px]">
                <button className="bg-[#01F9E1] font-normal text-black px-4 py-2 rounded-[10px] text-[16px] hover:scale-105 transition ease-in delay-60 duration-150 mr-10">
                  Book Appointment
                </button>
              </div>
            </div>
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
