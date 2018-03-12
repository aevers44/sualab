import React from "react";
import axios from "axios";

import styles from "./releaseSection.scss";

import TableItem from "./tableItem";

class ReleaseSection extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      noteList: [],
    };
    this.getReleaseNotes = this.getReleaseNotes.bind(this);
  }

  componentDidMount() {
    this.getReleaseNotes();
  }

  render() {
    const { intl } = this.props;
    const { noteList } = this.state;

    return (
      <section className={styles.releaseSection}>
        <div className={styles.innerContainer}>
          <div className={styles.line} />
          <div className={styles.title}>Release Note</div>

          <div className={styles.releaseTable}>
            <div className={`${styles.tableTitle} ${styles.tableItem}`}>
              <span className={styles.version}>Version</span>
              <span className={styles.date}>{intl.formatMessage({ id: "DOWNLOAD.RELEASE.date" })}</span>
              <span className={styles.content}>
                <span className={styles.openBtn}>Release Note</span>
              </span>
            </div>

            {noteList.map(elem => <TableItem {...elem} intl={intl} />)}
          </div>
        </div>
      </section>
    );
  }

  getReleaseNotes() {
    axios.get("/api/download/release").then(res => {
      this.setState({
        noteList: res.data,
      });
    });
  }
}

export default ReleaseSection;
