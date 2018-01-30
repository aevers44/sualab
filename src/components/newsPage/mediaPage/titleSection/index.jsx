import React from 'react';
import styles from './titleSection.scss';

const TitleSection = () => 
    <section className={styles.titleSection}>
        <div className={styles.innerContainer}>
            <div className={styles.subTitle}>
                SUALAB IN MEDIA
            </div>
            <div className={styles.title}>
                <span className={styles.strong}>언론</span>
                에 보도된 <span className={styles.strong}>SUALAB</span>
                을 확인해 보세요
            </div>
            <div className={styles.line}></div>
        </div>
    </section>;

export default TitleSection;