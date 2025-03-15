import React, { useState, createRef } from "react";
import styles from "./ExperienceCard.module.scss";
import ColorThief from "colorthief";

// 🔹 Importing Company Logos
import cruiseLogo from "../../assets/cruise.svg";
import datasiteLogo from "../../assets/datasite.svg";
import airbnbLogo from "../../assets/airbnb.svg";


// 🔹 Mapping Company Names to Logos
const companyLogos = {
  "Cruise": cruiseLogo,
  "Datasite": datasiteLogo,
  "Airbnb": airbnbLogo,
};

export default function ExperienceCard({ cardInfo, isDark }) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return values ? `rgb(${values.join(", ")})` : null;
  }

  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className={styles.subTitle}>
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className={isDark ? styles["experience-card-dark"] : styles["experience-card"]}>
      <div style={{ background: rgb(colorArrays) }} className={styles["experience-banner"]}>
        <div className={styles["experience-blurred_div"]}></div>
        <div className={styles["experience-div-company"]}>
          {/* 🔹 Display Company Logo Instead of Name */}
          {companyLogos[cardInfo.company] ? (
            <img 
              src={companyLogos[cardInfo.company]} 
              alt={cardInfo.company} 
              className={styles["company-logo"]} 
            />
          ) : (
            <h5 className={styles["experience-text-company"]}>{cardInfo.company}</h5>
          )}
        </div>
      </div>
      <div className={styles["experience-text-details"]}>
        <h5 className={styles["experience-text-role"]}>{cardInfo.role}</h5>
        <h5 className={styles["experience-text-date"]}>{cardInfo.date}</h5>
        <p className={styles["experience-text-desc"]}>{cardInfo.desc}</p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} />
        </ul>
      </div>
    </div>
  );
}
