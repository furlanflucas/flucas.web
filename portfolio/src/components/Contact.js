import React from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <h2>Contact Me</h2>
      <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">My LinkedIn</a></p>
      <p>GitHub: <a href="https://github.com/furlanflucas" target="_blank" rel="noopener noreferrer">My GitHub</a></p>
    </section>
  );
};

export default Contact;
