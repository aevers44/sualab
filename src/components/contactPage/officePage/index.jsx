import React from "react";

import TitleSection from "../../commons/titleSection";
import OfficeMapComponent from "./googleMap";
import styles from "./officePage.scss";

const OfficePage = () => (
  <section className={styles.officePage}>
    <TitleSection
      subTitle="SUALAB OFFICE"
      title="SUALAB은 언제나 여러분을 향해 열려 있습니다"
      bgImage="https://d3rqapinkc8b8p.cloudfront.net/contactPage/sualab-office-background@2x.jpg"
    />

    <div className={styles.innerContainer}>
      <div className={styles.officeWrapper}>
        <div className={styles.titleWrapper}>
          <div className={styles.line} />
          <div className={styles.subTitle}>본사</div>
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
            <div className={styles.label}>주소</div>
            <div className={styles.info}>서울시 관악구 관악로1 서울대학교 연구공원 본관 511호</div>
          </div>

          <div className={styles.infoLine}>
            <div className={styles.label}>전화</div>
            <div className={styles.info}>
              <span>일반 문의 | </span>+82 2-6264-0366<br />
              <span>영업 문의 | </span>+82 2-6264-0362
            </div>
          </div>

          <div className={styles.infoLine}>
            <div className={styles.label}>팩스</div>
            <div className={styles.info}>+82 2-6264-0363</div>
          </div>

          <div className={styles.infoLine}>
            <div className={styles.label}>메일</div>
            <div className={styles.info}>
              <span>채용 문의 | </span>
              <a href="mailto:recruit@sualab.com">recruit@sualab.com</a>
              <br />
              <span>영업 문의 | </span>
              <a href="mailto:sales@sualab.com">sales@sualab.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.officeWrapper}>
        <div className={styles.titleWrapper}>
          <div className={styles.line} />
          <div className={styles.subTitle}>중국 법인</div>
        </div>

        <div className={`${styles.contentWrapper} ${styles.blankBox}`}>
          <div className={styles.infoLine}>
            <div className={styles.label}>주소</div>
            <div className={styles.info}>4-B801,Creative Industrial Park.328 Xinghu Street, Suzhou Industrial Park</div>
          </div>

          <div className={styles.infoLine}>
            <div className={styles.label}>전화</div>
            <div className={styles.info}>
              <span>대표 번호 | </span>+86 0512 62650852
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OfficePage;
