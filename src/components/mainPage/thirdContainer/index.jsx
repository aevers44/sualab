import React from 'react';
import styles from './thirdContainer.scss';

const ThirdContainer = () =>
    <section className={styles.thirdContainer}>
        <div className={styles.innerContainer}>
            <div className={styles.contentWrapper}>
                <div className={styles.title}>
                    CUSTOMER
                </div>
                <div className={styles.customer}>
                    고객사
                </div>
                <div className={styles.content}>
                    SUALAB은 유수의 대기업들로 부터 <br />
                    훌륭한 기술력을 입증 받아 다양한 솔루션을 납품해 왔습니다.
                </div>

                <a href="#" className={styles.readmoreBtn}>
                    Read More
                    <img src="https://d3rqapinkc8b8p.cloudfront.net/mainPage/combined-shape@2x.png" alt=""/>
                </a>
            </div>

            <div className={styles.imageWrapper}>
                <img src="https://d3rqapinkc8b8p.cloudfront.net/mainPage/customers@2x.png" alt="" className={styles.customers}/>
            </div>
        </div>
    </section>

export default ThirdContainer;

