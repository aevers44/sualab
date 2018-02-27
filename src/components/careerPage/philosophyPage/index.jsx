import React from "react";
import { injectIntl } from "react-intl";

import TitleSection from "../../commons/titleSection";
import FirstSection from "./firstSection";
import SecondSection from "./secondSection";
import ThirdSection from "./thirdSection";

import styles from "./philosophyPage.scss";

const PhilosophyPage = ({ intl }) => (
  <section className={styles.philosophyPage}>
    <TitleSection
      subTitle="PHILOSOPHY"
      title="SUALAB은 *최고의 인재*들이 모여 *즐겁게* 일할 수 있는 조직을 지향합니다"
      bgImage="https://d2ivzy5c3eic08.cloudfront.net/careerPage/sualab-career-background@2x.jpg"
      intl={intl}
    />
    <FirstSection intl={intl} />
    <SecondSection intl={intl} />
    <ThirdSection intl={intl} />
  </section>
);

export default injectIntl(PhilosophyPage);
