import React from "react";

import styles from "./featureSection.scss";

class FeatureSection extends React.PureComponent {
  render() {
    const { intl } = this.props;
    return <section className={styles.featureSection}>featureSection</section>;
  }
}

export default FeatureSection;
