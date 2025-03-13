import React from "react";
import ExperienceCard from "./ExperienceCard";
import styles from "./ExperienceSection.module.scss";

const experiences = [
  {
    company: "Airbnb",
    companylogo: "https://www.svgrepo.com/svg/303137/airbnb-2-logo",
    role: "Cloud Engineer | Trust & Safety",
    date: "March 2025 - Present",
    desc: "Managing trust and safety operations, improving workflows, and ensuring platform compliance.",
    descBullets: [
      "Designed and maintained real-time fraud detection pipelines using AWS MSK (Kafka), Spark Streaming (EMR), and SageMaker, achieving 92% fraud detection accuracy and reducing false positives by 30%."
    ]
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
