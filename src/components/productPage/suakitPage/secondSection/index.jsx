import React from "react";

import styles from "./secondSection.scss";
const MAX_EXAMPLE_CNT = 5;

const SecondSection = ({ intl, example }) => {
  const page = Math.ceil(example.length / MAX_EXAMPLE_CNT);

  let arr = [];
  for (let index = 0; index < page; index++) {
    arr.push(index)
  }
  console.log(arr);
  return (
    <section className={styles.secondSection}>
      <div className={styles.innerContainer}>
        <div className={styles.line} />
        <div className={styles.subTitle}>{intl.formatMessage({ id: "SUAKIT.SECOND.subTitle" })}</div>
        {
          arr.map(ar => {
            const start = ar === 0 ? 0 : ar * MAX_EXAMPLE_CNT;
            const end = (ar + 1) * MAX_EXAMPLE_CNT;
            return (
              <div className={styles.contentWrapper} key={ar}>
              {
                example.slice(start, end).map(ex => {
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
            )
          })
        }
        <div className={styles.etcContent}>{intl.formatMessage({ id: "SUAKIT.SECOND.etcContent" })}</div>
      </div>
    </section>
  )
};



export default SecondSection;
