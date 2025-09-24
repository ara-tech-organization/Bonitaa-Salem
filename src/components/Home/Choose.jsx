import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

const stats = [
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 50, color: "#ff7043" }} data-aos="fade-up"/>,
    number: "15+",
    label: "Years Experience",
  },
  {
    icon: <ApartmentIcon sx={{ fontSize: 50, color: "#42a5f5" }} data-aos="fade-up"/>,
    number: "12+",
    label: "Branches",
  },
  {
    icon: <SentimentVerySatisfiedIcon sx={{ fontSize: 50, color: "#66bb6a" }}data-aos="fade-up" />,
    number: "50k",
    label: "Happy Customers",
  },
];

const StatsSection = () => {
  return (
    <Box
      sx={{
        // py: 5,
        px: 3,
        bgcolor: "linear-gradient(135deg, #f8f9fa, #e3f2fd)",
        textAlign: "center",
        ml:4,
        mb:10,
        mt:5
       
        
      }}data-aos="fade-up"
    >
      {/* Top Title & Text */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          mb: 2,
          fontFamily: "serif",
        }}data-aos="fade-up"
      >
         <span style={{ color: "#000" }}>Reveal</span>{" "}
        <span style={{ color: "gold" }}>Your Radiance</span>
      </Typography>

      <Typography
        sx={{
          mb: 6,
          lineHeight: 1.8,
          fontSize: "1.1rem",
          color: "#333",
          maxWidth: "700px",
          mx: "auto",
        }}data-aos="fade-up"
      >
        At <b>Bonitaa Skin & Hair Care</b>, we focus on bringing out your
        natural beauty. Confidence, glow, and elegance — that’s what we deliver.
      </Typography>

      {/* Stats Boxes */}
      <Grid container spacing={3} justifyContent="center" ml={5}data-aos="fade-up">
        {stats.map((item, index) => (
          <Grid size={{xs:12,sm:6,md:4}}  key={index}>
            <Paper
              elevation={4}
              sx={{
                p: 4,
                // mt:2,
                textAlign: "center",
                borderRadius: 3,
                height: "100%",
                width:"80%",
                background: "linear-gradient(135deg, #ffffff, #f1f8ff)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px) scale(1.05)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                  border: "2px solid black", 
                },
              }}data-aos="fade-up"
            >
              {item.icon}
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", mt: 1, color: "#000" }}
              >
                {item.number}
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.8 }}>
                {item.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatsSection;
