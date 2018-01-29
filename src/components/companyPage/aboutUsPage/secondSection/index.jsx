import React from 'react';

import styles from './secondSection.scss';

const SecondSection = () =>
    <section className={styles.secondSection}>
        <div className={styles.innerContainer}>
            <div className={styles.line}></div>
            <div className={styles.title}>
                Mission & Vision
            </div>

            <div className={styles.subTitle}>
                Mission<span className={styles.mint}>.</span>
            </div>
            <div className={styles.subContent}>
                사람이 기계 대신 하던 일에서 벗어나도록 하여 세상에 기여합니다. <br/>
                구성원들을 즐겁게 일할 수 있도록 하고 노력에 대한 정당한 보상으로 행복하게 합니다.
            </div>

            <div className={styles.subTitle}>
                Vision<span className={styles.mint}>.</span>
            </div>
            <div className={styles.subContent}>
                딥러닝 기반 Vision  Inspection 분야의 세계 1등
            </div>
        </div>
    </section>;

export default SecondSection;
