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
    const { intl } = this.props;
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
          <div className={styles.subTitle}>{intl.formatMessage({ id: "HOWTO.USAGE.subTitle" })}</div>
          <div className={styles.content}>{intl.formatMessage({ id: "HOWTO.USAGE.content" })}</div>
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
          <div className={styles.innerContainer}>
            {cardList.map((elem, idx) => <CardItem key={idx} {...elem} intl={intl} />)}
          </div>
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
