import React from "react";
import { Helmet } from "react-helmet"; // ✅ Import Helmet
import Header from "../components/Header";
import Contactsec from "../components/Contact/Contactsec";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
      {/* ✅ Helmet for SEO */}
      <Helmet>
        <title>Contact Us | Bonitaa Skin & Hair Care Clinic</title>
        <meta
          name="description"
          content="Get in touch with Bonitaa Skin & Hair Care Clinic in Salem for premium skin and hair treatments. Book your consultation today."
        />
        <meta name="keywords" content="contact Bonitaa, skin clinic Salem, hair care Salem, appointment" />
        <meta property="og:title" content="Contact Us | Bonitaa Clinic" />
        <meta
          property="og:description"
          content="Reach out to Bonitaa Clinic for expert skin & hair care treatments."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/contact" />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Bonitaa Clinic" />
        <meta
          name="twitter:description"
          content="Book your appointment with Bonitaa Clinic today."
        />
        <meta name="twitter:image" content="https://yourwebsite.com/twitter-image.jpg" />
      </Helmet>

      {/* ✅ Page Content */}
      <Header />
      <Contactsec />
      <Footer />
    </div>
  );
}

export default Contact;
