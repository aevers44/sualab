import React from "react";
import axios from "axios";

import styles from "./documentSection.scss";

class DocumentSection extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      basicList: [],
      programmerList: [],
      noteList: [],
    };
    this.getDocumentList = this.getDocumentList.bind(this);
  }

  componentDidMount() {
    this.getDocumentList();
  }

  render() {
    const { intl } = this.props;
    const { basicList, programmerList, noteList } = this.state;

    return (
      <section className={styles.documentSection}>
        <div className={styles.innerContainer}>
          <div className={styles.line} />
          <div className={styles.title}>Documentation</div>

          <div className={styles.documentTable}>
            <div className={styles.tableTitle}>Basics</div>

            {basicList.map((elem, idx) => (
              <div className={styles.tableItem} key={idx}>
                <span className={styles.version}>{elem.version}</span>
                <span className={styles.documentName}>{intl.locale === "ko" ? elem.name : elem.en_name}</span>
                <a
                  target="_blank"
                  href={intl.locale === "ko" ? elem.link : elem.en_link || elem.link}
                  className={styles.downBtn}
                >
                  Download
                </a>
              </div>
            ))}
          </div>

          <div className={styles.documentTable}>
            <div className={styles.tableTitle}>For Programmers</div>

            {programmerList.map((elem, idx) => (
              <div className={styles.tableItem} key={idx}>
                <span className={styles.version}>{elem.version}</span>
                <span className={styles.documentName}>{intl.locale === "ko" ? elem.name : elem.en_name}</span>
                <a
                  target="_blank"
                  href={intl.locale === "ko" ? elem.link : elem.en_link || elem.link}
                  className={styles.downBtn}
                >
                  Download
                </a>
              </div>
            ))}
          </div>

          <div className={styles.documentTable}>
            <div className={styles.tableTitle}>Application Notes</div>

            {noteList.map((elem, idx) => (
              <div className={styles.tableItem} key={idx}>
                <span className={styles.version}>{elem.version}</span>
                <span className={styles.documentName}>{intl.locale === "ko" ? elem.name : elem.en_name}</span>
                <a
                  target="_blank"
                  href={intl.locale === "ko" ? elem.link : elem.en_link || elem.link}
                  className={styles.downBtn}
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  getDocumentList() {
    axios.get("/api/download/documentation").then(res => {
      const basicList = res.data.filter(item => item.type === "basics");
      const programmerList = res.data.filter(item => item.type === "for_programmers");
      const noteList = res.data.filter(item => item.type === "application_notes");
      this.setState({
        basicList: basicList,
        programmerList: programmerList,
        noteList: noteList,
      });
    });
  }
}

export default DocumentSection;
