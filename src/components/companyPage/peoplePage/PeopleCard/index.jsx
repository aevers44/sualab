import React from "react";

import styles from "./peopleCard.scss";

const PeopleCard = ({ locale, imgUrl, position, name, eng_name, detail, eng_detail }) => (
  <div className={styles.peopleCard}>
    <div className={styles.innerWrapper}>
      <div className={styles.imageWrapper}>
        <img src={imgUrl} alt="" />
      </div>
      <p className={styles.position}>{position}</p>
      <p className={styles.name}>{locale === "ko" ? name : eng_name}</p>
      <p className={styles.engName}>{locale === "ko" ? eng_name : ""}</p>
    </div>

    <div className={styles.detailWrapper}>
      <div className={styles.detailContent}>{locale === "ko" ? detail : eng_detail}</div>
    </div>
  </div>
);

export default PeopleCard;
