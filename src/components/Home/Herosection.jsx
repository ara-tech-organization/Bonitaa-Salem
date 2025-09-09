import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import { Facebook, Instagram, YouTube, Twitter } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../asserts/a11.jpg"
import img2 from"../asserts/a12.jpg"
import img3 from "../asserts/a13.avif"

const Herosection = () => {
  const settings = {
    dots: true, // bottom la dots varum
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, // 3 sec ku once change agum
    speed: 800,
    slidesToShow: 1, // one image fulla show pannum
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Box
      sx={{
        bgcolor: "#111",
        color: "#fff",
        minHeight: "100vh",
        px: { xs: 2, md: 6, lg: 10 },
        py: { xs: 4, md: 8 },
        display: "flex",
        alignItems: "center",
        mt:-5
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Content */}
        <Grid size={{xs:12,md:6}} >
          <Typography
            variant="subtitle1"
            sx={{ color: "#fdd835", mb: 2, fontWeight: 500 ,}}
             data-aos="fade-up"
          >
         Clinic in Salem
          </Typography>

          <Typography
            variant="h3"
              data-aos="fade-up"
            sx={{
              fontWeight: "bold",
              lineHeight: 1.2,
              mb: 2,
              
            }}
          >
           Best Aesthetic Skin & <br />
            <span style={{ color: "#fdd835", }} data-aos="fade-up"> Hair Treatment Clinic in Salem</span>
          </Typography>

          <Typography
            variant="body1"
              data-aos="fade-up"
            sx={{ color: "#aaa", mb: 4, maxWidth: "500px" }}
          >
            Giving you healthy skin, resilient hair, and strong confidence.


          </Typography>

          <Button
            variant="outlined"
            sx={{
              borderColor: "#fdd835",
              color: "#fdd835",
              px: 3,
              py: 1,
              fontWeight: "bold",
              borderRadius: "50px",
              "&:hover": {
                bgcolor: "#fdd835",
                color: "#111",
                
              },
            }} data-aos="fade-up"
          >
            Book appointment →
          </Button>

          {/* Social Icons */}
         
        </Grid>

        {/* Right Side - Slider */}
        <Grid size={{xs:12,md:6}} data-aos="fade-up" >
          <Slider {...settings}>
            {[img1, img2, img3].map((src, index) => (
              <Box
                key={index}
                component="img"
                src={src}
                alt={`slide-${index}`}
                sx={{
                  width: {lg:"80  0"},
                  height: { xs: "250px", md: "500px",lg:"500px" },
                  borderRadius: 1,
                  objectFit: "cover",
                   border: "5px solid #ffffffff", // blue border
                   
                }}
              />
            ))}
          </Slider>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Herosection;
