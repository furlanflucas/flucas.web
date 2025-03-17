import React from "react";
import styles from "./Skills.module.scss";

// Importing skill icons
import pythonIcon from "../../assets/python.svg";
import jsIcon from "../../assets/icons8-javascript-50.png";
import azureIcon from "../../assets/azure.svg";
import sqlIcon from "../../assets/ql-50.png";
import awsIcon from "../../assets/icons8-amazon-aws-50.png";
import kafkaIcon from "../../assets/apache-kafka-64.png";
import dockerIcon from "../../assets/icons8-docker-50.png";
import etlIcon from "../../assets/icons8-etl-50.png";
import gcpIcon from "../../assets/icons8-google-cloud-platform-50.png";
import lookerIcon from "../../assets/icons8-google-looker-50.png";
import k8sIcon from "../../assets/icons8-kubernetes-50.png";
import terraformIcon from "../../assets/icons8-terraform-50.png";
import dataWarehouseIcon from "../../assets/icons8-data-warehouse-50.png";
import airflowIcon from "../../assets/airflow.svg";
import sparkIcon from "../../assets/apache-spark-svgrepo-com.svg";
import cicdIcon from "../../assets/ci-cd-svgrepo-com.svg";
import cloudIcon from "../../assets/aws-cloudformation-svgrepo-com.svg"
import dataIcon from "../../assets/analysis-architecture-data-svgrepo-com.svg"
// Skills array
const skills = [
  { name: "Python", icon: pythonIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "Azure", icon: azureIcon },
  { name: "SQL", icon: sqlIcon },
  { name: "AWS", icon: awsIcon },
  { name: "Kafka", icon: kafkaIcon },
  { name: "Docker", icon: dockerIcon },
  { name: "ETL", icon: etlIcon },
  { name: "GCP", icon: gcpIcon },
  { name: "Looker", icon: lookerIcon },
  { name: "Kubernetes", icon: k8sIcon },
  { name: "Terraform", icon: terraformIcon },
  { name: "Data Warehouse", icon: dataWarehouseIcon },
  { name: "Apache Airflow", icon: airflowIcon },
  { name: "Apache Spark", icon: sparkIcon },
  { name: "CI/CD", icon: cicdIcon },
  { name: "Cloud Formation", icon: cloudIcon },
  { name: "Data Modeling", icon: dataIcon }
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsContainer}>
      <h2 className={styles.skillsTitle}>Skills</h2>

      <div className={styles.skillsContent}>
        {/* Skills Text */}
        <div className={styles.skillsText}>
          <p>
            Technology evolves, and so do I. I embrace challenges as opportunities to grow, 
            constantly refining my skills to build better, more resilient systems. 
            Every problem has a solution—I just have to find it.
          </p>
        </div>

        {/* Skills Grid */}
        <div className={styles.skillsGrid}>
          {skills.map(({ name, icon }, index) => (
            <div key={index} className={styles.skillBadge}>
              <img src={icon} alt={`${name} icon`} className={styles.skillIcon} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;