import React from "react";
import ExperienceCard from "./ExperienceCard";
import styles from "./ExperienceSection.module.scss";

const experiences = [
  {
    company: "Airbnb",
    role: "Cloud Engineer | Trust & Safety",
    date: "Jan 2025 - Present",
    desc: "Managing trust and safety operations, improving workflows, and ensuring platform compliance.",
    
  },
  {
    company: "Cruise - GM",
    role: "Cloud Data Engineer | Mapping & Quality",
    date: "Jul 2023 – Jan 2025",
    desc: "Contributed to autonomous vehicle data operations, ensuring high-quality labeled datasets for machine learning models.",

  },
  {
    company: "Datasite",
    role: "Data Analyst | Platform Analytics & Support",
    date: "Aug 2022 – Jul 2023",
    desc: "Worked with various clients on cloud-based data engineering solutions.",
  
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
