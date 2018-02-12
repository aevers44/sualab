import React from "react";

import styles from "./supportPage.scss";

const ProductForm = () => (
  <div className={styles.productForm}>
    <div className={styles.inputWrapper}>
      <label className={styles.label}>Vision 검사 장비 보유 유/무*</label>

      <input className={styles.radioBtn} type="radio" name="hasVision" id="visionYes" />
      <label htmlFor="visionYes">유</label>
      <input className={styles.radioBtn} type="radio" name="hasVision" id="visionNo" />
      <label htmlFor="visionNo">무</label>
      <input className={styles.radioBtn} type="radio" name="hasVision" id="visionDontKnow" />
      <label htmlFor="visionDontKnow">모름</label>
    </div>

    <div className={styles.inputWrapper}>
      <label htmlFor="industry" className={styles.label}>
        산업*
      </label>
      <input type="text" className={styles.textForm} id="industry" name="industry" />
    </div>

    <div className={styles.inputWrapper}>
      <label htmlFor="productType" className={styles.label}>
        제품 유형*
      </label>
      <input type="text" className={styles.textForm} id="productType" name="productType" />
    </div>

    <div className={styles.inputWrapper}>
      <label htmlFor="faultType" className={styles.label}>
        불량 유형*
      </label>
      <input type="text" className={styles.textForm} id="faultType" name="faultType" />
    </div>

    <div className={styles.inputWrapper}>
      <label htmlFor="numOfLine" className={styles.label}>
        생산라인 수*
      </label>
      <input type="text" className={styles.textForm} id="numOfLine" name="numOfLine" />
    </div>

    <div className={styles.selectWrapper}>
      <label htmlFor="reason" className={styles.label}>
        알게 된 경로*
      </label>
      <select className={styles.selectForm}>
        <option defaultValue disabled>
          알게 된 경로를 선택하세요.
        </option>
        <option value="0">예시 1</option>
        <option value="1">예시 2</option>
        <option value="2">예시 3</option>
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

export default ProductForm;
