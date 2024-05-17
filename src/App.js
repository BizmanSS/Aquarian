import React from 'react';
import HomePage from './components/Pages/HomePages/HomePage';
import Sidebar from './components/globalComponents/Sidebar/Sidebar';
// import Header from "./components/globalComponents/Header/Header";
import Footer from './components/globalComponents/Footer/Footer';
import AboutUs from './components/Pages/AboutUs/AboutUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/globalComponents/Header/Header';
import ContactUsPage from './components/Pages/ContactUs/Contact';
import SitemapImmigrateDesktop from './components/globalComponents/Sidebar/SitemapImmigrateDesktop';
import SitemapWorkDesktop from './components/globalComponents/Sidebar/SitemapWorkDesktop';
import SitemapStudyDesktop from './components/globalComponents/Sidebar/SitemapStudyDesktop';
import SitemapVisitDesktop from './components/globalComponents/Sidebar/SitemapVisitDesktop';
import SitemapBusinessDesktop from './components/globalComponents/Sidebar/SitemapBusinessDesktop';
import SitemapSponsorshipDesktop from './components/globalComponents/Sidebar/SitemapSponsorshipDesktop';
import SitemapEmployersDesktop from './components/globalComponents/Sidebar/SitemapEmployersDesktop';
import {
  useMobile,
  MobileProvider,
} from './components/globalComponents/MobileContext/IsMobileContext';
import ClbCalculator from './components/Pages/Clbcalculator/ClbCalculator';
import CrsCalculator from './components/Pages/CrsCalculator/CrsCalculator';
import Blogs from './components/Pages/Blogs/Blogs';
import InnerBlog from "./components/BlogsComponent/innerBlog";
const App = () => {
  const { isMobile } = useMobile();
  return (
    <div className='max-w-[140rem] mx-auto'>
      <BrowserRouter>
        <MobileProvider>
          {!isMobile && <Sidebar />}
          <Header />{' '}
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/contact-us' element={<ContactUsPage />} />
            <Route
              path='/sitemapImmigrate'
              element={<SitemapImmigrateDesktop />}
            />
            <Route path='/sitemapWork' element={<SitemapWorkDesktop />} />
            <Route path='/sitemapStudy' element={<SitemapStudyDesktop />} />
            <Route path='/sitemapVisit' element={<SitemapVisitDesktop />} />
            <Route
              path='/sitemapBusiness'
              element={<SitemapBusinessDesktop />}
            />
            <Route
              path='/sitemapSponsorship'
              element={<SitemapSponsorshipDesktop />}
            />
            <Route
              path='/sitemapEmployers'
              element={<SitemapEmployersDesktop />}
            />
            <Route path='/clb-calculator' element={<ClbCalculator />} />
            <Route path='/crs-calculator' element={<CrsCalculator />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/blogs/innerBlog' element={<InnerBlog />} />
          </Routes>
          <Footer />
        </MobileProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
