import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const ThankYou = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <>
      {/* ✅ Add script inside Helmet so it goes to <head> */}
      <Helmet>
        <script>
          {`
            gtag('event', 'conversion', {
              'send_to': 'AW-17237247218/8_UwCJ_60p8bEPKJrptA',
              'value': 500.0,
              'currency': 'INR'
            });
          `}
        </script>
      </Helmet>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent sx={{ textAlign: "center", p: 4, borderRadius: 3 }}>
          <Typography variant="h4" fontWeight="bold" color="green" gutterBottom>
            Thank You!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Your submission has been received.
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: "green",
              "&:hover": { bgcolor: "darkgreen" },
            }}
            onClick={() => navigate("/")}
          >
            Back to Home
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ThankYou;
