import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.scss";

const marginList = {
  company: 313,
  product: 80,
  news: 127,
  career: 70,
};

const linkItem = {
  company: [{ name: "About us", link: "about-us" }, { name: "People", link: "people" }],
  product: [
    { name: "SuaKIT", link: "suakit" },
    { name: "How to apply SuaKIT", link: "how-to-apply" },
    { name: "제품문의", link: "support" },
    // { name: "Download", link: "downaload" },
  ],
  news: [{ name: "SUALAB in media", link: "media" }, { name: "Events", link: "event" }],
  career: [{ name: "인사 철학", link: "philosophy" }, { name: "채용 절차", link: "recruit" }],
  contact: [{ name: "Office", link: "office" }, { name: "Global Sales Network", link: "global-sales-network" }],
};

const makeLinks = (curPath, subPath) => {
  let result = [];

  for (let idx in linkItem[curPath]) {
    const item = linkItem[curPath][idx];

    result.push(
      <Link
        key={item.link}
        className={`${styles.linkItem} ${subPath === item.link ? styles.active : ""}`}
        to={`/${curPath}/${item.link}`}
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
