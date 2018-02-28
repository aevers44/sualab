import React from "react";
import { injectIntl } from "react-intl";
import { Link } from "react-router-dom";

import styles from "./footer.scss";

const Footer = ({ intl }) => (
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
          <Link className={styles.menuItem} to="/">
            {intl.formatMessage({ id: "FOOTER.privateTerms" })}
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default injectIntl(Footer);
