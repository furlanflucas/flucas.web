import React from "react";
import styles from "./SocialMedia.module.scss";

const SocialMedia = () => {
  return (
    <div className={styles.socialContainer}>
      <a 
        href="https://www.linkedin.com/in/furlanflucas/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.socialButton}
      >
        LinkedIn
      </a>
      <a 
        href="https://github.com/furlanflucas" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.socialButton}
      >
        GitHub
      </a>
      <a 
        href="/resume.pdf"  // Change this to the actual resume URL
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.socialButton}
      >
        Resume
      </a>
    </div>
  );
};

export default SocialMedia;


