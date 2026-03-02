import "bootstrap/dist/css/bootstrap.min.css";

import Hero from "./components/pages/Hero";
import About from "./components/pages/About";
import Header from "./components/global/Header";
import { Route, Routes } from "react-router-dom";
import Schedule from "./components/pages/Schedule";
import Speaker from "./components/pages/Speaker";
import Tickets from "./components/pages/Tickets";
import Venue from "./components/pages/Venue";
import Contact from "./components/pages/Contact";
import Testimonials from "./components/pages/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* here we use index means this will be visible with navbar by default */}
        <Route index element={<Hero />} />

        <Route path="/home" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/speakers" element={<Speaker />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/testimonials" element={<Testimonials />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
