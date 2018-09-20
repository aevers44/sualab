import React from "react";

import styles from "./thirdSection.scss";
import Icon from "../../../commons/icons";

const ThirdSection = ({ intl }) => (
  <section className={styles.thirdSection}>
    <div className={styles.innerContainer}>
      <div className={styles.line} />
      <div className={styles.subTitle}>
        {intl.formatMessage({ id: "SUAKIT.THIRD.subTitle" })}
      </div>
      <div className={styles.subContent}>
        {intl.formatMessage({ id: "SUAKIT.THIRD.subContent" })}
      </div>

      <div className={`${styles.compareTable} ${styles.desktopTableWrapper}`}>
        <header className={styles.tableHeader}>
          <span className={styles.headItem}>
            {intl.formatMessage({ id: "SUAKIT.THIRD.headItem" })}
          </span>
          <span className={styles.vsItem}>VS</span>
          <span className={styles.headItem}>SuaKIT</span>
        </header>

        <div className={styles.tableRow}>
          <div className={styles.rowItem}>
            <div className={styles.imgWrapper}>
              <img
                src="https://d2ivzy5c3eic08.cloudfront.net/productPage/old-machine-vision-1@2x.png"
                alt=""
              />
            </div>
            <div className={styles.contentWrapper}>
              <p className={styles.title}>
                {intl.formatMessage({ id: "SUAKIT.THIRD.itemTitle_1" })}
              </p>
              <p className={styles.content}>
                {intl.formatMessage({ id: "SUAKIT.THIRD.itemContent_1" })}
              </p>
            </div>
          </div>

          <div className={styles.rowItem}>
            <div className={styles.imgWrapper}>
              <img
                src="https://d2ivzy5c3eic08.cloudfront.net/productPage/suakit-1@2x.png"
                alt=""
              />
            </div>
            <div className={styles.contentWrapper}>
              <p className={styles.title}>
                {intl.formatMessage({ id: "SUAKIT.THIRD.itemTitle_2" })}
              </p>
              <p className={styles.content}>
                {intl.formatMessage({ id: "SUAKIT.THIRD.itemContent_2" })}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.tableRow}>
          <div className={styles.rowItem}>
            <div className={styles.imgWrapper}>
              <img
                src="https://d2ivzy5c3eic08.cloudfront.net/productPage/old-machine-vision-2@2x.png"
                alt=""
              />
            </div>
            <div className={styles.contentWrapper}>
              <p className={styles.title}>
                {intl.formatMessage({ id: "SUAKIT.THIRD.itemTitle_3" })}
              </p>
              <p className={styles.content}>
                {intl.formatMessage({ id: "SUAKIT.THIRD.itemContent_3" })}
              </p>
            </div>
          </div>

          <div className={styles.rowItem}>
            <div className={styles.imgWrapper}>
              <img
                src="https://d2ivzy5c3eic08.cloudfront.net/productPage/suakit-2@2x.png"
                alt=""
              />
            </div>
            <div className={styles.contentWrapper}>
              <p className={styles.title}>
                {intl.formatMessage({ id: "SUAKIT.THIRD.itemTitle_4" })}
              </p>
              <p className={styles.content}>
                {intl.formatMessage({ id: "SUAKIT.THIRD.itemContent_4" })}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.tableRow}>
          <div className={styles.rowItem}>
            <div className={styles.imgWrapper}>
              <img
                src="https://d2ivzy5c3eic08.cloudfront.net/productPage/old-machine-vision-3@2x.png"
                alt=""
              />
            </div>
            <div className={styles.contentWrapper}>
              <p className={styles.title}>
                {intl.formatMessage({ id: "SUAKIT.THIRD.itemTitle_5" })}
              </p>
              <p className={styles.content}>
                {intl.formatMessage({ id: "SUAKIT.THIRD.itemContent_5" })}
              </p>
            </div>
          </div>

          <div className={styles.rowItem}>
            <div className={styles.imgWrapper}>
              <img
                src="https://d2ivzy5c3eic08.cloudfront.net/productPage/suakit-3@2x.png"
                alt=""
              />
            </div>
            <div className={styles.contentWrapper}>
              <p className={styles.title}>
                {intl.formatMessage({ id: "SUAKIT.THIRD.itemTitle_6" })}
              </p>
              <p className={styles.content}>
                {intl.formatMessage({ id: "SUAKIT.THIRD.itemContent_6" })}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mobileTableWrapper}>
        <div className={styles.compareTable}>
          <header className={styles.tableHeader}>
            <span className={styles.headItem}>
              {intl.formatMessage({ id: "SUAKIT.THIRD.headItem" })}
            </span>
          </header>

          <div className={styles.tableRow}>
            <div className={styles.rowItem}>
              <div className={styles.contentWrapper}>
                <p className={styles.title}>
                  {intl.formatMessage({ id: "SUAKIT.THIRD.itemTitle_1" })}
                </p>
                <p className={styles.content}>
                  {intl.formatMessage({ id: "SUAKIT.THIRD.itemContent_1" })}
                </p>
              </div>
            </div>
          </div>

          <div className={styles.tableRow}>
            <div className={styles.rowItem}>
              <div className={styles.contentWrapper}>
                <p className={styles.title}>
                  {intl.formatMessage({ id: "SUAKIT.THIRD.itemTitle_3" })}
                </p>
                <p className={styles.content}>
                  {intl.formatMessage({ id: "SUAKIT.THIRD.itemContent_3" })}
                </p>
              </div>
            </div>
          </div>

          <div className={styles.tableRow}>
            <div className={styles.rowItem}>
              <div className={styles.contentWrapper}>
                <p className={styles.title}>
                  {intl.formatMessage({ id: "SUAKIT.THIRD.itemTitle_5" })}
                </p>
                <p className={styles.content}>
                  {intl.formatMessage({ id: "SUAKIT.THIRD.itemContent_5" })}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.downIcon}>
          <Icon icon="SUAKIT_ARROW_DOWN" />
        </div>
        <div className={styles.compareTable}>
          <header className={styles.tableHeader}>
            <span className={styles.headItem}>SuaKIT</span>
          </header>

          <div className={styles.tableRow}>
            <div className={styles.rowItem}>
              <div className={styles.contentWrapper}>
                <p className={styles.title}>
                  {intl.formatMessage({ id: "SUAKIT.THIRD.itemTitle_2" })}
                </p>
                <p className={styles.content}>
                  {intl.formatMessage({ id: "SUAKIT.THIRD.itemContent_2" })}
                </p>
              </div>
            </div>
          </div>

          <div className={styles.tableRow}>
            <div className={styles.rowItem}>
              <div className={styles.contentWrapper}>
                <p className={styles.title}>
                  {intl.formatMessage({ id: "SUAKIT.THIRD.itemTitle_4" })}
                </p>
                <p className={styles.content}>
                  {intl.formatMessage({ id: "SUAKIT.THIRD.itemContent_4" })}
                </p>
              </div>
            </div>
          </div>

          <div className={styles.tableRow}>
            <div className={styles.rowItem}>
              <div className={styles.contentWrapper}>
                <p className={styles.title}>
                  {intl.formatMessage({ id: "SUAKIT.THIRD.itemTitle_6" })}
                </p>
                <p className={styles.content}>
                  {intl.formatMessage({ id: "SUAKIT.THIRD.itemContent_6" })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ThirdSection;
