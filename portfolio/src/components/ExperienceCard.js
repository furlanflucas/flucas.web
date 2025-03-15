import React from "react";
import styles from "./ExperienceCard.module.scss";

// 🔹 Importing SVGs as React Components
import { ReactComponent as CruiseLogo } from "../assets/cruise.svg";
import { ReactComponent as DatasiteLogo } from "../assets/datasite.svg";
import { ReactComponent as AirbnbLogo } from "../assets/airbnb.svg";

export default function ExperienceCard({ cardInfo, isDark }) {
  console.log("Rendering ExperienceCard for:", cardInfo.company);

  // 🔹 Mapping Company Names to Logos (Ensure Case Matches)
  const companyLogos = {
    "Cruise": <CruiseLogo className={styles["company-logo"]} />,
    "Datasite": <DatasiteLogo className={styles["company-logo"]} />,
    "Airbnb": <AirbnbLogo className={styles["company-logo"]} />,
  };

  const matchedLogo = companyLogos[cardInfo.company?.trim()] || null; // Remove any accidental spaces

  return (
    <div className={isDark ? styles["experience-card-dark"] : styles["experience-card"]}>
      {/* 🔹 Experience Banner with Logo Inside */}
      <div className={styles["experience-banner"]}>
        <div className={styles["experience-div-company"]}>
          {matchedLogo ? (
            <div className={styles["company-logo-container"]}>{matchedLogo}</div>
          ) : (
            <h5 className={styles["experience-text-company"]}>{cardInfo.company}</h5>
          )}
        </div>
      </div>

      <div className={styles["experience-text-details"]}>
        <h5 className={styles["experience-text-role"]}>{cardInfo.role}</h5>
        <h5 className={styles["experience-text-date"]}>{cardInfo.date}</h5>
        <p className={styles["experience-text-desc"]}>{cardInfo.desc}</p>
      </div>
    </div>
  );
}
