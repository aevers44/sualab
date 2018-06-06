import React from "react";
import axios from "axios";

import styles from "./suakitSection.scss";

import FeatureSection from "./featureSection";

class SuakitSection extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      companyName: props.companyName,
      companyKey: props.companyKey,

      openFeatureIdx: 0,

      previousSuakit: [],
    };

    this.getPreviousVersion = this.getPreviousVersion.bind(this);
    this.getDownloadLink = this.getDownloadLink.bind(this);
    this.openFeatureDetailItem = this.openFeatureDetailItem.bind(this);
  }

  componentWillMount() {
    this.getPreviousVersion();
  }

  render() {
    const { previousSuakit, openFeatureIdx } = this.state;
    const { intl } = this.props;
    return (
      <section className={styles.previousSection}>
        <div className={styles.innerContainer}>
          {previousSuakit.map((elem, idx) => (
            <div key={idx}>
              <div className={styles.contentWrapper}>
                <div className={styles.leftWrapper}>
                  {idx === 0 ? <div className={styles.tag}>Last Update</div> : ""}
                  <div className={styles.suakitName}>{elem.name}</div>
                  <div className={styles.suakitInfo}>RELEASED {elem.date}</div>
                </div>

                <div className={styles.rightWrapper}>
                  <a
                    href="#"
                    onClick={ev => {
                      this.getDownloadLink(ev, elem.link);
                    }}
                    className={styles.downloadBtn}
                  >
                    Download
                  </a>
                  <a href="#" onClick={ev => this.openFeatureDetailItem(ev, idx)} className={styles.featureBtn}>
                    상세보기
                  </a>
                </div>
              </div>
              <div className={styles.detailFeature}>
                {openFeatureIdx === idx ? <FeatureSection intl={intl} name={elem.name} /> : ""}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  getPreviousVersion() {
    axios.get("/api/download/previous-suakit").then(res => {
      const data = res.data;
      this.setState({
        previousSuakit: data,
      });
    });
  }

  getDownloadLink(ev, link) {
    ev.preventDefault();

    const formData = {};
    formData["name"] = this.state.companyName;
    formData["key"] = this.state.companyKey;
    formData["link"] = link;

    axios.post("/download", formData).then(res => {
      if (res.data.error) {
        alert(res.data.error);
      } else {
        window.open(res.data.url, "_blank");
      }
    });
  }

  openFeatureDetailItem(ev, idx) {
    ev.preventDefault();

    const { openFeatureIdx } = this.state;
    if (openFeatureIdx !== idx) {
      this.setState({
        openFeatureIdx: idx,
      });
    } else {
      this.setState({
        openFeatureIdx: -1,
      });
    }
  }
}

export default SuakitSection;
