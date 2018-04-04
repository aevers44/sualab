import React from "react";
import axios from "axios";

import modal from "react-modal";

import styles from "./suakitSection.scss";

class SuakitSection extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      companyName: props.companyName,
      companyKey: props.companyKey,

      suakitName: "",
      suakitInfo: "",
      suakitLink: "",
    };

    this.getSuakitInfo = this.getSuakitInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getDownloadLink = this.getDownloadLink.bind(this);
  }

  componentDidMount() {
    this.getSuakitInfo();
  }

  render() {
    const { suakitName, suakitInfo, suakitLink } = this.state;
    const { intl } = this.props;

    return (
      <section className={styles.suakitSection}>
        <div className={styles.innerContainer}>
          <div className={styles.contentWrapper}>
            <div className={styles.leftWrapper}>
              <div className={styles.tag}>Last Update</div>
              <div className={styles.suakitName}>{suakitName}</div>
              <div className={styles.suakitInfo}>RELEASED {suakitInfo}</div>
            </div>

            <div className={styles.rightWrapper}>
              <a href="#" onClick={this.getDownloadLink} className={styles.downloadBtn}>
                Download
              </a>
            </div>
          </div>
          <div className={styles.underline} />
        </div>
      </section>
    );
  }

  getSuakitInfo() {
    axios.get("/api/download/suakit").then(res => {
      this.setState({
        suakitName: res.data.name,
        suakitInfo: res.data.date,
        suakitLink: res.data.link,
      });
    });
  }

  handleChange(ev, type) {
    const value = ev.target.value;
    this.setState({
      [type]: value,
    });
  }

  getDownloadLink(ev) {
    ev.preventDefault();

    const formData = {};
    formData["name"] = this.state.companyName;
    formData["key"] = this.state.companyKey;
    formData["link"] = this.state.suakitLink;

    axios.post("/download", formData).then(res => {
      if (res.data.error) {
        alert(res.data.error);
      } else {
        window.open(res.data.url, "_blank");
      }
    });
  }
}

export default SuakitSection;
