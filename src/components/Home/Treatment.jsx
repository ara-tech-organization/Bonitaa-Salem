import React from "react";
import { Box, Grid, Typography, Card, CardContent, CardMedia, Button, useMediaQuery, useTheme } from "@mui/material";
import Slider from "react-slick";

// Sample images
import img1 from "../asserts/a1.jpg";
import img2 from "../asserts/a2.jpg";
import img3 from "../asserts/a3.jpg";
import img4 from "../asserts/a4.jpg";
import img5 from "../asserts/a5.jpg";
import img6 from "../asserts/a6.jpg";

const treatments = [
  {
    title: "SHI Transplant",
    desc: "We offer Simultaneous Harvesting and Implantation (SHI) Treatment. It is a modern hair transplant technique.",
    img: img1,
  },
  {
    title: "PRP Treatment",
    desc: "Platelet-rich plasma facials are a noninvasive, FDA-approved anti-aging procedure.",
    img: img2,
  },
  {
    title: "Eyebrow Transplantation",
    desc: "Bonitaa Hair and Skin Care Centre provides high-quality thinning or damaged brows treatments with quick recovery.",
    img: img3,
  },
  {
    title: "Hair Fall Treatment",
    desc: "We offer Follicular Unit Excision and QR678, a patented hair regrowth treatment for targeted hair loss.",
    img: img4,
  },
  {
    title: "Skin Lightening Treatment",
    desc: "We offer skin-lightening treatments to improve skin tone and address pigmentation concerns, blemishes.",
    img: img5,
  },
  {
    title: "Hair Transplantation",
    desc: "Bonitaa Hair Care clinic offers advanced Bio-Fue hair transplants, integrating cell-based growth for realistic results.",
    img: img6,
  },
];

const TreatmentsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Slider settings for mobile
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 8 }, bgcolor: "#fafafa" }}>
      {/* Heading */}
      <Typography
        variant="h6"
        align="center"
        data-aos="fade-up"
        sx={{ fontWeight: "bold", color: "#FFD700", mb: 1 }}
      >
        OUR TREATMENTS
      </Typography>
      <Typography
        variant="h4"
        align="center"
        data-aos="fade-up"
        sx={{ fontWeight: "bold", mb: 6 }}
      >
        Best Dermatologists In Coimbatore <br /> For Skin & Hair Care
      </Typography>

      {/* Desktop Grid */}
      {!isMobile && (
        <Grid container spacing={4} data-aos="fade-up">
          {treatments.map((t, i) => (
            <Grid size={{xs:12,sm:6,md:4}} key={i}>
              <Box
                sx={{
                 
                  borderRadius: 3,
                  p: 1,

                  
                }}
              >
                <Card
                  sx={{
                    border: "2px solid black",
                    borderRadius: 2,
                    boxShadow: 4,
                    transition: "0.3s",
                    "&:hover": { transform: "translateY(-8px)", boxShadow: 6 ,},
                    
                  }}
                >
                  <CardMedia
                    component="img"
                    height="220"
                    image={t.img}
                    alt={t.title}
                    sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}data-aos="fade-up"
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", mb: 1, color: "#111" ,textAlign:"center"}}data-aos="fade-up"
                    >
                      {t.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mb: 2 }}data-aos="fade-up"
                    >
                      {t.desc}
                    </Typography>
                    
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Mobile Slider */}
      {isMobile && (
        <Slider {...sliderSettings}>
          {treatments.map((t, i) => (
            <Box key={i} sx={{ px: 1 }}>
              <Box
                sx={{
                  border: "2px solid #FFD700",
                  borderRadius: 3,
                  p: 1,
                }}
              >
                <Card
                  sx={{
                    border: "2px solid black",
                    borderRadius: 2,
                    boxShadow: 4,
                    transition: "0.3s",
                    "&:hover": { transform: "translateY(-8px)", boxShadow: 6 },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={t.img}
                    alt={t.title}
                    sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", mb: 1, color: "#111" }}
                    >
                      {t.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mb: 2 }}
                    >
                      {t.desc}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#FFD700",
                        color: "#111",
                        fontWeight: "bold",
                        borderRadius: "50px",
                        px: 3,
                        "&:hover": { bgcolor: "#111", color: "#fff" },
                      }}
                    >
                      View More →
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          ))}
        </Slider>
      )}
    </Box>
  );
};

export default TreatmentsSection;
