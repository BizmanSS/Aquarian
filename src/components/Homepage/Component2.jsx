import React from 'react';
import Card from './CardElement';
import cardimg1 from '../../Assets/PR 1.jpg';
import cardimg2 from '../../Assets/Family Sponsorship 1.jpg';
import cardimg3 from '../../Assets/Super Visa 1.jpg';
import cardimg4 from '../../Assets/Work Visa 3.jpg';
import cardimg5 from '../../Assets/Studnet Visa 3.jpg';
import cardimg6 from '../../Assets/Visa Extension 2.jpg';
import cardimg7 from '../../Assets/Business Visa 2.jpg';
import cardimg8 from '../../Assets/Visitor visa 2.jpg';
import cardimg9 from '../../Assets/investors 2.jpg';

const Component2 = () => {
  const array = [
    {
      img: cardimg1,
      title: 'Permanent Residency (PR)',
      description:
        'Make Canada your permanent home! PR allows you to live, work and study in Canada indefinitely, with access to healthcare and social benefits.',
    },
    {
      img: cardimg2,
      title: 'Family Sponsorship',
      description:
        'Canadians and permanent residents can sponsor spouses, children, parents and grandparents to bring their family together!',
    },
    {
      img: cardimg3,
      title: 'Super Visa',
      description:
        'Enjoy hassle-free family visits! The Super Visa allows parents and grandparents of Canadian citizens and permanent residents to stay for up to two years per visit, with multiple entries.',
    },
    {
      img: cardimg4,
      title: 'Work Visa',
      description:
        'Canadians and permanent residents can sponsor spouses, children, parents and grandparents to bring their family together!',
    },
    {
      img: cardimg5,
      title: 'Student Visa',
      description:
        'Pursue your academic aspirations at prestigious Canadian institutions making you independent and ready for a successful career.',
    },
    {
      img: cardimg6,
      title: 'Visa Extensions',
      description:
        'Extend your stay and continue your Canadian adventure! Visa Extensions provide flexibility for individuals already in Canada, allowing them to prolong their stay for tourism, work, or study.',
    },
    {
      img: cardimg7,
      title: 'Business Visa',
      description:
        'Establish your name in Canadas dynamic business environment! A Business Visa opens doors for investors, entrepreneurs, and self-employed individuals to establish and grow their ventures in Canada.',
    },
    {
      img: cardimg8,
      title: 'Visitor Visa',
      description:
        'Explore Canadas beauty with a Visitor Visa! Temporary entry allows you to experience stunning landscapes, rich culture, and lasting memories.',
    },
    {
      img: cardimg9,
      title: 'Refusals',
      description:
        'Explore Canadas beauty with a Visitor Visa! Temporary entry allows you to experience stunning landscapes, rich culture, and lasting memories.',
    },
  ];

  return (
    <div>
      <div className='w-[97%] text-3xl flex items-center justify-center'>
        Choose Your <span className='text-[#2FAB9E] mx-2'>Program</span>
      </div>
      <div className='w-full flex flex-col items-center justify-center'>
        <div className='w-[80%] gap-10 mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'>
          {array.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Component2;
