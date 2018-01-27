import React from 'react';
import styles from './secondContainer.scss';

const SecondContainer = () =>
    <section className={styles.secondContainer}>
        <div className={styles.innerContainer}>
            <div className={styles.title}>
                AWARDS
            </div>
            <div className={styles.grayLine}></div>

            <div className={styles.awardWrapper}>
                <div className={styles.award}>
                    <img src="https://d3rqapinkc8b8p.cloudfront.net/mainPage/vision-system@2x.png" alt="" className={styles.awardImage} />
                    <span className={styles.awardContent}>
                        2017 Innovators Awards <br />
                        PLATINUM 수상
                    </span>
                </div>

                <div className={styles.award}>
                    <img src="https://d3rqapinkc8b8p.cloudfront.net/mainPage/bitmap@2x.png" alt="" className={styles.awardImage} />
                    <span className={styles.awardContent}>
                        2017 KGCCI Innovation Awards <br />
                        디지털혁신 부문 수상
                    </span>
                </div>

                <div className={styles.award}>
                    <img src="https://d3rqapinkc8b8p.cloudfront.net/mainPage/aia@2x.png" alt="" className={styles.awardImage} />
                    <span className={styles.awardContent}>
                        2016 AIA VIsion Show <br />
                        Global Top 8 Start-up
                    </span>
                </div>
            </div>
        </div>
    </section>

export default SecondContainer;

