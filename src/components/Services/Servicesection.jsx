import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Chip,
  useTheme,
  useMediaQuery,
  Paper,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// === Images (Hair) ===
import skin1 from "../asserts/11.jpg"
import skin2 from "../asserts/12.jpg"
import skin3 from "../asserts/13.jpg"
import skin4 from "../asserts/14.jpg"
import skin5 from "../asserts/15.jpg"

import hair1 from "../asserts/16.jpg"
import hair2 from"../asserts/17.jpg"
import hair3 from "../asserts/18.jpg"
import hair4 from "../asserts/19.jpg"
import hair5 from "../asserts/20.jpg"
import hair6 from "../asserts/21.jpg"
import hair7 from "../asserts/22.jpg"
import hair8 from"../asserts/23.jpg"

// ✅ Services Data
const services = [
  {
    title: "Hair Fall Treatments",
    description:
      "At Bonitaa Skin & Hair Care in Salem, we provide you with the latest anti-hair fall remedies that are customized to the condition of your head and hair. Hair fall, increased strength of follicles, and natural regrowth are achieved using technically clinically proven methods by our expert dermatologists. Every therapy starts with proper consultation and ends with an outcome that brings back confidence. Trust Bonitaa in Salem for effective, science-backed solutions for hair fall control and prevention.",
    image: hair1,
  },
  {
    title: "Hair PRP Treatment",
    description:
      "Are you ready to regain your confidence through fuller and healthier hair? Introducing science-supported Platelet-Rich Plasma (PRP) therapy at Bonitaa Skin & Hair Clinic in Salem, a natural, non-surgical hair regrowth remedy. Our high-technology PRP methods are curated to the tropical climate and urbanity of Salem to use your own body regenerative capabilities to counter hair thinning, shedding, and loss.",
    image: hair2,
  },
  {
    title: "SHI Transplant",
    description:
      "Facing hair thinning or balding patches? At Bonitaa Skin & Hair Care, Salem, we specialize in SHI (Simultaneous Harvesting and Implantation), an advanced hair transplant technique. This keeps follicles intact while harvesting and placing simultaneously, improving success rate and providing denser natural results.",
    image: hair3,
  },
  {
    title: "Bio-FUE Hair Transplant",
    description:
      "Bio-FUE hair transplant helps you get your natural hair back without cuts or scars. At Bonitaa Skin and Hair Care in Salem, our specialists perform this with care and also use PRP therapy to speed healing and growth. Works well for early hair thinning or complete hair loss with long-lasting results.",
    image: hair4,
  },
  {
    title: "Y CELL PRP Treatment",
    description:
      "Y Cell PRP therapy is a non-invasive advanced treatment for thinning hair or early signs of hair loss. It uses your own platelets to activate weak follicles and improve scalp health without surgery. Safe for both men and women in a clinical setting.",
    image: hair5,
  },
  {
    title: "Bonitaa Biotin PRO PRP",
    description:
      "Modern Platelet-Rich Plasma (PRP) with Biotin PRO PRP enhances hair health. This procedure stimulates dormant follicles, helping thicker and denser growth in bald patches.",
    image: hair6,
  },
  {
    title: "TriCell PRP Treatments",
    description:
      "At Bonitaa Skin and Hair Care, Salem, we provide TriCell PRP therapy — a highly successful non-surgical solution aimed at reviving hair using your body’s healing cells.",
    image: hair7,
  },
  {
    title: "Sapphire Hair Transplant",
    description:
      "Sapphire Hair Transplant is a gentle, advanced technique to restore thicker, natural-looking hair with lasting results. Our experts ensure precision and comfort for outcomes you’ll love.",
    image: hair8,
  },
  {
    title: "Skin PRP Treatments",
    description:
      "PRP therapy at our clinic helps your skin renew itself using your own blood components. It stimulates collagen, smooths wrinkles, and gives a natural glow. Perfect for scars, fine lines, and refreshed complexion with quick recovery.",
    image: skin1,
  },
  {
    title: "Q-Switch Treatment",
    description:
      "Our dermatologists use Q-switch laser to remove pigmentation, melasma, scars, and tattoos. Safe and precise, it restores an even tone and brightens skin texture effectively.",
    image: skin2,
  },
  {
    title: "Skin Lightening Treatment",
    description:
      "At Bonitaa Skin & Hair Care, our safe treatments help bleach dark marks, even out skin tone, and reduce hyperpigmentation for a smooth, radiant complexion.",
    image: skin3,
  },
  {
    title: "Laser Hair Removal",
    description:
      "Tired of shaving nicks and waxing pain? Our advanced laser hair removal ensures long-lasting smoothness, reduces ingrown hairs, and offers hassle-free daily confidence.",
    image: skin4,
  },
  {
    title: "Exosome GFC Skin Treatment",
    description:
      "We combine Growth Factor Concentrate (GFC) from your blood with stem cell-derived exosomes to trigger regeneration. This reduces fine lines, scars, dullness, and uneven tone, giving brighter, younger-looking skin.",
    image: skin5,
  },
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(services[0]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    AOS.init({ duration: 100 });
  }, []);

  return (
    <Box sx={{ py: 10, px: { xs: 2, sm: 4, md: 6, xl: 12 }, textAlign: "center" }}data-aos="fade-up">
      {/* Heading */}
      <Typography
        variant="h4"
        fontWeight={700}
        marginTop={3}
        sx={{ fontSize: { xs: "28px", sm: "34px", lg: "38px" }, mb: 3  }}
      
      >
        Our Services
      </Typography>

      {/* Chips */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          rowGap: 3,
          maxWidth: "1200px",
          mx: "auto",
          mt: 5,
        }}
      >
        {services.map((service, index) => (
          <Chip
            key={service.title}
            label={service.title}
            onClick={() => setActiveService(service)}
            sx={{
              px: 4,
              py: 2,
              fontSize: { xs: "13px", sm: "14px", md: "15px" },
              borderRadius: "24px",
              height: "55px",
              backgroundColor:
                activeService.title === service.title ? "#000000ff" : "#f1f1f1",
              color: activeService.title === service.title ? "#fff" : "#222",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow:
                activeService.title === service.title
                  ? "0px 4px 12px rgba(0,0,0,0.2)"
                  : "none",
              "&:hover": {
                backgroundColor:
                  activeService.title === service.title
                    ? "#000000ff"
                    : "#e0e0e0",
              },
            }}
          />
        ))}
      </Box>

      {/* Desktop Card */}
      <Paper
        data-aos="zoom-in"
        data-aos-delay="200"
        elevation={0}
        sx={{
          mt: 10,
          maxWidth: "1000px",
          mx: "auto",
          p: { xs: 3, sm: 4, lg: 5 },
          display: { xs: "none", sm: "flex" },
          flexDirection: { sm: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { sm: 4, md: 6 },
          borderRadius: "24px",
          backgroundColor: "#fff",
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Box
          component="img"
          src={activeService.image}
          alt={activeService.title}
          sx={{
            width: { sm: "280px", md: "50%" },
            height: { sm: "280px", md: "300px" },
            objectFit: "cover",
            borderRadius: "16px",
          }} 
        />
        <Box textAlign="left" sx={{ maxWidth: { sm: "calc(100% - 300px)" } }}>
          <Typography fontSize={{ sm: "24px", md: "28px" }} fontWeight={800} mb={2}>
            {activeService.title}
          </Typography>
          <Typography sx={{ fontSize: { sm: "16px", md: "17px" }, color: "#444" }}>
            {activeService.description}
          </Typography>
        </Box>
      </Paper>

      {/* Mobile Slider */}
      {isMobile && (
        <Box mt={5}>
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 2500 }}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            style={{ "--swiper-navigation-color": "red" }}
          >
            {services.map((service) => (
              <SwiperSlide key={service.title}>
                <Box
                  component="img"
                  src={service.image}
                  alt={service.title}
                  sx={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "16px",
                  }}
                />
                <Typography mt={2} fontWeight={700}>
                  {service.title}
                </Typography>
                <Typography mt={1} color="text.secondary">
                  {service.description}
                </Typography>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      )}
    </Box>
  );
};

export default ServicesSection;
