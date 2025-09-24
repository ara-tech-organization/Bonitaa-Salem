// App.js
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import ThankYou from "./components/Appointment/Thankyou";

// Optional NotFound Page
function NotFound() {
  return <h2 style={{ textAlign: "center", marginTop: "50px" }}>❌ Page Not Found</h2>;
}

// Kurale font theme
const theme = createTheme({
  typography: {
    fontFamily: '"Kurale", serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
         <Route path="/thankyou" element={<ThankYou/>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
