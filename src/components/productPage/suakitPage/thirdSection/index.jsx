import React from "react";

import styles from "./thirdSection.scss";

const ThirdSection = () => (
  <section className={styles.thirdSection}>
    <div className={styles.innerContainer}>
      <div className={styles.line} />
      <div className={styles.subTitle}>기존 머신비전 검사 vs SuaKIT</div>
      <div className={styles.subContent}>
        SuaKIT의 딥러닝 알고리즘을 통해 전통적인 머신비전 검사방식의 한계를 극복할 수 있습니다.
      </div>

      <div className={styles.compareTable}>
        <header className={styles.tableHeader}>
          <span className={styles.headItem}>기존 머신비전 검사</span>
          <span className={styles.vsItem}>VS</span>
          <span className={styles.headItem}>SuaKIT</span>
        </header>

        <div className={styles.tableRow}>
          <div className={styles.rowItem}>
            <div className={styles.imgWrapper}>
              <img src="https://d3rqapinkc8b8p.cloudfront.net/productPage/old-machine-vision-1@2x.png" alt="" />
            </div>
            <div className={styles.contentWrapper}>
              <p className={styles.title}>복잡한 이미지 해석 불가</p>
              <p className={styles.content}>
                이미지가 불규칙하고 비정형인 경우, 불량의 특징값(Feature)을 수동으로 설정하기 어렵습니다. 따라서 아직
                사람의 육안검사에 의존하는 영역이 많습니다.
              </p>
            </div>
          </div>

          <div className={styles.rowItem}>
            <div className={styles.imgWrapper}>
              <img src="https://d3rqapinkc8b8p.cloudfront.net/productPage/suakit-1@2x.png" alt="" />
            </div>
            <div className={styles.contentWrapper}>
              <p className={styles.title}>딥러닝 기반 고정밀 이미지 해석 가능</p>
              <p className={styles.content}>
                SuaKIT은 이미지의 복잡도와 무관하게, 불량의 특징값(Feature)을 딥러닝 알고리즘을 통해 자동으로 학습해
                분석할 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.tableRow}>
          <div className={styles.rowItem}>
            <div className={styles.imgWrapper}>
              <img src="https://d3rqapinkc8b8p.cloudfront.net/productPage/old-machine-vision-2@2x.png" alt="" />
            </div>
            <div className={styles.contentWrapper}>
              <p className={styles.title}>낮은 정확도</p>
              <p className={styles.content}>
                기존 머신비전 검사의 경우, 불량의 특징값(Feature)을 정한 후에는 다음 기준 설정시까지 특징값이 바뀌지
                않기 때문에, 약간의 변형에도 취약하여 정확도가 낮습니다. 또한, 육안 검사의 경우 사람의 눈에 의존하기
                때문에 개인마다 다른 기준을 사용하기 쉽습니다.
              </p>
            </div>
          </div>

          <div className={styles.rowItem}>
            <div className={styles.imgWrapper}>
              <img src="https://d3rqapinkc8b8p.cloudfront.net/productPage/suakit-2@2x.png" alt="" />
            </div>
            <div className={styles.contentWrapper}>
              <p className={styles.title}>높은 정확도</p>
              <p className={styles.content}>
                딥러닝 알고리즘의 도입으로 제품의 변화에 유연히 대처할 뿐만 아니라, 제조업 분야의 다양한 납품실적을
                기반으로 제조업 특화 알고리즘 및 방법론 등을 활용하여 검사 정확도를 대폭 향상시켰습니다.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.tableRow}>
          <div className={styles.rowItem}>
            <div className={styles.imgWrapper}>
              <img src="https://d3rqapinkc8b8p.cloudfront.net/productPage/old-machine-vision-3@2x.png" alt="" />
            </div>
            <div className={styles.contentWrapper}>
              <p className={styles.title}>과다한 최적화 비용</p>
              <p className={styles.content}>
                제품 종류가 다양하고, 모델 교체가 잦은 경우 매번 최적화를 위한 과다한 프로그래밍 비용이 발생합니다.
              </p>
            </div>
          </div>

          <div className={styles.rowItem}>
            <div className={styles.imgWrapper}>
              <img src="https://d3rqapinkc8b8p.cloudfront.net/productPage/suakit-3@2x.png" alt="" />
            </div>
            <div className={styles.contentWrapper}>
              <p className={styles.title}>딥러닝 기반 자동 최적화</p>
              <p className={styles.content}>
                불량 유형별 사진만 있으면 손쉽게 자동으로 프로그램을 최적화할 수 있을 뿐만 아니라, 라인 적용 후 취득되는
                이미지로 추가 학습이 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ThirdSection;
