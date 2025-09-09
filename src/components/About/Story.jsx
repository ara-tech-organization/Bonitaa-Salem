import React from "react";
import { Box, Typography } from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import BuildIcon from "@mui/icons-material/Build";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import HandshakeIcon from "@mui/icons-material/Handshake";


const steps = [
  {
    icon: <ThumbUpAltIcon sx={{ fontSize: 36, color: "#fdd835" }} />,
    title: "Visible, Lasting Results",
    description:
      "Clients see real improvements – healthier skin, stronger hair, and renewed confidence.",
  },
  {
    icon: <BuildIcon sx={{ fontSize: 36, color: "#fdd835" }} />,
    title: "Advanced, Safe Technology",
    description:
      "We use the latest proven tools. Every treatment is safe, effective, and handled by experts.",
  },
  {
    icon: <LightbulbIcon sx={{ fontSize: 36, color: "#fdd835" }} />,
    title: "Personalized Care Plans",
    description:
      "We listen first. Then create a care plan tailored to your skin, hair, and lifestyle.",
  },
  {
    icon: <HandshakeIcon sx={{ fontSize: 36, color: "#fdd835" }} />,
    title: "Compassionate Expert Team",
    description:
      "From the first visit to the last, our team supports you with care and honest guidance.",
  },
];

const HorizontalSteps = () => {
  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 2, md: 8 },
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fdd835" }}>
          ◆ WHY CHOOSE US?
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mt: 1, color: "#fff" }}
        >
          Our Proven Process
        </Typography>
      </Box>

      {/* Steps Row */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: { xs: 6, md: 4 },
          position: "relative",
        }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            style={{ flex: 1, position: "relative", zIndex: 1 }}
          >
            <Box sx={{ px: 2 }}>
              {/* Icon Circle */}
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  backgroundColor: "#111",
                  border: "3px solid #fdd835",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    boxShadow: "0 0 20px rgba(199,151,61,0.6)",
                  },
                }}
              >
                {step.icon}
              </Box>

              {/* Title & Description */}
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                {step.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#aaa", maxWidth: 250, mx: "auto" }}
              >
                {step.description}
              </Typography>
            </Box>

            {/* Connector Line (only for desktop, not last step) */}
            {index < steps.length - 1 && (
              <Box
                sx={{
                  display: { xs: "none", md: "block" },
                  position: "absolute",
                  top: 40,
                  right: "-50%",
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#444",
                  zIndex: -1,
                }}
              />
            )}
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default HorizontalSteps;