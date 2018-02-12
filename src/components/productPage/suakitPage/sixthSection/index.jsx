import React from "react";

import styles from "./sixthSection.scss";

const SixthSection = () => (
  <section className={styles.sixthSection}>
    <div className={styles.innerContainer}>
      <div className={styles.line} />
      <div className={styles.subTitle}>SuaKIT 브로셔</div>

      <div className={styles.brochureWrapper}>
        <img src="https://d3rqapinkc8b8p.cloudfront.net/productPage/whitepaper@2x.png" alt="" />
        <div className={styles.buttonWrapper}>
          <a href="#" className={styles.downloadBtn}>
            KOREAN
          </a>
          <a href="#" className={styles.downloadBtn}>
            ENGLISH
          </a>
          <a href="#" className={styles.downloadBtn}>
            CHINESE
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default SixthSection;
