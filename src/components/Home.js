// Home.js
import React from 'react';
import Navbar from "./Navbar";
import HeroImage from "./HeroImage";
import About from "./About";
import Reviews from "./Testimonials";
import Doctors from "./Doctors";
import Footer from "./Footer";


const Home = () => {
  return (
    <div className="home">
    <Navbar />
    <HeroImage />
    
   
    <Doctors />
    <Reviews />
    <About />
    <Footer />
  </div>
   
  );
};

export default Home;
