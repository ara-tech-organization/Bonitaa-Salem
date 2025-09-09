import React from "react";
import { Box, Typography, Avatar, Rating, Paper } from "@mui/material";

const testimonials = [
  {
    name: "Krithik Shailesh",
    text: "I went for a hair transplant and from day one I experienced great service. They explained everything in detail and I felt safe and comfortable. Really satisfied with the procedure!",
    rating: 5,
  },
  {
    name: "Suganthi Pitchai",
    text: "I took laser treatment from Bonitaa clinic in Coimbatore. After 6 sessions I saw noticeable results. The clinic is neat & clean and the staff are very professional. Highly recommend!",
    rating: 4,
  },
  {
    name: "Priyanka Rajendran",
    text: "Me and my friend visited Bonitaa for hair fall problems. Happy about their results! The clinic is clean and the treatment was painless. Thanks to their team!",
    rating: 5,
  },
];

const MagazineCard = ({ name, text, rating }) => {
  return (
    <Paper
      elevation={6}
      sx={{
        width: 320,
        minHeight: 320,
        borderRadius: "0px 40px 0px 40px", // creative corner cut
        p: 4,
        bgcolor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.4s",
        "&:hover": {
          transform: "translateY(-10px) rotate(-1deg)",
          boxShadow: "0px 12px 30px rgba(0,0,0,0.2)",
        },
        "&::before": {
          content: '"“"',
          position: "absolute",
          fontSize: "7rem",
          fontWeight: "bold",
          color: "rgba(0,0,0,0.05)",
          top: 10,
          left: 20,
        },
      }} data-aos="fade-up"
    >
      <Typography variant="body1" sx={{ mb: 3, fontStyle: "italic", zIndex: 2 }} data-aos="fade-up">
        {text}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }} data-aos="fade-up">
        <Avatar sx={{ bgcolor: "#1976d2" }}>{name[0]}</Avatar>
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }} data-aos="fade-up">
            {name}
          </Typography>
          <Rating value={rating} readOnly size="small" />
        </Box>
      </Box>
    </Paper>
  );
};

const TestimonialMagazine = () => {
  return (
    <Box sx={{ py: 6, px: 2, background: "linear-gradient(135deg,#fdfbfb,#ebedee)" }} data-aos="fade-up">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 6 }} data-aos="fade-up"
      >
        Voices of Our Happy Clients ✨
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
        }} data-aos="fade-up"
      >
        {testimonials.map((item, index) => (
          <MagazineCard key={index} {...item} />
        ))}
      </Box>
    </Box>
  );
};

export default TestimonialMagazine;
