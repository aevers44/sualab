import React from "react";
import styles from "./titleSection.scss";

const TitleSection = () => (
  <section className={styles.titleSection}>
    <div className={styles.innerContainer}>
      <div className={styles.subTitle}>RECRUIT</div>
      <div className={styles.title}>
        함께 <span className={styles.strong}>즐겁게</span> 일할&nbsp;
        <span className={styles.strong}>최고의 인재</span>
        를 기다립니다.
      </div>
      <div className={styles.line} />
    </div>
  </section>
);

export default TitleSection;
