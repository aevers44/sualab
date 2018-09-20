import React from "react";

import Icon from "../../../commons/icons";
import styles from "./fourthSection.scss";

const FourthSection = ({ intl }) => (
  <section className={styles.fourthSection}>
    <div className={styles.innerContainer}>
      <div className={styles.line} />
      <div className={styles.title}>
        SUALAB’s <span className={styles.strong}>Solution</span>
      </div>

      <div className={styles.subTitle}>Vision Inspection Solution</div>
      <div className={styles.subContent}>{intl.formatMessage({ id: "ABOUT.FOURTH.subContent" })}</div>

      <div className={styles.contentWrapper}>
        <div className={styles.contentItem}>
          <div className={styles.icon}>
            <Icon icon="SOLUTION_1" />
          </div>
          <div className={styles.itemContent}>{intl.formatMessage({ id: "ABOUT.FOURTH.itemContent_1" })}</div>
        </div>

        <div className={styles.contentLine} />

        <div className={styles.contentItem}>
          <div className={styles.icon}>
            <Icon icon="SOLUTION_2" />
          </div>
          <div className={styles.itemContent}>{intl.formatMessage({ id: "ABOUT.FOURTH.itemContent_2" })}</div>
        </div>

        <div className={styles.contentLine} />

        <div className={styles.contentItem}>
          <div className={styles.icon}>
            <Icon icon="SOLUTION_3" />
          </div>
          <div className={styles.itemContent}>{intl.formatMessage({ id: "ABOUT.FOURTH.itemContent_3" })}</div>
        </div>
      </div>
    </div>
  </section>
);

export default FourthSection;
