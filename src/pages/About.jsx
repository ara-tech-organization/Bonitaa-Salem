import React from 'react';
import Header from '../components/Header';


import About from '../components/Home/About';
import Work from '../components/Home/Work'; // ✅ make sure file is "Work.jsx"
import Choose from '../components/Home/Choose';
import Story from '../components/Home/Story';
import WhoWeAre from '../components/About/weare';
import Testimonial from '../components/About/Testimonial';
import Footer from '../components/Footer';




function Home() {
  return (
    <div>
      <Header />
      <About />
      <WhoWeAre/>
      <Work />
      <Choose/>
      <Story/>
      <Testimonial />
    
      <Footer/>
    </div>
  );
}

export default Home;
