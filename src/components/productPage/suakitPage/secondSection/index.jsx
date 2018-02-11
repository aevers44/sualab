import React from "react";

import styles from "./secondSection.scss";

const SecondSection = () => (
  <section className={styles.secondSection}>
    <div className={styles.innerContainer}>
      <div className={styles.line} />
      <div className={styles.subTitle}>적용 가능 산업</div>

      <div className={styles.contentWrapper}>
        <div className={styles.contentItem}>
          <div className={styles.imgWrapper}>
            <img src="http://placehold.it/300x300" alt="" />
          </div>
          <p className={styles.imgCaption}>PCB</p>
        </div>
        <div className={styles.contentItem}>
          <div className={styles.imgWrapper}>
            <img src="http://placehold.it/300x300" alt="" />
          </div>
          <p className={styles.imgCaption}>디스플레이</p>
        </div>
        <div className={styles.contentItem}>
          <div className={styles.imgWrapper}>
            <img src="http://placehold.it/300x300" alt="" />
          </div>
          <p className={styles.imgCaption}>반도체</p>
        </div>
        <div className={styles.contentItem}>
          <div className={styles.imgWrapper}>
            <img src="http://placehold.it/300x300" alt="" />
          </div>
          <p className={styles.imgCaption}>태양광</p>
        </div>
        <div className={styles.contentItem}>
          <div className={styles.imgWrapper}>
            <img src="http://placehold.it/300x300" alt="" />
          </div>
          <p className={styles.imgCaption}>필름</p>
        </div>
      </div>

      <div className={styles.etcContent}>
        그 외 자동차 부품, 전기·전자 제품 등<br />
        다양한 제조업 분야에 적용 가능합니다.
      </div>
    </div>
  </section>
);

export default SecondSection;
