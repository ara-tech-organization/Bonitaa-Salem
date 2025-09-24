import React from "react";
import { Helmet } from "react-helmet"; // ✅ Import Helmet
import Header from "../components/Header";
import Herosection from "../components/Home/Herosection";
import Treatment from "../components/Home/Treatment";
import About from "../components/Home/About";
import Work from "../components/Home/Work"; // ✅ make sure file is "Work.jsx"
import Choose from "../components/Home/Choose";
import Story from "../components/Home/Story";
import Book from "../components/Home/Book";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      {/* ✅ Helmet SEO for Home */}
      <Helmet>
        <title>Bonitaa - Premium Skin & Hair Care Clinic in Salem</title>
        <meta
          name="description"
          content="Bonitaa Skin & Hair Care Clinic in Salem offers advanced treatments for healthy glowing skin and strong hair. Trusted by hundreds of happy clients."
        />
        <meta
          name="keywords"
          content="Bonitaa Salem, skin care clinic, hair care, PRP treatment, beauty clinic, Salem"
        />
        <meta property="og:title" content="Bonitaa - Premium Skin & Hair Care Clinic" />
        <meta
          property="og:description"
          content="Discover advanced skin and hair treatments at Bonitaa Clinic, Salem. Book your consultation today."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bonitaa - Premium Skin & Hair Care Clinic" />
        <meta
          name="twitter:description"
          content="Glowing skin, strong hair, and expert treatments at Bonitaa Clinic in Salem."
        />
        <meta name="twitter:image" content="https://yourwebsite.com/twitter-image.jpg" />
      </Helmet>

      {/* ✅ Page Content */}
      <Header />
      <Herosection />
      <Treatment />
      <About />
      <Work />
      <Story />
      <Choose />
      <Book />
      <Footer />
    </div>
  );
}

export default Home;
