import React from "react";
import styles from "./fourthContainer.scss";

const FourthContainer = () => (
  <section className={styles.fourthContainer}>
    <div className={styles.innerContainer}>
      <div className={styles.bigTitle}>블로그</div>
      <div className={styles.subTitle}>딥러닝 머신비전, 머신 러닝 등 SUALAB의 기술에 대해 더 자세히 알고 싶다면?</div>

      <a href="http://research.sualab.com/" target="_blank" className={styles.blogBtn}>
        SUALAB 기술 블로그
      </a>
    </div>
  </section>
);

export default FourthContainer;
