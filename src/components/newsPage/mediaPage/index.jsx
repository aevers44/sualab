import React from "react";

import TitleSection from "../../commons/titleSection";
import NewsList from "./newsList";

import styles from "./mediaPage.scss";

const MediaPage = () => (
  <section>
    <TitleSection
      subTitle="SUALAB IN MEDIA"
      title="*언론*에 보도된 *SUALAB*을 확인해 보세요"
      bgImage="https://d3rqapinkc8b8p.cloudfront.net/newsPage/media-background%402x.png"
    />
    <NewsList />
  </section>
);

export default MediaPage;
