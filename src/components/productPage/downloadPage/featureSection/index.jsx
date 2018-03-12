import React from "react";
import axios from "axios";

import styles from "./featureSection.scss";

class FeatureSection extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      featureList: [],
    };
    this.getLatestFeature = this.getLatestFeature.bind(this);
  }

  componentDidMount() {
    this.getLatestFeature();
  }

  render() {
    const { intl } = this.props;
    const { featureList } = this.state;

    return (
      <section className={styles.featureSection}>
        <div className={styles.innerContainer}>
          <div className={styles.line} />
          <div className={styles.title}>New Features</div>

          <div className={styles.contentWrapper}>
            {featureList.map(elem => (
              <div className={styles.featureItem}>
                <div className={styles.featureTitle}>{intl.locale === "ko" ? elem.title : elem.en_title}</div>
                <div className={styles.featureImage}>
                  <img src={elem.image} alt="" />
                </div>
                <div className={styles.featureContent}>{intl.locale === "ko" ? elem.content : elem.en_content}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  getLatestFeature() {
    axios.get("/api/feature").then(res => {
      this.setState({
        featureList: res.data.items,
      });
    });
  }
}

export default FeatureSection;
