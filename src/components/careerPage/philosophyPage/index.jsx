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
      title={intl.formatMessage({ id: "PHILOSOPHY.title" })}
      bgImage="https://d2ivzy5c3eic08.cloudfront.net/careerPage/sualab-career-background@2x.jpg"
    />
    <FirstSection intl={intl} />
    <SecondSection intl={intl} />
    <ThirdSection intl={intl} />
  </section>
);

export default injectIntl(PhilosophyPage);
