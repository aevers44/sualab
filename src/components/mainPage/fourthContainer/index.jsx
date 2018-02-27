import React from "react";
import styles from "./fourthContainer.scss";

const FourthContainer = ({ intl }) => (
  <section className={styles.fourthContainer}>
    <div className={styles.innerContainer}>
      <div className={styles.bigTitle}>{intl.formatMessage({ id: "MAIN.FOURTH.bigTitle" })}</div>
      <div className={styles.subTitle}>{intl.formatMessage({ id: "MAIN.FOURTH.subTitle" })}</div>

      <a href="http://research.sualab.com/" target="_blank" className={styles.blogBtn}>
        {intl.formatMessage({ id: "MAIN.FOURTH.blogBtn" })}
      </a>
    </div>
  </section>
);

export default FourthContainer;
