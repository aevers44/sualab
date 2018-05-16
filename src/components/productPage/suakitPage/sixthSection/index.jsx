import React from "react";

import styles from "./sixthSection.scss";

const SixthSection = ({ intl }) => (
  <section className={styles.sixthSection}>
    <div className={styles.innerContainer}>
      <div className={styles.line} />
      <div className={styles.subTitle}>{intl.formatMessage({ id: "SUAKIT.SIXTH.subTitle" })}</div>

      <div className={styles.brochureWrapper}>
        <img src="https://d2ivzy5c3eic08.cloudfront.net/productPage/whitepaper@2x.png" alt="" />
        <div className={styles.buttonWrapper}>
          <a
            target="_blank"
            href="http://d2ivzy5c3eic08.cloudfront.net/SuaKIT_brochure_v2.1_ko.pdf"
            className={styles.downloadBtn}
          >
            KOREAN
          </a>
          <a
            target="_blank"
            href="http://d2ivzy5c3eic08.cloudfront.net/SuaKIT_brochure_v2.1_eng.pdf"
            className={styles.downloadBtn}
          >
            ENGLISH
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default SixthSection;
