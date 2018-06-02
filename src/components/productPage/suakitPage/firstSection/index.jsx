import React from "react";

import Icon from "../../../commons/icons";
import styles from "./firstSection.scss";

const FirstSection = ({ intl }) => (
  <section className={styles.firstSection}>
    <div className={styles.innerContainer}>
      <div className={styles.titleWrapper}>
        <div className={styles.lineAndTitle}>
          <div className={styles.line} />
          <div className={styles.title}>SuaKIT</div>
        </div>
        <div className={styles.content}>{intl.formatMessage({ id: "SUAKIT.FIRST.content" })}</div>
      </div>

      <div className={styles.subTitle}>{intl.formatMessage({ id: "SUAKIT.FIRST.subTitle_1" })}</div>
      <div className={`${styles.itemWrapper} ${styles.methodItemWrapper}`}>
        <div className={styles.itemCard}>
          <div className={styles.imgWrapper}>
            <img src="https://d2ivzy5c3eic08.cloudfront.net/productPage/training-methods-1@2x.png" />
          </div>
          <div className={styles.cardTitle}>Single Image Analysis</div>
          <div className={styles.cardContent}>{intl.formatMessage({ id: "SUAKIT.FIRST.methodContent_1" })}</div>
        </div>
        <div className={styles.itemCard}>
          <div className={styles.imgWrapper}>
            <img src="https://d2ivzy5c3eic08.cloudfront.net/productPage/training-methods-2@2x.png" />
          </div>
          <div className={styles.cardTitle}>Image Comparison</div>
          <div className={styles.cardContent}>{intl.formatMessage({ id: "SUAKIT.FIRST.methodContent_2" })}</div>
        </div>

        <div className={styles.itemCard}>
          <div className={styles.imgWrapper}>
            <img src="https://d2ivzy5c3eic08.cloudfront.net/productPage/training-methods-3@2x.png" />
          </div>
          <div className={styles.cardTitle}>Multi Image Analysis</div>
          <div className={styles.cardContent}>{intl.formatMessage({ id: "SUAKIT.FIRST.methodContent_3" })}</div>
        </div>

        <div className={styles.itemCard}>
          <div className={styles.imgWrapper}>
            {intl.locale === "ko" ? (
              <img src="https://d2ivzy5c3eic08.cloudfront.net/productPage/training-methods-4@2x.png" />
            ) : (
                <img src="https://d2ivzy5c3eic08.cloudfront.net/productPage/training-methods-4-en@2x.png" />
              )}
          </div>
          <div className={styles.cardTitle}>One Class Learning</div>
          <div className={styles.cardContent}>{intl.formatMessage({ id: "SUAKIT.FIRST.methodContent_4" })}</div>
        </div>
      </div>

      <div className={styles.subTitle}>{intl.formatMessage({ id: "SUAKIT.FIRST.subTitle_2" })}</div>
      <div className={styles.itemWrapper}>
        <div className={styles.itemCard}>
          <div className={styles.svgWrapper}>
            <Icon icon="SUAKIT_FEATURE_2" />
          </div>
          <div className={styles.cardTitle}>Segmentation</div>
          <div className={styles.cardContent}>
            {intl.formatMessage({ id: "SUAKIT.FIRST.cardContent_1" })}
            <p className={styles.useCase}>{intl.formatMessage({ id: "SUAKIT.FIRST.useCase_1" })}</p>
          </div>
        </div>

        <div className={styles.itemCard}>
          <div className={styles.svgWrapper}>
            <Icon icon="SUAKIT_FEATURE_3" />
          </div>
          <div className={styles.cardTitle}>Classification</div>
          <div className={styles.cardContent}>
            {intl.formatMessage({ id: "SUAKIT.FIRST.cardContent_2" })}
            <p className={styles.useCase}>{intl.formatMessage({ id: "SUAKIT.FIRST.useCase_1" })}</p>
          </div>
        </div>

        <div className={styles.itemCard}>
          <div className={styles.svgWrapper}>
            <Icon icon="SUAKIT_FEATURE_1" />
          </div>
          <div className={styles.cardTitle}>Detection</div>
          <div className={styles.cardContent}>
            {intl.formatMessage({ id: "SUAKIT.FIRST.cardContent_3" })}
            <p className={styles.useCase}>{intl.formatMessage({ id: "SUAKIT.FIRST.useCase_1" })}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FirstSection;
