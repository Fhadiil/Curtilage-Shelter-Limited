import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LandingCarousel from "./components/Carousel/Carousel";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Facts from "./components/Facts/Facts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <small>Curtilage Shelter Limited</small>
      </header>
      <Navbar />
      <LandingCarousel />
      <Projects />
      <Testimonials />
      <Facts />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
