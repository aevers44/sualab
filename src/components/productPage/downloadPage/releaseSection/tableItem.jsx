import React from "react";

import styles from "./releaseSection.scss";

class TableItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.handleOpen = this.handleOpen.bind(this);
  }

  render() {
    const { intl } = this.props;
    const { version, date, content, en_content } = this.props;
    const { isOpen } = this.state;

    const printContent = intl.locale === "ko" ? content : en_content || content;

    return (
      <div className={styles.tableItem}>
        <span className={styles.version}>{version}</span>
        <span className={styles.date}>{date}</span>
        <div className={styles.content}>
          <a href="#" onClick={this.handleOpen} className={styles.openBtn}>
            {!isOpen
              ? intl.formatMessage({ id: "DOWNLOAD.RELEASE.detail" })
              : intl.formatMessage({ id: "DOWNLOAD.RELEASE.fold" })}
          </a>
          {isOpen ? (
            <div className={styles.releaseContentBox}>{printContent} </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }

  handleOpen(ev) {
    ev.preventDefault();
    const curOpen = this.state.isOpen;
    this.setState({
      isOpen: !curOpen,
    });
  }
}

export default TableItem;
