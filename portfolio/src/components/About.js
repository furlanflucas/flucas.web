import React from "react";
import styles from "./About.module.scss";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section 
      className={styles.about} 
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>
      <p>
      Hey there! I'm all about building efficient and scalable data system driven by curiosity and a love for solving complex problems. With a strong foundation in cloud and data engineering, I thrive on optimizing workflows, streamlining infrastructure, and making data work smarter. Let’s build something awesome!
      </p>
    </motion.section>
  );
};

export default About;

