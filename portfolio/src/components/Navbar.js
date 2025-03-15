import React from "react";
import { motion } from "framer-motion"; // Import motion
import styles from "./Navbar.module.scss";


const Navbar = () => {
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
          <li><a href="#hero">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
