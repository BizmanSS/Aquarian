import React, { useEffect, useRef, useState } from 'react';
import logo from '../../../Assets/logo1.png';
import logo3 from '../../../Assets/logo3.png';
import logo2 from '../../../Assets/logo2.png';
import { RiMenu2Fill } from 'react-icons/ri';
import Instagram from '../../../Assets/Instagram_logo.svg';
import Youtube from '../../../Assets/youtube.png';
import Twitter from '../../../Assets/Thread.jpg';
import LinkedIn from '../../../Assets/LinkedIn.png';
import facebook from '../../../Assets/Facebook.png';
import { CiSearch } from 'react-icons/ci';
import clipart1 from '../../../Assets/clipart/Immigrate.png';
import clipart2 from '../../../Assets/clipart/work visa.png';
import clipart3 from '../../../Assets/clipart/study visa.png';
import clipart4 from '../../../Assets/clipart/invest visa.png';
import clipart5 from '../../../Assets/clipart/visit visa.png';
import clipart6 from '../../../Assets/clipart/employer visa.png';
import clipart7 from '../../../Assets/clipart/sponsirship.png';
const Header = () => {
  const [ismobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [textContent, setTextContent] = useState('');

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
    window.addEventListener('resize', handleResize);
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // const handleItemClick = (index) => {
  //   setActiveItem(index);
  // };
  const handleItemHover = (index) => {
    setActiveItem(index);
  };
  const handleMenuClick = () => {
    menuRef.current.classList.add('scale-90');
    setTimeout(() => {
      menuRef.current.classList.remove('scale-90');
    }, 200);
  };
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setTextContent('');
    setSelectedProgram('');
    setIsHovering(false);
  };

  const handleItemProgramClick = (program) => {
    setSelectedProgram(program);
  };
  // console.log(selectedProgram);
  const SvgComponent = () => {
    return (
      <svg
        className={`w-3 h-3 text-gray-500 transition group-open:rotate-90 ${
          isOpen ? 'rotate-90' : ''
        }`}
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        viewBox='0 0 16 16'
      >
        <path
          fill-rule='evenodd'
          d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
        ></path>
      </svg>
    );
  };

  const HeaderComponentTextContent = ({ textContent }) => {
    return (
      <article class='px-4 py-4'>
        <ul class='flex flex-col gap-2 pl-2 mt-1 font-normal text-sm'>
          {textContent &&
            textContent.map((item, index) => (
              <li
                class='flex gap-0'
                key={index}
                className='border-b-[2px] border-transparent hover:border-[#009889]'
              >
                <a href='/'>{textContent[index]}</a>
              </li>
            ))}
        </ul>
      </article>
    );
  };

  const HeaderComponent = ({ text }) => {
    return (
      <ul class=' flex flex-col gap-0 -mt-2 font-normal'>
        <li>
          <details class='group'>
            <summary class='flex items-center justify-between p-2 font-normal border-b-[2px] border-transparent hover:border-[#009889]  hover:cursor-pointer '>
              <span class='flex '>
                <span>{text}</span>
              </span>
            </summary>
          </details>
        </li>
      </ul>
    );
  };
  return (
    <div className='bg-[#000000] rounded-2xl h-[7rem] fixed z-10 top-0 flex flex-col items-center justify-start w-[94%] max-w-[120rem]'>
      {!ismobile ? (
        <>
          {' '}
          <div className='bg-[#000000] fixed w-[94%] h-[30px] text-[13px] z-40 flex items-center justify-end max-w-[120rem]'>
            <div className='flex items-center justify-end mr-[0rem]'>
              <p className='px-4 py-1 text-[#939393] cursor-pointer'>
                <a href='/about-us'>About Us</a>
              </p>
              <p className='px-4 py-1 text-[#939393] cursor-pointer'>
                <a href='/contact-us'>Contact Us</a>
              </p>
              <div className='px-4 py-1 text-[#939393] flex items-center justify-center text-[0.6rem]'>
                <a
                  href='https://www.linkedin.com/company/aquarian-immigration-services/'
                  className='mx-0 p-2'
                >
                  <img
                    src={LinkedIn}
                    className='cursor-pointer w-[1.2rem]'
                    alt=''
                  />
                </a>
                <a
                  href='https://www.facebook.com/people/Aquarian-Immigration/61558242973262/'
                  className='mx-0 p-2'
                >
                  <img
                    src={facebook}
                    className='cursor-pointer w-[1.2rem]'
                    alt=''
                  />
                </a>
                <a
                  href='https://www.threads.net/@aquarian_immigration'
                  className='mx-0 p-2 '
                >
                  <img
                    src={Twitter}
                    className='cursor-pointer w-[1.2rem] rounded-lg'
                    alt=''
                  />
                </a>
                <a
                  href='https://www.instagram.com/aquarian_immigration/'
                  className='mx-0 p-2'
                >
                  <img
                    src={Instagram}
                    className='cursor-pointer w-[1.2rem]'
                    alt=''
                  />
                </a>
                <a href='' className='mx-0 p-2'>
                  <img
                    src={Youtube}
                    className='cursor-pointer w-[1.2rem]'
                    alt=''
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='w-[100%] flex items-center justify-between mt-4 relative'>
            <a href='/'>
              <img
                src={logo}
                alt='logo'
                className='cursor-pointer w-[13rem] ml-10'
              />
            </a>

            {isHovering ? (
              <ul
                className={`flex items-center justify-center text-[16px] text-white gap-0 2xl:gap-2 py-3 px-4 absolute left-[16rem] xl:left-[18rem] 2xl:left-[20rem] 3xl:left-[25rem] 4xl:left-[30rem] rounded-t-xl overflow-hidden `}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* <li
                  onMouseEnter={() => handleItemHover(0)}
                  className={`cursor-pointer transition ease-in delay-100 duration-300 ${
                    activeItem === 0
                      ? 'border-b-[3px] border-b-[#009889]'
                      : 'border-b-[3px] border-b-transparent'
                  }`}
                >
                  <a href='/'>Home</a>
                </li> */}
                <li
                  onMouseEnter={() => handleItemHover(1)}
                  className={`cursor-pointer px-4 py-2.5 w-[6.5rem] ${
                    activeItem === 1
                      ? 'border-b-[3px] border-b-[#009889] bg-white text-black'
                      : 'border-b-[3px] border-b-transparent'
                  }`}
                >
                  Immigrate
                </li>
                <li
                  onMouseEnter={() => handleItemHover(2)}
                  className={`cursor-pointer  px-4 py-2.5 w-[6.5rem] flex items-center justify-center ${
                    activeItem === 2
                      ? 'border-b-[3px] border-b-[#009889] bg-white text-black'
                      : 'border-b-[3px] border-b-transparent'
                  }`}
                >
                  Work
                </li>
                <li
                  onMouseEnter={() => handleItemHover(3)}
                  className={`cursor-pointer  px-4 py-2.5 w-[6.5rem] flex items-center justify-center ${
                    activeItem === 3
                      ? 'border-b-[3px] border-b-[#009889] bg-white text-black'
                      : 'border-b-[3px] border-b-transparent'
                  }`}
                >
                  Study
                </li>
                <li
                  onMouseEnter={() => handleItemHover(4)}
                  className={`cursor-pointer  px-4 py-2.5 w-[6.5rem] flex items-center justify-center ${
                    activeItem === 4
                      ? 'border-b-[3px] border-b-[#009889] bg-white text-black'
                      : 'border-b-[3px] border-b-transparent'
                  }`}
                >
                  Invest
                </li>
                <li
                  onMouseEnter={() => handleItemHover(5)}
                  className={`cursor-pointer  px-4 py-2.5 w-[6.5rem] flex items-center justify-center ${
                    activeItem === 5
                      ? 'border-b-[3px] border-b-[#009889] bg-white text-black'
                      : 'border-b-[3px] border-b-transparent'
                  }`}
                >
                  Visit
                </li>
                <li
                  onMouseEnter={() => handleItemHover(6)}
                  className={`cursor-pointer  px-4 py-2.5 w-[6.5rem] flex items-center justify-center ${
                    activeItem === 6
                      ? 'border-b-[3px] border-b-[#009889] bg-white text-black'
                      : 'border-b-[3px] border-b-transparent'
                  }`}
                >
                  Employers
                </li>
                <li
                  onMouseEnter={() => handleItemHover(7)}
                  className={`cursor-pointer  px-4 py-2.5 w-[7rem] flex items-center justify-center ${
                    activeItem === 7
                      ? 'border-b-[3px] border-b-[#009889] bg-white text-black'
                      : 'border-b-[3px] border-b-transparent'
                  }`}
                >
                  Sponsorship
                </li>
              </ul>
            ) : (
              <ul
                className={`flex items-center justify-center text-white text-[16px] gap-0 2xl:gap-2 py-3 px-4 absolute left-[16rem] xl:left-[18rem] 2xl:left-[20rem] 3xl:left-[25rem] 4xl:left-[30rem] rounded-t-xl hover:text-black overflow-hidden `}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* <li
                  onMouseEnter={() => handleItemHover(0)}
                  className={`cursor-pointer transition ease-in delay-100 duration-300 ${
                    activeItem === 0
                      ? 'border-b-[3px] border-b-[#009889]'
                      : 'border-b-[3px] border-b-transparent'
                  }`}
                >
                  <a href='/'>Home</a>
                </li> */}
                <li
                  onMouseEnter={() => handleItemHover(1)}
                  className={`cursor-pointer transition ease-in delay-100 duration-300 px-4 py-2.5 w-[6.5rem] flex items-center justify-center ${
                    activeItem === 1
                      ? ''
                      : 'border-b-[3px] border-b-transparent'
                  }`}
                >
                  Immigrate
                </li>
                <li
                  onMouseEnter={() => handleItemHover(2)}
                  className={`cursor-pointer transition ease-in delay-100 duration-300 px-4 py-2.5 w-[6.5rem] flex items-center justify-center ${
                    activeItem === 2
                      ? ''
                      : 'border-b-[3px] border-b-transparent'
                  }`}
                >
                  Work
                </li>
                <li
                  onMouseEnter={() => handleItemHover(3)}
                  className={`cursor-pointer transition ease-in delay-100 duration-300 px-4 py-2.5 w-[6.5rem] flex items-center justify-center ${
                    activeItem === 3
                      ? ''
                      : 'border-b-[3px] border-b-transparent'
                  }`}
                >
                  Study
                </li>
                <li
                  onMouseEnter={() => handleItemHover(4)}
                  className={`cursor-pointer transition ease-in delay-100 duration-300 px-4 py-2.5 w-[6.5rem] flex items-center justify-center ${
                    activeItem === 4
                      ? ''
                      : 'border-b-[3px] border-b-transparent'
                  }`}
                >
                  Invest
                </li>
                <li
                  onMouseEnter={() => handleItemHover(5)}
                  className={`cursor-pointer transition ease-in delay-100 duration-300 px-4 py-2.5 w-[6.5rem] flex items-center justify-center ${
                    activeItem === 5
                      ? ''
                      : 'border-b-[3px] border-b-transparent'
                  }`}
                >
                  Visit
                </li>
                <li
                  onMouseEnter={() => handleItemHover(6)}
                  className={`cursor-pointer transition ease-in delay-100 duration-300 px-4 py-2.5 w-[6.5rem] flex items-center justify-center ${
                    activeItem === 6
                      ? ''
                      : 'border-b-[3px] border-b-transparent'
                  }`}
                >
                  Employers
                </li>
                <li
                  onMouseEnter={() => handleItemHover(7)}
                  className={`cursor-pointer transition ease-in delay-100 duration-300 px-4 py-2.5 w-[7rem] flex items-center justify-center ${
                    activeItem === 7
                      ? ''
                      : 'border-b-[3px] border-b-transparent'
                  }`}
                >
                  Sponsorship
                </li>
              </ul>
            )}
            {isHovering && activeItem > 0 && (
              <div
                className={`h-auto bg-[#FFFEFE] z-40 absolute shadow-2xl top-[4.5rem] left-[17rem] xl:left-[19rem] 2xl:left-[21rem] 3xl:left-[26rem] 4xl:left-[31rem] w-[56.0rem] 2xl:w-[59.0rem] rounded-b-xl `}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className='flex flex-col items-center justify-center'></div>
                <div
                  className={`flex items-start justify-start p-4 ${
                    activeItem === 0 ? 'none' : 'block'
                  }`}
                >
                  <div className=' w-[25%] h-auto flex flex-col items-start justify-start '>
                    {/* {activeItem === 0 && (
                      <div className='font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px] -mt-4'>
                        Home
                      </div>
                    )} */}
                    {activeItem === 1 && (
                      <div className='flex items-start justify-center'>
                        <div className='flex flex-col items-start justify-center'>
                          <div className='font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px] '>
                            Immigrate
                          </div>
                          <div className='px-6 mt-4 w-[11rem]'>
                            <img src={clipart1} alt='clipart' />
                          </div>
                          {/* <div className='text-[11px] text-[#009889] pl-6 flex items-center justify-center mt-4'>
                            Explore Immigration{' '}
                            <IoIosArrowForward className='relative top-[1px]' />
                          </div> */}
                        </div>
                      </div>
                    )}
                    {activeItem === 2 && (
                      <>
                        <div className='font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px]'>
                          Work
                        </div>
                        <div className='px-6 mt-4 w-[11rem]'>
                          <img src={clipart2} alt='clipart' />
                        </div>
                        {/* <div className='text-[11px] text-[#009889] pl-6 flex items-center justify-center mt-4'>
                          Explore Work{' '}
                          <IoIosArrowForward className='relative top-[1px]' />
                        </div> */}
                      </>
                    )}
                    {activeItem === 3 && (
                      <>
                        <div className='font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px]'>
                          Study
                        </div>
                        <div className='px-6 mt-4 w-[11rem]'>
                          <img src={clipart3} alt='clipart' />
                        </div>
                        {/* <div className='text-[11px] text-[#009889] pl-6 flex items-center justify-center mt-4'>
                          Explore Study{' '}
                          <IoIosArrowForward className='relative top-[1px]' />
                        </div> */}
                      </>
                    )}
                    {activeItem === 4 && (
                      <>
                        <div className='font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px]'>
                          Invest
                        </div>
                        <div className='px-6 mt-4 w-[11rem]'>
                          <img src={clipart4} alt='clipart' />
                        </div>
                        {/* <div className='text-[11px] text-[#009889] pl-6 flex items-center justify-center mt-4'>
                          Explore Invest{' '}
                          <IoIosArrowForward className='relative top-[1px]' />
                        </div> */}
                      </>
                    )}
                    {activeItem === 5 && (
                      <>
                        <div className='font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px]'>
                          Visit
                        </div>
                        <div className='px-6 mt-4 w-[11rem]'>
                          <img src={clipart5} alt='clipart' />
                        </div>
                        {/* <div className='text-[11px] text-[#009889] pl-6 flex items-center justify-center mt-4'>
                          Explore Visit{' '}
                          <IoIosArrowForward className='relative top-[1px]' />
                        </div> */}
                      </>
                    )}
                    {activeItem === 6 && (
                      <>
                        <div className='font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px]'>
                          Employers
                        </div>
                        <div className='px-6 mt-4 w-[11rem]'>
                          <img src={clipart6} alt='clipart' />
                        </div>
                        {/* <div className='text-[11px] text-[#009889] pl-6 flex items-center justify-center mt-4'>
                          Explore Employers{' '}
                          <IoIosArrowForward className='relative top-[1px]' />
                        </div> */}
                      </>
                    )}
                    {activeItem === 7 && (
                      <>
                        <div className='font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px]'>
                          Sponsorship
                        </div>
                        <div className='px-6 mt-4 w-[11rem]'>
                          <img src={clipart7} alt='clipart' />
                        </div>
                        {/* <div className='text-[11px] text-[#009889] pl-6 flex items-center justify-center mt-4'>
                          Explore Sponsorship{' '}
                          <IoIosArrowForward className='relative top-[1px]' />
                        </div> */}
                      </>
                    )}
                  </div>
                  {activeItem === 1 && (
                    <div className=' w-[30%] h-auto flex items-start justify-start mt-4'>
                      <div className='flex flex-col items-start justify-start'>
                        <ul className='text-[15px] flex flex-col items-start justify-start gap-3 '>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick('Express Entry')
                            }
                            className={`flex items-center justify-between w-full hover:text-[#01997E] hover:font-semibold  hover:scale-105 transition ease-in delay-0 duration-200 cursor-pointer ${
                              selectedProgram === 'Express Entry' &&
                              'text-[#01997E] font-semibold scale-105'
                            }`}
                          >
                            <span className=''>Express Entry</span>{' '}
                            <SvgComponent isOpen={isOpen} />
                          </li>
                          <li
                            onMouseEnter={() => handleItemProgramClick('PNP')}
                            className={`flex items-center justify-between w-full hover:text-[#01997E] hover:font-semibold  hover:scale-105 transition ease-in delay-0 duration-200 cursor-pointer ${
                              selectedProgram === 'PNP' &&
                              'text-[#01997E] font-semibold scale-105'
                            }`}
                          >
                            <span className=''>
                              Provincial Nominee Program (PNP)
                            </span>{' '}
                            <SvgComponent isOpen={isOpen} />
                          </li>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick(
                                'After Permanent Residency'
                              )
                            }
                            className={`flex items-center justify-between w-full hover:text-[#01997E] hover:font-semibold  hover:scale-105 transition ease-in delay-0 duration-200 cursor-pointer ${
                              selectedProgram === 'After Permanent Residency' &&
                              'text-[#01997E] font-semibold scale-105'
                            }`}
                          >
                            After Permanent Residency{' '}
                            <SvgComponent isOpen={isOpen} />
                          </li>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick('AGRI FOOD PILOT')
                            }
                            className={`flex items-center justify-between w-full hover:text-[#01997E] hover:font-semibold  hover:scale-105 transition ease-in delay-0 duration-200 cursor-pointer ${
                              selectedProgram === 'AGRI FOOD PILOT' &&
                              'text-[#01997E] font-semibold scale-105'
                            }`}
                          >
                            <span className=''>Agri Food Pilot</span>
                          </li>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick(
                                'Atlantic Immigration Programme'
                              )
                            }
                            className={`flex items-center justify-between w-full hover:text-[#01997E] hover:font-semibold  hover:scale-105 transition ease-in delay-0 duration-200 cursor-pointer ${
                              selectedProgram ===
                                'Atlantic Immigration Programme' &&
                              'text-[#01997E] font-semibold scale-105'
                            }`}
                          >
                            Atlantic Immigration Programme{' '}
                          </li>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick('Business Class')
                            }
                            className={`flex items-center justify-between w-full hover:text-[#01997E] hover:font-semibold  hover:scale-105 transition ease-in delay-0 duration-200 cursor-pointer ${
                              selectedProgram === 'Business Class' &&
                              'text-[#01997E] font-semibold scale-105'
                            }`}
                          >
                            <span className=''>Business Class</span>{' '}
                            <SvgComponent isOpen={isOpen} />
                          </li>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick('Caregiver Program')
                            }
                            className={`flex items-center justify-between w-full hover:text-[#01997E] hover:font-semibold  hover:scale-105 transition ease-in delay-0 duration-200 cursor-pointer ${
                              selectedProgram === 'Caregiver Program' &&
                              'text-[#01997E] font-semibold scale-105'
                            }`}
                          >
                            <span className=''>Caregiver Program</span>{' '}
                            <SvgComponent isOpen={isOpen} />
                          </li>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick(
                                'Canadian Immigration FAQs'
                              )
                            }
                            className={`flex items-center justify-between w-full hover:text-[#01997E] hover:font-semibold  hover:scale-105 transition ease-in delay-0 duration-200 cursor-pointer ${
                              selectedProgram === 'Canadian Immigration FAQs' &&
                              'text-[#01997E] font-semibold scale-105'
                            }`}
                          >
                            Canadian Immigration FAQs{' '}
                          </li>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick(
                                'Rural And Northern Immigration Pilot'
                              )
                            }
                            className={`flex items-center justify-between w-full hover:text-[#01997E] hover:font-semibold  hover:scale-105 transition ease-in delay-0 duration-200 cursor-pointer ${
                              selectedProgram ===
                                'Rural And Northern Immigration Pilot' &&
                              'text-[#01997E] font-semibold scale-105'
                            }`}
                          >
                            Rural And Northern Immigration Pilot{' '}
                          </li>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick('TR to PR Route')
                            }
                            className={`flex items-center justify-between w-full hover:text-[#01997E] hover:font-semibold  hover:scale-105 transition ease-in delay-0 duration-200 cursor-pointer ${
                              selectedProgram === 'TR to PR Route' &&
                              'text-[#01997E] font-semibold scale-105'
                            }`}
                          >
                            <span className=''>TR to PR Route</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {activeItem === 2 && (
                    <div className=' w-[30%] h-auto flex items-start justify-start mt-4 mb-4'>
                      <div className='flex flex-col items-start justify-start'>
                        <ul className='text-[15px] flex flex-col items-start justify-start gap-3 '>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick('Work In Canada')
                            }
                            className='flex items-center justify-between w-full '
                          >
                            Work In Canada
                          </li>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick('Work Without a Permit ')
                            }
                            className='flex items-center justify-between w-full'
                          >
                            Work Without a Permit{' '}
                            <SvgComponent isOpen={isOpen} />
                          </li>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick(
                                ' Temporary Foreign Worker Program'
                              )
                            }
                            className='flex items-center justify-between w-full'
                          >
                            Temporary Foreign Worker Program{' '}
                            <SvgComponent isOpen={isOpen} />
                          </li>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick(
                                'International Mobility Program (IMP)'
                              )
                            }
                            className='flex items-center justify-between w-full'
                          >
                            International Mobility Program (IMP){' '}
                            <SvgComponent isOpen={isOpen} />
                          </li>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick('Open Work Permits')
                            }
                            className='flex items-center justify-between w-full'
                          >
                            Open Work Permits <SvgComponent isOpen={isOpen} />
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {activeItem === 3 && (
                    <div className=' w-[30%] h-auto flex items-start justify-start mt-4 mb-4'>
                      <div className='flex flex-col items-start justify-start'>
                        <ul className='text-[15px] flex flex-col items-start justify-start gap-3 '>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick('Study In Canada')
                            }
                            className='flex items-center justify-between w-full '
                          >
                            Study In Canada
                          </li>
                          <li
                            onMouseEnter={() => handleItemProgramClick('DLI ')}
                            className='flex items-center justify-between w-full'
                          >
                            DLI
                          </li>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick(' Levels of Study')
                            }
                            className='flex items-center justify-between w-full'
                          >
                            Levels of Study
                          </li>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick('Study Permit In Canada')
                            }
                            className='flex items-center justify-between w-full'
                          >
                            Study Permit In Canada{' '}
                            <SvgComponent isOpen={isOpen} />
                          </li>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick(
                                'Refusals and Appeals of Study Permits'
                              )
                            }
                            className='flex items-center justify-between w-full'
                          >
                            Refusals and Appeals of Study Permits{' '}
                          </li>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick('Extend a Study Control')
                            }
                            className='flex items-center justify-between w-full'
                          >
                            Extend a Study Control
                          </li>
                          <li
                            onMouseEnter={() => handleItemProgramClick('PGWP')}
                            className='flex items-center justify-between w-full'
                          >
                            Post Graduate Work Permit (PGWP)
                          </li>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick(
                                'Study Pathways to Permanent REsidence'
                              )
                            }
                            className='flex items-center justify-between w-full'
                          >
                            Study Pathways to Permanent Residence{' '}
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {activeItem === 4 && (
                    <div className=' w-[30%] h-auto flex items-start justify-start mt-4 mb-4'>
                      <div className='flex flex-col items-start justify-start'>
                        <ul className='text-[15px] flex flex-col items-start justify-start gap-3 '>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick(' Business/Invest')
                            }
                            className='flex items-center justify-between w-full '
                          >
                            Business/Invest <SvgComponent isOpen={isOpen} />
                          </li>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick('PNP Entrepreneur Streams')
                            }
                            className='flex items-center justify-between w-full'
                          >
                            PNP Entrepreneur Streams{' '}
                            <SvgComponent isOpen={isOpen} />
                          </li>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick(
                                ' Work Permit to PR Pathways'
                              )
                            }
                            className='flex items-center justify-between w-full'
                          >
                            Work Permit to PR Pathways{' '}
                            <SvgComponent isOpen={isOpen} />
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {activeItem === 5 && (
                    <div className=' w-[30%] h-auto flex items-start justify-start mt-4 mb-4'>
                      <div className='flex flex-col items-start justify-start'>
                        <ul className='text-[15px] flex flex-col items-start justify-start gap-3 '>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick('TRV-Visitor Visa')
                            }
                            className='flex items-center justify-between w-full '
                          >
                            TRV-Visitor Visa
                          </li>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick('Visa Extension')
                            }
                            className='flex items-center justify-between w-full'
                          >
                            Visa Extension
                          </li>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick(' Super visa (linked)')
                            }
                            className='flex items-center justify-between'
                          >
                            Super visa (linked)
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {activeItem === 6 && (
                    <div className=' w-[30%] h-auto flex items-start justify-start mt-4 mb-4'>
                      <div className='flex flex-col items-start justify-start'>
                        <ul className='text-[15px] flex flex-col items-start justify-start gap-3 '>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick(
                                ' Employers Outside Canada'
                              )
                            }
                            className='flex items-center justify-between w-full '
                          >
                            Employers Outside Canada{' '}
                            <SvgComponent isOpen={isOpen} />
                          </li>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick('Canadian Employers')
                            }
                            className='flex items-center justify-between w-full'
                          >
                            Canadian Employers
                            <SvgComponent isOpen={isOpen} />
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {activeItem === 7 && (
                    <div className=' w-[30%] h-auto flex items-start justify-start mt-4 mb-4'>
                      <div className='flex flex-col items-start justify-start'>
                        <ul className='text-[15px] flex flex-col items-start justify-start gap-3 '>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick(
                                'Canadian spousal sponsorship '
                              )
                            }
                            className='flex items-center justify-between  '
                          >
                            Canadian spousal sponsorship{' '}
                          </li>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick(
                                'Child or Other Dependent Sponsorship'
                              )
                            }
                            className='flex items-center justify-between '
                          >
                            Child or Other Dependent Sponsorship
                          </li>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick(
                                'Parents and Grandparents Program (PGP)'
                              )
                            }
                            className='flex items-center justify-between '
                          >
                            Parents and Grandparents Program (PGP)
                          </li>
                          <li
                            onMouseEnter={() =>
                              handleItemProgramClick('Super Visa')
                            }
                            className='flex items-center justify-between'
                          >
                            Super Visa
                          </li>
                          <li
                            onMouseEnter={() => handleItemProgramClick('MNI')}
                            className='flex items-center justify-between'
                          >
                            MNI
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {selectedProgram === 'PNP' && activeItem === 1 && (
                    <div className=' w-[25%] auto flex items-start justify-center mt-4 mb-4'>
                      <div className='flex flex-col items-center justify-center'>
                        <ul className='text-[14px]'>
                          <li
                            onMouseEnter={() =>
                              setTextContent([
                                'Alberta Opportunity Stream',
                                'Alberta Express Entry',
                                'Alberta Accelerated Tech',
                                'Farm Stream',
                                'Graduate Entrepreneur Stream',
                                'Foreign Graduate Entrepreneur Stream',
                              ])
                            }
                          >
                            <HeaderComponent
                              text={'Alberta Immigrant Nominee Program'}
                            />
                          </li>
                          <li
                            onMouseEnter={() =>
                              setTextContent([
                                'Skills Immigration Stream',
                                'BC PNP Tech',
                                'Entrepreneur Immigration Stream',
                              ])
                            }
                          >
                            {' '}
                            <HeaderComponent text={'British Columbia'} />
                          </li>
                          <li
                            onMouseEnter={() =>
                              setTextContent([
                                'Skilled Workers in Manitoba',
                                'Skilled Workers Overseas',
                                'International Education Stream ',
                                'Business Investor Stream',
                              ])
                            }
                          >
                            {' '}
                            <HeaderComponent text={'Manitoba'} />
                          </li>
                          <li
                            onMouseEnter={() =>
                              setTextContent([
                                'New Brunswick Express Entry Labor Market Stream',
                                'New Brunswick Strategic Initiative',
                                'New Brunswick Entrepreneurial Stream (closed) ',
                                'Post-Graduate Entrepreneurial Stream',
                                'Skilled Worker Applicants with Employer Support	',
                                'New Brunswick Business Immigration Stream',
                                'Atlantic Immigration Pilot Program',
                              ])
                            }
                          >
                            {' '}
                            <HeaderComponent text={'New Brunswick'} />
                          </li>
                          <li
                            onMouseEnter={() =>
                              setTextContent([
                                'Nova Scotia Experience: Express Entry',
                                ' Entrepreneur Category',
                                'International Graduate Entrepreneur Category ',
                                'International Graduates In Demand	 ',
                                ' Skilled Worker Category',
                                ' Physician Stream	',
                                ' Nova Scotia Labor Market Priorities		',
                                ' Nova Scotia Labor Market Priorities for Physicians	',
                                ' Occupations In Demand		',
                                ' Critical Construction Worker Pilot 	',
                              ])
                            }
                          >
                            {' '}
                            <HeaderComponent text={'Nova Scotia'} />
                          </li>
                          <li
                            onMouseEnter={() =>
                              setTextContent([
                                'Express Entry Skilled Worker Category',
                                ' Skilled Worker Category',
                                'International Graduate Category ',
                                'International Entrepreneur Category',
                                'International Graduate Entrepreneur Category	',
                              ])
                            }
                          >
                            {' '}
                            <HeaderComponent
                              text={'Newfoundland and Labrador'}
                            />{' '}
                          </li>
                          <li
                            onMouseEnter={() =>
                              setTextContent([
                                'Northwest Territories Express Entry',
                                ' Northwest Territories Employer Driven',
                                'Critical Impact Worker ',
                                'Northwest Territories Skilled Worker ',
                                ' Northwest Territories Business Driven',
                                ' Northwest Territories Entrepreneur',
                              ])
                            }
                          >
                            {' '}
                            <HeaderComponent text={'Northwest Territories'} />
                          </li>

                          <li
                            onMouseEnter={() =>
                              setTextContent([
                                'Ontario Human Capital ',
                                ' Ontario Employer Job Offer',
                                'Ontario Entrepreneur ',
                                'Regional Immigration Pilot	 ',
                              ])
                            }
                          >
                            {' '}
                            <HeaderComponent text={'Ontario'} />
                          </li>
                          <li
                            onMouseEnter={() =>
                              setTextContent([
                                'PEI PNP Express Entry ',
                                'Business Impact',
                                'Work Permit ',
                                'Labor Impact	 ',
                                'Skilled Worker in PEI   ',
                                'Skilled Worker Outside Canada',
                                'Critical Worker ',
                                'International Graduate ',
                              ])
                            }
                          >
                            {' '}
                            <HeaderComponent text={'Prince Edward Island'} />
                          </li>
                          <li>
                            {' '}
                            <HeaderComponent text={'Saskatchewan'} />
                          </li>
                          <li>
                            {' '}
                            <HeaderComponent text={'Yukon'} />
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {selectedProgram === 'Express Entry' && activeItem === 1 && (
                    <div className=' w-[25%] auto flex items-start justify-center mt-4 mb-4'>
                      <div className='flex flex-col items-center justify-center'>
                        <ul className='text-[14px]'>
                          <li>
                            <HeaderComponent
                              text={'Federal Skilled Worker Class'}
                            />
                          </li>
                          <li>
                            {' '}
                            <HeaderComponent
                              text={'Canadian Experience Class (CEC) '}
                            />
                          </li>
                          <li>
                            {' '}
                            <HeaderComponent
                              text={'Federal Skilled Trades Class '}
                            />
                          </li>
                          <li>
                            {' '}
                            <HeaderComponent
                              text={'Comprehensive Ranking System (CRS) Score'}
                              textContent={['CRS Score Calculator']}
                            />
                          </li>
                          <li>
                            {' '}
                            <HeaderComponent
                              text={'Express Entry Draws'}
                            />{' '}
                          </li>
                          <li>
                            {' '}
                            <HeaderComponent
                              text={
                                'Invitation to Apply (ITA) & the electronic Application for Permanent Residence (eAPR)'
                              }
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {selectedProgram === 'After Permanent Residency' &&
                    activeItem === 1 && (
                      <div className=' w-[25%] auto flex items-start justify-center mt-4 mb-4'>
                        <div className='flex flex-col items-center justify-center'>
                          <ul className='text-[14px]'>
                            <li>
                              <HeaderComponent
                                text={'Permanent Resident Cards'}
                              />
                            </li>
                            <li>
                              {' '}
                              <HeaderComponent
                                text={'Permanent Resident Card Renewal'}
                              />
                            </li>
                            <li>
                              {' '}
                              <HeaderComponent
                                text={'Permanent Resident Travel Document'}
                              />
                            </li>
                            <li>
                              {' '}
                              <HeaderComponent text={'Residency Obligations'} />
                            </li>
                            <li>
                              {' '}
                              <HeaderComponent
                                text={'Canadian Citizenship'}
                              />{' '}
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}

                  {selectedProgram === 'Business Class' && activeItem === 1 && (
                    <div className=' w-[25%] auto flex items-start justify-center mt-4 mb-4'>
                      <div className='flex flex-col items-center justify-center'>
                        <ul className='text-[14px]'>
                          <li>
                            <HeaderComponent text={'Federal Self-Employed'} />
                          </li>
                          <li>
                            {' '}
                            <HeaderComponent
                              text={'Canada Start-Up Visa (SUV)'}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {selectedProgram === 'Caregiver Program' &&
                    activeItem === 1 && (
                      <div className=' w-[25%] auto flex items-start justify-center mt-4 mb-4'>
                        <div className='flex flex-col items-center justify-center'>
                          <ul className='text-[14px]'>
                            <li>
                              <HeaderComponent
                                text={'Home Child Care Provider Pilot'}
                              />
                            </li>
                            <li>
                              {' '}
                              <HeaderComponent
                                text={'Home Support Worker Pilot	'}
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}

                  {selectedProgram === 'Work Without a Permit ' &&
                    activeItem === 2 && (
                      <div className=' w-[25%] auto flex items-start justify-center mt-4 mb-4'>
                        <div className='flex flex-col items-center justify-center'>
                          <ul className='text-[14px]'>
                            <li>
                              <HeaderComponent text={'Business Visas'} />
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  {selectedProgram === ' Temporary Foreign Worker Program' &&
                    activeItem === 2 && (
                      <div className=' w-[25%] auto flex items-start justify-center mt-4 mb-4'>
                        <div className='flex flex-col items-center justify-center'>
                          <ul className='text-[14px]'>
                            <li>
                              <HeaderComponent
                                text={'Labour market impact assesment (LMIA)'}
                              />
                            </li>
                            <li>
                              <HeaderComponent
                                text={'Canada Global Talent Stream'}
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  {selectedProgram === 'International Mobility Program (IMP)' &&
                    activeItem === 2 && (
                      <div className=' w-[25%] auto flex items-start justify-center mt-4 mb-4'>
                        <div className='flex flex-col items-center justify-center'>
                          <ul className='text-[14px]'>
                            <li>
                              <HeaderComponent
                                text={'Intra Company Transfer'}
                              />
                            </li>
                            <li>
                              <HeaderComponent text={'CUSMA'} />
                            </li>
                            <li>
                              <HeaderComponent text={'CETA Work Permits'} />
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  {selectedProgram === 'Open Work Permits' &&
                    activeItem === 2 && (
                      <div className=' w-[25%] auto flex items-start justify-center mt-4 mb-4'>
                        <div className='flex flex-col items-center justify-center'>
                          <ul className='text-[14px]'>
                            <li>
                              <HeaderComponent
                                text={'Post Graduate Work Permit (PGWP) '}
                              />
                            </li>
                            <li>
                              <HeaderComponent
                                text={'IEC-International Experience Class'}
                              />
                            </li>
                            <li>
                              <HeaderComponent
                                text={'Spousal Open Work Permit (SOWP)'}
                              />
                            </li>
                            <li>
                              <HeaderComponent
                                text={'Spousal Open Work Permit (SOWP)'}
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  {selectedProgram === 'Study Permit In Canada' &&
                    activeItem === 3 && (
                      <div className=' w-[25%] auto flex items-start justify-center mt-4 mb-4'>
                        <div className='flex flex-col items-center justify-center'>
                          <ul className='text-[14px]'>
                            <li>
                              <HeaderComponent
                                text={'Student Direct Stream (SDS)'}
                              />
                            </li>

                            <li>
                              <HeaderComponent
                                text={`Certificat d'acceptation du Québec (CAQ)`}
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  {selectedProgram === ' Business/Invest' &&
                    activeItem === 4 && (
                      <div className=' w-[25%] auto flex items-start justify-center mt-4 mb-4'>
                        <div className='flex flex-col items-center justify-center'>
                          <ul className='text-[14px]'>
                            <li>
                              <HeaderComponent text={'Start-up'} />
                            </li>
                            <li>
                              <HeaderComponent
                                text={' Entrepreneur – self employed'}
                              />
                            </li>
                            <li>
                              <HeaderComponent
                                text={'Start a business in Canada'}
                              />
                            </li>
                            <li>
                              <HeaderComponent
                                text={'Buy an existing Business in Canada'}
                              />
                            </li>
                            <li>
                              <HeaderComponent
                                text={'Expand Your Business in Canada'}
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  {selectedProgram === 'PNP Entrepreneur Streams' &&
                    activeItem === 4 && (
                      <div className=' w-[25%] auto flex items-start justify-center mt-4 mb-4'>
                        <div className='flex flex-col items-center justify-center'>
                          <ul className='text-[14px]'>
                            <li>
                              <HeaderComponent text={'Alberta'} />
                            </li>
                            <li>
                              <HeaderComponent text={' British Columbia'} />
                            </li>
                            <li>
                              <HeaderComponent text={' Manitoba'} />
                            </li>
                            <li>
                              <HeaderComponent text={' New Brunswick'} />
                            </li>
                            <li>
                              <HeaderComponent
                                text={' Newfoundland and Labrador'}
                              />
                            </li>
                            <li>
                              <HeaderComponent text={'Northwest Territories'} />
                            </li>
                            <li>
                              <HeaderComponent text={'Nova Scotia'} />
                            </li>
                            <li>
                              <HeaderComponent text={'Ontario'} />
                            </li>
                            <li>
                              <HeaderComponent text={' Prince Edward Island'} />
                            </li>
                            <li>
                              <HeaderComponent text={'Saskatchewan'} />
                            </li>
                            <li>
                              <HeaderComponent text={' Yukon'} />
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  {selectedProgram === ' Work Permit to PR Pathways' &&
                    activeItem === 4 && (
                      <div className=' w-[25%] auto flex items-start justify-center mt-4 mb-4'>
                        <div className='flex flex-col items-center justify-center'>
                          <ul className='text-[14px]'>
                            <li>
                              <HeaderComponent text={'ICT'} />
                            </li>
                            <li>
                              <HeaderComponent text={'C11 work visa'} />
                            </li>
                            <li>
                              <HeaderComponent text={'C10 Work visa'} />
                            </li>
                            <li>
                              <HeaderComponent
                                text={'Entrepreneur LMIA-Owner Operated'}
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  {selectedProgram === ' Employers Outside Canada' &&
                    activeItem === 6 && (
                      <div className=' w-[25%] auto flex items-start justify-center mt-4 mb-4'>
                        <div className='flex flex-col items-center justify-center'>
                          <ul className='text-[14px]'>
                            <li>
                              <HeaderComponent
                                text={'Intra Company Transfer of Employees'}
                              />
                            </li>
                            <li>
                              <HeaderComponent
                                text={'Business Visit visa (LMIA Exempt)'}
                              />
                            </li>
                            <li>
                              <HeaderComponent
                                text={'Expand Business In Canada (linked)'}
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  {selectedProgram === 'Canadian Employers' &&
                    activeItem === 6 && (
                      <div className=' w-[25%] auto flex items-start justify-center mt-4 mb-4'>
                        <div className='flex flex-col items-center justify-center'>
                          <ul className='text-[14px]'>
                            <li>
                              <HeaderComponent
                                text={'Hiring Foreign Workers'}
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  {activeItem === 1 && selectedProgram === 'PNP' && (
                    <div className='w-[20%]'>
                      <HeaderComponentTextContent textContent={textContent} />
                    </div>
                  )}
                </div>
              </div>
            )}
            <div className='flex items-center justify-center gap-6 relative right-[1rem]'>
              <div className='cursor-pointer text-xl text-white text-[14px] '>
                <CiSearch />
              </div>
              <div className='cursor-pointer text-white text-[14px]'>
                <button className='bg-[#01F9E1] font-normal text-black px-4 py-2 rounded-[10px] text-[16px] hover:scale-105 transition ease-in delay-60 duration-150 mr-10'>
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className='w-full flex items-center justify-center sm:justify-around mt-6 mr-14'>
          <div className='flex items-center justify-start'>
            <img src={logo2} alt='logo' className='cursor-pointer w-[4.2rem]' />
          </div>
          <div className='flex items-start justify-start'>
            <img src={logo3} alt='logo' className='cursor-pointer w-40' />
          </div>
          <div
            className='flex items-center justify-start p-2 bg-[#01F9E1] cursor-pointer rounded-lg transition ease-in delay-50 duration-200'
            onClick={handleMenuClick}
            ref={menuRef}
          >
            <RiMenu2Fill className='text-black text-3xl ' />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
