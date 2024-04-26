import React from "react";
import HomePage from "./components/Pages/HomePages/HomePage";
import Sidebar from "./components/globalComponents/Sidebar/Sidebar";
// import Header from "./components/globalComponents/Header/Header";
import Footer from "./components/globalComponents/Footer/Footer";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/globalComponents/Header/Header";
import ContactUs from "./components/Pages/ContactUs/Contact";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
