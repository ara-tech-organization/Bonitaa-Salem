import React from 'react';
import Header from '../components/Header';
import Herosection from '../components/Home/Herosection';
import Treatment from '../components/Home/Treatment';
import About from '../components/Home/About';
import Work from '../components/Home/Work'; // ✅ make sure file is "Work.jsx"
import Choose from '../components/Home/Choose';
import Story from '../components/Home/Story';
import Book from '../components/Home/Book';
import Footer from '../components/Footer';
function Home() {
  return (
    <div>
      <Header />
      <Herosection />
      <Treatment />
      <About />
      
      <Work />
      <Story/>
      <Choose/>
      
      <Book/>
      <Footer/>
    </div>
  );
}

export default Home;
