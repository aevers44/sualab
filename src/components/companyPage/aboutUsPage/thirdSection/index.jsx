import React from 'react';

import styles from './thirdSection.scss';

const ThirdSection = () =>
    <section className={styles.thirdSection}>
        <div className={styles.innerContainer}>
            <div className={styles.leftWrapper}>
                <div className={styles.line}></div>
                <div className={styles.title}>
                    <span className={styles.strong}>딥러닝 머신비전 솔루션</span> 글로벌 리더
                </div>
                <div className={styles.content}>
                    <p>
                        SUALAB은 인공지능을 기반으로 한 Deep Learning Machine Vison Solution Provider 입니다.
                    </p>
                    <p>
                        SUALAB은 컴퓨터, 전자, 기계 분야 등의 우수한 엔지니어들이 모여 각 분야의 기술을 융합하여 인간을 보다 편리하게 하는 다양한 기술과 제품을 연구합니다. 
                    </p>
                    <p>
                        특히, 딥러닝, 머신비전 그리고 슈퍼컴퓨팅 기술을 바탕으로 산업현장에서 인간의 눈을 대신 할 수 있는 다양한 머신 비전 시스템을 연구하여 제조 산업의 정밀 검사를 가능하게 합니다.
                    </p>
                </div>

            </div>

            <div className={styles.rightWrapper}>
                <div className={styles.imageWrapper}>
                </div>

                <span className={`${styles.itemName} ${styles.first}`}>
                    Machine Vision
                </span>
                <span className={`${styles.itemName} ${styles.second}`}>
                    Deep Learning
                </span>
                <span className={`${styles.itemName} ${styles.third}`}>
                    Super Computing
                </span>
            </div>
        </div>
    </section>;

export default ThirdSection;
