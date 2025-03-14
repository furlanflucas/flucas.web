import React from "react";
import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <h2 className={styles.skillsTitle}>Skills</h2>
      <div className={styles.skillsIcons}>
        <div className={styles.softwareSkillInline}>
          <i className="devicon-python-plain"></i>
          <button className={styles.skillButton}>Python</button>
        </div>
        <div className={styles.softwareSkillInline}>
          <i className="devicon-javascript-plain"></i>
          <button className={styles.skillButton}>JavaScript</button>
        </div>
        <div className={styles.softwareSkillInline}>
          <i className="devicon-react-original"></i>
          <button className={styles.skillButton}>React</button>
        </div>
        <div className={styles.softwareSkillInline}>
          <i className="devicon-mysql-plain"></i> {/* SQL Icon */}
          <button className={styles.skillButton}>SQL</button>
        </div>
        <div className={styles.softwareSkillInline}>
          <i className="devicon-amazonwebservices-plain"></i> {/* AWS Icon */}
          <button className={styles.skillButton}>AWS</button>
        </div>
      </div>
    </div>
  );
};

export default Skills;


