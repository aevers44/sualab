import React from "react";

import styles from "./thirdSection.scss";

const ThirdSection = ({ intl }) => (
  <section className={styles.thirdSection}>
    <div className={styles.innerContainer}>
      <div className={styles.line} />
      <div className={styles.subTitle}>{intl.formatMessage({ id: "PHILOSOPHY.THIRD.subTitle" })}</div>

      <div className={styles.contentWrapper}>
        <div className={styles.contentItem}>{intl.formatMessage({ id: "PHILOSOPHY.THIRD.contentItem_1" })}</div>
        <div className={styles.contentItem}>{intl.formatMessage({ id: "PHILOSOPHY.THIRD.contentItem_2" })}</div>
        <div className={styles.contentItem}>
          {intl.formatMessage({ id: "PHILOSOPHY.THIRD.contentItem_3" })}
          <div className={styles.info}>
            <span>{intl.formatMessage({ id: "PHILOSOPHY.THIRD.contentItem_3.infoTitle" })}</span> <br />
            {intl.formatMessage({ id: "PHILOSOPHY.THIRD.contentItem_3.infoContent" })}
          </div>
        </div>
        <div className={styles.contentItem}>{intl.formatMessage({ id: "PHILOSOPHY.THIRD.contentItem_4" })}</div>
      </div>
    </div>
  </section>
);

export default ThirdSection;
