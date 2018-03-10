import React from "react";

import styles from "./suakitSection.scss";

class SuakitSection extends React.PureComponent {
  render() {
    const { intl } = this.props;
    return (
      <section className={styles.suakitSection}>
        <div className={styles.innerContainer}>
          <div className={styles.contentWrapper}>
            <div className={styles.leftWrapper}>
              <div className={styles.tag}>Last Update</div>
              <div className={styles.suakitName}>SuaKIT v2.0</div>
              <div className={styles.suakitInfo}>RELEASED 5/Jan/2018</div>
            </div>

            <div className={styles.rightWrapper}>
              <a href="#" className={styles.downloadBtn}>
                Download
              </a>
            </div>
          </div>
          <div className={styles.underline} />
        </div>
      </section>
    );
  }
}

export default SuakitSection;
