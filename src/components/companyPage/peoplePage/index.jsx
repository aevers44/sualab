import React from "react";
import { injectIntl } from "react-intl";

import TitleSection from "../../commons/titleSection";
import PeopleCard from "./PeopleCard";

import styles from "./peoplePage.scss";

import { ceoList, researchList, salesList, manageList } from "./peopleList";

const sortFunc = (a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
};

const makePeopleCards = peopleList => {
  let result = [];
  for (let idx in peopleList) {
    const people = peopleList[idx];
    result.push(<PeopleCard key={idx} {...people} />);
  }
  return result;
};

const PeoplePage = ({ intl }) => {
  return (
    <section className={styles.peoplePage}>
      <TitleSection
        subTitle="PEOPLE"
        title={intl.formatMessage({ id: "PEOPLE.title" })}
        bgImage="https://d2ivzy5c3eic08.cloudfront.net/companyPage/people-background%402x.jpg"
      />

      <div className={styles.innerContainer}>
        <div className={styles.cardWrapper}>{makePeopleCards(ceoList)}</div>

        <div className={styles.line} />
        <div className={styles.subTitle}>{intl.formatMessage({ id: "PEOPLE.laboratory" })}</div>

        <div className={styles.cardWrapper}>{makePeopleCards(researchList.sort(sortFunc))}</div>

        <div className={styles.line} />
        <div className={styles.subTitle}>{intl.formatMessage({ id: "PEOPLE.business" })}</div>

        <div className={styles.cardWrapper}>{makePeopleCards(salesList.sort(sortFunc))}</div>

        <div className={styles.line} />
        <div className={styles.subTitle}>{intl.formatMessage({ id: "PEOPLE.manage" })}</div>

        <div className={styles.cardWrapper}>{makePeopleCards(manageList.sort(sortFunc))}</div>
      </div>
    </section>
  );
};

export default injectIntl(PeoplePage);
