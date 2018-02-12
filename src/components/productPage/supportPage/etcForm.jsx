import React from "react";

import styles from "./supportPage.scss";

const EtcForm = () => (
  <div className={styles.productForm}>
    <div className={styles.textWrapper}>
      <label htmlFor="content" className={styles.label}>
        문의 내용*
      </label>
      <textarea name="content" id="content" />
    </div>
  </div>
);

export default EtcForm;
