import React from "react";
import axios from "axios";
import { injectIntl } from "react-intl";

import TitleSection from "../../commons/titleSection";
import PeopleCard from "./PeopleCard";

import styles from "./peoplePage.scss";

const sortFunc = (a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
};

const makePeopleCards = (peopleList, locale) => {
  let result = [];
  console.log(locale);
  for (let idx in peopleList) {
    const people = peopleList[idx];
    result.push(<PeopleCard locale={locale} key={idx} {...people} />);
  }
  return result;
};

class PeoplePage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      ceoList: [],
      researchList: [],
      salesList: [],
      manageList: [],
    };

    this.getPeopleList = this.getPeopleList.bind(this);
  }

  componentDidMount() {
    this.getPeopleList();
  }

  render() {
    const { intl } = this.props;
    const { ceoList, researchList, salesList, manageList } = this.state;
    return (
      <section className={styles.peoplePage}>
        <TitleSection
          subTitle="PEOPLE"
          title={intl.formatMessage({ id: "PEOPLE.title" })}
          bgImage="https://d2ivzy5c3eic08.cloudfront.net/companyPage/people-background%402x.jpg"
        />

        <div className={styles.innerContainer}>
          <div className={styles.line} />
          <div className={styles.subTitle}>{intl.formatMessage({ id: "PEOPLE.c-level" })}</div>
          <div className={styles.cardWrapper}>{makePeopleCards(ceoList, intl.locale)}</div>

          <div className={styles.line} />
          <div className={styles.subTitle}>{intl.formatMessage({ id: "PEOPLE.laboratory" })}</div>

          <div className={styles.cardWrapper}>{makePeopleCards(researchList.sort(sortFunc), intl.locale)}</div>

          <div className={styles.line} />
          <div className={styles.subTitle}>{intl.formatMessage({ id: "PEOPLE.business" })}</div>

          <div className={styles.cardWrapper}>{makePeopleCards(salesList.sort(sortFunc), intl.locale)}</div>

          <div className={styles.line} />
          <div className={styles.subTitle}>{intl.formatMessage({ id: "PEOPLE.manage" })}</div>

          <div className={styles.cardWrapper}>{makePeopleCards(manageList.sort(sortFunc), intl.locale)}</div>
        </div>
      </section>
    );
  }

  getPeopleList() {
    axios.get("/api/people").then(res => {
      this.setState({
        ceoList: res.data.filter(elem => elem.department === "c-level"),
        researchList: res.data.filter(elem => elem.department === "research"),
        salesList: res.data.filter(elem => elem.department === "sales"),
        manageList: res.data.filter(elem => elem.department === "management"),
      });
    });
  }
}

export default injectIntl(PeoplePage);
