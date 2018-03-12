import React from "react";
import axios from "axios";

import modal from "react-modal";

import styles from "./suakitSection.scss";
import Modal from "react-modal/lib/components/Modal";

class SuakitSection extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      companyName: "",
      companyKey: "",
    };

    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getDownloadLink = this.getDownloadLink.bind(this);
  }

  render() {
    const { modalOpen, companyName, companyKey } = this.state;
    const { intl } = this.props;
    return (
      <section className={styles.suakitSection}>
        <div className={styles.innerContainer}>
          <div className={styles.contentWrapper}>
            <div className={styles.leftWrapper}>
              <div className={styles.tag}>Last Update</div>
              <div className={styles.suakitName}>SuaKIT v2.0</div>
              <div className={styles.suakitInfo}>RELEASED 5/Jan/2018</div>
            </div>

            <div className={styles.rightWrapper}>
              <a href="#" onClick={this.handleOpenModal} className={styles.downloadBtn}>
                Download
              </a>
            </div>
          </div>
          <div className={styles.underline} />
        </div>

        <Modal
          isOpen={modalOpen}
          bodyOpenClassName={styles.infoModalBody}
          className={styles.infoModal}
          overlayClassName={styles.infoModalOverlay}
          onRequestClose={this.handleCloseModal}
        >
          <h2>SuaKIT Download</h2>
          <label htmlFor="companyName" className={styles.label}>
            회사명
          </label>
          <input
            type="text"
            className={styles.textForm}
            id="companyName"
            onChange={ev => this.handleChange(ev, "companyName")}
            value={this.state.companyName}
            name="companyName"
          />
          <label htmlFor="companyKey" className={styles.label}>
            인증코드
          </label>
          <input
            type="text"
            className={styles.textForm}
            id="companyKey"
            onChange={ev => this.handleChange(ev, "companyKey")}
            value={this.state.companyKey}
            name="companyKey"
          />
          <button onClick={this.getDownloadLink} className={`${styles.closeBtn} ${styles.submitBtn}`}>
            Download
          </button>
          <button onClick={this.handleCloseModal} className={styles.closeBtn}>
            Cancel
          </button>
        </Modal>
      </section>
    );
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

    axios.post("/download", formData).then(res => {
      if (res.data.error) {
        alert(res.data.error);
      } else {
        window.open(res.data.url, "_blank");
      }
    });
  }

  handleOpenModal(ev) {
    ev.preventDefault();
    this.setState({ modalOpen: true });
  }

  handleCloseModal() {
    this.setState({ modalOpen: false });
  }
}

export default SuakitSection;
