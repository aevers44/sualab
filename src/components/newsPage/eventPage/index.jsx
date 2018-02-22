import React from "react";

import TitleSection from "../../commons/titleSection";
import EventList from "./eventList";

import styles from "./eventPage.scss";

const EventPage = props => (
  <section>
    <TitleSection
      subTitle="EVENTS"
      title="다양한 *행사* 및 *활동*을 통해 SUALAB과 만나보세요"
      bgImage="https://d2ivzy5c3eic08.cloudfront.net/newsPage/media-background%402x.png"
    />
    <EventList {...props} />
  </section>
);

export default EventPage;
