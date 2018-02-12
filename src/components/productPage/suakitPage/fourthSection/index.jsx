import React from "react";

import styles from "./fourthSection.scss";

const FourthSection = () => (
  <section className={styles.fourthSection}>
    <div className={styles.innerContainer}>
      <div className={styles.line} />
      <div className={styles.subTitle}>Benefits</div>

      <div className={styles.contentWrapper}>
        <div className={styles.contentItem}>
          <div className={styles.imgWrapper}>
            <img src="https://d3rqapinkc8b8p.cloudfront.net/productPage/benefit-1@2x.png" alt="" />
          </div>
          <div className={styles.itemTitle}>검사 정확도 향상</div>
          <div className={styles.itemContent}>
            딥러닝 기반 검사 알고리즘을 통해 육안검사, 기존 머신비전 검사보다 높은 검사 정확도를 확보할 수 있습니다.
          </div>
        </div>
        <div className={styles.contentItem}>
          <div className={styles.imgWrapper}>
            <img src="https://d3rqapinkc8b8p.cloudfront.net/productPage/benefit-2@2x.png" alt="" />
          </div>
          <div className={styles.itemTitle}>인력 운영 효율화</div>
          <div className={styles.itemContent}>
            높은 정확도 기반으로 자동화 검사를 수행하기 때문에, 한 명의 관리 인력으로도 다수의 검사 장비를 관리할 수
            있습니다.
          </div>
        </div>
        <div className={styles.contentItem}>
          <div className={styles.imgWrapper}>
            <img src="https://d3rqapinkc8b8p.cloudfront.net/productPage/benefit-3@2x.png" alt="" />
          </div>
          <div className={styles.itemTitle}>최적화 비용 절감</div>
          <div className={styles.itemContent}>
            학습 과정이 빠르고 용이하여 알고리즘 최적화 과정을 손쉽게 단축시킬 수 있으며, 라인 적용 후 취득되는
            이미지들로 추가 학습이 가능하여 최적화 비용이 절감됩니다.
          </div>
        </div>

        <div className={styles.contentItem}>
          <div className={styles.imgWrapper}>
            <img src="https://d3rqapinkc8b8p.cloudfront.net/productPage/benefit-4@2x.png" alt="" />
          </div>
          <div className={styles.itemTitle}>극대화된 처리 속도</div>
          <div className={styles.itemContent}>
            CUDA, cuDNN 등 GPU 전용 처리언어를 활용하여 딥러닝 알고리즘을 구현하고 Multi-GPU, Multi-Threading 등을
            지원해 이미지 처리속도를 극대화 할 수 있습니다.
          </div>
        </div>
        <div className={styles.contentItem}>
          <div className={styles.imgWrapper}>
            <img src="https://d3rqapinkc8b8p.cloudfront.net/productPage/benefit-1@2x.png" alt="" />
          </div>
          <div className={styles.itemTitle}>높은 호환성</div>
          <div className={styles.itemContent}>
            C++, C# API 제공을 통해, 기존에 동일언어로 작업된 소프트웨어를 큰 변화없이 검사 알고리즘만 교체하여 사용할
            수 있습니다.
          </div>
        </div>
        <div className={styles.contentItem}>
          <div className={styles.imgWrapper}>
            <img src="https://d3rqapinkc8b8p.cloudfront.net/productPage/benefit-6@2x.png" alt="" />
          </div>
          <div className={styles.itemTitle}>사용자 친화적 UI</div>
          <div className={styles.itemContent}>
            직관적인 UI를 기반으로 최상의 UX를 제공하여 사용자 편의성을 극대화하였습니다.딥러닝 전문가가 아닌 사람도
            라벨링 툴부터 결과 출력까지 모든 검사 과정을 쉽게 진행할 수 있습니다.
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FourthSection;
