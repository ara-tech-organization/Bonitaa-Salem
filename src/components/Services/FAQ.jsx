import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Collapse,
  Grid,
  Avatar,
} from "@mui/material";

const faqs = [
  { q: "What types of skin concerns do you treat at Bonitaa Salem?", a: "We treat acne, dullness, sun damage, oily skin, dryness, dark spots, uneven tone, and early aging signs." },
  { q: "How do I know which treatment is right for me?", a: "Our doctor checks your skin and asks about your goals. We then suggest a plan that suits your skin and concern." },
  { q: "Is there a recovery time after treatments?", a: "Most treatments have little or no downtime. You can return to daily work soon. Some may need simple care at home." },
  { q: "Can I wear makeup after treating my skin?", a: "We recommend waiting for 24 hours before using makeup. It helps your skin absorb treatment and heal better." },
  { q: "Do I need to follow a skincare routine at home?", a: "Yes. We will give you a simple routine that keeps your skin clean, soft, and glowing after your treatment." },
  { q: "Are these hair care treatments permanent?", a: "Some hair care treatments, like hair transplants, are long-lasting. Others, like PRP, need follow-up sessions to keep up the results. We will explain everything clearly.Come with a clean face and no makeup. Avoid heavy creams and bring a list of products you use at home." },
  { q: "Can I go back to work right after a hair care treatment?", a: "For most hair care treatments, yes! You can usually go back to your normal day right away. Some might need a little downtime. We will let you know." },
  { q: "What should I do before a hair care treatment?", a: "We will give you clear instructions. Usually, it's about keeping your scalp clean. Sometimes we ask you to avoid certain hair products." },
  { q: "Do these hair care treatments hurt?", a: "Most of our hair care treatments are gentle. Some might feel a little odd, but they are not very painful. We make sure you are comfortable" },
  { q: "How long does it take to see results?", a: "Everyone is different. Some people see changes in a few weeks. For others, it might take a few months. We'll tell you what to expect.." },
];

const icons = ["💆‍♀️","🧴","✨","🌞","💧","🩺","🔗","🛡️","⏳","🎉"];

export default function CreativeFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 6, lg: 15 }, bgcolor: "#f0f4f8", mt: 0 }}data-aos="fade-up">
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 8, textAlign: "center" }}data-aos="fade-up"
      >
        🌟 FAQs – Fun & Creative
      </Typography>

      <Grid container spacing={6} data-aos="fade-up">
        {/* Left Column - First 5 FAQs */}
        <Grid size={{xs:12,md:6}} >
          {faqs.slice(0, 5).map((faq, index) => (
            <Paper
              key={index}
              elevation={openIndex === index ? 8 : 2}
              sx={{
                p: 4,
                mb: 4,
                borderRadius: 5,
                bgcolor: openIndex === index ? "#fdd835" : "#ffffff",
                cursor: "pointer",
                height: openIndex === index ? "auto" : "100px", // ✅ expand open
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
                },
              }}
              onClick={() => toggleFaq(index)}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar sx={{ mr: 2, bgcolor: "#000000ff" }}>
                  {icons[index]}
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: "bold",  fontSize:{xs:'0.90rem'}}}>
                  {faq.q}
                </Typography>
              </Box>
              <Collapse in={openIndex === index}>
                <Typography sx={{ mt: 1, color: "text.secondary"}}>
                  {faq.a}
                </Typography>
              </Collapse>
            </Paper>
          ))}
        </Grid>

        {/* Right Column - Next 5 FAQs */}
       <Grid size={{xs:12,md:6}} data-aos="fade-up">
          {faqs.slice(5, 10).map((faq, index) => {
            const actualIndex = index + 5;
            return (
              <Paper
                key={actualIndex}
                elevation={openIndex === actualIndex ? 8 : 2}
                sx={{
                  p: 4,
                  mb: 4,
                  borderRadius: 5,
                  bgcolor: openIndex === actualIndex ? "#fdd835" : "#ffffff",
                  cursor: "pointer",
                  height: openIndex === actualIndex ? "auto" : "100px", // ✅ expand open
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
                  },
                }}
                onClick={() => toggleFaq(actualIndex)}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}data-aos="fade-up">
                  <Avatar sx={{ mr: 2, bgcolor: "#000000ff" }}data-aos="fade-up">
                    {icons[actualIndex]}
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: "bold" ,fontSize:{xs:'1rem'}}}data-aos="fade-up">
                    {faq.q}
                  </Typography>
                </Box>
                <Collapse in={openIndex === actualIndex}>
                  <Typography sx={{ mt: 1, color: "text.secondary" }}>
                    {faq.a}
                  </Typography>
                </Collapse>
              </Paper>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
}
