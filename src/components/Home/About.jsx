import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FlagIcon from "@mui/icons-material/Flag";

// Import background image
import img1 from "../asserts/a7.jpg";

const About = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        py: 8,
        px: { xs: 2, md: 6, lg: 10 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0,0,0,0.6)", // dark overlay
          zIndex: 1,
          
        },
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="center"
        data-aos="fade-up"
        sx={{ position: "relative", zIndex: 2, maxWidth: "900px" }}
      >
       <Grid size={{xs:12}} data-aos="fade-up">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontFamily: "'Playfair Display', serif",
              color:" #fdd835"
              
            }}
          >
            Bonita - Expert Skin & Hair Care Clinic In Coimbatore
          </Typography>

          <Typography
            variant="body1"
            data-aos="fade-up"
            sx={{ lineHeight: 1.8, color: "#ddd", mb: 3  }}
          >
            Bonitaa Skin & Hair Care, your premier destination for all your skin
            and hair needs across Coimbatore, Chennai, Madurai, and Trichy.
            Established in 2008, Bonitaa was founded with a vision to deliver
            impeccable skin and hair treatments, a promise that continues to
            define our brand today.
          </Typography>

          <Typography
            variant="body1"
            data-aos="fade-up"
            sx={{ lineHeight: 1.8, color: "#ddd", mb: 5 }}
          >
            With over 12 years of industry experience, Bonitaa has set a
            benchmark synonymous with the highest standards of quality and care.
            Our clinics ensure you receive the most effective solutions for your
            skin and hair concerns.
          </Typography>
        </Grid>

        {/* Vision Card */}
      <Grid size={{xs:12,md:6}} data-aos="fade-up">
          <Card
            sx={{
              borderRadius: 3,
              mb: { xs: 3, md: 0 },
              border: "2px solid #fdd835",
              boxShadow: "0px 4px 15px rgba(253, 216, 53, 0.4)",
              background: "#fff",
              color: "#000",
              textAlign: "left",
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <VisibilityIcon sx={{ color: "#fdd835", mr: 1 }}  data-aos="fade-up"/>
                <Typography variant="h6" fontWeight="bold">
                  Vision
                </Typography>
              </Box>
              <Typography variant="body2">
                We provide personalized solutions for hair, scalp, and cosmetic
                skin concerns, ensuring the highest standards of quality and
                care.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Mission Card */}
        <Grid size={{xs:12,md:6}}data-aos="fade-up" >
          <Card
            sx={{
              borderRadius: 3,
              border: "2px solid #fdd835",
              boxShadow: "0px 4px 15px rgba(253, 216, 53, 0.4)",
              background: "#fff",
              color: "#000",
              textAlign: "left",
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}data-aos="fade-up">
                <FlagIcon sx={{ color: "#fdd835", mr: 1 }} />
                <Typography variant="h6" fontWeight="bold">
                  Mission
                </Typography>
              </Box>
              <Typography variant="body2">
                Our mission is to bring innovation and expertise together,
                making world-class skin & hair treatments accessible for
                everyone with trust and care.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
