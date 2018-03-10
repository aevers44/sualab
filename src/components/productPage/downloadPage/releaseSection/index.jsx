import React from "react";

import styles from "./releaseSection.scss";

class ReleaseSection extends React.PureComponent {
  render() {
    const { intl } = this.props;
    return <section className={styles.releaseSection}>releaseSection</section>;
  }
}

export default ReleaseSection;
