import React from "react";

import styles from "./secondSection.scss";

const SecondSection = () => (
  <section className={styles.secondSection}>
    <div className={styles.innerContainer}>
      <div className={styles.line} />
      <div className={styles.subTitle}>인재상</div>

      <div className={styles.contentWrapper}>
        <div className={styles.contentItem}>
          <div className={styles.imgWrapper}>
            <img src="https://d3rqapinkc8b8p.cloudfront.net/careerPage/old-machine-vision-1@2x.png" alt="" />
          </div>
          <div className={styles.itemTitle}>문제 해결 능력</div>
          <div className={styles.itemContent}>
            SUALAB은 남들이 풀지 못하는 문제를 풀고자 합니다. <br /> 이를 위해서는 마치 공구상자에서 적합한 Tool을
            하나둘씩 꺼내어 보듯 다양한 역량을 유연하게 적용할 수 있는 문제해결 능력이 필요합니다.
          </div>
        </div>

        <div className={styles.contentItem}>
          <div className={styles.imgWrapper}>
            <img src="https://d3rqapinkc8b8p.cloudfront.net/careerPage/old-machine-vision-2@2x.png" alt="" />
          </div>
          <div className={styles.itemTitle}>성장을 위한 열정</div>
          <div className={styles.itemContent}>
            SUALAB의 인재들은 성장을 지향합니다. <br />자신의 분야에서 최고가 되기 위한 노력을 게을리 하지 않으며,
            열정을 가지고 ‘성장’이라는 가치를 추구합니다.
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SecondSection;
