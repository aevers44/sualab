import React from "react";

import styles from "./supportPage.scss";

const PartnershipForm = () => (
  <div className={styles.productForm}>
    <div className={styles.selectWrapper}>
      <label htmlFor="reason" className={styles.label}>
        알게 된 경로*
      </label>
      <select className={styles.selectForm}>
        <option defaultValue disabled>
          알게 된 경로를 선택하세요.
        </option>
        <option value="0">전시회/세미나</option>
        <option value="1">주변인 소개</option>
        <option value="2">매체(기사/방송 등)</option>
        <option value="3">검색(포탈/홈페이지 등) </option>
        <option value="4">기타</option>
      </select>
    </div>

    <div className={styles.textWrapper}>
      <label htmlFor="content" className={styles.label}>
        문의 내용*
      </label>
      <textarea name="content" id="content" />
    </div>
  </div>
);

export default PartnershipForm;
