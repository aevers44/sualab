import React from "react";

import styles from "./firstSection.scss";

const FirstSection = () => (
  <section className={styles.firstSection}>
    <div className={styles.innerContainer}>
      <div className={styles.subTitle}>ABOUT US</div>
      <div className={styles.content}>
        SUALAB은 <span className={styles.strong}>머신비전 분야</span>에 특화된{" "}
        <span className={styles.strong}>딥러닝 검사 솔루션</span>을 제공하는 글로벌 기업입니다
      </div>
      <div className={styles.line} />
    </div>
  </section>
);

export default FirstSection;
