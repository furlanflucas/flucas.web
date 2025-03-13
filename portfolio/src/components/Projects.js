import React from "react";
import styles from "./Projects.module.scss";
import { motion } from "framer-motion";

const projects = [
  { title: "Geospatial Data Quality Pipeline", link: "https://github.com/furlanflucas/flucas.io/tree/main/data_engineering/geospatial_data_quality_pipeline" },
  { title: "Cloud Data Warehouse for Music Analytics", link: "https://github.com/furlanflucas/flucas.io/tree/main/data_engineering/cloud_data_warehouse_for_music_analytics" },
  { title: "Real-Time Data Pipeline", link: "https://github.com/furlanflucas/flucas.io/tree/main/data_engineering/real_time_fraud_detections" }
];

const Projects = () => {
  return (
    <motion.section 
      className={styles.projects} 
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2>Projects</h2>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className={styles.projectCard}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>{project.title}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;

