import React from "react";

import Icon from "../../../commons/icons";

import styles from "./applySection.scss";

const ApplySection = () => (
  <section className={styles.applySection}>
    <div className={styles.innerContainer}>
      <div className={styles.line} />
      <div className={styles.subTitle}>SuaKIT 적용 Process</div>
      <div className={styles.content}>다음과 같은 절차를 통해 SuaKIT을 적용할 수 있습니다.</div>

      <div className={styles.processWrapper}>
        <div className={styles.leftWrapper}>
          <div className={styles.processItem}>
            <div className={styles.contentWrapper}>
              <div className={styles.itemTitle}>이미지 취득</div>
              <div className={styles.itemContent}>기존에 설치된 머신 비전 장비를 통해 이미지를 취득합니다.</div>
            </div>
            <div className={styles.imgWrapper}>
              <img src="https://d2ivzy5c3eic08.cloudfront.net/productPage/process-1@2x.png" alt="" />
            </div>
          </div>

          <img
            src="https://d2ivzy5c3eic08.cloudfront.net/productPage/arrow-point-to-down@2x.png"
            className={styles.downArrow}
            alt=""
          />

          <div className={styles.processItem}>
            <div className={styles.contentWrapper}>
              <div className={styles.itemTitle}>딥러닝 모델 생성</div>
              <div className={styles.itemContent}>
                취득한 이미지를 바탕으로 딥러닝 모델을 생성합니다. SUALAB은 딥러닝 모델 학습 및 테스트를 수행할 수 있는
                기본 툴킷 라이브러리를 제공합니다.
              </div>
            </div>
            <div className={styles.imgWrapper}>
              <img src="https://d2ivzy5c3eic08.cloudfront.net/productPage/process-2@2x.png" alt="" />
            </div>
          </div>

          <img
            src="https://d2ivzy5c3eic08.cloudfront.net/productPage/arrow-point-to-down@2x.png"
            className={styles.downArrow}
            alt=""
          />

          <div className={styles.processItem}>
            <div className={styles.contentWrapper}>
              <div className={styles.itemTitle}>데이터</div>
              <div className={styles.itemContent}>
                도출된 데이터를 중심으로 목표 수치를 달성 할 수 있도록 분석 후 모델 재생성 과정을 반복합니다.
              </div>
            </div>
            <div className={styles.imgWrapper}>
              <img src="https://d2ivzy5c3eic08.cloudfront.net/productPage/process-3@2x.png" alt="" />
            </div>
          </div>

          <img
            src="https://d2ivzy5c3eic08.cloudfront.net/productPage/arrow-point-to-down@2x.png"
            className={styles.downArrow}
            alt=""
          />

          <div className={styles.processItem}>
            <div className={styles.contentWrapper}>
              <div className={styles.itemTitle}>라인 적용</div>
              <div className={styles.itemContent}>완성된 모델을 라인에 적용합니다.</div>
            </div>
            <div className={styles.imgWrapper}>
              <img src="https://d2ivzy5c3eic08.cloudfront.net/productPage/process-4@2x.png" alt="" />
            </div>
          </div>
        </div>

        <div className={styles.rightWrapper}>
          <div className={styles.arrowWrapper}>
            <Icon icon="PRODUCT_RIGHT_ARROW" />
            <div className={styles.blank} />
            <Icon icon="PRODUCT_LEFT_ARROW" />
          </div>
          <div className={styles.processItem}>
            <div className={styles.imgWrapper}>
              <img src="https://d2ivzy5c3eic08.cloudfront.net/productPage/process-5@2x.png" alt="" />
            </div>
            <div className={styles.contentWrapper}>
              <div className={styles.itemTitle}>맞춤형 솔루션이 필요한 경우</div>
              <div className={styles.itemContent}>
                딥러닝 알고리즘에 익숙하지 않은 고객을 위해 SUALAB은 응용개발팀을 운영하여 맞춤형 모델 생성, <br />현장
                기술 지원 등 유형별 솔루션을 제공하고 있습니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ApplySection;
