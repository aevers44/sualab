import React from "react";
import { injectIntl } from "react-intl";

import TitleSection from "../../commons/titleSection";
import OfficeMapComponent from "./googleMap";
import styles from "./officePage.scss";

const OfficePage = ({ intl }) => (
  <section className={styles.officePage}>
    <TitleSection
      subTitle="SUALAB OFFICE"
      title={intl.formatMessage({ id: "OFFICE.title" })}
      bgImage="https://d2ivzy5c3eic08.cloudfront.net/contactPage/sualab-office-background@2x.jpg"
    />

    <div className={styles.innerContainer}>
      <div className={styles.officeWrapper}>
        <div className={styles.titleWrapper}>
          <div className={styles.line} />
          <div className={styles.subTitle}>{intl.formatMessage({ id: "OFFICE.base" })}</div>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.mapWrapper}>
            <OfficeMapComponent
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,placess&key=AIzaSyC2l8AiJrv0oRBAQIKI60rgH16h93W98Ac"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `450px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>

          <div className={styles.infoLine}>
            <div className={styles.label}>{intl.formatMessage({ id: "OFFICE.address" })}</div>
            <div className={styles.info}>{intl.formatMessage({ id: "OFFICE.base.address" })}</div>
          </div>

          <div className={styles.infoLine}>
            <div className={styles.label}>{intl.formatMessage({ id: "OFFICE.phone" })}</div>
            <div className={styles.info}>
              <span>{intl.formatMessage({ id: "OFFICE.question.common" })} | </span>+82 2-6264-0366<br />
              <span>{intl.formatMessage({ id: "OFFICE.question.sales" })} | </span>+82 2-6264-0362
            </div>
          </div>

          <div className={styles.infoLine}>
            <div className={styles.label}>{intl.formatMessage({ id: "OFFICE.fax" })}</div>
            <div className={styles.info}>+82 2-6264-0363</div>
          </div>

          <div className={styles.infoLine}>
            <div className={styles.label}>{intl.formatMessage({ id: "OFFICE.email" })}</div>
            <div className={styles.info}>
              <span>{intl.formatMessage({ id: "OFFICE.question.recruit" })} | </span>
              <a href="mailto:recruit@sualab.com">recruit@sualab.com</a>
              <br />
              <span>{intl.formatMessage({ id: "OFFICE.question.sales" })} | </span>
              <a href="mailto:sales@sualab.com">sales@sualab.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.officeWrapper}>
        <div className={styles.titleWrapper}>
          <div className={styles.line} />
          <div className={styles.subTitle}>{intl.formatMessage({ id: "OFFICE.china" })}</div>
        </div>

        <div className={`${styles.contentWrapper} ${styles.blankBox}`}>
          <div className={styles.infoLine}>
            <div className={styles.label}>{intl.formatMessage({ id: "OFFICE.address" })}</div>
            <div className={styles.info}>
              4-B801, Creative Industrial Park, 328 Xinghu Street, Suzhou Industrial Park
            </div>
          </div>

          <div className={styles.infoLine}>
            <div className={styles.label}>{intl.formatMessage({ id: "OFFICE.phone" })}</div>
            <div className={styles.info}>
              <span>{intl.formatMessage({ id: "OFFICE.phone.represent" })} | </span>+86 0512 62650852
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default injectIntl(OfficePage);
