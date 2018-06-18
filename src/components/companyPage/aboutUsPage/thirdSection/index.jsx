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
          <div
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: replacedTitle }}
          />
          <div className={styles.content}>
            {intl.formatMessage({ id: "ABOUT.THIRD.content" })}
          </div>
        </div>

        <div className={styles.rightWrapper}>
          <div className={styles.imageWrapper}>
            <img
              src="https://d2ivzy5c3eic08.cloudfront.net/companyPage/about-us@2x.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
