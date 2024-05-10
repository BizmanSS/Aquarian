import React from 'react';
import HomePage from './components/Pages/HomePages/HomePage';
import Sidebar from './components/globalComponents/Sidebar/Sidebar';
// import Header from "./components/globalComponents/Header/Header";
import Footer from './components/globalComponents/Footer/Footer';
import AboutUs from './components/Pages/AboutUs/AboutUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/globalComponents/Header/Header';
import ContactUsPage from './components/Pages/ContactUs/Contact';
import SitemapDesktop from './components/globalComponents/Sidebar/SitemapDesktop';
import {
  useMobile,
  MobileProvider,
} from './components/globalComponents/MobileContext/IsMobileContext';
import ClbCalculator from './components/Pages/Clbcalculator/ClbCalculator';
import CrsCalculator from './components/Pages/CrsCalculator/CrsCalculator';
const App = () => {
  const { isMobile } = useMobile();
  return (
    <div className='max-w-[120rem] mx-auto'>
      <BrowserRouter>
        <MobileProvider>
          {!isMobile && <Sidebar />}
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/contact-us' element={<ContactUsPage />} />
            <Route path='/sitemap' element={<SitemapDesktop />} />
            <Route path='/clb-calculator' element={<ClbCalculator />} />
            <Route path='/crs-calculator' element={<CrsCalculator />} />
          </Routes>
          <Footer />
        </MobileProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
