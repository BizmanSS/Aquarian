import React from 'react';
import logo from '../../../Assets/logo2.png';
import logo2 from '../../../Assets/image 43.png';
import logo4 from '../../../Assets/logo3.png';
import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { FaTelegramPlane } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';
import logo3 from '../../../Assets/AQUARIAN.png';
import '../../../styles/AboutUs.css';
import logoccic from '../../../Assets/image52.png';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='flex items-start justify-around text-white pt-20 border-b-[1px] border-gray-500 pb-6'>
        <div className='flex items-start justify-center gap-20'>
          <div className='flex flex-col items-center justify-center'>
            <img src={logo} alt='logo' className='w-40' />
            <img src={logo4} alt='logo' className='w-40' />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img src={logoccic} alt='logo' className='w-[13rem]' />
            <div className='text-sm text-[#B4B5B4] mt-3 ml-4'>
              122a, Suncity Success Tower,
              <br /> Sector 65, Gurugram,
              <br /> Haryana 122102
            </div>
          </div>
        </div>
        <ul className='text-[#B4B5B4]'>
          Library
          <br />
          <br />
          <li className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'>
            Self Development
          </li>
          <li className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'>
            Psychology
          </li>
          <li className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'>
            Classics
          </li>
          <li className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'>
            Romance
          </li>
          <li className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'>
            Bussiness
          </li>
          <li className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'>
            All genres
          </li>
        </ul>
        <ul className='text-[#B4B5B4]'>
          Bookmate
          <br />
          <br />
          <li className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'>
            Subscribe
          </li>
          <li className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'>
            Subscription as a gift
          </li>
          <li className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'>
            Podcast
          </li>
          <li className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'>
            BM Journel
          </li>
          <li className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'>
            Help
          </li>
        </ul>
        <ul className='text-[#B4B5B4]'>
          Follow
          <br />
          <br />
          <li className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'>
            <FaInstagram /> Instagram
          </li>
          <li className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'>
            <FaTelegramPlane /> Telegram
          </li>
          <li className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'>
            <FaFacebookF /> Facebook
          </li>
          <li className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'>
            <SlSocialVkontakte /> Vkontakte
          </li>
          <li className='flex items-center justify-start gap-4 text-sm text-[#B4B5B4] my-1'>
            <FaXTwitter /> Twitter
          </li>
        </ul>
      </div>
      <div className='flex items-center justify-between text-[#B4B5B4] text-sm mt-4 px-4'>
        <div> Copyright © 2021 Bookmate. All rights reserved.</div>
        <div className='flex items-center justify-center gap-10 mr-10'>
          <div>About</div>
          <div>Jobs</div>
          <div>Contact</div>
          <div>Legal</div>
          <div>For publishers & authors</div>
        </div>
      </div>
      <div>
        <img className='w-[90%] block mt-8 mx-auto ' src={logo3} alt='logo3' />
      </div>
    </div>
  );
};

export default Footer;
