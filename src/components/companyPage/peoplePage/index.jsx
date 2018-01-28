import React from 'react';

import TitleSection from './TitleSection';
import PeopleCard from './PeopleCard';

import styles from './peoplePage.scss';

const PeoplePage = () =>
    <section className={styles.peoplePage}>
        <TitleSection />

        <PeopleCard />
    </section>

export default PeoplePage;