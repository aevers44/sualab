import React from "react";

import styles from "./firstSection.scss";

const FirstSection = ({ intl }) => {
  const title = intl.formatMessage({ id: "ABOUT.FIRST.title" });
  const regex = /\*([^*]+)\*/g;
  const subst = `<span>$1</span>`;
  const replacedTitle = title.replace(regex, subst);

  return (
    <section className={styles.firstSection}>
      <div className={styles.innerContainer}>
        <div className={styles.subTitle}>ABOUT US</div>
        <div className={styles.title} dangerouslySetInnerHTML={{ __html: replacedTitle }} />
        <div className={styles.line} />
      </div>
    </section>
  );
};

export default FirstSection;
