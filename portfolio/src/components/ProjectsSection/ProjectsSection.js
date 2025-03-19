import React from "react";
import styles from "./ProjectsSection.module.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  { 
    title: "Geospatial Data Quality Pipeline", 
    description: "Automated data validation and quality assurance for geospatial datasets.",
    link: "https://github.com/furlanflucas/flucas.io/tree/main/data_engineering/geospatial_data_quality_pipeline" 
  },
  { 
    title: "Airflow & Redshift Data Pipeline", 
    description: "ETL pipeline using Apache Airflow and AWS Redshift, designed to ingest, transform, and validate log data from S3.",
    link: "https://github.com/furlanflucas/flucas.io/tree/main/data_engineering/data-pipelines-with-airflow" 
  },
  { 
    title: "Real-Time Data Pipeline", 
    description: "Developed a real-time streaming pipeline for fraud detection using Apache Kafka & Spark.",
    link: "https://github.com/furlanflucas/flucas.io/tree/main/data_engineering/real_time_fraud_detections" 
  }
];

const ProjectsSection = () => {
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
            projectInfo={project}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
