import { Box, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import ServicesOverview from "./Components/ServicesOverView/ServicesOverView";
import Mentorship from "./Components/Mentor/Mentorship";
import Freelance from "./Components/Freelance/Freelance";
import ArcSection from "./Components/ArcSection/ArcSection";
import Developers from "./Components/Developers/Developers";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ServicesOverview />
                <Mentorship />
                <Freelance />
                <ArcSection />
                <Developers />
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
