import React from "react";
import { Helmet } from "react-helmet";
import throttle from "lodash.throttle";
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";

import { Link, Route } from "react-router-dom";

import Navbar from "./navbar";
import styles from "./header.scss";
import Icon from "../icons";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      curScrollTop: 0,
      isVisible: true,
      mobileMenuOpen: false
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleScrollEvent = throttle(this.handleScroll, 100);
    this.changeVisible = this.changeVisible.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScrollEvent);
    this.handleScroll();
  }

  componentWillUpdate(nextProps, nextState) {
    const prevTop = this.state.curScrollTop;
    const nextTop = nextState.curScrollTop;

    if (prevTop < nextTop) {
      this.changeVisible(false);
    } else if (prevTop - nextTop > 30) {
      this.changeVisible(true);
    }
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    const { props, context } = this;

    const curFullPath = window.location.pathname || "/";
    const curPath = curFullPath.split("/")[1];
    let localeBtnPath = `/` + curPath;
    if (curFullPath.split("/")[2] !== undefined) {
      localeBtnPath += "/" + curFullPath.split("/")[2];
    }

    const { changeLocale } = context;
    const { locale } = props.intl;

    const paddingHeightForBlank = curFullPath === "/" ? 80 : 120;

    const isVisible = this.state.isVisible || this.state.curScrollTop <= 80;

    const { mobileMenuOpen } = this.state;

    return (
      <div>
        <Helmet>
          <meta property="og:title" content="SUALAB" />
          <meta property="og:url" content="http://sualab.com/" />
          <meta
            property="og:description"
            content={props.intl.formatMessage({ id: "META.description" })}
          />
        </Helmet>
        <header
          className={`${styles.header} ${isVisible ? styles.visible : ""}`}
        >
          <div className={styles.innerContainer}>
            <div className={styles.logoImage}>
              <Link to="/">
                <img
                  src="https://d2ivzy5c3eic08.cloudfront.net/mainPage/sualab_logo_mint%403x.png"
                  alt=""
                />
              </Link>
            </div>

            <div
              onClick={ev => this.setState({ mobileMenuOpen: false })}
              className={`${styles.menuWrapper} ${
                mobileMenuOpen ? "" : styles.hidden
              }`}
            >
              <div className={styles.menu}>
                <div className={styles.partners}>
                  <a href="http://partners.sualab.com" target="_blank">
                    <img 
                      src="https://d2ivzy5c3eic08.cloudfront.net/mainPage/partners.png" 
                      alt="partners"
                    />
                  </a>
                </div>
                <div>
                  <Link
                    className={`${styles.menuItem} ${
                      curPath === "company" ? styles.active : ""
                    }`}
                    to="/company"
                  >
                    Company
                    {curPath === "company" ? (
                      <div className={styles.mobileMenu}>
                        <Route path="/:page/:subpage" component={Navbar} />
                      </div>
                    ) : (
                      ""
                    )}
                  </Link>
                  <Link
                    className={`${styles.menuItem} ${
                      curPath === "product" ? styles.active : ""
                    }`}
                    to="/product"
                  >
                    Product
                    {curPath === "product" ? (
                      <div className={styles.mobileMenu}>
                        <Route path="/:page/:subpage" component={Navbar} />
                      </div>
                    ) : (
                      ""
                    )}
                  </Link>
                  <Link
                    className={`${styles.menuItem} ${
                      curPath === "news" ? styles.active : ""
                    }`}
                    to="/news"
                  >
                    News
                    {curPath === "news" ? (
                      <div className={styles.mobileMenu}>
                        <Route path="/:page/:subpage" component={Navbar} />
                      </div>
                    ) : (
                      ""
                    )}
                  </Link>
                  <Link
                    className={`${styles.menuItem} ${
                      curPath === "career" ? styles.active : ""
                    }`}
                    to="/career"
                  >
                    Career
                    {curPath === "career" ? (
                      <div className={styles.mobileMenu}>
                        <Route path="/:page/:subpage" component={Navbar} />
                      </div>
                    ) : (
                      ""
                    )}
                  </Link>
                  <a
                    className={styles.menuItem}
                    href="http://research.sualab.com/"
                    target="_blank"
                  >
                    Blog
                  </a>
                  <Link
                    className={`${styles.menuItem} ${
                      curPath === "contact" ? styles.active : ""
                    }`}
                    to="/contact"
                  >
                    Contact
                    {curPath === "contact" ? (
                      <div className={styles.mobileMenu}>
                        <Route path="/:page/:subpage" component={Navbar} />
                      </div>
                    ) : (
                      ""
                    )}
                  </Link>
                  <Link
                    className={styles.menuItem}
                    to={localeBtnPath}
                    onClick={changeLocale}
                  >
                    <span
                      className={`${
                        locale === "ko" ? styles.activeLocale : ""
                      }`}
                    >
                      KO{" "}
                    </span>
                    |
                    <span
                      className={`${
                        locale === "en" ? styles.activeLocale : ""
                      }`}
                    >
                      {" "}
                      EN
                    </span>
                  </Link>
                </div>
                <div className={styles.mobilePartners}>
                  <a href="http://partners.sualab.com" target="_blank">
                    <img 
                      src="https://d2ivzy5c3eic08.cloudfront.net/mainPage/partners.png" 
                      alt="partners"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.mobileMenu}>
              <span
                className={styles.mobileMenuBtn}
                onClick={ev => {
                  ev.preventDefault();
                  this.setState({ mobileMenuOpen: !mobileMenuOpen });
                }}
              >
                {mobileMenuOpen ? (
                  <Icon icon="CANCEL_ICON" />
                ) : (
                  <Icon icon="MENU_ICON" />
                )}
              </span>
            </div>
          </div>

          <div className={styles.fullsizeMenu}>
            <Route path="/:page/:subpage" component={Navbar} />
          </div>
        </header>

        {mobileMenuOpen ? (
          <div
            onClick={ev => this.setState({ mobileMenuOpen: false })}
            className={styles.menuOverlay}
          />
        ) : (
          ""
        )}

        <div
          className={styles.paddingForTitleSection}
          style={{
            paddingTop: paddingHeightForBlank
          }}
        />
      </div>
    );
  }

  handleScroll() {
    const top =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    this.setState({ curScrollTop: top });
  }

  changeVisible(isVisible) {
    this.setState({
      isVisible: isVisible
    });
  }
}

Header.contextTypes = {
  changeLocale: PropTypes.func
};

export default injectIntl(Header);
