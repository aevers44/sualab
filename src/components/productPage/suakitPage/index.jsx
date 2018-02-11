import React from "react";

import TitleSection from "../../commons/titleSection";
import styles from "./suakitPage.scss";

const SuakitPage = () => (
  <section className={styles.suakitPage}>
    <TitleSection
      subTitle="SUAKIT"
      title="*딥러닝*을 탑재한 SuaKIT, *머신비전 검사*의 스펙트럼을 넓힙니다"
      bgImage="https://d3rqapinkc8b8p.cloudfront.net/productPage/background%402x.jpg"
    />
    hello suakit
  </section>
);

export default SuakitPage;
