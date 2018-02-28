import React from "react";

import styles from "./thirdSection.scss";

const ThirdSection = ({ intl }) => {
  const title = intl.formatMessage({ id: "ABOUT.THIRD.title" });
  const subst = `<span>$1</span>`;
  const replacedTitle = title.replace(/\*([^*]+)\*/g, subst);

  return (
    <section className={styles.thirdSection}>
      <div className={styles.innerContainer}>
        <div className={styles.leftWrapper}>
          <div className={styles.line} />
          <div className={styles.title} dangerouslySetInnerHTML={{ __html: replacedTitle }} />
          <div className={styles.content}>{intl.formatMessage({ id: "ABOUT.THIRD.content" })}</div>
        </div>

        <div className={styles.rightWrapper}>
          <div className={styles.imageWrapper} />

          <span className={`${styles.itemName} ${styles.first}`}>Machine Vision</span>
          <span className={`${styles.itemName} ${styles.second}`}>Deep Learning</span>
          <span className={`${styles.itemName} ${styles.third}`}>Super Computing</span>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
