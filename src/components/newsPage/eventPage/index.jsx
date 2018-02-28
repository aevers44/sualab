import React from "react";
import { injectIntl } from "react-intl";

import TitleSection from "../../commons/titleSection";
import EventList from "./eventList";

import styles from "./eventPage.scss";

const EventPage = props => (
  <section>
    <TitleSection
      subTitle="EVENTS"
      title={props.intl.formatMessage({ id: "EVENT.title" })}
      bgImage="https://d2ivzy5c3eic08.cloudfront.net/newsPage/media-background%402x.png"
    />
    <EventList {...props} />
  </section>
);

export default injectIntl(EventPage);
