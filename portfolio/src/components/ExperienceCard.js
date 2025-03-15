import React, { useState, createRef } from "react";
import styles from "./ExperienceCard.module.scss";
import ColorThief from "colorthief";

// 🔹 Importing SVGs as React Components
import { ReactComponent as CruiseLogo } from "../../assets/cruise.svg";
import { ReactComponent as DatasiteLogo } from "../../assets/datasite.svg";
import { ReactComponent as AirbnbLogo } from "../../assets/airbnb.svg";

// 🔹 Corrected Mapping of Company Logos (Using Components)
const companyLogos = {
  "Cruise": CruiseLogo,
  "Datasite": DatasiteLogo,
  "Airbnb": AirbnbLogo,
};

export default function ExperienceCard({ cardInfo, isDark }) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

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
      {/* 🔹 Experience Banner with Logo Inside */}
      <div style={{ background: rgb(colorArrays) }} className={styles["experience-banner"]}>
        <div className={styles["experience-blurred_div"]}></div>
        
        {/* 🔹 Display Company Logo Instead of Text */}
        <div className={styles["experience-div-company"]}>
          {cardInfo.company === "Cruise" && <CruiseLogo className={styles["company-logo"]} />}
          {cardInfo.company === "Datasite" && <DatasiteLogo className={styles["company-logo"]} />}
          {cardInfo.company === "Airbnb" && <AirbnbLogo className={styles["company-logo"]} />}
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