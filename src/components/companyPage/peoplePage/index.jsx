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
      categoryList: [],
      peoples: [],
    };

    this.getPeopleList = this.getPeopleList.bind(this);
  }

  componentDidMount() {
    this.getPeopleList();
  }

  render() {
    const { intl } = this.props;
    const { ceoList, researchList, salesList, manageList, categoryList } = this.state;
    const locale = this.props.intl.locale;
    return (
      <section className={styles.peoplePage}>
        <TitleSection
          subTitle="PEOPLE"
          title={intl.formatMessage({ id: "PEOPLE.title" })}
          bgImage="https://d2ivzy5c3eic08.cloudfront.net/companyPage/people-background%402x.jpg"
        />

        <div className={styles.innerContainer}>
          {
            categoryList.map(item => {
              const peopleList = this.getPeoples(item.category)
              return (
                <div key={item.category}>
                  <div className={styles.line} />
                  <div className={styles.subTitle}>{locale === "ko" ? item.name_kr : item.name_en }</div>
                  <div className={styles.cardWrapper}>{makePeopleCards(peopleList, intl.locale)}</div>
                </div>
              )
            })
          }
        </div>
      </section>
    );
  }

  getPeoples(category){
    return this.state.peoples.filter(elem => elem.category === category);
  }

  getPeopleList() {
    axios.get("/api/people").then(res => {
      let categoryList = [];
      
      res.data.forEach(row => {
        if (categoryList.findIndex(item => item.category === row.category) === -1){
          categoryList.push({
            category: row.category,
            name_kr: row.name_kr,
            name_en: row.name_en,
          });
        }
      })

      this.setState({
        categoryList,
        peoples: res.data,
        ceoList: res.data.filter(elem => elem.department === "c-level"),
        researchList: res.data.filter(elem => elem.department === "research"),
        salesList: res.data.filter(elem => elem.department === "sales"),
        manageList: res.data.filter(elem => elem.department === "management"),
      });
    });
  }
}

export default injectIntl(PeoplePage);
