import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.scss";
import SocialMedia from "./socialMedia/SocialMedia";

const Hero = () => {
  return (
    <motion.section 
      className={styles.hero}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.heroMain} id="hero">
        {/* Text Section */}
        <div className={styles.heroTextDiv}>
          <motion.h1 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.5, duration: 1 }}
            className={styles.heroText}
            style={{ marginBottom: "20px" }}
          >
            Hi, I'm <span className={styles.highlight}>Lucas Furlan</span> 
            
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1, duration: 1 }}
            className={styles.heroSubtext}
          >
            Data Engineer in the making, problem-solver at heart! I thrive on building data pipelines, optimizing workflows, and making things run smoothly. Always learning, always innovating!
          </motion.p>

          {/* Keeps only LinkedIn & GitHub */}
          <SocialMedia />

        </div>
      </div>
    </motion.section>
  );
};

export default Hero;