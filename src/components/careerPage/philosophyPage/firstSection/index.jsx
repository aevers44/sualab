import React from "react";

import styles from "./firstSection.scss";

const FirstSection = () => (
  <section className={styles.firstSection}>
    <div className={styles.innerContainer}>
      <div className={styles.line} />
      <div className={styles.subTitle}>인사 철학</div>

      <div className={styles.contentWrapper}>
        <div className={styles.cardItem}>
          <div className={styles.cardTitle}>최고의 인재</div>
          <div className={styles.cardContent}>
            최고의 동료와 함께 <br />
            일하는 것이 최고의 복지
          </div>
        </div>

        <div className={styles.cardItem}>
          <div className={styles.cardTitle}>정당한 보상</div>
          <div className={styles.cardContent}>
            구성원들의 노력에 대한 <br />
            정당한 보상을 제공
          </div>
        </div>

        <div className={styles.cardItem}>
          <div className={styles.cardTitle}>즐겁게 일할 수 있는 환경</div>
          <div className={styles.cardContent}>
            즐겁게 일할 수 있는 <br />
            문화와 환경을 조성하겠다는 철학
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FirstSection;
