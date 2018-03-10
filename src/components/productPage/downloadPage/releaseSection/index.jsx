import React from "react";

import styles from "./releaseSection.scss";

class ReleaseSection extends React.PureComponent {
  render() {
    const { intl } = this.props;
    return (
      <section className={styles.releaseSection}>
        <div className={styles.innerContainer}>
          <div className={styles.line} />
          <div className={styles.title}>Release Note</div>

          <div className={styles.releaseTable}>
            <div className={styles.tableTitle}>Basics</div>
            <div className={styles.tableItem}>
              <span className={styles.version}>v2.0.2</span>
              <span className={styles.date}>01/Mar/2018</span>
              <a href="#" className={styles.content}>
                상세 내용
              </a>
            </div>
            <div className={styles.tableItem}>
              <span className={styles.version}>v2.0.2</span>
              <span className={styles.date}>01/Mar/2018</span>
              <a href="#" className={styles.content}>
                상세 내용
              </a>
            </div>
            <div className={styles.tableItem}>
              <span className={styles.version}>v2.0.2</span>
              <span className={styles.date}>01/Mar/2018</span>
              <a href="#" className={styles.content}>
                상세 내용
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ReleaseSection;
