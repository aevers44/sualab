import React from "react";

import styles from "./documentSection.scss";

class DocumentSection extends React.PureComponent {
  render() {
    const { intl } = this.props;
    return <section className={styles.documentSection}>documentSection</section>;
  }
}

export default DocumentSection;
