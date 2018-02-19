import React from "react";

import TitleSection from "../../commons/titleSection";
import FirstSection from "./firstSection";
import SecondSection from "./secondSection";
import ThirdSection from "./thirdSection";

import styles from "./philosophyPage.scss";

const PhilosophyPage = () => (
  <section className={styles.philosophyPage}>
    <TitleSection
      subTitle="PHILOSOPHY"
      title="SUALAB은 *최고의 인재*들이 모여 *즐겁게* 일할 수 있는 조직을 지향합니다"
      bgImage="https://d3rqapinkc8b8p.cloudfront.net/careerPage/sualab-career-background@2x.jpg"
    />
    <FirstSection />
    <SecondSection />
    <ThirdSection />
  </section>
);

export default PhilosophyPage;
