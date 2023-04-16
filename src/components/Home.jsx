import React from "react";
import Banner from "./Home/banner/Banner";
import Footer from "./Home/footer/Footer";
import Middlebar from "./Home/middleBar/Middlebar";
import Navbar from "./Home/navigationBar/Navbar";
import Programs from "./Home/programs/Programs";
import Topheader from "./Home/topHeader/Topheader";
import Vision from "./Home/vision/Vision";
import News from "./Home/News/News";
import Event from "./Home/LifeAtEman/Event";
import About from "./Home/Aboutus/About";
import Map from "./Home/Map";

const Home = () => {
  return (
    <div>
      <Topheader />
      <Middlebar />
      <Navbar />
      <Banner />
      <Vision />
      <News />
      <About />
      <Programs />
      <Event />
      <Footer />
      <Map />
    </div>
  );
};

export default Home;
