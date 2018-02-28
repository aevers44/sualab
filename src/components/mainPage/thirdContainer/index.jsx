import React from "react";
import styles from "./thirdContainer.scss";

const ThirdContainer = ({ intl }) => (
  <section className={styles.thirdContainer}>
    <div className={styles.innerContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.title}>CUSTOMER</div>
        <div className={styles.bigTitle}>{intl.formatMessage({ id: "MAIN.THIRD.bigTitle" })}</div>
        <div className={styles.content}>{intl.formatMessage({ id: "MAIN.THIRD.content" })}</div>

        {/* <a href="#" className={styles.readmoreBtn}>
          Read More
          <img src="https://d2ivzy5c3eic08.cloudfront.net/mainPage/combined-shape@2x.png" alt="" />
        </a> */}
      </div>

      <div className={styles.imageWrapper}>
        <img
          src="https://d2ivzy5c3eic08.cloudfront.net/mainPage/customers%402x.png"
          alt=""
          className={styles.customers}
        />
      </div>
    </div>
  </section>
);

export default ThirdContainer;
