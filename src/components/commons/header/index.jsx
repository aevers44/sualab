import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";

import { Link, Route } from "react-router-dom";

import Navbar from "./navbar";
import styles from "./header.scss";

const Header = (props, context) => {
  const curFullPath = window.location.pathname || "/";
  const curPath = curFullPath.split("/")[1];
  let localeBtnPath = `/` + curPath;
  if (curFullPath.split("/")[2] !== undefined) {
    localeBtnPath += "/" + curFullPath.split("/")[2];
  }
  const { changeLocale } = context;
  const { locale } = props.intl;

  return (
    <header className={styles.header}>
      <div className={styles.innerContainer}>
        <div className={styles.logoImage}>
          <Link to="/">
            <img src="https://d2ivzy5c3eic08.cloudfront.net/mainPage/sualab-logo@2x.png" alt="" />
          </Link>
        </div>

        <div className={styles.menuWrapper}>
          <Link className={`${styles.menuItem} ${curPath === "company" ? styles.active : ""}`} to="/company">
            Company
          </Link>
          <Link className={`${styles.menuItem} ${curPath === "product" ? styles.active : ""}`} to="/product">
            Product
          </Link>
          <Link className={`${styles.menuItem} ${curPath === "news" ? styles.active : ""}`} to="/news">
            News
          </Link>
          <Link className={`${styles.menuItem} ${curPath === "career" ? styles.active : ""}`} to="/career">
            Career
          </Link>
          <a className={styles.menuItem} href="http://research.sualab.com/" target="_blank">
            Blog
          </a>
          <Link className={`${styles.menuItem} ${curPath === "contact" ? styles.active : ""}`} to="/contact">
            Contact
          </Link>
          <Link className={styles.menuItem} to={localeBtnPath} onClick={changeLocale}>
            <span className={`${locale === "ko" ? styles.activeLocale : ""}`}>KO </span>
            |
            <span className={`${locale === "en" ? styles.activeLocale : ""}`}> EN</span>
          </Link>
        </div>
      </div>

      <Route path="/:page/:subpage" component={Navbar} />
    </header>
  );
};

Header.contextTypes = {
  changeLocale: PropTypes.func,
};

export default injectIntl(Header);
