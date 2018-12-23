import React from "react";
import axios from "axios";

import styles from "./suakitDetailSection.scss";

import Features from "./Features";
import Release from "./Release";

class SuakitDetailSection extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      companyName: props.companyName,
      companyKey: props.companyKey,
      suakitInfo: null
    };
  }

  componentDidMount() {
    this.getSuakitInfo(this.props.suakitId);
  }

  
  render() {
    const { intl } = this.props;
    const { suakitInfo, id } = this.state;
    
    return (
      <div>
        {suakitInfo !== null ? (
          <section className={styles.innerContainer}>
            <div className={styles.contentWrapper}>
              <div className={styles.leftWrapper}>
                {suakitInfo.latest ? (
                  <div className={styles.tag}>Lastest Update</div>
                ) : (
                  ""
                )}
                <div className={styles.suakitName}>{suakitInfo.name}</div>
                <div className={styles.suakitInfo}>
                  RELEASED {suakitInfo.date}
                </div>
              </div>

              <div className={styles.rightWrapper}>
                <a
                  href="#"
                  onClick={ev => this.getDownloadLink(ev, suakitInfo.link)}
                  className={styles.downloadBtn}
                  rel="noopener noreferrer"
                >
                  Download
                </a>
              </div>
            </div>
            
            <Features suakitId={this.props.suakitId} intl={intl}/>
            <Release suakitId={this.props.suakitId} intl={intl}/>

            <div className={styles.listBtn} onClick={this.props.onBack}>
              List
            </div>
          </section>
        ) : (
          <div />
        )}
      </div>
    )
  }

  getSuakitInfo(id) {
    axios.get(`/api/download/suakit/${id}`).then(res => {
      const data = res.data;
      this.setState({
        suakitInfo: data[0]
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

export default SuakitDetailSection;