import React from 'react';
import Card from './CardElement';
import cardimg1 from '../../Assets/PR 1.png';
import cardimg2 from '../../Assets/Family Sponsorship 1.png';
import cardimg3 from '../../Assets/Super Visa 1.png';
import cardimg4 from '../../Assets/Work Visa 3.jpg';
import cardimg5 from '../../Assets/Study Visa.png';
import cardimg6 from '../../Assets/Visa Extension 2.png';
import cardimg7 from '../../Assets/Business Visa 2.png';
import cardimg8 from '../../Assets/Visitor Visa.png';
import cardimg9 from '../../Assets/Refusal.png';

const Component2 = () => {
  const array = [
    {
      img: cardimg1,
      title: 'Permanent Residency (PR)',
      description:
        'Make Canada your Permanent home! PR allows you to live, work and study in Canada indefinitely, with access to healthcare and social benefits.',
    },
    {
      img: cardimg2,
      title: 'Family Sponsorship',
      description:
        'Canadian Citizen and Permanent Residents can sponsor spouses, children, parents and grandparents to bring their family together!',
    },
    {
      img: cardimg3,
      title: 'Super Visa',
      description:
        'Enjoy hassle-free family visits! The Super Visa allows parents and grandparents of Canadian Citizens and Permanent Residents to stay for up to two years per visit, with multiple entries.',
    },
    {
      img: cardimg4,
      title: 'Work Visa',
      description:
        'Tap into the rich and diverse Employment market in Canada by successfully obtaining your work visa through our top notch services.',
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
      description: `Establish your name in Canada's dynamic business environment! A Business Visa opens doors for investors, entrepreneurs, and self-employed individuals to establish and grow their ventures in Canada.`,
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
        'Need not be disheartened if your visa is refused. Our expertise and experience will leave no stone unturned in preparing you for your reviews and re-application.',
    },
  ];

  return (
    <div>
      <div className='w-[100%] text-[1.5rem] md:text-[3rem] font-semibold flex items-center justify-center -mb-10'>
        Choose Your <span className='text-[#2FAB9E] mx-2 '>Program</span>
      </div>
      <div className='w-full flex flex-col items-center justify-center'>
        <div className='ml-8 md:ml-0 w-[80%] gap-10 mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'>
          {array.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Component2;
