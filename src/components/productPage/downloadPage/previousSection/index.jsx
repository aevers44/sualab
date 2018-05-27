import React from "react";
import axios from "axios";

import styles from "./previousSection.scss";

class PreviousSection extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      companyName: props.companyName,
      companyKey: props.companyKey,

      previousSuakit: [],
    };

    this.getPreviousVersion = this.getPreviousVersion.bind(this);
    this.getDownloadLink = this.getDownloadLink.bind(this);
  }

  componentWillMount() {
    this.getPreviousVersion();
  }

  render() {
    const { previousSuakit } = this.state;
    return (
      <section className={styles.previousSection}>
        <div className={styles.innerContainer}>
          {previousSuakit.map((elem, idx) => (
            <div className={styles.contentWrapper} key={idx}>
              <div className={styles.leftWrapper}>
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
        previousSuakit: data.slice(1),
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
}

export default PreviousSection;
