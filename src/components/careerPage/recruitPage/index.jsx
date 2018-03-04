import React from "react";
import { injectIntl } from "react-intl";

import TitleSection from "../../commons/titleSection";

import styles from "./recruitPage.scss";

const RecruitPage = ({ intl }) => {
  const replaceSpan = text => text.replace(/\_([^_]+)\_/g, `<span>$1</span>`);

  return (
    <section className={styles.recruitPage}>
      <TitleSection
        subTitle="RECRUIT"
        title={intl.formatMessage({ id: "RECRUIT.title" })}
        bgImage="https://d2ivzy5c3eic08.cloudfront.net/careerPage/background@2x.jpg"
      />
      <div className={styles.innerContainer}>
        <div className={styles.line} />
        <div className={styles.subTitle}>{intl.formatMessage({ id: "RECRUIT.LAB.subTitle" })}</div>
        <div className={styles.rndGroupWrapper}>
          <div
            className={styles.infoTextBox1}
            dangerouslySetInnerHTML={{ __html: replaceSpan(intl.formatMessage({ id: "RECRUIT.LAB.infoTextBox1" })) }}
          />

          <div className={styles.stepCircleWrapper}>
            <div className={styles.bgLine} />

            <div className={`${styles.stepCircle} ${styles.step1}`}>
              <span className={styles.step}>STEP 01</span>
              <span className={styles.text}>{intl.formatMessage({ id: "RECRUIT.LAB.step_1" })}</span>
            </div>
            <div className={`${styles.stepCircle} ${styles.step2}`}>
              <span className={styles.step}>STEP 02</span>
              <span className={styles.text}>{intl.formatMessage({ id: "RECRUIT.LAB.step_2" })}</span>
            </div>
            <div className={`${styles.stepCircle} ${styles.step3}`}>
              <span className={styles.step}>STEP 03</span>
              <span className={styles.text}>{intl.formatMessage({ id: "RECRUIT.LAB.step_3" })}</span>
            </div>
            <div className={`${styles.stepCircle} ${styles.step4}`}>
              <span className={styles.step}>STEP 04</span>
              <span className={styles.text}>{intl.formatMessage({ id: "RECRUIT.LAB.step_4" })}</span>

              <div
                className={styles.infoTextBox2}
                dangerouslySetInnerHTML={{
                  __html: replaceSpan(intl.formatMessage({ id: "RECRUIT.LAB.infoTextBox2" })),
                }}
              />
            </div>
            <div className={`${styles.stepCircle} ${styles.step5}`}>
              <span className={styles.step}>STEP 05</span>
              <span className={styles.text}>{intl.formatMessage({ id: "RECRUIT.LAB.step_5" })}</span>
            </div>
            <div className={`${styles.stepCircle} ${styles.step6}`}>
              <span className={styles.step}>STEP 06</span>
              <span className={styles.text}>{intl.formatMessage({ id: "RECRUIT.LAB.step_6" })}</span>
            </div>
          </div>
        </div>

        <div className={styles.line} />
        <div className={styles.subTitle}>{intl.formatMessage({ id: "RECRUIT.MANAGE.subTitle" })}</div>

        <div className={styles.stepCircleWrapper}>
          <div className={`${styles.stepCircle} ${styles.step3}`}>
            <span className={styles.step}>STEP 01</span>
            <span className={styles.text}>{intl.formatMessage({ id: "RECRUIT.MANAGE.step_1" })}</span>
          </div>
          <div className={`${styles.stepCircle} ${styles.step4}`}>
            <span className={styles.step}>STEP 02</span>
            <span className={styles.text}>{intl.formatMessage({ id: "RECRUIT.MANAGE.step_2" })}</span>
          </div>
          <div className={`${styles.stepCircle} ${styles.step5}`}>
            <span className={styles.step}>STEP 03</span>
            <span className={styles.text}>{intl.formatMessage({ id: "RECRUIT.MANAGE.step_3" })}</span>
          </div>
          <div className={`${styles.stepCircle} ${styles.step6}`}>
            <span className={styles.step}>STEP 04</span>
            <span className={styles.text}>{intl.formatMessage({ id: "RECRUIT.MANAGE.step_4" })}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default injectIntl(RecruitPage);
