import React from "react";
import { injectIntl } from "react-intl";

import TitleSection from "../../commons/titleSection";
import UsageSection from "./usageSection";
import ApplySection from "./applySection";

import styles from "./howToPage.scss";

const HowToPage = ({ intl }) => (
  <section className={styles.howToPage}>
    <TitleSection
      subTitle="HOW TO APPLY"
      title={intl.formatMessage({ id: "HOWTO.title" })}
      bgImage="https://d2ivzy5c3eic08.cloudfront.net/productPage/sualab-product-howtoapply-background@2x.jpg"
    />

    <UsageSection intl={intl} />
    <ApplySection intl={intl} />
  </section>
);

export default injectIntl(HowToPage);
