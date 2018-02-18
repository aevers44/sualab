import React from "react";

import TitleSection from "../../commons/titleSection";
import UsageSection from "./usageSection";
import ApplySection from "./applySection";

import styles from "./howToPage.scss";

const HowToPage = () => (
  <section className={styles.howToPage}>
    <TitleSection
      subTitle="HOW TO APPLY"
      title="*누구나* 손쉽게 *딥러닝 모델을* 생성하고 *제조 현장에 적용*할 수 있습니다"
      bgImage="https://d3rqapinkc8b8p.cloudfront.net/productPage/sualab-product-howtoapply-background@2x  .jpg"
    />

    <UsageSection />
    <ApplySection />
  </section>
);

export default HowToPage;
