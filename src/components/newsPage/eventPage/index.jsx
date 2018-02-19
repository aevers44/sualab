import React from "react";

import TitleSection from "../../commons/titleSection";
import EventList from "./eventList";

import styles from "./eventPage.scss";

const EventPage = props => (
  <section>
    <TitleSection
      subTitle="EVENTS"
      title="*언론*에 보도된 *SUALAB*을 확인해 보세요"
      bgImage="https://d3rqapinkc8b8p.cloudfront.net/newsPage/media-background%402x.png"
    />
    <EventList {...props} />
  </section>
);

export default EventPage;
