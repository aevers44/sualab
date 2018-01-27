import React from 'react';
import styles from './fifthContainer.scss';

const FifthContainer = () =>
    <section className={styles.fifthContainer}>
        <div className={styles.innerContainer}>
            <div className={styles.title}>
                NEWS
            </div>
            <div className={styles.bigTitle}>
                최신 소식
            </div>

            <div className={styles.newsWrapper}>
                <div className={styles.newsItem}>
                    <a href="#" className={styles.newsLink}>
                        <div className={styles.newsHeader}>
                            Brainbox News
                        </div>

                        <div className={styles.newsTitle}>
                            ‘불량품 잡는 인공지능’, 기존 머신비전 검사의 한계를 뛰어넘은 ‘수아킷’ 첫 선
                        </div>
                    </a>
                </div>

                <div className={styles.newsItem}>
                    <a href="#" className={styles.newsLink}>
                        <div className={styles.newsHeader}>
                            파이낸셜 뉴스
                        </div>

                        <div className={styles.newsTitle}>
                            한국 스타트업, 美 투자자 사로잡다... 현지 투자유치설명회(IR) 개최
                        </div>
                    </a>
                </div>

                <div className={styles.newsItem}>
                    <a href="#" className={styles.newsLink}>
                        <div className={styles.newsHeader}>
                            한경 비즈니스
                        </div>

                        <div className={styles.newsTitle}>
                            수아랩은 ‘개척자’다
                        </div>
                    </a>
                </div>
            </div>

            <a href="#" className={styles.readmoreBtn}>
                Read More
                <img src="https://d3rqapinkc8b8p.cloudfront.net/mainPage/combined-shape@2x.png" alt=""/>
            </a>
        </div>
    </section>

export default FifthContainer;

