import React from "react";
import styles from "./Projects.module.scss";
import ProjectCard from "./ProjectCard/ProjectCard.js"; // Import new component
import { motion } from "framer-motion";

const projects = [
  { 
    title: "Geospatial Data Quality Pipeline", 
    description: "Automated data validation and quality assurance for geospatial datasets.",
    link: "https://github.com/furlanflucas/flucas.io/tree/main/data_engineering/geospatial_data_quality_pipeline" 
  },
  { 
    title: "Cloud Data Warehouse for Music Analytics", 
    description: "Built a scalable data warehouse for structured music analytics using AWS Redshift.",
    link: "https://github.com/furlanflucas/flucas.io/tree/main/data_engineering/cloud_data_warehouse_for_music_analytics" 
  },
  { 
    title: "Real-Time Data Pipeline", 
    description: "Developed a real-time streaming pipeline for fraud detection using Apache Kafka & Spark.",
    link: "https://github.com/furlanflucas/flucas.io/tree/main/data_engineering/real_time_fraud_detections" 
  }
];

const Projects = () => {
  return (
    <motion.section 
      className={styles.projectsSection} 
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2>Projects</h2>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;