import React from "react";
import axios from "axios";

import styles from "./suakitSection.scss";

import FeatureSection from "./featureSection";

const PAGE_LIMIT = 10;
const LIST_ITEM_NUMBER = 10;

class SuakitSection extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      companyName: props.companyName,
      companyKey: props.companyKey,

      openFeatureIdx: 0,

      previousSuakit: [],
      suakitLength: 0,
      curPageNum: 1,
    };

    this.getPreviousVersion = this.getPreviousVersion.bind(this);
    this.getDownloadLink = this.getDownloadLink.bind(this);
    this.openFeatureDetailItem = this.openFeatureDetailItem.bind(this);
    this.openPage = this.openPage.bind(this);
  }

  componentWillMount() {
    this.getPreviousVersion();
  }

  render() {
    const { previousSuakit, openFeatureIdx, suakitLength, curPageNum } = this.state;
    const { intl } = this.props;

    const totalPageNum = Math.ceil(suakitLength / LIST_ITEM_NUMBER);
    const startPageNum = (Math.ceil(curPageNum / PAGE_LIMIT) - 1) * PAGE_LIMIT + 1;
    const endPageNum = Math.min((Math.ceil(curPageNum / PAGE_LIMIT) - 1) * PAGE_LIMIT + PAGE_LIMIT, totalPageNum);
    const pageArray = [];
    for (let idx = startPageNum; idx <= endPageNum; idx++) {
      pageArray.push(idx);
    }

    const suakitListShown = previousSuakit.slice((curPageNum - 1) * LIST_ITEM_NUMBER, curPageNum * LIST_ITEM_NUMBER);

    return (
      <section className={styles.previousSection}>
        <div className={styles.innerContainer}>
          {suakitListShown.map((elem, idx) => (
            <div key={idx}>
              <div className={`${styles.contentWrapper} ${idx === 0 ? styles.first : ""}`}>
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
                    {intl.formatMessage({ id: "DOWNLOAD.SUAKIT.detail" })}
                  </a>
                </div>
              </div>
              <div className={styles.detailFeature}>
                {openFeatureIdx === idx ? <FeatureSection intl={intl} name={elem.name} /> : ""}
              </div>
            </div>
          ))}

          <div className={styles.pageWrapper}>
            <a
              className={`${styles.pageLink} ${startPageNum > 1 ? "" : styles.disabled}`}
              href="#"
              onClick={ev => this.openPage(ev, startPageNum - 1)}
            >
              &lt;
            </a>
            {pageArray.map((elem, idx) => (
              <a
                className={`${styles.pageLink} ${elem == curPageNum ? styles.active : ""}`}
                href="#"
                onClick={ev => this.openPage(ev, elem)}
                key={idx}
              >
                {elem}
              </a>
            ))}
            <a
              className={`${styles.pageLink} ${endPageNum < totalPageNum ? "" : styles.disabled}`}
              href="#"
              onClick={ev => this.openPage(ev, endPageNum + 1)}
            >
              &gt;
            </a>
          </div>
        </div>
      </section>
    );
  }

  getPreviousVersion() {
    axios.get("/api/download/previous-suakit").then(res => {
      const data = res.data;
      this.setState({
        previousSuakit: data,
        suakitLength: data.length,
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

  openPage(ev, pageNum) {
    ev.preventDefault();
    this.setState({
      curPageNum: pageNum,
      openFeatureIdx: -1,
    });
  }
}

export default SuakitSection;
