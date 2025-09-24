import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BrushIcon from "@mui/icons-material/Brush";
import CodeIcon from "@mui/icons-material/Code";

// Import image
import img1 from "../asserts/a7.jpg"; // replace with your left side image

const steps = [
  {
    icon: <DesignServicesIcon sx={{ fontSize: 32, color: "#000" }} />,
    title: "We Listen",
    text: "Your story matters. We take time to understand your concerns and what you wish to achieve.",
  },
  {
    icon: <BrushIcon sx={{ fontSize: 32, color: "#000" }} />,
    title: "We Plan Carefully",
    text: "After listening, we customize a treatment plan that fits you just right—no overpromising or rushing.",
  },
  {
    icon: <CodeIcon sx={{ fontSize: 32, color: "#000" }} />,
    title: "We Keep Helping",
    text: "We track your results and adjust as needed, ensuring you get the most effective outcome possible.",
  },
];

const Work = () => {
  return (
    <Box>
      {/* Top Heading - We Work */}
      <Box sx={{ py: 4, textAlign: "center"  }}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}data-aos="fade-up">
          <span style={{ color: "#FFD700" }}data-aos="fade-up">We </span>
          <span style={{ color: "#000" }}data-aos="fade-up">Work</span>
        </Typography>
      </Box>

      {/* Main Section */}
      <Box
        sx={{
          py: 8,
          
          px: { xs: 2, md: 6, lg: 10 },
          
        }}data-aos="fade-up"
      >
        {/* Heading */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            mb: 6,
            mt: -6,
          }}data-aos="fade-up"
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              maxWidth: "700px",
              
            }}data-aos="fade-up"
          >
            <span style={{ color: "#000000" }}>From Consultation to Results – </span>
            <span style={{ color: "#000000ff" }}>Skin</span>
            <br />
            <span style={{ color: "#000000" }}>& </span>
            <span style={{ color: "#000000ff" }}>Hair Treatment Process</span>
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="center" data-aos="fade-down">
          {/* Left Side - Image */}
        <Grid size={{xs:12,md:6}}data-aos="fade-up">
            <Box
              component="img"
              src={img1}
              alt="Team work"
              sx={{
                width: "100%",
                borderRadius: 2,
                boxShadow: "#FFD700",
              }}data-aos="fade-up"
            />
          </Grid>

          {/* Right Side - Timeline Style */}
          <Grid size={{xs:12,md:6}} data-aos="fade-up">
            <Box
              sx={{
                position: "relative",
                ml: 5,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: 16,
                  top: 0,
                  bottom: 0,
                  width: "2px",
                  backgroundColor: "#000000ff",
                  height:10
                },
              }}
            >
              {steps.map((step, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    mb: 9,
                    pl: 9,
                  }}data-aos="fade-up"
                >
             {/* Circle Point */}
<Box
  sx={{
    position: "absolute",
    left: -7,
    top: 0,
    width: 50,
    height: 50,
    borderRadius: "50%",
    backgroundColor: "#000000ff",
    border: "3px solid #FFD700",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 3px 8px rgba(0,0,0,0.3)",
    
  }}data-aos="fade-up"
>
  {/* Icon red color */}
  {React.cloneElement(step.icon, { sx: { color: "#FFD700", fontSize: 28 } })}
</Box>


                  {/* Content */}
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {step.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Work;
