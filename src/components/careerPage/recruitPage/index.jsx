import React from "react";

import TitleSection from "../../commons/titleSection";

import styles from "./recruitPage.scss";

const RecruitPage = () => (
  <section className={styles.recruitPage}>
    <TitleSection
      subTitle="RECRUIT"
      title="함께 *즐겁게* 일할 *최고의 인재*를 기다립니다"
      bgImage="https://d3rqapinkc8b8p.cloudfront.net/careerPage/background@2x.jpg"
    />
    <div className={styles.innerContainer}>
      <div className={styles.line} />
      <div className={styles.subTitle}>연구소</div>
      <div className={styles.rndGroupWrapper}>
        <div className={styles.infoTextBox1}>
          연구 인력 채용은 각 직무 별로 상이 할 수 있으니, <br />
          자세한 내용은 <span className={styles.highlight}>채용공고</span>를 통해 확인 바랍니다.
        </div>

        <div className={styles.stepCircleWrapper}>
          <div className={`${styles.stepCircle} ${styles.step1}`}>
            <span className={styles.step}>STEP 01</span>
            <span className={styles.text}>서류 심사</span>
          </div>
          <div className={`${styles.stepCircle} ${styles.step2}`}>
            <span className={styles.step}>STEP 02</span>
            <span className={styles.text}>전화 면접</span>
          </div>
          <div className={`${styles.stepCircle} ${styles.step3}`}>
            <span className={styles.step}>STEP 03</span>
            <span className={styles.text}>1차 면접</span>
          </div>
          <div className={`${styles.stepCircle} ${styles.step4}`}>
            <span className={styles.step}>STEP 04</span>
            <span className={styles.text}>프로젝트 과제</span>

            <div className={styles.infoTextBox2}>
              프로젝트 과제는 직무의 필요한 역량을 검증하기 위한 단계이며, <br />
              평가에 따라 2차 면접 진행 여부가 결정됩니다. <br />
              <span className={styles.red}>*해당 전형은 일부 직무에서만 진행됩니다.</span>
            </div>
          </div>
          <div className={`${styles.stepCircle} ${styles.step5}`}>
            <span className={styles.step}>STEP 05</span>
            <span className={styles.text}>2차 면접</span>
          </div>
          <div className={`${styles.stepCircle} ${styles.step6}`}>
            <span className={styles.step}>STEP 06</span>
            <span className={styles.text}>채용 확정</span>
          </div>

          <div className={styles.bgLine} />
        </div>
      </div>

      <div className={styles.line} />
      <div className={styles.subTitle}>영업본부 및 경영관리본부</div>

      <div className={styles.stepCircleWrapper}>
        <div className={`${styles.stepCircle} ${styles.step3}`}>
          <span className={styles.step}>STEP 01</span>
          <span className={styles.text}>서류 심사</span>
        </div>
        <div className={`${styles.stepCircle} ${styles.step4}`}>
          <span className={styles.step}>STEP 02</span>
          <span className={styles.text}>1차 면접</span>
        </div>
        <div className={`${styles.stepCircle} ${styles.step5}`}>
          <span className={styles.step}>STEP 03</span>
          <span className={styles.text}>2차 면접</span>
        </div>
        <div className={`${styles.stepCircle} ${styles.step6}`}>
          <span className={styles.step}>STEP 04</span>
          <span className={styles.text}>채용 확정</span>
        </div>
      </div>
    </div>
  </section>
);

export default RecruitPage;
