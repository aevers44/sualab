import React from "react";

import Icon from "../../../commons/icons";

import styles from "./applySection.scss";

const ApplySection = ({ intl }) => (
  <section className={styles.applySection}>
    <div className={styles.innerContainer}>
      <div className={styles.line} />
      <div className={styles.subTitle}>
        {intl.formatMessage({ id: "HOWTO.APPLY.subTitle" })}
      </div>
      <div className={styles.content}>
        {intl.formatMessage({ id: "HOWTO.APPLY.content" })}
      </div>

      <div className={styles.processWrapper}>
        <div className={styles.leftWrapper}>
          <div className={styles.processItem}>
            <div className={styles.contentWrapper}>
              <div className={styles.itemTitle}>
                {intl.formatMessage({ id: "HOWTO.APPLY.itemTitle_1" })}
              </div>
              <div className={styles.itemContent}>
                {intl.formatMessage({ id: "HOWTO.APPLY.itemContent_1" })}
              </div>
            </div>
            <div
              className={styles.imgWrapper}
              style={{
                backgroundImage: `url(https://d2ivzy5c3eic08.cloudfront.net/productPage/process-1@2x.png)`,
              }}
            />
          </div>

          <img
            src="https://d2ivzy5c3eic08.cloudfront.net/productPage/arrow-point-to-down@2x.png"
            className={styles.downArrow}
            alt=""
          />

          <div className={styles.processItem}>
            <div className={styles.contentWrapper}>
              <div className={styles.itemTitle}>
                {intl.formatMessage({ id: "HOWTO.APPLY.itemTitle_2" })}
              </div>
              <div className={styles.itemContent}>
                {intl.formatMessage({ id: "HOWTO.APPLY.itemContent_2" })}
              </div>
            </div>
            <div
              className={styles.imgWrapper}
              style={{
                backgroundImage: `url(https://d2ivzy5c3eic08.cloudfront.net/productPage/process-2@2x.png)`,
              }}
            />
          </div>

          <img
            src="https://d2ivzy5c3eic08.cloudfront.net/productPage/arrow-point-to-down@2x.png"
            className={styles.downArrow}
            alt=""
          />

          <div className={styles.processItem}>
            <div className={styles.contentWrapper}>
              <div className={styles.itemTitle}>
                {intl.formatMessage({ id: "HOWTO.APPLY.itemTitle_3" })}
              </div>
              <div className={styles.itemContent}>
                {intl.formatMessage({ id: "HOWTO.APPLY.itemContent_3" })}
              </div>
            </div>
            <div
              className={styles.imgWrapper}
              style={{
                backgroundImage: `url(https://d2ivzy5c3eic08.cloudfront.net/productPage/process-3@2x.png)`,
              }}
            />
          </div>

          <img
            src="https://d2ivzy5c3eic08.cloudfront.net/productPage/arrow-point-to-down@2x.png"
            className={styles.downArrow}
            alt=""
          />

          <div className={styles.processItem}>
            <div className={styles.contentWrapper}>
              <div className={styles.itemTitle}>
                {intl.formatMessage({ id: "HOWTO.APPLY.itemTitle_4" })}
              </div>
              <div className={styles.itemContent}>
                {intl.formatMessage({ id: "HOWTO.APPLY.itemContent_4" })}
              </div>
            </div>
            <div
              className={styles.imgWrapper}
              style={{
                backgroundImage: `url(https://d2ivzy5c3eic08.cloudfront.net/productPage/process-4@2x.png)`,
              }}
            />
          </div>
        </div>

        <div className={styles.rightWrapper}>
          <div className={styles.arrowWrapper}>
            <Icon icon="PRODUCT_RIGHT_ARROW" />
            <div className={styles.blank} />
            <Icon icon="PRODUCT_LEFT_ARROW" />
          </div>
          <div className={styles.processItem}>
            <div
              className={styles.imgWrapper}
              style={{
                backgroundImage: `url(https://d2ivzy5c3eic08.cloudfront.net/productPage/process-5@2x.png)`,
              }}
            />
            <div className={styles.contentWrapper}>
              <div className={styles.itemTitle}>
                {intl.formatMessage({ id: "HOWTO.APPLY.itemTitle_5" })}
              </div>
              <div className={styles.itemContent}>
                {intl.formatMessage({ id: "HOWTO.APPLY.itemContent_5" })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ApplySection;
