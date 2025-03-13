import React from "react";
import styles from "./ProjectCard.module.scss";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, link }) => {
  return (
    <motion.div 
      className={styles["project-card"]}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className={styles["project-title"]}>{title}</h3>
      <p className={styles["project-description"]}>{description}</p>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles["project-link"]}
      >
        View on GitHub
      </a>
    </motion.div>
  );
};

export default ProjectCard;
