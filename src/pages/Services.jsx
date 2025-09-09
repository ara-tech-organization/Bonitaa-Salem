import React from "react";
import Header from "../components/Header";
import Servicesection from "../components/Services/Servicesection";
import FAQ from "../components/Services/FAQ"
import Footer from "../components/Footer";

function Services() {
  return (
    <div>
      <Header />
      <Servicesection />
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default Services;
