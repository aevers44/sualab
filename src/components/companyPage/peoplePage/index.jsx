import React from 'react';

import TitleSection from './TitleSection';
import PeopleCard from './PeopleCard';

import styles from './peoplePage.scss';

import { ceoList, researchList, salesList, manageList } from './peopleList';

const makePeopleCards = (peopleList) => {
    let result = [];
    for (let idx in peopleList) {
        const people = peopleList[idx];
        result.push(<PeopleCard key={idx} {...people} />);
    }
    return result;
}

const PeoplePage = () => {
    return (
        <section className={styles.peoplePage}>
            <TitleSection />

            <div className={styles.innerContainer}>
                <div className={styles.cardWrapper}>
                    {makePeopleCards(ceoList)}
                </div>

                <div className={styles.line}></div>
                <div className={styles.subTitle}>연구소</div>

                <div className={styles.cardWrapper}>
                    {makePeopleCards(researchList)}
                </div>

                <div className={styles.line}></div>
                <div className={styles.subTitle}>영업 본부</div>

                <div className={styles.cardWrapper}>
                    {makePeopleCards(salesList)}
                </div>


                <div className={styles.line}></div>
                <div className={styles.subTitle}>경영 관리 본부</div>

                <div className={styles.cardWrapper}>
                    {makePeopleCards(manageList)}
                </div>
            </div>
        </section>
    );
};

export default PeoplePage;
