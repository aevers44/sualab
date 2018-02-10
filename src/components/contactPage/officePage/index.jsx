import React from "react";

import TitleSection from "../../commons/titleSection";

import styles from "./officePage.scss";

const OfficePage = () => (
  <section className={styles.officePage}>
    <TitleSection
      subTitle="SUALAB OFFICE"
      title="SUALAB은 언제나 여러분을 향해 열려 있습니다"
      bgImage="https://d3rqapinkc8b8p.cloudfront.net/contactPage/sualab-office-background@2x.jpg"
    />
    hello world
  </section>
);

export default OfficePage;
