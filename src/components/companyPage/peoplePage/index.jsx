import React from "react";

import TitleSection from "../../commons/titleSection";
import PeopleCard from "./PeopleCard";

import styles from "./peoplePage.scss";

import { ceoList, researchList, salesList, manageList } from "./peopleList";

const makePeopleCards = peopleList => {
  let result = [];
  for (let idx in peopleList) {
    const people = peopleList[idx];
    result.push(<PeopleCard key={idx} {...people} />);
  }
  return result;
};

const PeoplePage = () => {
  return (
    <section className={styles.peoplePage}>
      <TitleSection
        subTitle="PEOPLE"
        title="SUALAB은 *최고의 사람들*과 함께 합니다"
        bgImage="https://d3rqapinkc8b8p.cloudfront.net/companyPage/people-background%402x.jpg"
      />

      <div className={styles.innerContainer}>
        <div className={styles.cardWrapper}>{makePeopleCards(ceoList)}</div>

        <div className={styles.line} />
        <div className={styles.subTitle}>연구소</div>

        <div className={styles.cardWrapper}>{makePeopleCards(researchList)}</div>

        <div className={styles.line} />
        <div className={styles.subTitle}>영업 본부</div>

        <div className={styles.cardWrapper}>{makePeopleCards(salesList)}</div>

        <div className={styles.line} />
        <div className={styles.subTitle}>경영관리 본부</div>

        <div className={styles.cardWrapper}>{makePeopleCards(manageList)}</div>
      </div>
    </section>
  );
};

export default PeoplePage;
