import React from "react";
import { injectIntl } from "react-intl";
import axios from "axios";
import { Link } from "react-router-dom";

import TitleSection from "../../commons/titleSection";

import Icon from "../../commons/icons";
import styles from "../newsDetail/newsDetail.scss";

class EventDetail extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: "-",
      date: "-",
      place: "-",
      image: "-",
      content: "-",
      prevTitle: "-",
      prevId: -1,
      nextTitle: "-",
      nextId: -1,
    };

    this.getArticleData = this.getArticleData.bind(this);
  }

  componentDidMount() {
    const match = this.props.match;
    const articleId = parseInt(match.params.number);
    this.getArticleData(articleId, this.props.intl.locale);
  }

  componentWillReceiveProps(nextProps) {
    const articleId = nextProps.match.params.number;
    this.getArticleData(articleId, nextProps.intl.locale);
  }

  render() {
    const { intl } = this.props;
    const match = this.props.match;
    const number = parseInt(match.params.number);
    const article = this.state;

    return (
      <section className={styles.newsDetail}>
        <TitleSection
          subTitle="EVENTS"
          title={intl.formatMessage({ id: "EVENT.title" })}
          bgImage="https://d2ivzy5c3eic08.cloudfront.net/newsPage/media-background%402x.png"
        />

        <div className={styles.innerContainer}>
          <div className={styles.detailWrapper}>
            <div className={styles.line} />
            <div className={styles.title}>{article.title}</div>
            <div className={styles.date}>
              <span>{article.date}</span>
              <span> | </span>
              <span>{article.place}</span>
            </div>
            <div className={styles.grayLine} />
            <div className={styles.imgWrapper}>
              <img src={article.image} alt="" />
            </div>
            <div className={styles.content}>{article.content}</div>
          </div>

          <div className={styles.otherArticle}>
            <Link
              to={`/news/event/${article.prevId}`}
              className={`${styles.linkWrapper} ${article.prevId == undefined ? styles.hide : ""}`}
            >
              <div className={styles.iconWrapper}>
                <Icon icon="ARROW_UP" />
                <span className={styles.label}>{intl.formatMessage({ id: "MEDIA.newsDetail.prev" })}</span>
              </div>
              <div className={styles.article}>{article.prevTitle}</div>
            </Link>
            <Link
              to={`/news/event/${article.nextId}`}
              className={`${styles.linkWrapper} ${article.nextId == undefined ? styles.hide : ""}`}
            >
              <div className={styles.iconWrapper}>
                <Icon icon="ARROW_DOWN" />
                <span className={styles.label}>{intl.formatMessage({ id: "MEDIA.newsDetail.next" })}</span>
              </div>
              <div className={styles.article}>{article.nextTitle}</div>
            </Link>
          </div>

          <Link to="/news/event" className={styles.listBtn}>
            {intl.formatMessage({ id: "MEDIA.newsDetail.listBtn" })}
          </Link>
        </div>
      </section>
    );
  }

  getArticleData(id, locale) {
    const apiUrl = `/api/event${locale !== "ko" ? "-en" : ""}/`;
    axios
      .get(apiUrl + id)
      .then(res => {
        this.setState({
          title: res.data.title,
          date: res.data.date,
          place: res.data.place,
          image: res.data.image,
          content: res.data.content,
          prevId: res.data.prev.id,
          prevTitle: res.data.prev.title,
          nextId: res.data.next.id,
          nextTitle: res.data.next.title,
        });
      })
      .catch(err => {
        console.error(err);
        alert("Page not found");
        history.back();
      });
  }
}

export default injectIntl(EventDetail);
