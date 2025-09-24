import React from "react";
import { Helmet } from "react-helmet"; // ✅ Import Helmet
import Header from "../components/Header";
import AppointmentForm from "../components/Appointment/form";
import Footer from "../components/Footer";

function Services() {
  return (
    <div>
      {/* ✅ Helmet for SEO */}
      <Helmet>
        <title>Our Services | Bonitaa Skin & Hair Care Clinic</title>
        <meta
          name="description"
          content="Explore Bonitaa's professional skin and hair care services. From PRP treatments to advanced facials, we help you achieve healthy glowing skin and strong hair."
        />
        <meta name="keywords" content="skin care, hair care, PRP, beauty clinic, Salem" />
        <meta property="og:title" content="Our Services | Bonitaa Clinic" />
        <meta
          property="og:description"
          content="Discover premium skin & hair treatments designed to enhance your natural beauty."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/services" />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | Bonitaa Clinic" />
        <meta
          name="twitter:description"
          content="Professional skin and hair treatments for men & women in Salem."
        />
        <meta name="twitter:image" content="https://yourwebsite.com/twitter-image.jpg" />
      </Helmet>

      {/* ✅ Page Content */}
      <Header />
      <AppointmentForm />
      <Footer />
    </div>
  );
}

export default Services;
