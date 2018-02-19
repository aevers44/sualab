import React from "react";
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
    this.getArticleData(articleId);
  }

  componentWillReceiveProps(nextProps) {
    const articleId = nextProps.match.params.number;
    this.getArticleData(articleId);
  }

  render() {
    const match = this.props.match;
    const number = parseInt(match.params.number);
    const article = this.state;

    return (
      <section className={styles.newsDetail}>
        <TitleSection
          subTitle="EVENTS"
          title="*언론*에 보도된 *SUALAB*을 확인해 보세요"
          bgImage="https://d3rqapinkc8b8p.cloudfront.net/newsPage/media-background%402x.png"
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
              className={`${styles.linkWrapper} ${article.prevId == -1 ? styles.hide : ""}`}
            >
              <div className={styles.iconWrapper}>
                <Icon icon="ARROW_UP" />
                <span className={styles.label}>이전 글</span>
              </div>
              <div className={styles.article}>{article.prevTitle}</div>
            </Link>
            <Link
              to={`/news/event/${article.nextId}`}
              className={`${styles.linkWrapper} ${article.nextId == -1 ? styles.hide : ""}`}
            >
              <div className={styles.iconWrapper}>
                <Icon icon="ARROW_DOWN" />
                <span className={styles.label}>다음 글</span>
              </div>
              <div className={styles.article}>{article.nextTitle}</div>
            </Link>
          </div>

          <Link to="/news/event" className={styles.listBtn}>
            목록으로 돌아가기
          </Link>
        </div>
      </section>
    );
  }

  getArticleData(id) {
    axios
      .get("/api/event/" + id)
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

export default EventDetail;