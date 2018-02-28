import React from "react";

import styles from "./secondSection.scss";

const SecondSection = ({ intl }) => (
  <section className={styles.secondSection}>
    <div className={styles.innerContainer}>
      <div className={styles.line} />
      <div className={styles.subTitle}>{intl.formatMessage({ id: "SUAKIT.SECOND.subTitle" })}</div>

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
          <p className={styles.imgCaption}>{intl.formatMessage({ id: "SUAKIT.SECOND.display" })}</p>
        </div>
        <div className={styles.contentItem}>
          <div className={styles.imgWrapper}>
            <img src="https://d2ivzy5c3eic08.cloudfront.net/productPage/conduct@2x.png" alt="" />
          </div>
          <p className={styles.imgCaption}>{intl.formatMessage({ id: "SUAKIT.SECOND.conduct" })}</p>
        </div>
        <div className={styles.contentItem}>
          <div className={styles.imgWrapper}>
            <img src="https://d2ivzy5c3eic08.cloudfront.net/productPage/sunlight@2x.png" alt="" />
          </div>
          <p className={styles.imgCaption}>{intl.formatMessage({ id: "SUAKIT.SECOND.sunlight" })}</p>
        </div>
        <div className={styles.contentItem}>
          <div className={styles.imgWrapper}>
            <img src="https://d2ivzy5c3eic08.cloudfront.net/productPage/film@2x.png" alt="" />
          </div>
          <p className={styles.imgCaption}>{intl.formatMessage({ id: "SUAKIT.SECOND.film" })}</p>
        </div>
      </div>

      <div className={styles.etcContent}>{intl.formatMessage({ id: "SUAKIT.SECOND.etcContent" })}</div>
    </div>
  </section>
);

export default SecondSection;
