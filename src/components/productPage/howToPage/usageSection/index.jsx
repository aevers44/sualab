import React from "react";

import CardItem from "./cardItem";
import styles from "./usageSection.scss";

// card data list
import { segmentationList, classificationList, detectionList } from "./cardData";

const SEGMENTATION = 0,
  CLASSIFICATION = 1,
  DETECTION = 2;

class UsageSection extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      curTab: SEGMENTATION,
    };
    this.handleChangeTab = this.handleChangeTab.bind(this);
  }

  render() {
    const { curTab } = this.state;
    let cardList = segmentationList;
    if (curTab === CLASSIFICATION) {
      cardList = classificationList;
    } else if (curTab === DETECTION) {
      cardList = detectionList;
    }

    return (
      <section className={styles.usageSection}>
        <div className={styles.innerContainer}>
          <div className={styles.line} />
          <div className={styles.subTitle}>SuaKIT 사용 Process</div>
          <div className={styles.content}>
            직관적인 UI의 SuaKIT을 사용하면 누구나 쉽게 딥러닝 모델을 생성하고 테스트 할 수 있습니다.
          </div>
          <div className={styles.tabButtons}>
            <div
              onClick={() => this.handleChangeTab(SEGMENTATION)}
              className={`${styles.button} ${curTab === SEGMENTATION ? styles.active : ""}`}
            >
              Segmentaion
            </div>
            <div
              onClick={() => this.handleChangeTab(CLASSIFICATION)}
              className={`${styles.button} ${curTab === CLASSIFICATION ? styles.active : ""}`}
            >
              Classification
            </div>
            <div
              onClick={() => this.handleChangeTab(DETECTION)}
              className={`${styles.button} ${curTab === DETECTION ? styles.active : ""}`}
            >
              Detection
            </div>
          </div>
        </div>

        <div className={styles.tabSection}>
          <div className={styles.innerContainer}>{cardList.map(elem => <CardItem {...elem} />)}</div>
        </div>
      </section>
    );
  }

  handleChangeTab(tabNum) {
    this.setState({
      curTab: tabNum,
    });
  }
}

export default UsageSection;
