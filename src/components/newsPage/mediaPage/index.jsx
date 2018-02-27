import React from "react";
import { injectIntl } from "react-intl";

import TitleSection from "../../commons/titleSection";
import NewsList from "./newsList";

import styles from "./mediaPage.scss";

const MediaPage = props => (
  <section>
    <TitleSection
      subTitle="SUALAB IN MEDIA"
      title="*언론*에 보도된 *SUALAB*을 확인해 보세요"
      bgImage="https://d2ivzy5c3eic08.cloudfront.net/newsPage/media-background%402x.png"
      intl={props.intl}
    />
    <NewsList {...props} />
  </section>
);

export default injectIntl(MediaPage);
