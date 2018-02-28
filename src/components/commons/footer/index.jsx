import React from "react";
import Modal from "react-modal";
import { injectIntl } from "react-intl";
import { Link } from "react-router-dom";

import styles from "./footer.scss";

import termsText from "../../productPage/supportPage/terms";

class Footer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };

    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  render() {
    const { intl } = this.props;
    const { showModal } = this.state;
    return (
      <footer className={styles.footer}>
        <div className={styles.innerContainer}>
          <div className={styles.leftSection}>
            <div className={styles.logoImage}>
              <img src="https://d2ivzy5c3eic08.cloudfront.net/mainPage/logo-mono%402x.png" alt="" />
            </div>

            <div className={styles.sualabInfo}>{intl.formatMessage({ id: "FOOTER.sualabInfo" })}</div>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.menuWrapper}>
              <Link className={styles.menuItem} to="/company">
                Company
              </Link>
              <Link className={styles.menuItem} to="/product">
                Product
              </Link>
              <Link className={styles.menuItem} to="/news">
                News
              </Link>
              <Link className={styles.menuItem} to="/career">
                Career
              </Link>
              <a className={styles.menuItem} href="http://research.sualab.com/" target="_blank">
                Blog
              </a>
              <Link className={styles.menuItem} to="/contact">
                Contact
              </Link>
            </div>

            <div className={styles.otherMenuWrapper}>
              <a className={styles.menuItem} href="https://www.facebook.com/sualab/" target="_blank">
                Facebook
              </a>
              <a className={styles.menuItem} href="#" onClick={this.handleOpenModal}>
                {intl.formatMessage({ id: "FOOTER.privateTerms" })}
              </a>
            </div>
          </div>
        </div>

        <Modal
          isOpen={showModal}
          bodyOpenClassName={styles.infoModalBody}
          className={styles.infoModal}
          overlayClassName={styles.infoModalOverlay}
          onRequestClose={this.handleCloseModal}
        >
          <div className={styles.modalContent}>{termsText}</div>
          <button onClick={this.handleCloseModal} className={styles.closeBtn}>
            {intl.formatMessage({ id: "SUPPORT.modal.ok" })}
          </button>
        </Modal>
      </footer>
    );
  }

  handleOpenModal(ev) {
    ev.preventDefault();
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
}

export default injectIntl(Footer);
