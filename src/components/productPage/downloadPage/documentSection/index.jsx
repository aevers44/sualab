import React from "react";

import styles from "./documentSection.scss";

class DocumentSection extends React.PureComponent {
  render() {
    const { intl } = this.props;
    return (
      <section className={styles.documentSection}>
        <div className={styles.innerContainer}>
          <div className={styles.line} />
          <div className={styles.title}>Documentation</div>

          <div className={styles.documentTable}>
            <div className={styles.tableTitle}>Basics</div>
            <div className={styles.tableItem}>
              <span className={styles.version}>v2.0.2</span>
              <span className={styles.documentName}>SuaKIT 사용 메뉴얼</span>
              <a href="#" className={styles.downBtn}>
                Download
              </a>
            </div>
            <div className={styles.tableItem}>
              <span className={styles.version}>v2.0.2</span>
              <span className={styles.documentName}>SuaKIT 사용 메뉴얼</span>
              <a href="#" className={styles.downBtn}>
                Download
              </a>
            </div>
          </div>

          <div className={styles.documentTable}>
            <div className={styles.tableTitle}>Basics</div>
            <div className={styles.tableItem}>
              <span className={styles.version}>v2.0.2</span>
              <span className={styles.documentName}>SuaKIT 사용 메뉴얼</span>
              <a href="#" className={styles.downBtn}>
                Download
              </a>
            </div>
            <div className={styles.tableItem}>
              <span className={styles.version}>v2.0.2</span>
              <span className={styles.documentName}>SuaKIT 사용 메뉴얼</span>
              <a href="#" className={styles.downBtn}>
                Download
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DocumentSection;
