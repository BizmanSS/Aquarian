import React from 'react';
import Sidebar from '../components/Homepage/Sidebar';
import Header from '../components/Homepage/Header';
import Banner from '../components/Homepage/Banner';
import Component1 from '../components/Homepage/Component1';
import Component2 from '../components/Homepage/Component2';
import Component3 from '../components/Homepage/Component3';
import Component4 from '../components/Homepage/Component4';
import Component5 from '../components/Homepage/Component5';
import Footer from '../components/Homepage/Footer';

const Homepage = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <Banner />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Footer />
    </div>
  );
};

export default Homepage;
