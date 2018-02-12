import React from "react";

import styles from "./thirdSection.scss";

const ThirdSection = () => (
  <section className={styles.thirdSection}>
    <div className={styles.innerContainer}>
      <div className={styles.line} />
      <div className={styles.subTitle}>기존 머신비전 검사 vs SuaKIT</div>
      <div className={styles.subContent}>
        SuaKIT의 딥러닝 알고리즘을 통해 전통적인 머신비전 검사방식의 한계를 극복할 수 있습니다.
      </div>

      <div className="notyet">notyet</div>
    </div>
  </section>
);

export default ThirdSection;
