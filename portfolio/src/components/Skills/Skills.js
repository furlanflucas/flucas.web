import React from "react";
import styles from "./Skills.module.scss";
import pythonIcon from "../../assets/python.svg";
import jsIcon from "../../assets/icons8-javascript-50.png";
import reactIcon from "../../assets/azure.svg";
import sqlIcon from "../../assets/ql-50.png";
import awsIcon from "../../assets/icons8-amazon-aws-50.png";
import kafkaIcon from "../../assets/apache-kafka-64.png"; // Example custom icon

const skills = [
  { name: "Python", icon: pythonIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "Azure", icon: reactIcon },
  { name: "SQL", icon: sqlIcon },
  { name: "AWS", icon: awsIcon },
  { name: "Kafka", icon: kafkaIcon }, // Added Kafka
];

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <h2 className={styles.skillsTitle}>Skills</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillBadge}>
            <img src={skill.icon} alt={skill.name} className={styles.skillIcon} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;



