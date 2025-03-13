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
  },
  {
    company: "Cruise",
    companylogo: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Cruise_logo.png",
    role: "Product Analyst",
    date: "January 2023 - February 2025",
    desc: "Contributed to autonomous vehicle data operations, ensuring high-quality labeled datasets for machine learning models.",
    descBullets: [
      "Improved data labeling accuracy by 30% through workflow optimizations.",
      "Collaborated with cross-functional teams to enhance data-driven decision-making.",
      "Developed and maintained operational dashboards in Looker."
    ]
  },
  {
    company: "Freelance",
    companylogo: "https://www.svgrepo.com/show/303251/freelance.svg",
    role: "Cloud & Data Engineer",
    date: "2021 - Present",
    desc: "Worked with various clients on cloud-based data engineering solutions.",
    descBullets: [
      "Built ETL pipelines using AWS Lambda, Glue, and Redshift.",
      "Developed streaming data workflows with Apache Kafka and Spark.",
      "Created automated reporting dashboards using Looker and Tableau."
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
