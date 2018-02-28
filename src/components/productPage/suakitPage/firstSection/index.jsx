import React from "react";

import Icon from "../../../commons/icons";
import styles from "./firstSection.scss";

const FirstSection = ({ intl }) => (
  <section className={styles.firstSection}>
    <div className={styles.innerContainer}>
      <div className={styles.titleWrapper}>
        <div className={styles.lineAndTitle}>
          <div className={styles.line} />
          <div className={styles.title}>SuaKIT</div>
        </div>
        <div className={styles.content}>{intl.formatMessage({ id: "SUAKIT.FIRST.content" })}</div>
      </div>

      <div className={styles.itemWrapper}>
        <div className={styles.itemCard}>
          <div className={styles.svgWrapper}>
            <Icon icon="SUAKIT_FEATURE_2" />
          </div>
          <div className={styles.cardTitle}>Segmentation</div>
          <div className={styles.cardContent}>{intl.formatMessage({ id: "SUAKIT.FIRST.cardContent_1" })}</div>
        </div>

        <div className={styles.itemCard}>
          <div className={styles.svgWrapper}>
            <Icon icon="SUAKIT_FEATURE_3" />
          </div>
          <div className={styles.cardTitle}>Classification</div>
          <div className={styles.cardContent}>{intl.formatMessage({ id: "SUAKIT.FIRST.cardContent_2" })}</div>
        </div>

        <div className={styles.itemCard}>
          <div className={styles.svgWrapper}>
            <Icon icon="SUAKIT_FEATURE_1" />
          </div>
          <div className={styles.cardTitle}>Detection</div>
          <div className={styles.cardContent}>{intl.formatMessage({ id: "SUAKIT.FIRST.cardContent_3" })}</div>
        </div>
      </div>
    </div>
  </section>
);

export default FirstSection;
