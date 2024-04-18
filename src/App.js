import React from 'react';
import Header from './components/Header';
import Component2 from './components/Component2';
import Sidebar from './components/Sidebar';
import Component1 from './components/Component1';
import Component3 from './components/Component3';
import Component4 from './components/Component4';
import Banner from './components/Banner';
import Component5 from './components/Component5';
import Footer from './components/Footer';

const App = () => {
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

export default App;
