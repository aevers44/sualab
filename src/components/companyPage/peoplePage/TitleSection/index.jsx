import React from 'react';
import styles from './titleSecion.scss';

const TitleSection = () => 
    <section className={styles.titleSection}>
        <div className={styles.innerContainer}>
            <div className={styles.subTitle}>
                PEOPLE
            </div>
            <div className={styles.title}>
                SUALAB은 <span className={styles.strong}>최고의 사람들</span>
                과 함께 합니다
            </div>
            <div className={styles.line}></div>
        </div>
    </section>;

export default TitleSection;