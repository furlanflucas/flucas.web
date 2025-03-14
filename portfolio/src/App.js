import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ExperienceSection from "./components/ExperienceSection";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <ExperienceSection />
      <Contact />
    </div>
  );
};

export default App;

