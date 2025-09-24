import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import About from '../components/Home/About';
import Work from '../components/Home/Work';
import Choose from '../components/Home/Choose';
import Story from '../components/Home/Story';
import WhoWeAre from '../components/About/weare';
import Testimonial from '../components/About/Testimonial';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Helmet>
        {/* ✅ SEO Meta Tags */}
        <title>Bonitaa - Salem's Trusted Salon & Skin Experts</title>
        <meta
          name="description"
          content="Bonitaa is Salem’s go-to destination for premium skin, hair, and beauty treatments. Book your appointment now to glow with expert care!"
        />

        {/* ✅ Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="Bonitaa - Premium Salon & Skin Clinic in Salem" />
        <meta
          property="og:description"
          content="Glow-up starts here. Discover advanced skin, hair, and beauty treatments at Bonitaa, Salem."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ara-tech-organization.github.io/Bonitaa-Salem/" />
        <meta property="og:image" content="%PUBLIC_URL%/preview-image.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Bonitaa - Salem's Trusted Salon" />

        {/* ✅ Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        <meta name="twitter:creator" content="@YourTwitterHandle" />
        <meta name="twitter:title" content="Bonitaa - Premium Salon & Skin Clinic in Salem" />
        <meta
          name="twitter:description"
          content="Glow-up starts here. Discover advanced skin, hair, and beauty treatments at Bonitaa, Salem."
        />
        <meta name="twitter:image" content="%PUBLIC_URL%/preview-image.jpg" />
      </Helmet>

      <Header />
      <About />
      <WhoWeAre />
      <Work />
      <Choose />
      <Story />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Home;
