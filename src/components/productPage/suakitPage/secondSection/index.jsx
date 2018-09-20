import React from "react";

import styles from "./secondSection.scss";

const SecondSection = ({ intl, example }) => (
  <section className={styles.secondSection}>
    <div className={styles.innerContainer}>
      <div className={styles.line} />
      <div className={styles.subTitle}>{intl.formatMessage({ id: "SUAKIT.SECOND.subTitle" })}</div>
      <div className={styles.contentWrapper}>
        {
          example.map(ex => {
            return(
              <div className={styles.contentItem} key={ex.id}>
                <div className={styles.imgWrapper}>
                  <img src={ex.image} alt="" />
                </div>
                <p className={styles.imgCaption}>
                {intl.locale === "ko" ? ex.name_kr : ex.name_en}
                </p>
              </div>
            )
          })
        }
      </div>

      <div className={styles.etcContent}>{intl.formatMessage({ id: "SUAKIT.SECOND.etcContent" })}</div>
    </div>
  </section>
);



export default SecondSection;
