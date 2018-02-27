import React from "react";
import styles from "./secondContainer.scss";

const SecondContainer = ({ intl }) => (
  <section className={styles.secondContainer}>
    <div className={styles.innerContainer}>
      <div className={styles.title}>AWARDS</div>
      <div className={styles.grayLine} />

      <div className={styles.awardWrapper}>
        <div className={styles.award}>
          <img
            src="https://d2ivzy5c3eic08.cloudfront.net/mainPage/vision-system@2x.png"
            alt=""
            className={styles.awardImage}
          />
          <span className={styles.awardContent}>{intl.formatMessage({ id: "MAIN.SECOND.awardContent_1" })}</span>
        </div>

        <div className={styles.award}>
          <img
            src="https://d2ivzy5c3eic08.cloudfront.net/mainPage/bitmap@2x.png"
            alt=""
            className={styles.awardImage}
          />
          <span className={styles.awardContent}>{intl.formatMessage({ id: "MAIN.SECOND.awardContent_2" })}</span>
        </div>

        <div className={styles.award}>
          <img src="https://d2ivzy5c3eic08.cloudfront.net/mainPage/aia@2x.png" alt="" className={styles.awardImage} />
          <span className={styles.awardContent}>{intl.formatMessage({ id: "MAIN.SECOND.awardContent_3" })}</span>
        </div>
      </div>
    </div>
  </section>
);

export default SecondContainer;
