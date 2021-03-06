import React from "react";

import styles from "./usageSection.scss";

const CardItem = ({ title, content, imgUrl, intl }) => (
  <div className={styles.cardItem}>
    <div className={styles.cardTitle}>{intl.formatMessage({ id: title })}</div>
    <div className={styles.cardContent}>{intl.formatMessage({ id: content })}</div>
    <div className={styles.imgWrapper} style={{ backgroundImage: `url(${imgUrl})` }} />
  </div>
);

export default CardItem;
