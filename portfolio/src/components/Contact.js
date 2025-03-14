import React from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <p>Email: <a href="mailto:furlanflucas@gmail.com">furlanflucas@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/furlanflucas/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      <p>GitHub: <a href="https://github.com/furlanflucas" target="_blank" rel="noopener noreferrer">GitHub</a></p>
    </section>
  );
};

export default Contact;
