import React from 'react';

import Icon from '../../../commons/icons';
import styles from './fourthSection.scss';

const FourthSection = () =>
    <section className={styles.fourthSection}>
        <div className={styles.innerContainer}>
            <div className={styles.line}></div>
            <div className={styles.title}>
                SUALAB’s <span className={styles.strong}>Solution</span>
            </div>

            <div className={styles.subTitle}>
                Vision Inspection Solution
            </div>
            <div className={styles.subContent}>
                SUALAB은 인공지능 이미지 해석 기술을 기반으로, 기존 머신비전 기술로 검사가 어려운 <br/> 
                디스플레이, 태양광, PCB, 필름, 반도체 등의 분야를 위한 무인 검사 자동화 솔루션을 제공합니다.
            </div>

            <div className={styles.contentWrapper}>
                <div className={styles.contentItem}>
                    <div className={styles.icon}>
                        <Icon icon="SOLUTION_1" />
                    </div>
                    <div className={styles.itemContent}>
                        딥러닝 학습 최적화를 위해 머신비전 알고리즘 등 다양한 기술을 활용하여 이미지 전처리를 수행합니다.
                    </div>
                </div>

                <div className={styles.contentLine}></div>
                
                <div className={styles.contentItem}>
                    <div className={styles.icon}>
                        <Icon icon="SOLUTION_2" />
                    </div>
                    <div className={styles.itemContent}>
                        딥러닝 학습 최적화를 위해 머신비전 알고리즘 등 다양한 기술을 활용하여 이미지 전처리를 수행합니다.
                    </div>
                </div>

                <div className={styles.contentLine}></div>

                <div className={styles.contentItem}>
                    <div className={styles.icon}>
                        <Icon icon="SOLUTION_3" />
                    </div>
                    <div className={styles.itemContent}>
                        딥러닝 학습 최적화를 위해 머신비전 알고리즘 등 다양한 기술을 활용하여 이미지 전처리를 수행합니다.
                    </div>
                </div>
            </div>
        </div>
    </section>;

export default FourthSection;
