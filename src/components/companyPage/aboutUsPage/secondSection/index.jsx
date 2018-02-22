import React from "react";

import styles from "./secondSection.scss";

const SecondSection = () => (
  <section className={styles.secondSection}>
    <div className={styles.innerContainer}>
      <div className={styles.line} />
      <div className={styles.title}>Mission & Vision</div>

      <div className={styles.subTitle}>
        Mission<span className={styles.mint}>.</span>
      </div>
      <div className={styles.subContent}>
        노력에 대한 정당한 보상과 일하는 즐거움을 통해 구성원들을 행복하게 하고,<br />
        사람이 기계 대신 하던 일에서 벗어나도록 하여 세상에 기여합니다.
      </div>

      <div className={styles.subTitle}>
        Vision<span className={styles.mint}>.</span>
      </div>
      <div className={styles.subContent}>딥러닝 기반 Vision Inspection 분야의 Global No.1</div>
    </div>
  </section>
);

export default SecondSection;
