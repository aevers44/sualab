import React from 'react';

import styles from './newsList.scss';

const NewsItem = () => 
    <div className={styles.newsItem}>
        <div className={styles.imgWrapper}>
            <img src="http://placehold.it/300x300" alt=""/>
        </div>
        <div className={styles.contentWrapper}>
            <div className={styles.title}>
                SUALAB, 한국공항공사와 영상 자동 판독 솔루션 연구한다
            </div>
            <div className={styles.date}>
                <span>2017-11-16</span>
                <span> | </span>
                <span>매일 경제</span>
            </div>
            <div className={styles.content}>
                AI 스타트업 SUALAB과 한국공항공사는 엑스레이(X-Ray) 보안검색 영상 자동판독 솔루션 연구개발협약식을 가졌다. 인공지능(AI)으로 위험물질을 분석해 자동 검출하고 분류할 수 있는 기술이 공항 검색대에 적용될 전망이다.[…]
            </div>
        </div>
    </div>;

const NewsList = () =>
    <section className={styles.newsList}>
        <div className={styles.innerContainer}>
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
        </div>
    </section>;

export default NewsList;