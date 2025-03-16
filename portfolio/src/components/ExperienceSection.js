import React from "react";
import ExperienceCard from "./ExperienceCard";
import styles from "./ExperienceSection.module.scss";

 const experiences = [
    {
      company: "Airbnb",
      date: "Jan 2025 - Present",
      desc: [
        "Designed and optimized real-time fraud detection pipelines using AWS MSK (Kafka), Spark Streaming (EMR), and SageMaker, achieving a 92% fraud detection accuracy.",
        
      ]
    },
    {
      company: "Cruise",
      date: "Jul 2023 – Jan 2025",
      desc: "Built and optimized cloud-based geospatial data pipelines in AWS, ensuring 95%+ accuracy in labeled map data.  Led infrastructure improvements for the Test Tracks Project, enhancing data workflows for autonomous vehicle validation."
    },
    {
      company: "Datasite",
      date: "Aug 2022 – Jul 2023",
      desc: "Automated analytics reporting workflows with SQL and Python, reducing manual effort and increasing system uptime. Conducted root cause analysis on platform issues, leveraging cloud data tools to enhance reliability and performance."
    }
  ];  


const ExperienceSection = ({ isDark }) => {
  return (
    <section className={styles.experienceSection} id="experience">
      <h2>Experiences</h2>
      <div className={styles.experienceContainer}>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} cardInfo={experience} isDark={isDark} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
