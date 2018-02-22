import React from "react";

import styles from "./secondSection.scss";

const SecondSection = () => (
  <section className={styles.secondSection}>
    <div className={styles.innerContainer}>
      <div className={styles.line} />
      <div className={styles.subTitle}>적용 사례</div>

      <div className={styles.contentWrapper}>
        <div className={styles.contentItem}>
          <div className={styles.imgWrapper}>
            <img src="https://d2ivzy5c3eic08.cloudfront.net/productPage/pcb@2x.png" alt="" />
          </div>
          <p className={styles.imgCaption}>PCB</p>
        </div>
        <div className={styles.contentItem}>
          <div className={styles.imgWrapper}>
            <img src="https://d2ivzy5c3eic08.cloudfront.net/productPage/display@2x.png" alt="" />
          </div>
          <p className={styles.imgCaption}>디스플레이</p>
        </div>
        <div className={styles.contentItem}>
          <div className={styles.imgWrapper}>
            <img src="https://d2ivzy5c3eic08.cloudfront.net/productPage/conduct@2x.png" alt="" />
          </div>
          <p className={styles.imgCaption}>반도체</p>
        </div>
        <div className={styles.contentItem}>
          <div className={styles.imgWrapper}>
            <img src="https://d2ivzy5c3eic08.cloudfront.net/productPage/sunlight@2x.png" alt="" />
          </div>
          <p className={styles.imgCaption}>태양광</p>
        </div>
        <div className={styles.contentItem}>
          <div className={styles.imgWrapper}>
            <img src="https://d2ivzy5c3eic08.cloudfront.net/productPage/film@2x.png" alt="" />
          </div>
          <p className={styles.imgCaption}>필름</p>
        </div>
      </div>

      <div className={styles.etcContent}>
        그 외 자동차 부품, 전기/전자 제품 등 <br />다양한 제조업 현장에서 실제 적용 중입니다.
      </div>
    </div>
  </section>
);

export default SecondSection;
