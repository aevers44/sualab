import React from "react";
import styles from "./thirdContainer.scss";

const ThirdContainer = () => (
  <section className={styles.thirdContainer}>
    <div className={styles.innerContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.title}>CUSTOMER</div>
        <div className={styles.bigTitle}>고객사</div>
        <div className={styles.content}>
          SUALAB은 훌륭한 기술력을 입증 받아 <br /> 유수의 대기업들에 다양한 솔루션을 제공하고 있습니다.
        </div>

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
