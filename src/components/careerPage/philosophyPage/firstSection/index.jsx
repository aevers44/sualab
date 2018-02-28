import React from "react";

import styles from "./firstSection.scss";

const FirstSection = ({ intl }) => (
  <section className={styles.firstSection}>
    <div className={styles.innerContainer}>
      <div className={styles.line} />
      <div className={styles.subTitle}>{intl.formatMessage({ id: "PHILOSOPHY.FIRST.subTitle" })}</div>

      <div className={styles.contentWrapper}>
        <div className={styles.cardItem}>
          <div className={styles.cardTitle}>{intl.formatMessage({ id: "PHILOSOPHY.FIRST.cardTitle_1" })}</div>
          <div className={styles.cardContent}>{intl.formatMessage({ id: "PHILOSOPHY.FIRST.cardContent_1" })}</div>
        </div>

        <div className={styles.cardItem}>
          <div className={styles.cardTitle}>{intl.formatMessage({ id: "PHILOSOPHY.FIRST.cardTitle_2" })}</div>
          <div className={styles.cardContent}>{intl.formatMessage({ id: "PHILOSOPHY.FIRST.cardContent_2" })}</div>
        </div>

        <div className={styles.cardItem}>
          <div className={styles.cardTitle}>{intl.formatMessage({ id: "PHILOSOPHY.FIRST.cardTitle_3" })}</div>
          <div className={styles.cardContent}>{intl.formatMessage({ id: "PHILOSOPHY.FIRST.cardContent_3" })}</div>
        </div>
      </div>
    </div>
  </section>
);

export default FirstSection;
