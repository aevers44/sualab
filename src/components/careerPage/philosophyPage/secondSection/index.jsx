import React from "react";

import styles from "./secondSection.scss";

const SecondSection = ({ intl }) => (
  <section className={styles.secondSection}>
    <div className={styles.innerContainer}>
      <div className={styles.line} />
      <div className={styles.subTitle}>{intl.formatMessage({ id: "PHILOSOPHY.SECOND.subTitle" })}</div>

      <div className={styles.contentWrapper}>
        <div className={styles.contentItem}>
          <div className={styles.imgWrapper}>
            <img src="https://d2ivzy5c3eic08.cloudfront.net/careerPage/old-machine-vision-1@2x.png" alt="" />
          </div>
          <div className={styles.itemTitle}>{intl.formatMessage({ id: "PHILOSOPHY.SECOND.itemTitle_1" })}</div>
          <div className={styles.itemContent}>{intl.formatMessage({ id: "PHILOSOPHY.SECOND.itemContent_1" })}</div>
        </div>

        <div className={styles.contentItem}>
          <div className={styles.imgWrapper}>
            <img src="https://d2ivzy5c3eic08.cloudfront.net/careerPage/old-machine-vision-2@2x.png" alt="" />
          </div>
          <div className={styles.itemTitle}>{intl.formatMessage({ id: "PHILOSOPHY.SECOND.itemTitle_2" })}</div>
          <div className={styles.itemContent}>{intl.formatMessage({ id: "PHILOSOPHY.SECOND.itemContent_2" })}</div>
        </div>
      </div>
    </div>
  </section>
);

export default SecondSection;
