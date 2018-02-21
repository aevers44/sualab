import React from "react";

import styles from "./thirdSection.scss";

const ThirdSection = () => (
  <section className={styles.thirdSection}>
    <div className={styles.innerContainer}>
      <div className={styles.line} />
      <div className={styles.subTitle}>복지 제도</div>

      <div className={styles.contentWrapper}>
        <div className={styles.contentItem}>4대 보험지원</div>
        <div className={styles.contentItem}>국내/외 세미나 참석 지원</div>
        <div className={styles.contentItem}>
          선택적 복지 제도
          <div className={styles.info}>
            <span>*선택적 복지란?</span> <br />
            교육비, 도서비, Gym 이용비 등 자기계발에 필요한 비용을 일정 지원금액 내에서 선택하여 사용하는 제도
          </div>
        </div>
        <div className={styles.contentItem}>중/석식 및 간식 제공</div>
      </div>
    </div>
  </section>
);

export default ThirdSection;
