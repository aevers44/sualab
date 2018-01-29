import React from 'react';

import styles from './peopleCard.scss';

const PeopleCard = ({ imgUrl, position, name, engName, detail }) => 
    <div className={styles.peopleCard}>
        <div className={styles.innerWrapper}>
            <div className={styles.imageWrapper}>
                <img src={imgUrl} alt=""/>
            </div>
            <p className={styles.position}>{position}</p>
            <p className={styles.name}>{name}</p>
            <p className={styles.engName}>{engName}</p>
        </div>

        <div className={styles.detailWrapper}>
            <div className={styles.detailContent}>
                {detail.join('\n')}
            </div>
        </div>
    </div>;

export default PeopleCard;