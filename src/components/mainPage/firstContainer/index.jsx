import React from "react";
import { Link } from "react-router-dom";
import styles from "./firstContainer.scss";

const FirstContainer = ({ intl }) => (
  <section className={styles.firstContainer}>
    <div className={styles.innerContainer}>
      <div className={styles.title}>
        Deep Learning<br />
        Machine Vision Solution Provider
      </div>
      <div className={styles.subTitle}>{intl.formatMessage({ id: "MAIN.FIRST.subTitle" })}</div>
      <Link className={styles.tourBtn} to="/product/suakit">
        Get a Tour
      </Link>
    </div>
  </section>
);

export default FirstContainer;
