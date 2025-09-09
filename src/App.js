import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";  // correct import
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment"





// Kurale font theme create
const theme = createTheme({
  typography: {
    fontFamily: '"Kurale", serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
           <Route path="/services" element={<Services />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/Appointment" element={<Appointment />
}/>
         
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;