import React from "react";

import styles from "./fourthSection.scss";

const FourthSection = ({ intl }) => (
  <section className={styles.fourthSection}>
    <div className={styles.innerContainer}>
      <div className={styles.line} />
      <div className={styles.subTitle}>Benefits</div>

      <div className={styles.contentWrapper}>
        <div className={styles.contentItem}>
          <div className={styles.imgWrapper}>
            <img src="https://d2ivzy5c3eic08.cloudfront.net/productPage/benefit-1@2x.png" alt="" />
          </div>
          <div className={styles.itemTitle}>{intl.formatMessage({ id: "SUAKIT.FOURTH.itemTitle_1" })}</div>
          <div className={styles.itemContent}>{intl.formatMessage({ id: "SUAKIT.FOURTH.itemContent_1" })}</div>
        </div>
        <div className={styles.contentItem}>
          <div className={styles.imgWrapper}>
            <img src="https://d2ivzy5c3eic08.cloudfront.net/productPage/benefit-2@2x.png" alt="" />
          </div>
          <div className={styles.itemTitle}>{intl.formatMessage({ id: "SUAKIT.FOURTH.itemTitle_2" })}</div>
          <div className={styles.itemContent}>{intl.formatMessage({ id: "SUAKIT.FOURTH.itemContent_2" })}</div>
        </div>
        <div className={styles.contentItem}>
          <div className={styles.imgWrapper}>
            <img src="https://d2ivzy5c3eic08.cloudfront.net/productPage/benefit-3@2x.png" alt="" />
          </div>
          <div className={styles.itemTitle}>{intl.formatMessage({ id: "SUAKIT.FOURTH.itemTitle_3" })}</div>
          <div className={styles.itemContent}>{intl.formatMessage({ id: "SUAKIT.FOURTH.itemContent_3" })}</div>
        </div>

        <div className={styles.contentItem}>
          <div className={styles.imgWrapper}>
            <img src="https://d2ivzy5c3eic08.cloudfront.net/productPage/benefit-4@2x.png" alt="" />
          </div>
          <div className={styles.itemTitle}>{intl.formatMessage({ id: "SUAKIT.FOURTH.itemTitle_4" })}</div>
          <div className={styles.itemContent}>{intl.formatMessage({ id: "SUAKIT.FOURTH.itemContent_4" })}</div>
        </div>
        <div className={styles.contentItem}>
          <div className={styles.imgWrapper}>
            <img src="https://d2ivzy5c3eic08.cloudfront.net/productPage/benefit-5@2x.png" alt="" />
          </div>
          <div className={styles.itemTitle}>{intl.formatMessage({ id: "SUAKIT.FOURTH.itemTitle_5" })}</div>
          <div className={styles.itemContent}>{intl.formatMessage({ id: "SUAKIT.FOURTH.itemContent_5" })}</div>
        </div>
        <div className={styles.contentItem}>
          <div className={styles.imgWrapper}>
            <img src="https://d2ivzy5c3eic08.cloudfront.net/productPage/benefit-6@2x.png" alt="" />
          </div>
          <div className={styles.itemTitle}>{intl.formatMessage({ id: "SUAKIT.FOURTH.itemTitle_6" })}</div>
          <div className={styles.itemContent}>{intl.formatMessage({ id: "SUAKIT.FOURTH.itemContent_6" })}</div>
        </div>
      </div>
    </div>
  </section>
);

export default FourthSection;
