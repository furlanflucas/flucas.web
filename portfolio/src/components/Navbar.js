import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>FLUCAS.IO</div>
        <ul className={styles.navLinks}>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

