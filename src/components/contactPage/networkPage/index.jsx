import React from "react";

import TitleSection from "../../commons/titleSection";
import styles from "./networkPage.scss";

const NetworkPage = () => (
  <section className={styles.networkPage}>
    <TitleSection
      subTitle="GLOBAL SALES NETWORK"
      title="SUALAB은 *비즈니스 파트너*들과 함께 *세계*로 나아가고 있습니다"
      bgImage="https://d3rqapinkc8b8p.cloudfront.net/contactPage/media-background@2x.jpg"
    />
  </section>
);

export default NetworkPage;
