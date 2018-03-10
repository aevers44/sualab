import React from "react";

import styles from "./featureSection.scss";

class FeatureSection extends React.PureComponent {
  render() {
    const { intl } = this.props;
    return (
      <section className={styles.featureSection}>
        <div className={styles.innerContainer}>
          <div className={styles.line} />
          <div className={styles.title}>New Features</div>

          <div className={styles.contentWrapper}>
            <div className={styles.featureItem}>
              <div className={styles.featureTitle}>Detection모드 등 딥러닝 모델 추가</div>
              <div className={styles.featureImage}>
                <img src="http://placehold.it/800x400" alt="" />
              </div>
              <div className={styles.featureContent}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellendus consectetur ab libero
                obcaecati ducimus nemo enim temporibus in alias. Qui, praesentium dignissimos et voluptatum dolor
                obcaecati neque esse quidem.<br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad corrupti corporis unde
                exercitationem quia, libero ipsum possimus, dignissimos sed dicta omnis voluptatum ipsam ducimus aliquid
                tempora dolores quibusdam qui.
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureTitle}>Detection모드 등 딥러닝 모델 추가</div>
              <div className={styles.featureImage}>
                <img src="http://placehold.it/800x400" alt="" />
              </div>
              <div className={styles.featureContent}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellendus consectetur ab libero
                obcaecati ducimus nemo enim temporibus in alias. Qui, praesentium dignissimos et voluptatum dolor
                obcaecati neque esse quidem.<br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad corrupti corporis unde
                exercitationem quia, libero ipsum possimus, dignissimos sed dicta omnis voluptatum ipsam ducimus aliquid
                tempora dolores quibusdam qui.
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FeatureSection;
