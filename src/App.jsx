import { Box } from "@mui/material";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import ServicesOverview from "./Components/ServicesOverView/ServicesOverView";
import Mentorship from "./Components/Mentor/Mentorship";
import Freelance from "./Components/Freelance/Freelance";
import ArcSection from "./Components/ArcSection/ArcSection";
import Developers from "./Components/Developers/Developers";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <ServicesOverview />

      <Mentorship />
      <Freelance />
      <ArcSection />
      <Developers />
      <Footer />
    </>
  );
}

export default App;
