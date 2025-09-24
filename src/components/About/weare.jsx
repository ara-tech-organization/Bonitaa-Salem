import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

// Example images – replace with your own
import img1 from "../asserts/11.jpg";
import img2 from "../asserts/18.jpg"
import img3 from "../asserts/a14.jpg";

const sections = [
  {
    title: "Skin Care",
    description:
      "We treat acne, dullness, pigmentation, and premature aging. You will be given a care plan based on your skin type. With proven methods and soft tools, we bring out the natural shine of your skin.",
    img: img1,
    bg: "#fff7f7",
  },
  {
    title: "Hair Care",
    description:
      "Our clinic provides expert care for hair loss and scalp issues. From PRP therapy to hair transplants, we enhance the strength, thickness, and health of your hair with safe remedies.",
    img: img2,
    bg: "#f7faff",
  },
  {
    title: "Body Care",
    description:
      "Our treatments involve laser hair removal, skin lightening, and peels that exfoliate. Smooth, toned, and even skin from head to toe, done to your objectives.",
    img: img3,
    bg: "#f9f7ff",
  },
];

const WhoWeAreSplit = () => {
  return (
    <Box sx={{ py: 5, px: 2 }} data-aos="fade-up">
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          color: "#000000f",
          textAlign: "center",
          mb: 1,
        }}
      >
        WHO WE ARE ?
      </Typography>
     <Typography
  variant="h4"
  sx={{
    fontWeight: "bold",
    mb: 8,
    fontFamily: "serif",
    textAlign: "center",
  }}
>
  <Box component="span" sx={{ color: "#000000ff" }} data-aos="fade-up">
    Skin & Hair
  </Box>{" "}
  Treatment Clinic In{" "}
  <Box component="span" sx={{ color: "#fdd835" }} data-aos="fade-up">
    Salem At Affordable Prices
  </Box>
</Typography>



      {sections.map((section, index) => (
        <Box
          key={index}
          sx={{
            py: 0,
            background: section.bg,
            borderRadius: "24px",
            mb: 6,
          }}
        >
          <Grid
            container
            spacing={4}
            alignItems="center"
            direction={index % 2 === 0 ? "row" : "row-reverse"}
          >
            {/* Image */}
              <Grid size={{xs:12,md:6}} data-aos="fade-up" >
              <motion.div
               
              >
                <Box
                  component="img"
                  src={section.img}
                  alt={section.title}
                  sx={{
                    width: "100%",
                    height: "300px", // fixed height
                    borderRadius: "20px",
                    objectFit: "cover", // crop + fit all images equally
                    boxShadow: "0px 8px 30px rgba(0,0,0,0.15)",
                    
                  }}
                />
              </motion.div>
            </Grid>

            {/* Text */}
            <Grid size={{xs:12,md:6}}  data-aos="fade-up">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                color=" black"
              >
                <Paper
                  sx={{
                    p: 4,
                    borderRadius: "20px",
                    boxShadow: "0px 6px 20px rgba(27, 25, 25, 0.1)",
                    background: "#fff",
                  }}
                >
                  <Typography
  variant="h5"
  sx={{
    fontWeight: "bold",
    mb: 2,
    display: "inline-block", // text fit box only
    px: 2,
    py: 1,
    borderRadius: "8px",
    backgroundColor: "#000", // black box
    color: "#f8d641", // yellow text
  }} data-aos="fade-up"
>
  {section.title}
</Typography>

                  <Typography variant="body1" sx={{ color: "#000" }} data-aos="fade-up">
                    {section.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default WhoWeAreSplit;
