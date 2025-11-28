import React from "react";
import Navbar from "./Outlet/Navbar";
import Products from "./pages/Product";
import Footer from "./pages/Footer";
import BannerSlider from "./pages/Sidebar";
import Section from "./pages/Section";

const App = () => {
  return (
    <div>
      <Navbar />
      <BannerSlider/>
      <Products />
      <Section/>
      <Footer/>
    </div>
  );
};

export default App;
