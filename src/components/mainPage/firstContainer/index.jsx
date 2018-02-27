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
      <div className={styles.subTitle}>
        SUALAB은 인공지능을 기반으로 기계 대신 사람이 하던 일을 자동화함으로써<br />
        세상에 기여할 수 있다고 믿습니다.
      </div>
      <Link className={styles.tourBtn} to="/product/suakit">
        Get a Tour
      </Link>
    </div>
  </section>
);

export default FirstContainer;
