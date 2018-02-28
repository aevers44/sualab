import React from "react";

import styles from "./secondSection.scss";

const SecondSection = ({ intl }) => (
  <section className={styles.secondSection}>
    <div className={styles.innerContainer}>
      <div className={styles.line} />
      <div className={styles.title}>Mission & Vision</div>

      <div className={styles.subTitle}>
        Mission<span className={styles.mint}>.</span>
      </div>
      <div className={styles.subContent}>{intl.formatMessage({ id: "ABOUT.SECOND.missionSubContent" })}</div>

      <div className={styles.subTitle}>
        Vision<span className={styles.mint}>.</span>
      </div>
      <div className={styles.subContent}>{intl.formatMessage({ id: "ABOUT.SECOND.visionSubContent" })}</div>
    </div>
  </section>
);

export default SecondSection;
