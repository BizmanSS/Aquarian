import React from 'react';
import Card from './CardElement';
import cardimg1 from '../../Assets/PR 1.jpg';
import cardimg2 from '../../Assets/cardimg2.png';
import cardimg3 from '../../Assets/cardimg3.png';
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
        'Bring your family together! Canadians and permanent residents can sponsor spouses, children, parents and grandparents to join them in Canada.',
    },
    {
      img: cardimg3,
      title: 'Super Visa',
      description:
        'Enjoy hassle-free family visits! The Super Visa allows parents and grandparents of Canadian citizens and permanent residents to stay for up to two years per visit, with multiple entries.',
    },
    {
      img: cardimg1,
      title: 'Work Visa',
      description:
        'Explore infinite career opportunities in Canada! With a Work Visa, you can legally work, gain valuable experience, advance your career, and contribute to the countrys thriving workforce.',
    },
    {
      img: cardimg2,
      title: 'Student Visa',
      description:
        'Pursue your academic aspirations at prestigious Canadian institutions making you independent and ready for a successful career.',
    },
    {
      img: cardimg3,
      title: 'Visa Extensions',
      description:
        'Extend your stay and continue your Canadian adventure! Visa Extensions provide flexibility for individuals already in Canada, allowing them to prolong their stay for tourism, work, or study.',
    },
    {
      img: cardimg1,
      title: 'Business Visa',
      description:
        'Establish your name in Canadas dynamic business environment! A Business Visa opens doors for investors, entrepreneurs, and self-employed individuals to establish and grow their ventures in Canada.',
    },
    {
      img: cardimg2,
      title: 'Visitor Visa',
      description:
        'Explore Canadas beauty with a Visitor Visa! Temporary entry allows you to experience stunning landscapes, rich culture, and lasting memories.',
    },
    {
      img: cardimg3,
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
