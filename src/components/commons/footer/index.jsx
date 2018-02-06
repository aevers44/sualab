import React from "react";
import { Link } from "react-router-dom";

import styles from "./footer.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.innerContainer}>
      <div className={styles.leftSection}>
        <div className={styles.logoImage}>
          <img src="https://d3rqapinkc8b8p.cloudfront.net/mainPage/logo-mono%402x.png" alt="" />
        </div>

        <div className={styles.sualabInfo}>
          사업자등록번호 : 220-88-55558 l 일반문의 : 02-6264-0366 | 영업문의 : 02-6264-0362 <br />
          대표이사 : 송기영 l 주소 : 서울시 관악구 관악로 1 서울대학교 연구공원 본관 511호<br />
          Copyright ⓒSualab. All Rights Reserved.
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.menuWrapper}>
          <Link className={styles.menuItem} to="/company">
            Company
          </Link>
          <Link className={styles.menuItem} to="/">
            Product
          </Link>
          <Link className={styles.menuItem} to="/news">
            News
          </Link>
          <Link className={styles.menuItem} to="/career">
            Career
          </Link>
          <Link className={styles.menuItem} to="/">
            Blog
          </Link>
          <Link className={styles.menuItem} to="/">
            Contact
          </Link>
        </div>

        <div className={styles.otherMenuWrapper}>
          <Link className={styles.menuItem} to="/">
            Facebook
          </Link>
          <Link className={styles.menuItem} to="/">
            Blog
          </Link>
          <Link className={styles.menuItem} to="/">
            개인정보처리방침
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
