import React from "react";
import axios from "axios";

import styles from "./sixthSection.scss";

class SixthSection extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      koBrochure: "",
      enBrochure: "",
      brochureImage: "",
    };

    this.getBrochureInfo = this.getBrochureInfo.bind(this);
  }

  componentWillMount() {
    this.getBrochureInfo();
  }

  render() {
    const { intl } = this.props;
    const { koBrochure, enBrochure, brochureImage } = this.state;

    return (
      <section className={styles.sixthSection}>
        <div className={styles.innerContainer}>
          <div className={styles.line} />
          <div className={styles.subTitle}>{intl.formatMessage({ id: "SUAKIT.SIXTH.subTitle" })}</div>

          <div className={styles.brochureWrapper}>
            <img src={brochureImage} alt="" />
            <div className={styles.buttonWrapper}>
              <a target="_blank" href={koBrochure} className={styles.downloadBtn}>
                KOREAN
              </a>
              <a target="_blank" href={enBrochure} className={styles.downloadBtn}>
                ENGLISH
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  getBrochureInfo() {
    axios.get("/api/brochure").then(res => {
      this.setState({
        koBrochure: res.data.ko_brochure,
        enBrochure: res.data.en_brochure,
        brochureImage: res.data.image,
      });
    });
  }
}

export default SixthSection;
