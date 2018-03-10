import React from "react";
import { injectIntl } from "react-intl";
import { Link } from "react-router-dom";
import styles from "./navbar.scss";

const marginList = {
  ko: {
    company: 393,
    product: 160,
    news: 207,
    career: 150,
  },
  en: {
    company: 393,
    product: 119,
    news: 207,
    career: 70,
  },
};

const makeLinks = (curPath, subPath, intl) => {
  const linkItem = {
    company: [{ name: "About Us", link: "about-us" }, { name: "People", link: "people" }],
    product: [
      { name: "SuaKIT", link: "suakit" },
      { name: "How to Apply SuaKIT", link: "how-to-apply" },
      { name: intl.formatMessage({ id: "NAVBAR.product.support" }), link: "support" },
      { name: "Download", link: "download" },
    ],
    news: [{ name: "SUALAB in Media", link: "media" }, { name: "Events", link: "event" }],
    career: [
      { name: intl.formatMessage({ id: "NAVBAR.career.philosophy" }), link: "philosophy" },
      { name: intl.formatMessage({ id: "NAVBAR.career.recruit" }), link: "recruit" },
    ],
    contact: [{ name: "Office", link: "office" }, { name: "Global Sales Networks", link: "global-sales-network" }],
  };

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

const Navbar = ({ match, intl }) => {
  const curPath = match.params.page;
  const subPath = match.params.subpage;
  const linkItems = makeLinks(curPath, subPath, intl);
  return (
    <nav className={styles.navbar}>
      <div className={styles.innerContainer}>
        <div className={styles.linkWrapper} style={{ marginRight: `${marginList[intl.locale][curPath]}px` }}>
          {linkItems}
        </div>
      </div>
    </nav>
  );
};

export default injectIntl(Navbar);
