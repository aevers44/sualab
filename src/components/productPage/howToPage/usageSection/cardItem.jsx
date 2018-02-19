import React from "react";

import styles from "./usageSection.scss";

const CardItem = ({ title, content, imgUrl }) => (
  <div className={styles.cardItem}>
    <div className={styles.cardTitle}>{title}</div>
    <div className={styles.cardContent}>{content}</div>
    <div className={styles.imgWrapper}>
      <img src={imgUrl} alt="" />
    </div>
  </div>
);

export default CardItem;
