import React from "react";
import { injectIntl } from "react-intl";

import TitleSection from "../../commons/titleSection";

import FirstSection from "./firstSection";
import SecondSection from "./secondSection";
import ThirdSection from "./thirdSection";
import FourthSection from "./fourthSection";
import FifthSection from "./fifthSection";
import SixthSection from "./sixthSection";

import styles from "./suakitPage.scss";

const SuakitPage = ({ intl }) => (
  <section className={styles.suakitPage}>
    <TitleSection
      subTitle="SUAKIT"
      title="*딥러닝*을 탑재한 SuaKIT, *머신비전 검사*의 스펙트럼을 넓힙니다"
      bgImage="https://d2ivzy5c3eic08.cloudfront.net/productPage/background%402x.jpg"
      intl={intl}
    />

    <FirstSection intl={intl} />
    <SecondSection intl={intl} />
    <ThirdSection intl={intl} />
    <FourthSection intl={intl} />
    <FifthSection intl={intl} />
    <SixthSection intl={intl} />
  </section>
);

export default injectIntl(SuakitPage);
