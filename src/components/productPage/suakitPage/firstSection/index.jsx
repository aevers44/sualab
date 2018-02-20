import React from "react";

import Icon from "../../../commons/icons";
import styles from "./firstSection.scss";

const FirstSection = () => (
  <section className={styles.firstSection}>
    <div className={styles.innerContainer}>
      <div className={styles.titleWrapper}>
        <div className={styles.lineAndTitle}>
          <div className={styles.line} />
          <div className={styles.title}>SuaKIT</div>
        </div>
        <div className={styles.content}>
          SuaKIT은 디스플레이, 태양광, PCB, 필름, 반도체 등 다양한 제조업 현장에서 사용할 수 있는 딥러닝 머신비전 검사
          소프트웨어입니다.
        </div>
      </div>

      <div className={styles.itemWrapper}>
        <div className={styles.itemCard}>
          <div className={styles.svgWrapper}>
            <Icon icon="SUAKIT_FEATURE_2" />
          </div>
          <div className={styles.cardTitle}>Segmentation</div>
          <div className={styles.cardContent}>
            <p>제조현장에서 발생하는 다양한 불량들을 이미지 분석을 통해 정확한 영역 형태로 검출해냅니다. </p>

            <p>
              디양한 표면 형태를 가지고 있는 태양광 패널, <br />카메라 렌즈 등에서 여러 불량 유형을 검출하고,<br />이를
              유형별로 정리할 수 있습니다.
            </p>
          </div>
        </div>

        <div className={styles.itemCard}>
          <div className={styles.svgWrapper}>
            <Icon icon="SUAKIT_FEATURE_3" />
          </div>
          <div className={styles.cardTitle}>Classification</div>
          <div className={styles.cardContent}>
            <p>
              정의한 Feature/Class에 맞춰<br />Image Set을 분류합니다.
            </p>

            <p>
              다양한 불량 유형을 갖는 디스플레이, 필름 등에서 <br />제품/불량 이미지를 취득한 뒤, 이를 분류하는데 <br />사용
              가능합니다.{" "}
            </p>
          </div>
        </div>

        <div className={styles.itemCard}>
          <div className={styles.svgWrapper}>
            <Icon icon="SUAKIT_FEATURE_1" />
          </div>
          <div className={styles.cardTitle}>Detection</div>
          <div className={styles.cardContent}>
            <p>
              정의한 Feature/Class에 맞춰 이미지 상에서<br />물체를 박스 형태로 검출합니다.
            </p>

            <p>
              기계/부품류 등의 제조 라인에서 <br />여러 물체가 촬영된 하나의 사진을 분석해 <br />각각의 물체를 검출해낼
              수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FirstSection;
