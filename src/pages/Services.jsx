import React from "react";
import { Helmet } from "react-helmet"; // ✅ Import Helmet
import Header from "../components/Header";
import Servicesection from "../components/Services/Servicesection";
import FAQ from "../components/Services/FAQ";
import Footer from "../components/Footer";

function Services() {
  return (
    <div>
      {/* ✅ Helmet for SEO */}
      <Helmet>
        <title>Our Services | Bonitaa Skin & Hair Care Clinic</title>
        <meta
          name="description"
          content="Explore Bonitaa's professional skin and hair care services in Salem. From PRP treatments to advanced facials, we help you achieve glowing skin and healthy hair."
        />
        <meta
          name="keywords"
          content="skin care services, hair treatments, PRP, facial, Bonitaa Clinic, Salem"
        />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Our Services | Bonitaa Clinic" />
        <meta
          property="og:description"
          content="Discover premium skin & hair treatments at Bonitaa Clinic, Salem. Book your consultation today."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/services" />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | Bonitaa Clinic" />
        <meta
          name="twitter:description"
          content="Professional skin & hair care treatments in Salem for men and women."
        />
        <meta name="twitter:image" content="https://yourwebsite.com/twitter-image.jpg" />
      </Helmet>

      {/* ✅ Page Content */}
      <Header />
      <Servicesection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Services;
