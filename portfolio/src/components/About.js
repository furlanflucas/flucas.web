import React from "react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <h2>About Me</h2>
      <p>
        I’m a Data Engineer passionate about building scalable data pipelines, optimizing workflows, 
        and integrating cloud-based solutions. I love solving complex problems and turning data into insights.
      </p>
    </section>
  );
};

export default About;
