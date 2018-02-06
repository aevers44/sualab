import React from "react";
import styles from "./titleSection.scss";

const TitleSection = ({ subTitle, title, bgImage = "http://placehold.it/300x300" }) => {
  const regex = /\*([^*]+)\*/g;
  const subst = `<span>$1</span>`;
  const replacedTitle = title.replace(regex, subst);

  return (
    <section className={styles.titleSection} style={{ backgroundImage: `url(${bgImage}` }}>
      <div className={styles.innerContainer}>
        <div className={styles.subTitle}>{subTitle}</div>
        <div className={styles.title} dangerouslySetInnerHTML={{ __html: replacedTitle }} />
        <div className={styles.line} />
      </div>
    </section>
  );
};

export default TitleSection;
