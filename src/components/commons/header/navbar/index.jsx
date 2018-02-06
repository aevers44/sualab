import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.scss";

const marginList = {
  company: 275,
  news: 160,
  career: 120,
};

const linkItem = {
  company: [{ name: "About us", link: "about-us" }, { name: "People", link: "people" }],
  news: [{ name: "SUALAB in media", link: "media" }],
  career: [{ name: "채용 절차", link: "recruit" }],
};

const makeLinks = (curPath, subPath) => {
  let result = [];

  for (let idx in linkItem[curPath]) {
    const item = linkItem[curPath][idx];

    result.push(
      <Link
        key={item.link}
        className={`${styles.linkItem} ${subPath === item.link ? styles.active : ""}`}
        to={item.link}
      >
        {item.name}
      </Link>,
    );
  }

  return result;
};

const Navbar = ({ match }) => {
  const curPath = match.params.page;
  const subPath = match.params.subpage;
  const linkItems = makeLinks(curPath, subPath);

  return (
    <nav className={styles.navbar}>
      <div className={styles.innerContainer}>
        <div className={styles.linkWrapper} style={{ marginRight: `${marginList[curPath]}px` }}>
          {linkItems}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
