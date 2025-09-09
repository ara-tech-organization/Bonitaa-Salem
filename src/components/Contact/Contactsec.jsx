import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Button,
  Paper,
} from "@mui/material";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Mobile: "",
    Email: "",
    Date: "",
    Time: "",
    Treatment: "",
  });

  const treatments = [
    "Skin Care",
    "Hair Care",
    "Laser Treatment",
    "Anti-Aging",
    "Other",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://bonitaa-salem-b0ezcrdne2h7bneb.centralindia-01.azurewebsites.net/api/appointment/book",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("✅ Appointment booked successfully!");
        setFormData({
          FirstName: "",
          LastName: "",
          Mobile: "",
          Email: "",
          Date: "",
          Time: "",
          Treatment: "",
        });
      } else {
        alert("❌ Failed to book appointment. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Something went wrong!");
    }
  };

  return (
    <Box
      sx={{
        py: 6,
        px: 2,
        backgroundColor: "#fefefe",
        backgroundImage:
          "repeating-linear-gradient(45deg, #f9f7f4, #f9f7f4 10px, #f2f0ec 10px, #f2f0ec 20px)",
        mt: 0,
      }}
      data-aos="fade-down"
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", mb: 2 }}
        data-aos="fade-down"
      >
        Book Your Appointment
      </Typography>
      <Typography
        align="center"
        sx={{ mb: 4, maxWidth: 700, mx: "auto", color: "text.secondary" }}
        data-aos="fade-down"
      >
        Get personalized skin and hair care from Salem’s expert dermatologists,
        designed to restore your glow, strength, and lasting confidence.
      </Typography>

      <Paper
        elevation={3}
        sx={{
          maxWidth: 800,
          mx: "auto",
          p: { xs: 3, md: 5 },
          borderRadius: 4,
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3} data-aos="fade-up">
            {/* First Name */}
            <Grid size={{ xs: 12, sm: 6 }} data-aos="fade-up">
              <TextField
                fullWidth
                label="First Name"
                name="FirstName"
                value={formData.FirstName}
                onChange={handleChange}
              />
            </Grid>
            {/* Last Name */}
            <Grid size={{ xs: 12, sm: 6 }} data-aos="fade-up">
              <TextField
                fullWidth
                label="Last Name"
                name="LastName"
                value={formData.LastName}
                onChange={handleChange}
              />
            </Grid>
            {/* Mobile */}
            <Grid size={{ xs: 12 }} data-aos="fade-up">
              <TextField
                fullWidth
                label="Mobile Number"
                name="Mobile"
                value={formData.Mobile}
                onChange={handleChange}
              />
            </Grid>
            {/* Email */}
            <Grid size={{ xs: 12 }} data-aos="fade-up">
              <TextField
                fullWidth
                label="Email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
              />
            </Grid>
            {/* Date */}
            <Grid size={{ xs: 12, sm: 6 }} data-aos="fade-up">
              <TextField
                fullWidth
                type="date"
                name="Date"
                value={formData.Date}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            {/* Time */}
            <Grid size={{ xs: 12, sm: 6 }} data-aos="fade-up">
              <TextField
                fullWidth
                type="time"
                name="Time"
                value={formData.Time}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            {/* Treatment */}
            <Grid size={{ xs: 12 }} data-aos="fade-up">
              <TextField
                select
                fullWidth
                label="Select Your Treatment"
                name="Treatment"
                value={formData.Treatment}
                onChange={handleChange}
              >
                {treatments.map((t, i) => (
                  <MenuItem key={i} value={t}>
                    {t}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            {/* Button */}
            <Grid size={{ xs: 12 }} data-aos="fade-up">
              <Button
                type="submit"
                fullWidth
                sx={{
                  py: 1.5,
                  borderRadius: 5,
                  fontWeight: "bold",
                  fontSize: "1rem",
                  background:
                    "linear-gradient(90deg, #000000 0%, #D4AF37 100%)",
                  color: "#fff",
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #333333 0%, #B89F2F 100%)",
                  },
                }}
              >
                Get Appointment
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}
