import React from "react";
import { motion } from "framer-motion"; // Import motion
import styles from "./Navbar.module.scss";

const Navbar = () => {
  // Smooth scroll function
  const handleScroll = (event, targetId) => {
    event.preventDefault(); // Prevent default anchor behavior
    const targetElement = document.getElementById(targetId); // Get section by ID

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Adjust for any fixed navbar height
        behavior: "smooth", // Enable smooth scrolling
      });
    }
  };

  return (
    <>
      <nav className={styles.navbar}>
        {/* Animate the "flucas.io" text */}
        <motion.div
          className={styles.logo}
          initial={{ x: -50, opacity: 0 }} // Start slightly off-screen
          animate={{ x: 0, opacity: 3 }} // Move to position
          transition={{ duration: 2, ease: "easeIn" }} // Smooth transition
        >
          FLUCAS.io
        </motion.div>

        <ul className={styles.navLinks}>
          <li><a href="#hero" onClick={(e) => handleScroll(e, "hero")}>About</a></li>
          <li><a href="#skills" onClick={(e) => handleScroll(e, "skills")}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => handleScroll(e, "projects")}>Projects</a></li>
          <li><a href="#experience" onClick={(e) => handleScroll(e, "experience")}>Experience</a></li>
          <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
