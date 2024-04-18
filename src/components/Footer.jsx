import React from 'react';
import logo from '../Assets/logo2.png';
import logo2 from '../Assets/image 43.png';
import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { FaTelegramPlane } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';
const Footer = () => {
  return (
    <div className='w-[94%] h-80 bg-black mt-6 flex items-start justify-around text-white pt-20'>
      <div className='flex items-center justify-center gap-20'>
        <div>
          <img src={logo} alt='logo' className='w-40' />
        </div>
        <div>
          <img src={logo2} alt='logo' className='w-[12rem]' />
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
  );
};

export default Footer;
